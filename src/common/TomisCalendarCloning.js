import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import CloningStepBar from 'common/CloningStepBar';
import { CLONING_BUTTON_CONTAINER_H, SCROLLBAR_W } from 'globalJs/constants';
import 'react-day-picker/lib/style.css';
import 'css/tomis-calendar.css';

const setStateSelectedDays = (state, props) => {
    return { selectedDays: [] };
};

const paneNode = null;

const today = new Date();

const initState = {
    selectedDays: []
};

const defaultProps = {
    numberOfMonths: 12
};

const propTypes = {
    numberOfMonths: PropTypes.number
};

class TomisCalendarCloning extends Component {
    state = Object.assign({}, initState, { selectedDays: [] });

    handleDayClick = (day, { selected }) => {
        const { selectedDays } = this.state;
        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay => DateUtils.isSameDay(selectedDay, day));
            selectedDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);
        }
        this.setState({ selectedDays });
    };

    render() {
        const { handleDayClick } = this;
        const { selectedDays } = this.state;
        const { numberOfMonths, dimensions, dimensions: { navBarH } } = this.props;
        const adjustDimensionsForScrollbar = Object.assign({}, dimensions, { width: dimensions.width - SCROLLBAR_W });
        return (
            <div style={{ marginBottom: `${CLONING_BUTTON_CONTAINER_H}px`, height: `${window.innerHeight - navBarH - CLONING_BUTTON_CONTAINER_H}px`, overflowY: 'auto' }}>
                {/*<div style={{ marginBottom: `${CLONING_BUTTON_CONTAINER_H}px` }}>*/}
                <CloningStepBar stepNbr={2} dimensions={adjustDimensionsForScrollbar} />
                <DayPicker numberOfMonths={numberOfMonths} canChangeMonth={false} month={today} onDayClick={handleDayClick} selectedDays={selectedDays} />
            </div>
        );
    }
}

TomisCalendarCloning.defaultProps = defaultProps;
TomisCalendarCloning.propTypes = propTypes;
export default TomisCalendarCloning;
