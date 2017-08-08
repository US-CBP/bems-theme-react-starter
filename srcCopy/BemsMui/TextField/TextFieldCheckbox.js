import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import shallowEqual from 'recompose/shallowEqual';
import keycode from 'keycode';
import ColorManipulator from 'material-ui/utils/colorManipulator';
import Transitions from 'material-ui/styles/transitions';
import deprecated from 'material-ui/utils/deprecatedPropType';
import EnhancedTextarea from 'material-ui/TextField/EnhancedTextarea';
import TextFieldHint from 'material-ui/TextField/TextFieldHint';
import TextFieldLabel from 'material-ui/TextField/TextFieldLabel';
import TextFieldUnderline from 'material-ui/TextField/TextFieldUnderline';
import TextCharCount from './TextCharCount';
import warning from 'warning';
import FontIcon from 'BemsMui/FontIcon';

const getStyles = (props, context, state) => {
  const { baseTheme, textField: { floatingLabelColor, focusColor, textColor, disabledTextColor, backgroundColor, errorColor } } = context.muiTheme;

  const styles = {
    root: {
      infoIconStyle: { position: 'absolute', bottom: '12px', left: 0, cursor: 'pointer', zIndex: 2 },
      infoIconDisabledStyle: { position: 'absolute', bottom: '12px', left: 0, cursor: 'pointer', zIndex: 2, color: '#dcdcdc' },
      fontSize: 16,
      lineHeight: '24px',
      width: props.fullWidth ? '100%' : 256,
      height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
      display: 'inline-block',
      position: 'relative',
      backgroundColor: backgroundColor,
      fontFamily: baseTheme.fontFamily,
      transition: Transitions.easeOut('200ms', 'height')
    },
    error: {
      position: 'relative',
      bottom: 2,
      fontSize: 12,
      lineHeight: '12px',
      color: errorColor,
      transition: Transitions.easeOut()
    },
    floatingLabel: {
      color: props.disabled ? disabledTextColor : floatingLabelColor,
      pointerEvents: 'none',
      marginLeft: '28px'
    },
    input: {
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      padding: 0,
      position: 'relative',
      width: '100%',
      height: '100%',
      border: 'none',
      outline: 'none',
      backgroundColor: 'rgba(0,0,0,0)',
      color: props.disabled ? disabledTextColor : textColor,
      font: 'inherit',
      marginLeft: '28px'
    },
    textarea: {}
  };

  Object.assign(styles.error, props.errorStyle);

  Object.assign(styles.textarea, styles.input, {
    marginTop: props.floatingLabelText ? 36 : 12,
    marginBottom: props.floatingLabelText ? -36 : -12,
    boxSizing: 'border-box',
    font: 'inherit'
  });

  if (state.isFocused) {
    styles.floatingLabel.color = focusColor;
  }

  // if (state.hasValue) {
  //   styles.floatingLabel.color = ColorManipulator.fade(props.disabled ? disabledTextColor : floatingLabelColor, 0.5);
  // }

  if (state.charCountError) {
    styles.floatingLabel.color = errorColor;
  }

  if (props.floatingLabelText) {
    styles.input.boxSizing = 'border-box';

    if (!props.multiLine) {
      styles.input.marginTop = 14;
    }

    if (state.errorText) {
      styles.error.bottom = !props.multiLine ? styles.error.fontSize + 3 : 3;
    }
  }

  if (state.errorText) {
    if (state.isFocused) {
      styles.floatingLabel.color = styles.error.color;
    }
  }

  return styles;
};

/**
 * Check if a value is valid to be displayed inside an input.
 *
 * @param The value to check.
 * @returns True if the string provided is valid, false otherwise.
 */
function isValid(value) {
  return value !== '' && value !== undefined && value !== null && !(Array.isArray(value) && value.length === 0);
}

