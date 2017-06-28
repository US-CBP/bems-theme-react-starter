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
 * Inline Date Pickers are displayed below the input, rather than as a modal dialog.
 */
var DatePickerExampleInline = function DatePickerExampleInline() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_DatePicker2.default, { hintText: 'Portrait Inline Dialog', container: 'inline' }),
    _react2.default.createElement(_DatePicker2.default, { hintText: 'Landscape Inline Dialog', container: 'inline', mode: 'landscape' })
  );
};

exports.default = DatePickerExampleInline;