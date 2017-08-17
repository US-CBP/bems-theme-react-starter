import React, { Component } from 'react';
import { getStatusBarStyle, getStatusBarTitleStyle, getActionBarStyle, getActionBarIconColor, getAppBarIconColor, getLoggedInSocialPersonStyle } from '../app/helpers/styles';
import Popover from 'material-ui/internal/Popover';
import TomisButtonFlat from 'TomisApp/TomisButtonFlat';
import Menu, { MenuItem } from 'material-ui/Menu';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import { headerNavActionStyles } from '../app/helpers/styles';
import withStyles from 'material-ui/styles/withStyles';
import cx from 'classnames';

const anchorOrigin = { horizontal: 'center', vertical: 'top' };
const targetOrigin = { horizontal: 'center', vertical: 'top' };

const setStatePopoverOpen = (anchorEl, state, props) => {
    return {
        isOpen: true,
        anchorEl
    };
};
const setStatePopoverClose = (state, props) => {
    return {
        isOpen: false
    };
};

class TomisLogged extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            anchorEl: null
        };
    }

    handleTouchTapButton = evt => {
        evt.preventDefault();
        this.setState(setStatePopoverOpen.bind(this, evt.currentTarget));
    };

    handleRequestCloseButton = () => {
        this.setState(setStatePopoverClose.bind(this));
    };

    render() {
        const { handleTouchTapButton, handleRequestCloseButton } = this;
        const { isNavigationDrawerOpen, isOpen, anchorEl } = this.state;
        const { classes: { flatPrimary: clsFlatPrimary } } = this.props;

        return (
            <div>
                <TomisButtonFlat className={cx(clsFlatPrimary)} label="&nbsp;">
                    <TomisFontIcon name="person" />
                </TomisButtonFlat>
                <TomisButtonFlat className={cx(clsFlatPrimary)} onClick={handleTouchTapButton} label="First / Last Name">
                    <TomisFontIcon name="arrow_drop_down" />
                </TomisButtonFlat>
                <Menu id="logged-menu" anchorEl={anchorEl} open={isOpen} onRequestClose={handleRequestCloseButton}>
                    <MenuItem onClick={handleRequestCloseButton}>Preferences</MenuItem>
                    <MenuItem onClick={handleRequestCloseButton}>Logout</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default withStyles(headerNavActionStyles, { name: 'HeaderNavAction' })(TomisLogged);
