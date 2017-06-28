'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function disableWeekends(date) {
  return date.getDay() === 0 || date.getDay() === 6;
}

function disableRandomDates() {
  return Math.random() > 0.7;
}
/**
 * `DatePicker` can disable specific dates based on the return value of a callback.
 */
var DatePickerExampleDisableDates = function DatePickerExampleDisableDates() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_DatePicker2.default, { hintText: 'Weekends Disabled', shouldDisableDate: disableWeekends }),
    _react2.default.createElement(_DatePicker2.default, { hintText: 'Random Dates Disabled', shouldDisableDate: disableRandomDates })
  );
};

exports.default = DatePickerExampleDisableDates;