'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _home = require('material-ui/svg-icons/action/home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconButtonExampleComplex = function IconButtonExampleComplex() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _IconButton2.default,
      { tooltip: 'Font Icon' },
      _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-action-home' })
    ),
    _react2.default.createElement(
      _IconButton2.default,
      { tooltip: 'SVG Icon' },
      _react2.default.createElement(_home2.default, null)
    ),
    _react2.default.createElement(
      _IconButton2.default,
      { iconClassName: 'material-icons', tooltip: 'Ligature' },
      'home'
    )
  );
};

exports.default = IconButtonExampleComplex;