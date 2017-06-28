'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _home = require('material-ui/svg-icons/action/home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ButtonIconFurther = function ButtonIconFurther(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var children = props.children;

  return _react2.default.createElement(
    _IconButton2.default,
    _extends({ tooltip: 'SVG Icon', tooltipPosition: 'bottom-center' }, props, { style: { zIndex: 'auto' } }),
    children ? children : _react2.default.createElement(_home2.default, null)
  );
};

exports.default = ButtonIconFurther;