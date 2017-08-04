// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createStyleSheet from 'material-ui/styles/createStyleSheet';
import withStyles from 'material-ui/styles/withStyles';
import FontIcon from '../FontIcon';
import ButtonIcon from '../ButtonIcon';
import { ListItemSecondaryAction } from 'material-ui/List';
import velocity from 'velocity-animate';

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
const expansionDuration = 250;

class ListItemExpandable extends Component<DefaultProps, Props, void> {
    props: Props;
    static defaultProps: DefaultProps = {
        component: 'li',
        dense: false,
        disabled: false,
        disableGutters: false,
        divider: false,
        expandableIdx: 1
    };
    expandableBody = null;

    state = {
        isExpanded: true
    };

    handleExpanding = evt => {
        evt.preventDefault();
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

    getChildContext() {
        return {
            dense: this.props.dense || this.context.dense || false
        };
    }

    render() {
        const { handleExpanding } = this;
        const {
            children: childrenProp,
            classes,
            className: classNameProp,
            component: ComponentProp,
            dense,
            disabled,
            divider,
            disableGutters,
            expandableIdx,
            ...other
        } = this.props;
        const isDense = dense || this.context.dense || false;
        const children = React.Children.toArray(childrenProp);

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
                <ListItemSecondaryAction className={classes.secondaryAction}>
                    <ButtonIcon icon={<FontIcon name="keyboard_arrow_down" />} onClick={handleExpanding} />
                </ListItemSecondaryAction>
                {children.filter((child, idx) => {
                    return idx < expandableIdx;
                })}
                <div ref={ref => (this.expandableBody = ref)}>
                    {children.filter((child, idx) => {
                        return idx >= expandableIdx;
                    })}
                </div>
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
