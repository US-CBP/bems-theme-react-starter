import React, { Component } from 'react';
import IconButton from '../TomisMui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { getStatusBarStyle, getStatusBarTitleStyle, getActionBarStyle, getActionBarIconColor, getAppBarIconColor, getLoggedInSocialPersonStyle } from '../app/helpers/styles';
import SvgIconArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import Popover from 'material-ui/Popover';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import SocialPerson from 'material-ui/svg-icons/social/person';

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

class Logged extends Component {
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
                {/*           icon={<SocialPerson color={getAppBarIconColor(this.props)} />} */}
                <FlatButton style={getLoggedInSocialPersonStyle(this.props)} icon={<SocialPerson color={getAppBarIconColor(this.props)} />} />
                <FlatButton
                    onTouchTap={handleTouchTapButton.bind(this, PROFILE)}
                    label="First / Last Name"
                    labelStyle={getStatusBarTitleStyle(this.props)}
                    labelPosition="before"
                    icon={<SvgIconArrowDropDown color={getAppBarIconColor(this.props)} />}
                />
                <Popover
                    open={isOpen[PROFILE]}
                    anchorEl={anchorEl[PROFILE]}
                    anchorOrigin={anchorOrigin}
                    targetOrigin={targetOrigin}
                    onRequestClose={handleRequestCloseButton.bind(this, PROFILE)}
                >
                    <Menu>
                        <MenuItem value={1} primaryText="Preferences" />
                        <MenuItem value={2} primaryText="Logout" />
                    </Menu>
                </Popover>
            </div>
        );
    }
}

Logged.muiName = 'IconMenu';
export default Logged;
