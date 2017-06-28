'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextFieldExampleDisabled = function TextFieldExampleDisabled() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_TextField2.default, { disabled: true, hintText: 'Disabled Hint Text' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { disabled: true, id: 'text-field-disabled', defaultValue: 'Disabled Value' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { disabled: true, hintText: 'Disabled Hint Text', floatingLabelText: 'Floating Label Text' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { disabled: true, hintText: 'Disabled Hint Text', defaultValue: 'Disabled With Floating Label', floatingLabelText: 'Floating Label Text' })
  );
};

exports.default = TextFieldExampleDisabled;