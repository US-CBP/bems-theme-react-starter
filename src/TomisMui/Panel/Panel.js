import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import PanelExpandable from './PanelExpandable';
import velocity from 'velocity-animate';
import _omit from 'lodash/omit';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.panelBody = null;
    this.keepProps = {};
  }

  static propTypes = {
    /**
     * Can be used to render elements inside the Card.
     */
    children: PropTypes.node,
    /**
     * Override the inline-styles of the container element.
     */
    containerStyle: PropTypes.object,
    /**
     * If true, this card component is expandable. Can be set on any child of the `Card` component.
     */
    expandable: PropTypes.bool,
    /**
     * Whether this card is expanded.
     * If `true` or `false` the component is controlled.
     * if `null` the component is uncontrolled.
     */
    expanded: PropTypes.bool,
    /**
     * Whether this card is initially expanded.
     */
    initiallyExpanded: PropTypes.bool,
    /**
     * Callback function fired when the `expandable` state of the card has changed.
     *
     * @param {boolean} newExpandedState Represents the new `expanded` state of the card.
     */
    onExpandChange: PropTypes.func,
    /**
     * If true, this card component will include a button to expand the card. `CardTitle`,
     * `CardHeader` and `CardActions` implement `showExpandableButton`. Any child component
     * of `Card` can implements `showExpandableButton` or forwards the property to a child
     * component supporting it.
     */
    showExpandableButton: PropTypes.bool,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * Override the default animation expansionDuration.  Set this to 0 if you do not want any animation on open/close
     */
    expansionDuration: PropTypes.number
    /**
     * Override the default animation flag.  Default is yes, animate open/close.  If you don't want that, set isAnimate to false, then open/close is immediate.
     */
  };

  static defaultProps = {
    expandable: false,
    expanded: null,
    initiallyExpanded: true,
    expansionDuration: 500,
    isAnimate: true
  };

  state = {
    expanded: null
  };

  componentWillMount() {
    this.setState({
      expanded: this.props.expanded === null ? this.props.initiallyExpanded === true : this.props.expanded
    });
  }

  componentWillReceiveProps(nextProps) {
    // update the state when the component is controlled.
    if (nextProps.expanded !== null) this.setState({ expanded: nextProps.expanded });
  }

  handleExpanding = event => {
    event.preventDefault();
    const newExpandedState = !this.state.expanded;
    // no automatic state update when the component is controlled
    // if (this.props.expanded === null) {
    //   this.setState({ expanded: newExpandedState });
    // }
    if (this.props.onExpandChange) {
      this.props.onExpandChange(newExpandedState);
    }
    const { expansionDuration, isAnimate } = this.props;
    const duration = isAnimate ? expansionDuration : 0;
    const animVal = !newExpandedState ? 'slideUp' : 'slideDown';
    const self = this;
    this.setState({ expanded: newExpandedState }, () => {
      velocity(this.panelBody, animVal, {
        duration,
        complete: () => {}
      });
    });
  };

  registerCollapseRef = childRef => {
    this.panelBody = childRef;
  };

  render() {
    const {
      style,
      containerStyle,
      children,
      expandable, // eslint-disable-line no-unused-vars
      expanded: expandedProp, // eslint-disable-line no-unused-vars
      initiallyExpanded, // eslint-disable-line no-unused-vars
      onExpandChange, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    let lastElement;
    const expanded = this.state.expanded;
    const newChildren = React.Children.map(
      children,
      currentChild => {
        let doClone = false;
        let newChild = undefined;
        const newProps = {};
        let element = currentChild;
        if (!currentChild || !currentChild.props) {
          return null;
        }
        if (expanded === false && currentChild.props.expandable === true) return;
        if (currentChild.props.actAsExpander === true) {
          doClone = true;
          newProps.onTouchTap = this.handleExpanding;
          newProps.style = Object.assign({ cursor: 'pointer' }, currentChild.props.style);
        }
        if (currentChild.props.showExpandableButton === true) {
          doClone = true;
          newChild = (
            <PanelExpandable
              closeIcon={currentChild.props.closeIcon}
              expanded={expanded}
              onExpanding={this.handleExpanding}
              openIcon={currentChild.props.openIcon}
            />
          );
        }
        if (currentChild.type.muiName === 'PanelBody') {
          newProps.registerCollapseRef = this.registerCollapseRef;
          doClone = true;
        }
        if (doClone) {
          element = React.cloneElement(currentChild, newProps, currentChild.props.children, newChild);
        }
        lastElement = element;
        return element;
      },
      this
    );

    // If the last element is text or a title we should add
    // 8px padding to the bottom of the card
    const mergedStyles = Object.assign(
      {
        zIndex: 1,
        width: '100%'
      },
      style
    );
    const containerMergedStyles = Object.assign({}, containerStyle);

    this.keepProps = _omit(other, ['expansionDuration', 'isAnimate']);
    const { keepProps } = this;
    return (
      <Paper {...keepProps} style={mergedStyles}>
        <div style={containerMergedStyles}>
          {newChildren}
        </div>
      </Paper>
    );
  }
}

export default Panel;
