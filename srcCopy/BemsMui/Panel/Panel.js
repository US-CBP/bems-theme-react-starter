import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createStyleSheet from 'material-ui/styles/createStyleSheet';
import withStyles from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Collapse from 'material-ui/transitions/Collapse';
import FontIcon from '../FontIcon';
import ButtonIcon from '../ButtonIcon';
import Paper from 'material-ui/Paper';

export const styleSheet = createStyleSheet('BemsMuiPanel', theme => ({
  flex: {
    flex: 1
  },
  root: {
    marginTop: 30,
    width: '100%',
    display: 'block',
    alignItems: 'center',
    position: 'relative',
    textDecoration: 'none'
  },
  appBar: {
    boxShadow: 'none'
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
  expand: {
    transform: 'rotate(-180deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(0deg)'
  },
  gutters: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  secondaryAction: {
    top: 0,
    marginTop: 0,
    display: 'flex',
    alignItems: 'center'
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
  style: PropTypes.object
};

class Panel extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    expanded: true
  };

  handleClickExpand = evt => {
    this.setState({ expanded: !this.state.expanded });
  };

  // getChildContext() {
  //   return {
  //     dense: this.props.dense || this.context.dense || false
  //   };
  // }

  render() {
    const { handleClickExpand } = this;
    const { expanded } = this.state;
    const { title, children: childrenProp, classes, className: classNameProp, dense, disableGutters, ...other } = this.props;
    const isDense = dense || this.context.dense || false;
    const children = React.Children.toArray(childrenProp);
    //All children except for final child are considered to be "actions" placed in header.
    //Final child is the only component that is expanded/collapsed - considered the panel body
    let panelBody = false;
    if (children.length > 0) {
      panelBody = children.pop();
    }
    return (
      <Paper>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography type="title" color="inherit" className={classes.flex}>
              {title}
            </Typography>
            {children}
            <ButtonIcon
              className={classNames(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              icon={<FontIcon color="#ffffff" name="keyboard_arrow_up" />}
              onClick={handleClickExpand}
              aria-expanded={expanded}
              aria-label="Show more"
            />
          </Toolbar>
        </AppBar>
        <Collapse in={expanded} transitionDuration="auto" unmountOnExit={false}>
          {panelBody}
        </Collapse>
      </Paper>
    );
  }
}

Panel.defaultProps = defaultProps;
Panel.propTypes = propTypes;
export default withStyles(styleSheet)(Panel);
