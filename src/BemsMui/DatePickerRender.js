import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const DatePickerRender = props => {
  return (
    <div>
      <div>Please type a day:</div>
      <DayPickerInput placeholder="MM/DD/YYYY" />
    </div>
  );
};
export default DatePickerRender;
