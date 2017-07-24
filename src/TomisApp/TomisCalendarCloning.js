import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import Paper from 'BemsMui/Paper';
import 'react-day-picker/lib/style.css';
import 'css/tomis-calendar.css';
import CloningStepBar from 'common/CloningStepBar';
import Measure from 'react-measure';

const setStateSelectedDays = (state, props) => {
    return { selectedDays: [] };
};

const today = new Date();

const initState = {
    selectedDays: [],
    dimensions: {
        top: 0,
        left: 0,
        width: 0
    }
};

const defaultProps = {
    numberOfMonths: 6,
    style: { overflowX: 'hidden', overflowY: 'auto' }
};

const propTypes = {
    numberOfMonths: PropTypes.number,
    style: PropTypes.object
};

class TomisCalendarCloning extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, initState, props, { selectedDays: [] });
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
        const { dimensions: { top, left, width }, dimensions } = this.state;
        const renderStyle = Object.assign({}, { height: `${window.innerHeight - top - 100}px` }, style);
        return (
            <div style={renderStyle}>
                <Measure
                    bounds={true}
                    onResize={contentRect => {
                        this.setState({ dimensions: contentRect.bounds });
                    }}
                >
                    {({ measureRef }) => <div ref={measureRef} style={{ width: '100%', height: 0 }} />}
                </Measure>
                <CloningStepBar stepNbr={2} style={{ top: `${top}px`, left: `${left}px`, width: `${width}px` }} />
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

TomisCalendarCloning.defaultProps = defaultProps;
TomisCalendarCloning.propTypes = propTypes;
export default TomisCalendarCloning;
