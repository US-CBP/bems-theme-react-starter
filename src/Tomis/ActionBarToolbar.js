import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import NavigationDrawer from './NavigationDrawer';
import HamburgerMenu from 'material-ui/svg-icons/navigation/menu';
import SvgIconArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import CommunicationChatBubbleOpen from 'material-ui/svg-icons/communication/chat-bubble-outline';
import Subheader from 'material-ui/Subheader';
import Logged from '../TomisInternal/Logged';
import CalendarView from '../TomisInternal/CalendarView';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {
    getStatusBarStyle,
    getStatusBarTitleStyle,
    getActionBarStyle,
    getActionBarIconColor,
    getStatusBarSubHeaderTitleStyle,
    getAppBarIconColor,
    getActionBarLabelStyle,
    getToolbarTitleStyle,
    getActionBarPopoverStyle,
    getActionBarLovStyle
} from '../app/helpers/styles';

import TodayIcon from 'material-ui/svg-icons/action/today';
import MonthlyCalendarIcon from 'material-ui/svg-icons/notification/event-note';
import WeeklyCalendarIcon from 'material-ui/svg-icons/action/date-range';
import ContentCopyIcon from 'material-ui/svg-icons/content/content-copy';
import SaveIcon from 'material-ui/svg-icons/content/save';
import CancelIcon from 'material-ui/svg-icons/navigation/cancel';
import FilterListIcon from 'material-ui/svg-icons/content/filter-list';
import SocialPublicIcon from 'material-ui/svg-icons/social/public';
import FlightIcon from 'material-ui/svg-icons/maps/flight';
import FloatIcon from 'material-ui/svg-icons/maps/directions-boat';
import UASIcon from 'material-ui/svg-icons/action/three-d-rotation';
import KuNocIcon from 'material-ui/svg-icons/editor/multiline-chart';

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

const setStateIsNavigationDrawerOpen = (isOpen, state, props) => {
    return { isNavigationDrawerOpen: isOpen };
};

const statusBarStyle = {
    height: '20px',
    backgroundColor: 'red'
};
class ActionBarToolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 3,
            open: false,
            isNavigationDrawerOpen: false,
            isOpen: {},
            anchorEl: {}
        };
    }

    handleTouchTap = event => {
        // This prevents ghost click.
        event.preventDefault();
        this.setState({
            open: true,
            anchorEl: event.currentTarget
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false
        });
    };

    handleClickToggleDrawer = event => this.setState(setStateIsNavigationDrawerOpen.bind(this, !this.state.isNavigationDrawerOpen));
    handleTouchTapButton = (keyVal, event) => {
        event.preventDefault();
        this.setState(setStatePopoverOpen.bind(this, keyVal, event.currentTarget));
    };

    handleRequestCloseButton = keyVal => {
        this.setState(setStatePopoverClose.bind(this, keyVal));
    };

    render() {
        const {
            handleClickToggleDrawer,
            handleTouchTapButton,
            handleRequestCloseButton
        } = this;
        const { isNavigationDrawerOpen, isOpen, anchorEl } = this.state;
        const { pageTitle = 'Safety Reports Status Page' } = this.props;
        return (
            <div>
                <Toolbar style={getActionBarStyle(this.props)}>
                    <ToolbarGroup firstChild={true}>
                        <IconButton onTouchTap={handleClickToggleDrawer}>
                            <HamburgerMenu color={getAppBarIconColor(this.props)} />
                        </IconButton>
                        <ToolbarTitle text={pageTitle} style={getToolbarTitleStyle(this.props)} />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <SocialPublicIcon color={getActionBarIconColor(this.props)} />
                        <span>&nbsp;&nbsp;</span>
                        <FlatButton
                            style={getActionBarPopoverStyle(this.props)}
                            onTouchTap={handleTouchTapButton.bind(this, BRANCH_UNIT)}
                            label="CBP Air and Marine Headq..."
                            labelStyle={getActionBarLovStyle(this.props)}
                            labelPosition="before"
                            icon={<SvgIconArrowDropDown color={getAppBarIconColor(this.props)} />}
                        />
                        <IconButton onTouchTap={this.handleTouchTap} tooltip="Today">
                            <TodayIcon color={getActionBarIconColor(this.props)} />
                        </IconButton>
                        <IconButton onTouchTap={this.handleTouchTap} tooltip="Weekly View">
                            <WeeklyCalendarIcon color={getActionBarIconColor(this.props)} />
                        </IconButton>
                        <IconButton onTouchTap={this.handleTouchTap} tooltip="Monthly View">
                            <MonthlyCalendarIcon color={getActionBarIconColor(this.props)} />
                        </IconButton>
                        <IconButton onTouchTap={this.handleTouchTap} tooltip="KU NOC">
                            <KuNocIcon color={getActionBarIconColor(this.props)} />
                        </IconButton>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <IconButton onTouchTap={this.handleTouchTap} tooltip="Save">
                            <SaveIcon color={getActionBarIconColor(this.props)} />
                        </IconButton>
                        <IconButton onTouchTap={this.handleTouchTap} tooltip="Clone">
                            <ContentCopyIcon color={getActionBarIconColor(this.props)} />
                        </IconButton>
                        <IconButton onTouchTap={this.handleTouchTap} tooltip="Cancel">
                            <CancelIcon color={getActionBarIconColor(this.props)} />
                        </IconButton>
                    </ToolbarGroup>
                </Toolbar>
                <Drawer open={isNavigationDrawerOpen} docked={false} width={350} onRequestChange={open => this.setState(setStateIsNavigationDrawerOpen.bind(this, open))}>
                    <NavigationDrawer {...this.props} />
                </Drawer>
            </div>
        );
    }
}
export default muiThemeable()(ActionBarToolbar);
