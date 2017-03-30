import React, {PropTypes, Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import SvgIconArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';

const TOMIS_OPERATIONS = 'TOMIS_OPERATIONS';
const EVENT = 'EVENT';
const REPORTS = 'REPORTS';
const TOMIS_MAINTENANCE = 'TOMIS_MAINTENANCE';
const SUPERVISOR = 'SUPERVISOR';
const SAFETY = 'SAFETY';
const QUICK_SEARCH = 'QUICK_SEARCH';

const anchorOrigin = {horizontal: 'left', vertical: 'bottom'};
const targetOrigin = {horizontal: 'left', vertical: 'top'};

const setStatePopoverOpen = (keyVal, anchorEl, state, props) => {
    state.isOpen[keyVal] = true;
    state.anchorEl[keyVal] = anchorEl;
}
const setStatePopoverClose = (keyVal, state, props) => {
    state.isOpen[keyVal] = false;
}

export default class ToolbarNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      open: undefined,
      isOpen: {},
      anchorEl: {}
    };
  }

  handleTouchTap = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleTouchTapButton = (keyVal, event) => {
    event.preventDefault();
    this.setState(setStatePopoverOpen.bind(this, keyVal, event.currentTarget));
  };

  handleRequestClose = () => {
     this.setState({
       open: false,
     });
   };

   handleRequestCloseButton = (keyVal) => {
       this.setState(setStatePopoverClose.bind(this, keyVal));
    };

  render() {
    const {handleRequestCloseButton} = this;
    const {isOpen, anchorEl} = this.state;
    return (
      <Toolbar>
      <ToolbarGroup firstChild={true}>
          <FlatButton
            label="Home"
          />
        <FlatButton
            onTouchTap={this.handleTouchTapButton.bind(this, TOMIS_OPERATIONS)}
            label="TOMIS Operations"
            labelPosition="before"
            icon={<SvgIconArrowDropDown />}
        />
        <Popover
          open={isOpen[TOMIS_OPERATIONS]}
          anchorEl={anchorEl[TOMIS_OPERATIONS]}
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          onRequestClose={handleRequestCloseButton.bind(this, TOMIS_OPERATIONS)}
        >
            <Menu>
                <MenuItem value={1} primaryText="Add Flight" />
                <MenuItem value={2} primaryText="Add Float" />
                <MenuItem value={3} primaryText="Add UAS Consolidated" />
                <MenuItem value={4} primaryText="Add UAS Federated" />
                <MenuItem value={5} primaryText="Add Ground Operation" />
                <MenuItem value={6} primaryText="Add No Launch" />
                <MenuItem value={7} primaryText="Scheduler" />
                <MenuItem value={8} primaryText="Sync Matrix" />
                <MenuItem value={9} primaryText="Kiosk" />
                <MenuItem value={10} primaryText="Current Missions" />
            </Menu>
        </Popover>
        <FlatButton
            onTouchTap={this.handleTouchTapButton.bind(this, EVENT)}
            label="Event"
            labelPosition="before"
            icon={<SvgIconArrowDropDown />}
        />
        <Popover
          open={isOpen[EVENT]}
          anchorEl={anchorEl[EVENT]}
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          onRequestClose={handleRequestCloseButton.bind(this, EVENT)}
        >
        <Menu>
            <MenuItem value={1} primaryText="Add Event" />
        </Menu>
          </Popover>
        <FlatButton
            onTouchTap={this.handleTouchTapButton.bind(this, REPORTS)}
            label="Reports"
            labelPosition="before"
            icon={<SvgIconArrowDropDown />}
        />
        <Popover
          open={isOpen[REPORTS]}
          anchorEl={anchorEl[REPORTS]}
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          onRequestClose={handleRequestCloseButton.bind(this, REPORTS)}
        >
        <Menu>
        <MenuItem value={1} primaryText="Retrieve Report" />
        <MenuItem value={2} primaryText="AMO Dashboard Reports" />
        </Menu>
          </Popover>
        <FlatButton
            onTouchTap={this.handleTouchTapButton.bind(this, TOMIS_MAINTENANCE)}
            label="TOMIS Maintenance"
            labelPosition="before"
            icon={<SvgIconArrowDropDown />}
        />
        <Popover
          open={isOpen[TOMIS_MAINTENANCE]}
          anchorEl={anchorEl[TOMIS_MAINTENANCE]}
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          onRequestClose={handleRequestCloseButton.bind(this, TOMIS_MAINTENANCE)}
        >
        <Menu>
        <MenuItem value={1} primaryText="Asset" />
        <MenuItem value={2} primaryText="COA" />
        <MenuItem value={3} primaryText="Named Operation" />
        <MenuItem value={4} primaryText="Personnel" />
        <MenuItem value={5} primaryText="Asset Allocation" />
        </Menu>
          </Popover>
        <FlatButton
            onTouchTap={this.handleTouchTapButton.bind(this, SUPERVISOR)}
            label="Supervisor"
            labelPosition="before"
            icon={<SvgIconArrowDropDown />}
        />
        <Popover
          open={isOpen[SUPERVISOR]}
          anchorEl={anchorEl[SUPERVISOR]}
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          onRequestClose={handleRequestCloseButton.bind(this, SUPERVISOR)}
        >
        <Menu>
            <MenuItem value={1} primaryText="Approvals" />
        </Menu>
          </Popover>
        <FlatButton
            onTouchTap={this.handleTouchTapButton.bind(this, SAFETY)}
            label="Safety"
            labelPosition="before"
            icon={<SvgIconArrowDropDown />}
        />
        <Popover
          open={isOpen[SAFETY]}
          anchorEl={anchorEl[SAFETY]}
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          onRequestClose={handleRequestCloseButton.bind(this, SAFETY)}
        >
        <Menu>
            <MenuItem value={1} primaryText="Safety Reports Status Page" />
        </Menu>
          </Popover>
        <FlatButton
            onTouchTap={this.handleTouchTapButton.bind(this, QUICK_SEARCH)}
            label="Quick Search"
            labelPosition="before"
            icon={<SvgIconArrowDropDown />}
        />
        <Popover
          open={isOpen[QUICK_SEARCH]}
          anchorEl={anchorEl[QUICK_SEARCH]}
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          onRequestClose={handleRequestCloseButton.bind(this, QUICK_SEARCH)}
        >
        <Menu>
        <MenuItem value={1} primaryText="Mission Search" />
        <MenuItem value={2} primaryText="Event Search" />
        <MenuItem value={3} primaryText="Safety Search" />
        </Menu>
          </Popover>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
