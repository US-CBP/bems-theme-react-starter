import React, { PropTypes, Component } from 'react';
import Drawer from 'material-ui/Drawer';
import IconMenu from 'material-ui/IconMenu';
import IconButton from '../BemsMui/IconButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import DrawerNavigation from './DrawerNavigation';
import Subheader from 'material-ui/Subheader';
import Logged from '../BemsMui/Logged';
import CalendarView from '../BemsMui/CalendarView';
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
import FontIcon from 'BemsMui/FontIcon';
import CustomIcon from 'BemsMui/CustomIcon';

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
            <IconButton onTouchTap={handleClickToggleDrawer}>
              <FontIcon name="menu" color={getAppBarIconColor(this.props)} />
            </IconButton>
            <ToolbarTitle text={pageTitle} style={getToolbarTitleStyle(this.props)} />
          </ToolbarGroup>
          <ToolbarGroup>
            <FontIcon name="public" color={iconColor} />
            <span>&nbsp;&nbsp;</span>
            <FlatButton
              style={getActionBarPopoverStyle(this.props)}
              onTouchTap={handleTouchTapButton.bind(this, BRANCH_UNIT)}
              label="CBP Air and Marine Headq..."
              labelStyle={getActionBarLovStyle(this.props)}
              labelPosition="before"
              icon={<FontIcon name="arrow_drop_down" color={getAppBarIconColor(this.props)} />}
            />
            <IconButton onTouchTap={this.handleTouchTap} tooltip="Today">
              <FontIcon name="today" color={iconColor} />
            </IconButton>
            <IconButton onTouchTap={this.handleTouchTap} tooltip="Weekly View">
              <FontIcon name="date_range" color={iconColor} />
            </IconButton>
            <IconButton onTouchTap={this.handleTouchTap} tooltip="Monthly View">
              <FontIcon name="event_note" color={iconColor} />
            </IconButton>
            {!isHideKuFrequencyIcon &&
              <IconButton onTouchTap={this.handleTouchTap} tooltip="KU NOC Coverage">
                <CustomIcon name="!" color={iconColor} />
              </IconButton>}
          </ToolbarGroup>
          <ToolbarGroup>
            <IconButton onTouchTap={this.handleSave} tooltip="Save">
              <FontIcon name="save" color={iconColor} />
            </IconButton>
            <IconButton onTouchTap={this.handleTouchTap} tooltip="Clone">
              <FontIcon name="content_copy" color={iconColor} />
            </IconButton>
            <IconButton onTouchTap={this.handleTouchTap} tooltip="Cancel">
              <FontIcon name="refresh" color={iconColor} />
            </IconButton>
            {!isHideDeleteIcon &&
              <IconButton onTouchTap={this.handleTouchTap} tooltip="Delete">
                <FontIcon name="delete" color={iconColor} />
              </IconButton>}
          </ToolbarGroup>
        </Toolbar>
        <Drawer
          open={isDrawerNavigationOpen}
          docked={false}
          width={350}
          onRequestChange={open => this.setState(setStateIsDrawerNavigationOpen.bind(this, open))}
        >
          <DrawerNavigation {...this.props} />
        </Drawer>
      </div>
    );
  }
}

ToolbarActionBar.defaultProps = defaultProps;
ToolbarActionBar.propTypes = propTypes;

export default muiThemeable()(ToolbarActionBar);
