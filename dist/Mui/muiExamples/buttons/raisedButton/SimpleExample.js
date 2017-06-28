'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  margin: 12
};

var RaisedButtonExampleSimple = function RaisedButtonExampleSimple() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_RaisedButton2.default, { label: 'Default', style: style }),
    _react2.default.createElement(_RaisedButton2.default, { label: 'Primary', primary: true, style: style }),
    _react2.default.createElement(_RaisedButton2.default, { label: 'Secondary', secondary: true, style: style }),
    _react2.default.createElement(_RaisedButton2.default, { label: 'Disabled', disabled: true, style: style }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_RaisedButton2.default, { label: 'Full width', fullWidth: true })
  );
};

exports.default = RaisedButtonExampleSimple;