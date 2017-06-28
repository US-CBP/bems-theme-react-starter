'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
var AppBarExampleIcon = function AppBarExampleIcon() {
  return _react2.default.createElement(_AppBar2.default, { title: 'Title', iconClassNameRight: 'muidocs-icon-navigation-expand-more' });
};

exports.default = AppBarExampleIcon;