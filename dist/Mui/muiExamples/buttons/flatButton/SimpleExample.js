'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlatButtonExampleSimple = function FlatButtonExampleSimple() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_FlatButton2.default, { label: 'Default' }),
    _react2.default.createElement(_FlatButton2.default, { label: 'Primary', primary: true }),
    _react2.default.createElement(_FlatButton2.default, { label: 'Secondary', secondary: true }),
    _react2.default.createElement(_FlatButton2.default, { label: 'Disabled', disabled: true }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_FlatButton2.default, { label: 'Full width', fullWidth: true })
  );
};

exports.default = FlatButtonExampleSimple;