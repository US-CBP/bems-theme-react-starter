import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import 'css/tomis-calendar.css';

const today = new Date();

const initState = {
    selectedDays: []
};

class TomisCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = initState;
    }

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
        const { numberOfMonths, style, initVal, children } = this.props;
        return (
            <div>
                <DayPicker
                    numberOfMonths={numberOfMonths}
                    canChangeMonth={false}
                    month={today}
                    onDayClick={handleDayClick}
                    selectedDays={selectedDays}
                    disabledDays={[
                        {
                            before: new Date()
                        }
                    ]}
                />
            </div>
        );
    }
}

export default TomisCalendar;