class TextFieldCheckbox extends Component {
  static propTypes = {
    /**
     * Maximum number of character in the Textfield
     */
    maxLength: PropTypes.number,

    /**
     * The style object to use to override character count style.
     */
    charCountStyle: PropTypes.object,

    children: PropTypes.node,

    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The text string to use for the default value.
     */
    defaultValue: PropTypes.any,

    /**
     * Disables the text field if set to true.
     */
    disabled: PropTypes.bool,

    /**
     * The style object to use to override error styles.
     */
    errorStyle: PropTypes.object,

    /**
     * The error content to display.
     */
    errorText: PropTypes.node,

    /**
     * The style object to use to override floating label styles.
     */
    floatingLabelStyle: PropTypes.object,

    /**
     * The content to use for the floating label element.
     */
    floatingLabelText: PropTypes.node,

    /**
     * If true, the field receives the property width 100%.
     */
    fullWidth: PropTypes.bool,

    /**
     * Override the inline-styles of the TextField's hint text element.
     */
    hintStyle: PropTypes.object,

    /**
     * The hint content to display.
     */
    hintText: PropTypes.node,

    /**
     * The id prop for the text field.
     */
    id: PropTypes.string,

    /**
     * Override the inline-styles of the TextField's input element.
     * When multiLine is false: define the style of the input element.
     * When multiLine is true: define the style of the container of the textarea.
     */
    inputStyle: PropTypes.object,

    /**
     * If true, a textarea element will be rendered.
     * The textarea also grows and shrinks according to the number of lines.
     */
    multiLine: PropTypes.bool,

    /**
     * Callback function that is fired when the textfield loses focus.
     */
    onBlur: PropTypes.func,

    /**
     * Callback function that is fired when the textfield's value changes.
     */
    onChange: PropTypes.func,

    /**
     * The function to call when the user presses the Enter key.
     */
    onEnterKeyDown: deprecated(PropTypes.func, 'Use onKeyDown and check for keycode instead.'),

    /**
     * Callback function that is fired when the textfield gains focus.
     */
    onFocus: PropTypes.func,

    /**
     * Callback function fired when key is pressed down.
     */
    onKeyDown: PropTypes.func,

    /**
     * Callback function fired when key is up.
     */

    /**
     * Number of rows to display when multiLine option is set to true.
     */
    rows: PropTypes.number,

    /**
     * Maximum number of rows to display when
     * multiLine option is set to true.
     */
    rowsMax: PropTypes.number,

    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Override the inline-styles of the TextField's textarea element.
     * The TextField use either a textarea or an input,
     * this property has effects only when multiLine is true.
     */
    textareaStyle: PropTypes.object,

    /**
     * Specifies the type of input to display
     * such as "password" or "text".
     */
    type: PropTypes.string,

    /**
     * Override the inline-styles of the
     * TextField's underline element when disabled.
     */
    underlineDisabledStyle: PropTypes.object,

    /**
     * Override the inline-styles of the TextField's
     * underline element when focussed.
     */
    underlineFocusStyle: PropTypes.object,

    /**
     * If true, shows the underline for the text field.
     */
    underlineShow: PropTypes.bool,

    /**
     * Override the inline-styles of the TextField's underline element.
     */
    underlineStyle: PropTypes.object,

    /**
     * The value of the text field.
     */
    value: PropTypes.any
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  };

  static childContextTypes = {
    muiTheme: PropTypes.object
  };

  state = {
    isFocused: false,
    errorText: undefined,
    hasValue: false,
    currentCharCount: this.props.defaultValue ? this.props.defaultValue.length : 0,
    charCountError: false,
    isChecked: true
  };

  static defaultProps = {
    disabled: false,
    floatingLabelFixed: false,
    multiLine: false,
    fullWidth: false,
    type: 'text',
    underlineShow: true,
    rows: 1
  };

  // getInitialState = () => {
  //   const props = this.props.children ? this.props.children.props : this.props;

  //   return {
  //     isFocused: false,
  //     errorText: this.props.errorText,
  //     hasValue: isValid(props.value) || isValid(props.defaultValue) || (props.valueLink && isValid(props.valueLink.value)),
  //     muiTheme: this.context.muiTheme || getMuiTheme(),
  //     currentCharCount: this.props.defaultValue ? this.props.defaultValue.length : 0,
  //     charCountError: false
  //   };
  // };

