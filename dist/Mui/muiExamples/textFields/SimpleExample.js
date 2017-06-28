'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextFieldExampleSimple = function TextFieldExampleSimple() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_TextField2.default, { hintText: 'Hint Text' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { hintText: 'The hint text can be as long as you want, it will wrap.' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { id: 'text-field-default', defaultValue: 'Default Value' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { hintText: 'Hint Text', floatingLabelText: 'Floating Label Text' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { defaultValue: 'Default Value', floatingLabelText: 'Floating Label Text' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { hintText: 'Hint Text', floatingLabelText: 'Fixed Floating Label Text', floatingLabelFixed: true }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { hintText: 'Password Field', floatingLabelText: 'Password', type: 'password' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { hintText: 'MultiLine with rows: 2 and rowsMax: 4', multiLine: true, rows: 2, rowsMax: 4 }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { hintText: 'Message Field', floatingLabelText: 'MultiLine and FloatingLabel', multiLine: true, rows: 2 }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { hintText: 'Full width', fullWidth: true })
  );
};

exports.default = TextFieldExampleSimple;