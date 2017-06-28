'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 */
var DatePickerExampleSimple = function DatePickerExampleSimple() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_DatePicker2.default, { hintText: 'Portrait Dialog' }),
    _react2.default.createElement(_DatePicker2.default, { hintText: 'Landscape Dialog', mode: 'landscape' }),
    _react2.default.createElement(_DatePicker2.default, { hintText: 'Dialog Disabled', disabled: true })
  );
};

exports.default = DatePickerExampleSimple;