  // getChildContext = () => {
  //   return {
  //     muiTheme: this.state.muiTheme
  //   };
  // };

  componentWillMount() {
    const { children, name, hintText, floatingLabelText, id } = this.props;

    const propsLeaf = children ? children.props : this.props;

    this.setState({
      errorText: this.props.errorText,
      hasValue: isValid(propsLeaf.value) || isValid(propsLeaf.defaultValue)
    });

    warning(
      name || hintText || floatingLabelText || id,
      `Material-UI: We don't have enough information
      to build a robust unique id for the TextField component. Please provide an id or a name.`
    );

    const uniqueId = `${name}-${hintText}-${floatingLabelText}-${Math.floor(Math.random() * 0xffff)}`;
    this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errorText !== this.props.errorText) {
      this.setState({
        errorText: nextProps.errorText
      });
    }

    if (nextProps.children && nextProps.children.props) {
      nextProps = nextProps.children.props;
    }

    if (nextProps.hasOwnProperty('value')) {
      const hasValue = isValid(nextProps.value);

      this.setState({
        hasValue: hasValue
      });
    }

    // const newState = {
    //   errorText: nextProps.errorText,
    //   muiTheme: nextContext.muiTheme || this.state.muiTheme
    // };

    // if (nextProps.children && nextProps.children.props) {
    //   nextProps = nextProps.children.props;
    // }

    // const hasValueLinkProp = nextProps.hasOwnProperty('valueLink');
    // const hasValueProp = nextProps.hasOwnProperty('value');

    // if (hasValueLinkProp) {
    //   newState.hasValue = isValid(nextProps.valueLink.value);
    // } else if (hasValueProp) {
    //   newState.hasValue = isValid(nextProps.value);
    // }

