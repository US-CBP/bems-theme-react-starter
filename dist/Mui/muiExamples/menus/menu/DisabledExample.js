'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0'
};

var MenuExampleDisable = function MenuExampleDisable() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Paper2.default,
      { style: style },
      _react2.default.createElement(
        _Menu2.default,
        { desktop: true },
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Back' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Forward', disabled: true }),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Recently closed', disabled: true }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Google', disabled: true }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'YouTube' })
      )
    ),
    _react2.default.createElement(
      _Paper2.default,
      { style: style },
      _react2.default.createElement(
        _Menu2.default,
        { desktop: true },
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Undo' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Redo', disabled: true }),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Cut', disabled: true }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Copy', disabled: true }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Paste' })
      )
    )
  );
};

exports.default = MenuExampleDisable;