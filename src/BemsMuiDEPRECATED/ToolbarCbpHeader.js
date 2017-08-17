import React, { Component } from 'react';
import Drawer from '../BemsMui/Drawer';
import IconMenu from '../BemsMui/IconMenu';
import Menu from '../BemsMui/Menu';
import MenuItem from '../BemsMui/MenuItem';
import Popover from '../BemsMui/Popover';
import FlatButton from '../BemsMui/FlatButton';
import RaisedButton from '../BemsMui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from '../BemsMui/Toolbar';
import Logged from '../BemsMui/Logged';
import CalendarView from '../BemsMui/CalendarView';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {
  getStatusBarTitleStyle,
  getActionBarStyle,
  getActionBarIconColor,
  getActionBarLabelStyle,
  getToolbarTitleStyle,
  getActionBarPopoverStyle,
  getActionBarLovStyle
} from '../app/helpers/styles';
import FontIcon from 'BemsMui/FontIcon';

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

class ToolbarCbpHeader extends Component {
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
    const { handleTouchTapButton, handleRequestCloseButton } = this;
    const { isOpen, anchorEl } = this.state;
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <div>
              <ToolbarTitle text={<span>U.S. Customs and Border Protection</span>} style={getStatusBarTitleStyle(this.props)} />
              <br />
              <div className="header-sub-title">Department of Homeland Security</div>
            </div>
            <FlatButton
              onTouchTap={handleTouchTapButton.bind(this, APPLICATIONS)}
              labelStyle={getStatusBarTitleStyle(this.props)}
              label="TOMIS"
              labelPosition="before"
              icon={<FontIcon name="arrow_drop_down" />}
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
export default muiThemeable()(ToolbarCbpHeader);