    // if (newState) this.setState(newState);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState) || !shallowEqual(this.context, nextContext);
  }

  blur = () => {
    if (this.input) this._getInputNode().blur();
  };

  focus = () => {
    if (this.input) this._getInputNode().focus();
  };

  getValue = () => {
    return this.input ? this._getInputNode().value : undefined;
  };

  _getInputNode = () => {
    return this.props.children || this.props.multiLine ? this.input.getInputNode() : ReactDOM.findDOMNode(this.input);
  };

  _handleInputBlur = event => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) this.props.onBlur(event);
  };

  _handleInputChange = event => {
    this.setState({ hasValue: isValid(event.target.value) });
    if (this.props.onChange) this.props.onChange(event);
  };

  _handleInputFocus = event => {
    if (this.props.disabled) return;
    this.setState({ isFocused: true });
    if (this.props.onFocus) this.props.onFocus(event);
  };

  _handleInputKeyDown = event => {
    if (keycode(event) === 'enter' && this.props.onEnterKeyDown) this.props.onEnterKeyDown(event);
    if (this.props.onKeyDown) this.props.onKeyDown(event);
  };

  _handleInputKeyUp = evt => {
    this.setState({ currentCharCount: this.getValue().length });
    // if (this.props.maxLength >= this.getValue().length) this.setState({ charCountError: false });
    // if (this.props.maxLength < this.getValue().length) this.setState({ charCountError: true });
  };

  _handleTextAreaHeightChange = (event, height) => {
    let newHeight = height + 24;
    if (this.props.floatingLabelText) newHeight += 24;
    ReactDOM.findDOMNode(this).style.height = `${newHeight}px`;
  };

  _isControlled = () => {
    return this.props.hasOwnProperty('value') || this.props.hasOwnProperty('valueLink');
  };

  handleClickCheckboxIcon = event => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  doNothing = () => {
    return false;
  };

  render() {
    const { doNothing } = this;
    const { disabledClone: isDisabled } = this.props;
    const {
      charCountStyle,
      className,
      disabled,
      errorStyle,
      errorText,
      floatingLabelText,
      floatingLabelFixed,
      fullWidth,
      hintText,
      hintStyle,
      id,
      inputStyle,
      maxLength,
      multiLine,
      onBlur,
      onChange,
      onFocus,
      style,
      type,
      underlineDisabledStyle,
      underlineFocusStyle,
      underlineShow,
      underlineStyle,
      rows,
      rowsMax,
      textareaStyle,
      disabledClone,
      ...other
    } = this.props;

    const { prepareStyles } = this.context.muiTheme;
    const styles = getStyles(this.props, this.context, this.state);
    const inputId = id || this._uniqueId;

    const errorTextElement =
      this.state.errorText &&
      <div style={prepareStyles(styles.error)}>
        {this.state.errorText}
      </div>;
    const isFloatingLabelShrink = this.state.hasValue || this.state.isFocused;

    const floatingLabelTextElement =
      floatingLabelText &&
      <TextFieldLabel
        muiTheme={this.context.muiTheme}
        style={Object.assign(styles.floatingLabel, isFloatingLabelShrink ? this.props.floatingLabelShrinkStyle : this.props.floatingLabelStyle)}
        htmlFor={inputId}
        shrink={isFloatingLabelShrink}
        disabled={disabled}
      >
        {floatingLabelText}
      </TextFieldLabel>;

    const inputProps = {
      id: inputId,
      ref: elem => (this.input = elem),
      onBlur: this._handleInputBlur,
      onFocus: this._handleInputFocus,
      disabled: this.props.disabled,
      onKeyDown: this._handleInputKeyDown,
      onKeyUp: this._handleInputKeyUp,
      maxLength: maxLength
    };

    const inputStyleMerged = Object.assign(styles.input, inputStyle);

    if (!this.props.hasOwnProperty('valueLink')) {
      inputProps.onChange = this._handleInputChange;
    }

    let inputElement;
    if (this.props.children) {
      inputElement = React.cloneElement(this.props.children, {
        ...inputProps,
        ...this.props.children.props,
        style: Object.assign(inputStyleMerged, this.props.children.props.style)
      });
    } else {
      inputElement = multiLine
        ? <EnhancedTextarea
            {...other}
            {...inputProps}
            style={inputStyleMerged}
            rows={rows}
            rowsMax={rowsMax}
            onHeightChange={this._handleTextAreaHeightChange}
            textareaStyle={Object.assign(styles.textarea, textareaStyle)}
            onKeyUp={this._handleInputKeyUp}
          />
        : <input {...other} {...inputProps} style={prepareStyles(inputStyleMerged)} type={type} onKeyUp={this._handleInputKeyUp} />;
    }

    return (
      <div className={className} style={prepareStyles(Object.assign(styles.root, style))}>
        {floatingLabelTextElement}
        {hintText
          ? <TextFieldHint
              muiTheme={this.context.muiTheme}
              show={!(this.state.hasValue || (floatingLabelText && !this.state.isFocused))}
              style={Object.assign({}, hintStyle, { marginLeft: '28px' })}
              text={hintText}
            />
          : null}
        {!this.state.isChecked &&
          <FontIcon
            name="check_box_outline_blank"
            style={isDisabled ? styles.root.infoIconDisabledStyle : styles.root.infoIconStyle}
            onTouchTap={isDisabled ? this.doNothing : this.handleClickCheckboxIcon}
          />}
        {this.state.isChecked &&
          <FontIcon
            name="check_box"
            style={isDisabled ? styles.root.infoIconDisabledStyle : styles.root.infoIconStyle}
            onTouchTap={isDisabled ? this.doNothing : this.handleClickCheckboxIcon}
          />}
        {inputElement}
        {underlineShow
          ? <TextFieldUnderline
              disabled={disabled}
              disabledStyle={underlineDisabledStyle}
              error={!!this.state.errorText || this.state.charCountError}
              errorStyle={errorStyle}
              focus={this.state.isFocused}
              focusStyle={underlineFocusStyle}
              muiTheme={this.context.muiTheme}
              style={underlineStyle}
            />
          : null}
        {maxLength
          ? <TextCharCount
              muiTheme={this.context.muiTheme}
              charCountStyle={charCountStyle}
              maxChar={maxLength}
              currentChar={this.state.currentCharCount}
              countError={this.state.charCountError}
              errorStyle={errorStyle}
            />
          : null}
        {errorTextElement}
      </div>
    );
  }
}

export default TextFieldCheckbox;
