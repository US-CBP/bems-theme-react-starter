import React, { Component } from 'react';
import TomisIconMenu from 'TomisApp/TomisIconMenu';
import {
  getStatusBarStyle,
  getStatusBarTitleStyle,
  getActionBarStyle,
  getActionBarIconColor,
  getAppBarIconColor,
  getLoggedInSocialPersonStyle
} from '../app/helpers/styles';
import TomisPopover from 'TomisApp/TomisPopover';
import TomisFlatButton from 'TomisApp/TomisFlatButton';
import TomisMenu from 'TomisApp/TomisMenu';
import TomisMenuItem from 'TomisApp/TomisMenuItem';
import TomisFontIcon from 'TomisApp/TomisFontIcon';

const PROFILE = 'PROFILE';

const anchorOrigin = { horizontal: 'left', vertical: 'bottom' };
const targetOrigin = { horizontal: 'left', vertical: 'top' };

const setStatePopoverOpen = (keyVal, anchorEl, state, props) => {
  state.isOpen[keyVal] = true;
  state.anchorEl[keyVal] = anchorEl;
};
const setStatePopoverClose = (keyVal, state, props) => {
  state.isOpen[keyVal] = false;
};

class TomisLogged extends Component {
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
    const { handleClickToggleDrawer, handleTouchTapButton, handleRequestCloseButton } = this;
    const { isNavigationDrawerOpen, isOpen, anchorEl } = this.state;
    return (
      <div>
        <TomisFlatButton style={getLoggedInSocialPersonStyle(this.props)} icon={<TomisFontIcon name="person" color={getAppBarIconColor(this.props)} />} />
        <TomisFlatButton
          onTouchTap={handleTouchTapButton.bind(this, PROFILE)}
          label="First / Last Name"
          labelStyle={getStatusBarTitleStyle(this.props)}
          labelPosition="before"
          icon={<TomisFontIcon name="arrow_drop_down" color={getAppBarIconColor(this.props)} />}
        />
        <TomisPopover
          open={isOpen[PROFILE]}
          anchorEl={anchorEl[PROFILE]}
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          onRequestClose={handleRequestCloseButton.bind(this, PROFILE)}
        >
          <TomisMenu>
            <TomisMenuItem value={1} primaryText="Preferences" />
            <TomisMenuItem value={2} primaryText="Logout" />
          </TomisMenu>
        </TomisPopover>
      </div>
    );
  }
}

TomisLogged.muiName = 'IconMenu';
export default TomisLogged;
