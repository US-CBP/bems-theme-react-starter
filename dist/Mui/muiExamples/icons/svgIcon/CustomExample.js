'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _colors = require('material-ui/styles/colors');

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconStyles = {
  marginRight: 24
};

var HomeIcon = function HomeIcon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' })
  );
};

var SvgIconExampleSimple = function SvgIconExampleSimple() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(HomeIcon, { style: iconStyles }),
    _react2.default.createElement(HomeIcon, { style: iconStyles, color: _colors.blue500 }),
    _react2.default.createElement(HomeIcon, { style: iconStyles, color: _colors.red500, hoverColor: _colors.greenA200 })
  );
};

exports.default = SvgIconExampleSimple;