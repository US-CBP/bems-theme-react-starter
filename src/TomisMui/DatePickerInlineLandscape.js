import React, { PropTypes, Component } from 'react';
import DatePicker from '../TomisMui/DatePicker';
import IconButton from '../TomisMui/IconButton';
import MonthlyCalendarIcon from 'material-ui/svg-icons/notification/event-note';
import moment from 'moment';

const setStateDemoDate = (date, state, props) => {
  return { demoDate: date };
};

/**
 * Inline Date Pickers are displayed below the input, rather than as a modal dialog.
 */
class DatePickerInlineLandscape extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    demoDate: moment()
  };

  handleChangeDemoDate = (event, date) => {
    const formattedDate = moment(date, 'MM/DD/YYYY');
    console.log('formattedDate=', formattedDate.toString());
    this.setState(setStateDemoDate.bind(this, formattedDate));
  };

  render() {
    const { handleChangeDemoDate } = this;
    const { demoDate } = this.state;
    const { fullWidth = true } = this.props;
    return (
      <DatePicker
        autoOk={true}
        fullWidth={fullWidth}
        firstDayOfWeek={0}
        floatingLabelText="Date"
        hintText="Type or Select Date"
        {...this.props}
        container="inline"
        mode="landscape"
      />
    );
  }
}

export default DatePickerInlineLandscape;
