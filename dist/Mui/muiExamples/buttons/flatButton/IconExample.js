'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _android = require('material-ui/svg-icons/action/android');

var _android2 = _interopRequireDefault(_android);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  margin: 12
};

var FlatButtonExampleIcon = function FlatButtonExampleIcon() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_FlatButton2.default, { icon: _react2.default.createElement(_android2.default, null), style: style }),
    _react2.default.createElement(_FlatButton2.default, { backgroundColor: '#a4c639', hoverColor: '#8AA62F', icon: _react2.default.createElement(_android2.default, { color: _colors.fullWhite }), style: style }),
    _react2.default.createElement(_FlatButton2.default, {
      href: 'https://github.com/callemall/material-ui',
      target: '_blank',
      secondary: true,
      icon: _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-custom-github' }),
      style: style
    })
  );
};

exports.default = FlatButtonExampleIcon;