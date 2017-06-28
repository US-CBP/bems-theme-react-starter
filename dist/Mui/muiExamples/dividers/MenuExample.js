'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Menu = require('material-ui/Menu');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  // Without this, the menu overflows the CodeExample container.
  // float: 'left'
};

var DividerExampleMenu = function DividerExampleMenu() {
  return _react2.default.createElement(
    _Menu.Menu,
    { desktop: true, style: style },
    _react2.default.createElement(_Menu.MenuItem, { primaryText: 'Settings' }),
    _react2.default.createElement(_Menu.MenuItem, { primaryText: 'Help & feedback' }),
    _react2.default.createElement(_Divider2.default, null),
    _react2.default.createElement(_Menu.MenuItem, { primaryText: 'Sign out' })
  );
};

exports.default = DividerExampleMenu;