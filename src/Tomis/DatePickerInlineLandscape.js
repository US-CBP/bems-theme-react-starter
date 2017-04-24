import React, { PropTypes, Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import IconButton from '../TomisMui/IconButton';
import MonthlyCalendarIcon from 'material-ui/svg-icons/notification/event-note';

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
    demoDate: new Date()
  };

  handleChangeDemoDate = (event, date) => {
    this.setState(setStateDemoDate.bind(this, date));
  };

  render() {
    const { handleChangeDemoDate } = this;
    const { fullWidth = true } = this.props;
    return (
      <div style={{ position: 'relative', width: fullWidth ? '100%' : 'inherit' }}>
        <DatePicker
          autoOk={false}
          hintText="Landscape Inline Dialog"
          fullWidth={fullWidth}
          formatDate={date => date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()}
          firstDayOfWeek={0}
          floatingLabelText="Date"
          hintText={<span>Select Date </span>}
          onChange={handleChangeDemoDate}
          {...this.props}
          container="inline"
          mode="landscape"
        />
        {/* must use inline style for position on IconButton to override default */}
        <IconButton className="inline-icon" style={{ position: 'absolute', right: 0, bottom: 0 }}>
          <MonthlyCalendarIcon />
        </IconButton>

      </div>
    );
  }
}

export default DatePickerInlineLandscape;
