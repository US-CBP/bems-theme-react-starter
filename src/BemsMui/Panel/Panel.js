import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createStyleSheet from 'material-ui/styles/createStyleSheet';
import withStyles from 'material-ui/styles/withStyles';
import FontIcon from '../FontIcon';
import ButtonIcon from '../ButtonIcon';
import Paper from 'material-ui/Paper';
import PanelExpandable from './PanelExpandable';
import velocity from 'velocity-animate';
import _omit from 'lodash/omit';

export const styleSheet = createStyleSheet('BemsMuiPanel', theme => ({
  root: {
    display: 'block',
    alignItems: 'center',
    position: 'relative',
    textDecoration: 'none'
  },
  container: {
    position: 'relative'
  },
  keyboardFocused: {
    background: theme.palette.text.divider
  },
  default: {
    paddingTop: 12,
    paddingBottom: 12
  },
  dense: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  disabled: {
    opacity: 0.5
  },
  divider: {
    borderBottom: `1px solid ${theme.palette.text.lightDivider}`
  },
  gutters: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  secondaryAction: {
    top: 0,
    marginTop: 0
  }
}));

const defaultProps = {};

const propTypes = {
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

const isAnimate = true;
const expansionDuration = 250;

class Panel extends Component {
  constructor(props) {
    super(props);
    this.keepProps = {};
  }
  expandableBody = null;

  state = {
    isExpanded: true
  };

  componentWillReceiveProps(nextProps) {
    // update the state when the component is controlled.
    if (nextProps.expanded !== null) this.setState({ expanded: nextProps.expanded });
  }

  handleClickExpand = evt => {
    evt.preventDefault();
    evt.stopPropagation();
    if (this.expandableBody === null) {
      return false;
    }
    const newExpandedState = !this.state.isExpanded;
    const duration = isAnimate ? expansionDuration : 0;
    const animVal = !newExpandedState ? 'slideUp' : 'slideDown';
    const self = this;
    this.setState({ isExpanded: newExpandedState }, () => {
      velocity(this.expandableBody, animVal, {
        duration,
        complete: () => {}
      });
    });
  };

  // getChildContext() {
  //   return {
  //     dense: this.props.dense || this.context.dense || false
  //   };
  // }

  render() {
    const { handleClickExpand } = this;
    const { isExpanded } = this.state;
    const {
      title,
      children: childrenProp,
      classes,
      className: classNameProp,
      component: ComponentProp,
      dense,
      disabled,
      divider,
      disableGutters,
      expandableChildIdx,
      ...other
    } = this.props;
    const isDense = dense || this.context.dense || false;
    const children = React.Children.toArray(childrenProp);
    return (
      <Paper {...other}>
        <div className={classes.secondaryAction}>
          <span>
            {title}
          </span>
          <ButtonIcon icon={<FontIcon name={isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} />} onClick={handleClickExpand} />
        </div>
        {/* All children except for final child are considered to be actions placed in header */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {children.filter((child, idx) => {
            return idx < children.length - 1;
          })}
        </div>
        {/* Final child is the only component that is expanded/collapsed - considered the panel body */}
        <div ref={ref => (this.expandableBody = ref)}>
          {children[children.length - 1]}
        </div>
      </Paper>
    );
  }
}

Panel.defaultProps = defaultProps;
Panel.propTypes = propTypes;
export default withStyles(styleSheet)(Panel);
