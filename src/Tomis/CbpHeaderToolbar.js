import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import IconMenu from 'material-ui/IconMenu';
import IconButton from '../TomisMui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
//import DropDownMenu from 'material-ui/DropDownMenu';
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
import SaveIcon from 'material-ui/svg-icons/content/save';
import CancelIcon from 'material-ui/svg-icons/navigation/cancel';
import FilterListIcon from 'material-ui/svg-icons/content/filter-list';
import SocialPublicIcon from 'material-ui/svg-icons/social/public';
import FlightIcon from 'material-ui/svg-icons/maps/flight';
import FloatIcon from 'material-ui/svg-icons/maps/directions-boat';
import UASIcon from 'material-ui/svg-icons/action/three-d-rotation';

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

class CbpHeaderToolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: {},
            anchorEl: {}
        };
    }

    handleTouchTapButton = (keyVal, event) => {
        event.preventDefault();
        this.setState(setStatePopoverOpen.bind(this, keyVal, event.currentTarget));
    };

    handleRequestCloseButton = keyVal => {
        this.setState(setStatePopoverClose.bind(this, keyVal));
    };

    render() {
        const {
            handleTouchTapButton,
            handleRequestCloseButton
        } = this;
        const { isOpen, anchorEl } = this.state;
        return (
            <div>
                <Toolbar>
                    <ToolbarGroup firstChild={true}>
                        <div>
                            <ToolbarTitle text={<span>U.S. Customs and Border Protection</span>} style={getStatusBarTitleStyle(this.props)} />
                            <br />
                            <Subheader style={getStatusBarSubHeaderTitleStyle(this.props)}>Department of Homeland Security</Subheader>
                        </div>
                        <FlatButton
                            onTouchTap={handleTouchTapButton.bind(this, APPLICATIONS)}
                            labelStyle={getStatusBarTitleStyle(this.props)}
                            label="TOMIS"
                            labelPosition="before"
                            icon={<SvgIconArrowDropDown color={getAppBarIconColor(this.props)} />}
                        />
                        <Popover
                            open={isOpen[APPLICATIONS]}
                            anchorEl={anchorEl[APPLICATIONS]}
                            anchorOrigin={anchorOrigin}
                            targetOrigin={targetOrigin}
                            onRequestClose={handleRequestCloseButton.bind(this, APPLICATIONS)}
                        >
                            <Menu>
                                <MenuItem value={1} primaryText="SEACATS" />
                                <MenuItem value={2} primaryText="FACTS" />
                            </Menu>
                        </Popover>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <Logged {...this.props} />
                    </ToolbarGroup>
                </Toolbar>
            </div>
        );
    }
}
export default muiThemeable()(CbpHeaderToolbar);
