import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
//import DropDownMenu from 'material-ui/DropDownMenu';
import Popover from 'material-ui/Popover';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import DrawerNavigation from './DrawerNavigation';
import HamburgerMenu from 'material-ui/svg-icons/navigation/menu';
import SvgIconArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import CommunicationChatBubbleOpen from 'material-ui/svg-icons/communication/chat-bubble-outline';
import SocialPerson from 'material-ui/svg-icons/social/person';
import Subheader from 'material-ui/Subheader';
import Logged from './components/Logged';
import Search from './components/Search';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {getStatusBarStyle, getStatusBarTitleStyle, getAppBarStyle, getActionBarStyle, getActionBarIconColor} from './helpers/styles'
import EventIcon from 'material-ui/svg-icons/action/event';
import MonthlyCalendarIcon from 'material-ui/svg-icons/notification/event-note';
import WeeklyCalendarIcon from 'material-ui/svg-icons/notification/event-available';
import SaveIcon from 'material-ui/svg-icons/content/save';
import CancelIcon from 'material-ui/svg-icons/content/block';

const APPLICATIONS = 'APPLICATIONS';

const anchorOrigin = {horizontal: 'left', vertical: 'bottom'};
const targetOrigin = {horizontal: 'left', vertical: 'top'};

const setStatePopoverOpen = (keyVal, anchorEl, state, props) => {
    state.isOpen[keyVal] = true;
    state.anchorEl[keyVal] = anchorEl;
}
const setStatePopoverClose = (keyVal, state, props) => {
    state.isOpen[keyVal] = false;
}

const setStateIsNavigationDrawerOpen = (isOpen, state, props) => {
    return {isNavigationDrawerOpen: isOpen}
}

const statusBarStyle = {
    height: '20px',
    backgroundColor: 'red'
}
class HeaderNavAction extends Component {

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

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
     this.setState({
       open: false,
     });
   };

  handleClickToggleDrawer = (event) => this.setState(setStateIsNavigationDrawerOpen.bind(this, !this.state.isNavigationDrawerOpen));
  handleTouchTapButton = (keyVal, event) => {
    event.preventDefault();
    this.setState(setStatePopoverOpen.bind(this, keyVal, event.currentTarget));
  };

  handleRequestCloseButton = (keyVal) => {
      this.setState(setStatePopoverClose.bind(this, keyVal));
   };

  render() {
    const {handleClickToggleDrawer, handleTouchTapButton, handleRequestCloseButton} = this;
    const {isNavigationDrawerOpen, isOpen, anchorEl }  = this.state;
    return (
    <div>
    <Toolbar style={getStatusBarStyle(this.props)}>
      <ToolbarGroup firstChild={true}>
        <ToolbarTitle text="U.S. Customs and Border Protection, U.S. Department of Homeland Security" style={getStatusBarTitleStyle(this.props)}/>
      </ToolbarGroup>
      <ToolbarGroup lastChild={true}>
        <ToolbarTitle text="11:31 AM" style={getStatusBarTitleStyle(this.props)} />
      </ToolbarGroup>
     </Toolbar>
      <Toolbar style={getAppBarStyle(this.props)}>
        <ToolbarGroup firstChild={true}>
        <IconButton onTouchTap={handleClickToggleDrawer}>
          <HamburgerMenu />
        </IconButton>

        <FlatButton
            onTouchTap={handleTouchTapButton.bind(this, APPLICATIONS)}
            label="TOMIS"
            labelPosition="before"
            icon={<SvgIconArrowDropDown />}
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
            <Search />
            <IconButton tooltip="Feedback">
              <CommunicationChatBubbleOpen color={getActionBarIconColor(this.props)} />
            </IconButton>
            <IconButton tooltip="Daniel Barb">
              <SocialPerson color={getActionBarIconColor(this.props)} />
            </IconButton>
            <Logged />
        </ToolbarGroup>
      </Toolbar>
      <Toolbar style={getActionBarStyle(this.props)}>
        <ToolbarGroup firstChild={true}>
        <FlatButton
          onTouchTap={this.handleTouchTap}
          icon={<EventIcon color={getActionBarIconColor(this.props)} />}
        />
        <ToolbarSeparator />
        <FlatButton
          onTouchTap={this.handleTouchTap}
          icon={<MonthlyCalendarIcon color={getActionBarIconColor(this.props)} />}
        />
        <ToolbarSeparator />
        <FlatButton
          onTouchTap={this.handleTouchTap}
          icon={<WeeklyCalendarIcon color={getActionBarIconColor(this.props)} />}
        />
        </ToolbarGroup>
        <ToolbarGroup>
        <FlatButton
          onTouchTap={this.handleTouchTap}
          icon={<SaveIcon color={getActionBarIconColor(this.props)} />}
        />
        <ToolbarSeparator />
        <FlatButton
          onTouchTap={this.handleTouchTap}
          icon={<CancelIcon color={getActionBarIconColor(this.props)} />}
        />
        </ToolbarGroup>
      </Toolbar>
      <Drawer open={isNavigationDrawerOpen}
        docked={false}
        width={350}
        onRequestChange={(open) => this.setState(setStateIsNavigationDrawerOpen.bind(this, open))}
      >
        <DrawerNavigation />
      </Drawer>
     </div>
    );
  }
}
export default muiThemeable()(HeaderNavAction);
