'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconStyles = {
  marginRight: 24
};

var FontIconExampleSimple = function FontIconExampleSimple() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-action-home', style: iconStyles }),
    _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-action-home', style: iconStyles, color: _colors.blue500 }),
    _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-action-home', style: iconStyles, color: _colors.red500, hoverColor: _colors.greenA200 })
  );
};

exports.default = FontIconExampleSimple;