'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TimePicker = require('material-ui/TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimePickerInternational = function TimePickerInternational() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_TimePicker2.default, { hintText: 'Custom Labels', okLabel: '\u786E\u5B9A', cancelLabel: '\u53D6\u6D88' })
  );
};

exports.default = TimePickerInternational;