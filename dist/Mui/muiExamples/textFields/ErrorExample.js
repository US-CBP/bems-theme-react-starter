'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextFieldExampleError = function TextFieldExampleError() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_TextField2.default, { hintText: 'Hint Text', errorText: 'This field is required' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { hintText: 'Hint Text', errorText: 'The error text can be as long as you want, it will wrap.' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { hintText: 'Hint Text', errorText: 'This field is required', floatingLabelText: 'Floating Label Text' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { hintText: 'Message Field', errorText: 'This field is required.', floatingLabelText: 'MultiLine and FloatingLabel', multiLine: true, rows: 2 }),
    _react2.default.createElement('br', null)
  );
};

exports.default = TextFieldExampleError;