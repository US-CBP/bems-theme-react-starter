import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import keycode from 'keycode';
import TextField from 'BemsMui/TextField/TextField';
import TextFieldCheckbox from 'BemsMui/TextField/TextFieldCheckbox';
import Menu from './Menu';
import MenuItem from './MenuItem';
import Divider from './Divider';
import Popover from './Popover';
import IconButton from './IconButton';
import propTypes from 'material-ui/utils/propTypes';
import FontIcon from 'BemsMui/FontIcon';

const defaultPaddingLeft = 30;
const shrinkPaddingLeft = defaultPaddingLeft / (5 / 6);

const caseInsensitiveFilter = (searchText, key) => {
  return key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
};

function getStyles(props, context, state) {
  const { anchorEl } = state;
  const { fullWidth } = props;

  const styles = {
    root: {
      display: 'inline-block',
      position: 'relative',
      width: fullWidth ? '100%' : 256,
      floatingLabelStyle: { paddingLeft: `${defaultPaddingLeft}px` },
      floatingLabelShrinkStyle: { paddingLeft: `${shrinkPaddingLeft}px` }
    },
    menu: {
      width: '100%'
    },
    list: {
      display: 'block',
      width: fullWidth ? '100%' : 256
    },
    innerDiv: {
      overflow: 'hidden'
    },
    inlineIcon: {
      position: 'absolute',
      bottom: 0,
      right: 0
    }
  };

  if (anchorEl && fullWidth) {
    styles.popover = {
      width: anchorEl.clientWidth
    };
  }

  return styles;
}

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.popoverEmitter = null;
    this.searchTextField = null;
    this.isIgnoreFilter = false;
  }

  static propTypes = {
    /**
     * Location of the anchor for the auto complete.
     */
    anchorOrigin: propTypes.origin,
    /**
     * If true, the auto complete is animated as it is toggled.
     */
    animated: PropTypes.bool,
    /**
     * Override the default animation component used.
     */
    animation: PropTypes.func,
    /**
     * Array of strings or nodes used to populate the list.
     */
    dataSource: PropTypes.array.isRequired,
    /**
     * Config for objects list dataSource.
     *
     * @typedef {Object} dataSourceConfig
     *
     * @property {string} text `dataSource` element key used to find a string to be matched for search
     * and shown as a `TextField` input value after choosing the result.
     * @property {string} value `dataSource` element key used to find a string to be shown in search results.
     */
    dataSourceConfig: PropTypes.object,
    /**
     * Disables focus ripple when true.
     */
    disableFocusRipple: PropTypes.bool,
    /**
     * Override style prop for error.
     */
    errorStyle: PropTypes.object,
    /**
     * The error content to display.
     */
    errorText: PropTypes.node,
    /**
     * Callback function used to filter the auto complete.
     *
     * @param {string} searchText The text to search for within `dataSource`.
     * @param {string} key `dataSource` element, or `text` property on that element if it's not a string.
     * @returns {boolean} `true` indicates the auto complete list will include `key` when the input is `searchText`.
     */
    filter: PropTypes.func,
    /**
     * The content to use for adding floating label element.
     */
    floatingLabelText: PropTypes.node,
    /**
     * If true, the field receives the property `width: 100%`.
     */
    fullWidth: PropTypes.bool,
    /**
     * The hint content to display.
     */
    hintText: PropTypes.node,
    /**
     * Override style for list.
     */
    listStyle: PropTypes.object,
    /**
     * The max number of search results to be shown.
     * By default it shows all the items which matches filter.
     */
    maxSearchResults: PropTypes.number,
    /**
     * Delay for closing time of the menu.
     */
    menuCloseDelay: PropTypes.number,
    /**
     * Props to be passed to menu.
     */
    menuProps: PropTypes.object,
    /**
     * Override style for menu.
     */
    menuStyle: PropTypes.object,
    /** @ignore */
    onBlur: PropTypes.func,
    /**
     * Callback function fired when the menu is closed.
     */
    onClose: PropTypes.func,
    /** @ignore */
    onFocus: PropTypes.func,
    /** @ignore */
    onKeyDown: PropTypes.func,
    /**
     * Callback function that is fired when a list item is selected, or enter is pressed in the `TextField`.
     *
     * @param {string} chosenRequest Either the `TextField` input value, if enter is pressed in the `TextField`,
     * or the text value of the corresponding list item that was selected.
     * @param {number} index The index in `dataSource` of the list item selected, or `-1` if enter is pressed in the
     * `TextField`.
     */
    onNewRequest: PropTypes.func,
    /**
     * Callback function that is fired when the user updates the `TextField`.
     *
     * @param {string} searchText The auto-complete's `searchText` value.
     * @param {array} dataSource The auto-complete's `dataSource` array.
     * @param {object} params Additional information linked the update.
     */
    onUpdateInput: PropTypes.func,
    /**
     * Auto complete menu is open if true.
     */
    open: PropTypes.bool,
    /**
     * If true, the list item is showed when a focus event triggers.
     */
    openOnFocus: PropTypes.bool,
    /**
     * Props to be passed to popover.
     */
    popoverProps: PropTypes.object,
    /**
     * Text being input to auto complete.
     */
    searchText: PropTypes.string,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * Origin for location of target.
     */
    targetOrigin: propTypes.origin,
    /**
     * Override the inline-styles of AutoComplete's TextField element.
     */
    textFieldStyle: PropTypes.object
  };

  static defaultProps = {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    animated: true,
    dataSourceConfig: {
      text: 'text',
      value: 'value'
    },
    disableFocusRipple: true,
    filter: caseInsensitiveFilter,
    fullWidth: true,
    open: false,
    openOnFocus: true,
    onUpdateInput: () => {},
    onNewRequest: () => {},
    searchText: '',
    menuCloseDelay: 300,
    targetOrigin: {
      vertical: 'top',
      horizontal: 'left'
    }
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  };

  state = {
    anchorEl: null,
    focusTextField: true,
    open: false,
    searchText: undefined
  };

  componentWillMount() {
    this.requestsList = [];
    this.setState({
      open: this.props.open,
      searchText: this.props.searchText
    });
    this.timerTouchTapCloseId = null;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.searchText !== nextProps.searchText) {
      this.setState({
        searchText: nextProps.searchText
      });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerTouchTapCloseId);
    clearTimeout(this.timerBlurClose);
  }

  close() {
    //Manage open/close via toggleOpen
    if (this.popoverEmitter === 'ICON') return;
    console.log('close has been called');

    this.setState({
      open: false,
      anchorEl: null
    });

    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  handleRequestClose = () => {
    // Only take into account the Popover clickAway when we are
    // not focusing the TextField.
    if (!this.state.focusTextField) {
      this.close();
    }
  };

  handleMouseDown = event => {
    // Keep the TextField focused
    event.preventDefault();
  };

  handleItemTouchTap = (event, child) => {
    console.log('handleItemTouchTap called');
    this.popoverEmitter = null;
    const dataSource = this.props.dataSource;

    const index = parseInt(child.key, 10);
    const chosenRequest = dataSource[index];
    const searchText = this.chosenRequestText(chosenRequest);

    this.setState(
      {
        searchText
      },
      () => {
        this.props.onUpdateInput(searchText, this.props.dataSource, {
          source: 'touchTap'
        });

        this.timerTouchTapCloseId = setTimeout(() => {
          this.timerTouchTapCloseId = null;
          this.close();
          this.props.onNewRequest(chosenRequest, index);
        }, this.props.menuCloseDelay);
      }
    );
  };

  chosenRequestText = chosenRequest => {
    if (typeof chosenRequest === 'string') {
      return chosenRequest;
    } else {
      return chosenRequest[this.props.dataSourceConfig.text];
    }
  };

  handleEscKeyDown = () => {
    this.close();
  };

  handleKeyDown = event => {
    if (this.props.onKeyDown) this.props.onKeyDown(event);
    this.isIgnoreFilter = false;

    switch (keycode(event)) {
      case 'enter':
        this.close();
        const searchText = this.state.searchText;
        if (searchText !== '') {
          this.props.onNewRequest(searchText, -1);
        }
        break;

      case 'esc':
        this.close();
        break;

      case 'down':
        event.preventDefault();
        // this.isIgnoreFilter = true;
        this.setState({
          open: true,
          focusTextField: false,
          anchorEl: ReactDOM.findDOMNode(this.searchTextField)
        });
        break;

      default:
        break;
    }
  };

  handleChange = event => {
    const searchText = event.target.value;
    console.log('handleChange called with searchText=', searchText);
    this.popoverEmitter = null;
    this.isIgnoreFilter = false;
    // Make sure that we have a new searchText.
    // Fix an issue with a Cordova Webview
    if (searchText === this.state.searchText) {
      return;
    }

    this.setState(
      {
        searchText,
        open: true,
        anchorEl: ReactDOM.findDOMNode(this.searchTextField)
      },
      () => {
        this.props.onUpdateInput(searchText, this.props.dataSource, {
          source: 'change'
        });
      }
    );
  };

  handleBlur = event => {
    if (this.state.focusTextField && this.timerTouchTapCloseId === null) {
      this.timerBlurClose = setTimeout(() => {
        this.close();
      }, 0);
    }

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleFocus = event => {
    this.isIgnoreFilter = true;
    if ((!this.state.open && this.props.openOnFocus) || this.popoverEmitter === 'ICON') {
      this.setState({
        open: true,
        anchorEl: ReactDOM.findDOMNode(this.searchTextField)
      });
    }

    this.setState({
      focusTextField: true
    });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  toggleOpen = event => {
    console.log('toggleOpen start, this.state.open=', this.state.open);

    if (this.state.open) {
      this.popoverEmitter = null;
      this.close();
    } else {
      // this.handleFocus(event);
      this.focus();
      // this.setState({
      //     open: true,
      //     anchorEl: ReactDOM.findDOMNode(this.searchTextField),
      //     focusTextField: !this.state.open
      // });
    }
    //     () => {
    //         console.log('toggleOpen after setState, this.state.open=', this.state.open);
    //         if (!this.state.open) {
    //             this.popoverEmitter = null;
    //         }
    //         if (this.state.open) {
    //             this.focus();
    //         }
    //     }
    // );
    // this.setState({
    //     focusTextField: true
    // });
    // if (this.props.onFocus) {
    //     this.props.onFocus(event);
    // }
  };

  blur() {
    this.searchTextField.blur();
  }

  focus() {
    this.searchTextField.focus();
  }

  handleClickIconButton = event => {
    event.stopPropagation();
    this.popoverEmitter = 'ICON';
    this.toggleOpen(event);
  };

  render() {
    const { handleClickIconButton } = this;
    const {
      anchorOrigin,
      animated,
      animation,
      dataSource,
      dataSourceConfig, // eslint-disable-line no-unused-vars
      disableFocusRipple,
      disabledClone,
      errorStyle,
      floatingLabelText,
      floatingLabelShrinkStyle,
      filter,
      fullWidth,
      isCloneable,
      style,
      hintText,
      maxSearchResults,
      menuCloseDelay, // eslint-disable-line no-unused-vars
      textFieldStyle,
      menuStyle,
      menuProps,
      listStyle,
      targetOrigin,
      onClose, // eslint-disable-line no-unused-vars
      onNewRequest, // eslint-disable-line no-unused-vars
      onUpdateInput, // eslint-disable-line no-unused-vars
      openOnFocus, // eslint-disable-line no-unused-vars
      popoverProps,
      searchText: searchTextProp, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const { style: popoverStyle, ...popoverOther } = popoverProps || {};

    const { open, anchorEl, searchText, focusTextField } = this.state;

    const { prepareStyles } = this.context.muiTheme;
    const styles = getStyles(this.props, this.context, this.state);

    const requestsList = [];

    dataSource.every((item, index) => {
      switch (typeof item) {
        case 'string':
          if (filter(searchText, item, item)) {
            requestsList.push({
              text: item,
              value: <MenuItem innerDivStyle={styles.innerDiv} value={item} primaryText={item} disableFocusRipple={disableFocusRipple} key={index} />
            });
          }
          break;

        case 'object':
          if (item && typeof item[this.props.dataSourceConfig.text] === 'string') {
            const itemText = item[this.props.dataSourceConfig.text];

            if (!this.isIgnoreFilter) {
              if (!this.props.filter(searchText, itemText, item) && this.popoverEmitter === null) break;
            }

            const itemValue = item[this.props.dataSourceConfig.value];
            if (itemValue.type && (itemValue.type.muiName === MenuItem.muiName || itemValue.type.muiName === Divider.muiName)) {
              requestsList.push({
                text: itemText,
                value: React.cloneElement(itemValue, {
                  key: index,
                  disableFocusRipple: disableFocusRipple
                })
              });
            } else {
              requestsList.push({
                text: itemText,
                value: <MenuItem innerDivStyle={styles.innerDiv} primaryText={itemText} disableFocusRipple={disableFocusRipple} key={index} />
              });
            }
          }
          break;

        default:
        // Do nothing
      }

      return !(maxSearchResults && maxSearchResults > 0 && requestsList.length === maxSearchResults);
    });

    this.requestsList = requestsList;

    const menu =
      open &&
      requestsList.length > 0 &&
      <Menu
        autoWidth={false}
        disableAutoFocus={focusTextField}
        onEscKeyDown={this.handleEscKeyDown}
        initiallyKeyboardFocused={true}
        onItemTouchTap={this.handleItemTouchTap}
        onMouseDown={this.handleMouseDown}
        style={Object.assign(styles.menu, menuStyle)}
        listStyle={Object.assign(styles.list, listStyle)}
        {...menuProps}
      >
        {requestsList.map(i => i.value)}
      </Menu>;

    return (
      <div style={prepareStyles(Object.assign(styles.root, style))}>
        {isCloneable &&
          <TextFieldCheckbox
            ref={ref => (this.searchTextField = ref)}
            autoComplete="off"
            value={searchText}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onKeyDown={this.handleKeyDown}
            hintText={hintText}
            floatingLabelText={floatingLabelText}
            floatingLabelShrinkStyle={floatingLabelShrinkStyle}
            fullWidth={true}
            isCloneable={isCloneable}
            disabledClone={disabledClone}
            multiLine={false}
            errorStyle={errorStyle}
            {...other}
          />}

        {!isCloneable &&
          <TextField
            ref={ref => (this.searchTextField = ref)}
            autoComplete="off"
            value={searchText}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onKeyDown={this.handleKeyDown}
            floatingLabelText={floatingLabelText}
            hintText={hintText}
            fullWidth={fullWidth}
            multiLine={false}
            errorStyle={errorStyle}
            style={textFieldStyle}
            {...other}
          />}

        <IconButton onTouchTap={handleClickIconButton} style={styles.inlineIcon}>
          <FontIcon name="arrow_drop_down" />
        </IconButton>
        <Popover
          style={Object.assign({}, styles.popover, popoverStyle)}
          canAutoPosition={false}
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          open={open}
          anchorEl={anchorEl}
          useLayerForClickAway={false}
          onRequestClose={this.handleRequestClose}
          animated={animated}
          animation={animation}
          {...popoverOther}
        >
          {menu}
        </Popover>
      </div>
    );
  }
}

AutoComplete.levenshteinDistance = (searchText, key) => {
  const current = [];
  let prev;
  let value;

  for (let i = 0; i <= key.length; i++) {
    for (let j = 0; j <= searchText.length; j++) {
      if (i && j) {
        if (searchText.charAt(j - 1) === key.charAt(i - 1)) value = prev;
        else value = Math.min(current[j], current[j - 1], prev) + 1;
      } else {
        value = i + j;
      }
      prev = current[j];
      current[j] = value;
    }
  }
  return current.pop();
};

AutoComplete.noFilter = () => true;

AutoComplete.defaultFilter = AutoComplete.caseSensitiveFilter = (searchText, key) => {
  return searchText !== '' && key.indexOf(searchText) !== -1;
};

AutoComplete.caseInsensitiveFilter = (searchText, key) => {
  return key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
};

AutoComplete.levenshteinDistanceFilter = distanceLessThan => {
  if (distanceLessThan === undefined) {
    return AutoComplete.levenshteinDistance;
  } else if (typeof distanceLessThan !== 'number') {
    throw 'Error: AutoComplete.levenshteinDistanceFilter is a filter generator, not a filter!';
  }

  return (s, k) => AutoComplete.levenshteinDistance(s, k) < distanceLessThan;
};

AutoComplete.fuzzyFilter = (searchText, key) => {
  const compareString = key.toLowerCase();
  searchText = searchText.toLowerCase();

  let searchTextIndex = 0;
  for (let index = 0; index < key.length; index++) {
    if (compareString[index] === searchText[searchTextIndex]) {
      searchTextIndex += 1;
    }
  }

  return searchTextIndex === searchText.length;
};

AutoComplete.Item = MenuItem;
AutoComplete.Divider = Divider;

export default AutoComplete;
