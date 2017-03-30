import React, { Component } from 'react';
import { getStatusBarStyle, getStatusBarTitleStyle, getActionBarStyle, getActionBarIconColor, getAppBarIconColor, getLoggedInSocialPersonStyle } from '../app/helpers/styles';
import Popover from 'material-ui/Popover';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import NavigationMoreHoriz from 'material-ui/svg-icons/navigation/more-horiz';
import TodayIcon from 'material-ui/svg-icons/action/today';
import MonthlyCalendarIcon from 'material-ui/svg-icons/notification/event-note';
import WeeklyCalendarIcon from 'material-ui/svg-icons/action/date-range';

const CALENDAR_VIEW = 'CALENDAR_VIEW';

const anchorOrigin = { horizontal: 'left', vertical: 'bottom' };
const targetOrigin = { horizontal: 'left', vertical: 'top' };

const setStatePopoverOpen = (keyVal, anchorEl, state, props) => {
    state.isOpen[keyVal] = true;
    state.anchorEl[keyVal] = anchorEl;
};
const setStatePopoverClose = (keyVal, state, props) => {
    state.isOpen[keyVal] = false;
};

class CalendarView extends Component {
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
                <IconButton onTouchTap={handleTouchTapButton.bind(this, CALENDAR_VIEW)} tooltip="Today, Monthly, Weekly View">
                    <NavigationMoreHoriz color={getActionBarIconColor(this.props)} />
                </IconButton>
                <Popover
                    open={isOpen[CALENDAR_VIEW]}
                    anchorEl={anchorEl[CALENDAR_VIEW]}
                    anchorOrigin={anchorOrigin}
                    targetOrigin={targetOrigin}
                    onRequestClose={handleRequestCloseButton.bind(this, CALENDAR_VIEW)}
                >
                    <Menu>
                        <MenuItem value={1} leftIcon={<TodayIcon />} primaryText="Today" />
                        <MenuItem value={2} leftIcon={<MonthlyCalendarIcon />} primaryText="Monthly" />
                        <MenuItem value={3} leftIcon={<WeeklyCalendarIcon />} primaryText="Weekly" />
                        {/*<MenuItem value={4} leftIcon={<WeeklyCalendarIcon />} primaryText="KU NOC Coverage" />*/}
                    </Menu>
                </Popover>
            </div>
        );
    }
}

CalendarView.muiName = 'IconMenu';
export default CalendarView;
