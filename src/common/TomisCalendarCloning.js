import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import Paper from 'BemsMui/Paper';
import 'react-day-picker/lib/style.css';
import 'css/tomis-calendar.css';
import CloningStepBar from 'common/CloningStepBar';

const setStateSelectedDays = (state, props) => {
    return { selectedDays: [] };
};

const paneNode = null;

const today = new Date();

const initState = {
    selectedDays: []
};

const defaultProps = {
    numberOfMonths: 12,
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
        this.pane = null;
    }

    componentDidMount() {
        this.paneNode = ReactDOM.findDOMNode(this.pane);
        const { top: topPane } = this.paneNode.getBoundingClientRect();
        const cloningButtonH = 100;
        this.paneNode.style.height = `${window.innerHeight - topPane - cloningButtonH}px`;
    }

    componentDidUpdate() {
        const { top: topPane, left: leftPane, width: widthPane } = this.paneNode.getBoundingClientRect();
        const cloningStepBarNode = ReactDOM.findDOMNode(this.cloningStepBar);
        cloningStepBarNode.style.top = `${topPane}px`;
        cloningStepBarNode.style.left = `${leftPane}px`;
        cloningStepBarNode.style.width = `${this.paneNode.clientWidth}px`;
        cloningStepBarNode.style.position = 'fixed';
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
            <div ref={ref => (this.pane = ref)} style={style}>
                <CloningStepBar ref={ref => (this.cloningStepBar = ref)} stepNbr={2} />
                <DayPicker numberOfMonths={numberOfMonths} canChangeMonth={false} month={today} onDayClick={handleDayClick} selectedDays={selectedDays} />
            </div>
        );
    }
}

TomisCalendarCloning.defaultProps = defaultProps;
TomisCalendarCloning.propTypes = propTypes;
export default TomisCalendarCloning;
