import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePickerRender from './DatePickerRender';

class DatePicker extends Component {
  render() {
    return <DatePickerRender {...this.state} {...this.props} />;
  }
}
export default DatePicker;
