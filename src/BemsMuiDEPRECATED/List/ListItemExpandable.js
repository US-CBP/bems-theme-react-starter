// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createStyleSheet from 'material-ui/styles/createStyleSheet';
import withStyles from 'material-ui/styles/withStyles';
import Collapse from 'material-ui/transitions/Collapse';
import FontIcon from '../FontIcon';
import ButtonIcon from '../ButtonIcon';
import Divider from 'material-ui/Divider';
import { ListItemSecondaryAction } from 'material-ui/List';

export const styleSheet = createStyleSheet('BemsMuiListItemExpandable', theme => ({
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
  expand: {
    transform: 'rotate(-180deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    animationFillMode: 'forwards'
  },
  expandOpen: {
    transform: 'rotate(0deg)',
    animationFillMode: 'forwards'
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

type DefaultProps = {
  button: boolean,
  component: string,
  dense: boolean,
  disabled: false,
  disableGutters: false,
  divider: false
};

type Props = DefaultProps & {
  /**
   * The content of the component.
   */
  children?: Element<*>,
  /**
   * Useful to extend the style applied to components.
   */
  classes: Object,
  /**
   * @ignore
   */
  className?: string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component?: string | Function,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense?: boolean,
  /**
   * @ignore
   */
  disabled?: boolean,
  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters?: boolean,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   */
  divider?: boolean
};

const isAnimate = true;
const expansionDuration = 100;

class ListItemExpandable extends Component<DefaultProps, Props, void> {
  props: Props;
  static defaultProps: DefaultProps = {
    component: 'li',
    dense: false,
    disabled: false,
    disableGutters: false,
    divider: false
  };
  expandableBody = null;

  state = {
    expanded: true
  };

  handleClickExpand = evt => {
    this.setState({ expanded: !this.state.expanded });
  };

  getChildContext() {
    return {
      dense: this.props.dense || this.context.dense || false
    };
  }

  render() {
    const { handleClickExpand } = this;
    const { expanded } = this.state;
    const {
      children: childrenProp,
      classes,
      className: classNameProp,
      component: ComponentProp,
      dense,
      disabled,
      divider,
      disableGutters,
      ...other
    } = this.props;
    const isDense = dense || this.context.dense || false;
    const children = React.Children.toArray(childrenProp);
    //All children except for final child are considered to be "actions" placed in header.
    //Final child is the only component that is expanded/collapsed - considered the panel body
    let finalChild = false;
    if (children.length > 0) {
      finalChild = children.pop();
    }

    const hasAvatar = children.some(value => {
      return value.type && value.type.muiName === 'ListItemAvatar';
    });

    const className = classNames(
      classes.root,
      {
        [classes.gutters]: !disableGutters,
        [classes.divider]: divider,
        [classes.disabled]: disabled,
        [isDense || hasAvatar ? classes.dense : classes.default]: true
      },
      classNameProp
    );

    const listItemProps = { className, disabled, ...other };

    return (
      <ComponentProp {...listItemProps}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {children}
        </div>
        <Divider />
        <Collapse in={expanded} transitionDuration="auto" unmountOnExit={false}>
          {finalChild}
        </Collapse>
        <ListItemSecondaryAction className={classes.secondaryAction}>
          <ButtonIcon
            className={classNames(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            icon={<FontIcon name="keyboard_arrow_up" />}
            onClick={handleClickExpand}
            aria-expanded={expanded}
            aria-label="Show more"
          />
        </ListItemSecondaryAction>
      </ComponentProp>
    );
  }
}

ListItemExpandable.contextTypes = {
  dense: PropTypes.bool
};

ListItemExpandable.childContextTypes = {
  dense: PropTypes.bool
};

export default withStyles(styleSheet)(ListItemExpandable);
