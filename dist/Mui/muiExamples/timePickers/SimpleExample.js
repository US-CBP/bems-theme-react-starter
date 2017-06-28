'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TimePicker = require('material-ui/TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimePickerExampleSimple = function TimePickerExampleSimple() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_TimePicker2.default, { hintText: '12hr Format' }),
    _react2.default.createElement(_TimePicker2.default, { hintText: '12hr Format with auto ok', autoOk: true }),
    _react2.default.createElement(_TimePicker2.default, { format: '24hr', hintText: '24hr Format' }),
    _react2.default.createElement(_TimePicker2.default, { disabled: true, format: '24hr', hintText: 'Disabled TimePicker' })
  );
};

exports.default = TimePickerExampleSimple;