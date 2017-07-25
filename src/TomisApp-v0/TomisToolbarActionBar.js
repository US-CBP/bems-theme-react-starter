import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'BemsMui/Drawer';
import IconMenu from 'BemsMui/IconMenu';
import TomisIconButton from 'TomisApp/TomisIconButton';
import Menu from 'BemsMui/Menu';
import MenuItem from 'BemsMui/MenuItem';
import Popover from 'BemsMui/Popover';
import FlatButton from 'BemsMui/FlatButton';
import RaisedButton from 'BemsMui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'TomisApp/TomisToolbar';
import DrawerNavigation from './TomisDrawerNavigationExample';
import Subheader from 'BemsMui/Subheader';
import Logged from 'BemsMui/Logged';
import CalendarView from 'BemsMui/CalendarView';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {
    getStatusBarStyle,
    getStatusBarTitleStyle,
    getActionBarStyle,
    getActionBarIconColor,
    getAppBarIconColor,
    getActionBarLabelStyle,
    getToolbarTitleStyle,
    getActionBarPopoverStyle,
    getActionBarLovStyle
} from '../app/helpers/styles';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import TomisCustomIcon from 'TomisApp/TomisCustomIcon';

const APPLICATIONS = 'APPLICATIONS';
const BRANCH_UNIT = 'BRANCH_UNIT';

const anchorOrigin = { horizontal: 'left', vertical: 'bottom' };
const targetOrigin = { horizontal: 'left', vertical: 'top' };

const setStatePopoverOpen = (keyVal, anchorEl, state, props) => {
    state.isOpen[keyVal] = true;
    state.anchorEl[keyVal] = anchorEl;
};
const setStatePopoverClose = (keyVal, state, props) => {
    state.isOpen[keyVal] = false;
};

const setStateIsDrawerNavigationOpen = (isOpen, state, props) => {
    return { isDrawerNavigationOpen: isOpen };
};

const statusBarStyle = {
    height: '20px',
    backgroundColor: 'red'
};

const defaultProps = {
    pageTitle: 'Sample Page Title',
    isHideKuFrequencyIcon: false,
    isHideDeleteIcon: false
};

const propTypes = {
    pageTitle: PropTypes.string.isRequired,
    isHideKuFrequencyIcon: PropTypes.bool.isRequired,
    isHideDeleteIcon: PropTypes.bool.isRequired
};

class ToolbarActionBar extends Component {
    constructor(props) {
        super(props);
        this.iconColor = getActionBarIconColor(props);
    }

    state = {
        value: 3,
        open: false,
        isDrawerNavigationOpen: false,
        isOpen: {},
        anchorEl: {}
    };

    handleTouchTap = event => {
        // This prevents ghost click.
        event.preventDefault();
        this.setState({
            open: true,
            anchorEl: event.currentTarget
        });
    };

    handleSave = event => {
        // This prevents ghost click.
        event.preventDefault();
    };

    handleRequestClose = () => {
        this.setState({
            open: false
        });
    };

    handleClickToggleDrawer = event => this.setState(setStateIsDrawerNavigationOpen.bind(this, !this.state.isDrawerNavigationOpen));
    handleTouchTapButton = (keyVal, event) => {
        event.preventDefault();
        this.setState(setStatePopoverOpen.bind(this, keyVal, event.currentTarget));
    };

    handleRequestCloseButton = keyVal => {
        this.setState(setStatePopoverClose.bind(this, keyVal));
    };

    render() {
        const { iconColor, handleClickToggleDrawer, handleTouchTapButton, handleRequestCloseButton } = this;
        const { isDrawerNavigationOpen, isOpen, anchorEl } = this.state;
        const { pageTitle, isHideDeleteIcon, isHideKuFrequencyIcon } = this.props;
        return (
            <div>
                <Toolbar style={getActionBarStyle(this.props)}>
                    <ToolbarGroup firstChild={true}>
                        <TomisIconButton onTouchTap={handleClickToggleDrawer}>
                            <TomisFontIcon name="menu" color={getAppBarIconColor(this.props)} />
                        </TomisIconButton>
                        <ToolbarTitle text={pageTitle} style={getToolbarTitleStyle(this.props)} />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <TomisFontIcon name="public" color={iconColor} />
                        <span>&nbsp;&nbsp;</span>
                        <FlatButton
                            style={getActionBarPopoverStyle(this.props)}
                            onTouchTap={handleTouchTapButton.bind(this, BRANCH_UNIT)}
                            label="CBP Air and Marine Headq..."
                            labelStyle={getActionBarLovStyle(this.props)}
                            labelPosition="before"
                            icon={<TomisFontIcon name="arrow_drop_down" color={getAppBarIconColor(this.props)} />}
                        />
                        <TomisIconButton onTouchTap={this.handleTouchTap} tooltip="Today">
                            <TomisFontIcon name="today" color={iconColor} />
                        </TomisIconButton>
                        <TomisIconButton onTouchTap={this.handleTouchTap} tooltip="Weekly View">
                            <TomisFontIcon name="date_range" color={iconColor} />
                        </TomisIconButton>
                        <TomisIconButton onTouchTap={this.handleTouchTap} tooltip="Monthly View">
                            <TomisFontIcon name="event_note" color={iconColor} />
                        </TomisIconButton>
                        {!isHideKuFrequencyIcon &&
                            <TomisIconButton onTouchTap={this.handleTouchTap} tooltip="KU NOC Coverage">
                                <TomisCustomIcon name="!" color={iconColor} />
                            </TomisIconButton>}
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <TomisIconButton onTouchTap={this.handleSave} tooltip="Save">
                            <TomisFontIcon name="save" color={iconColor} />
                        </TomisIconButton>
                        <TomisIconButton onTouchTap={this.handleTouchTap} tooltip="Clone">
                            <TomisFontIcon name="content_copy" color={iconColor} />
                        </TomisIconButton>
                        <TomisIconButton onTouchTap={this.handleTouchTap} tooltip="Cancel">
                            <TomisFontIcon name="refresh" color={iconColor} />
                        </TomisIconButton>
                        {!isHideDeleteIcon &&
                            <TomisIconButton onTouchTap={this.handleTouchTap} tooltip="Delete">
                                <TomisFontIcon name="delete" color={iconColor} />
                            </TomisIconButton>}
                    </ToolbarGroup>
                </Toolbar>
                <Drawer open={isDrawerNavigationOpen} docked={false} width={350} onRequestChange={open => this.setState(setStateIsDrawerNavigationOpen.bind(this, open))}>
                    <DrawerNavigation {...this.props} />
                </Drawer>
            </div>
        );
    }
}

ToolbarActionBar.defaultProps = defaultProps;
ToolbarActionBar.propTypes = propTypes;

export default muiThemeable()(ToolbarActionBar);
