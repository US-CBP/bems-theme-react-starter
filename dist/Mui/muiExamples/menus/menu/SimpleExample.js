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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0'
};

var MenuExampleSimple = function MenuExampleSimple() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Paper2.default,
      { style: style },
      _react2.default.createElement(
        _Menu2.default,
        null,
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Maps' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Books' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Flights' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Apps' })
      )
    ),
    _react2.default.createElement(
      _Paper2.default,
      { style: style },
      _react2.default.createElement(
        _Menu2.default,
        null,
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Refresh' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Help & feedback' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Settings' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Sign out' })
      )
    )
  );
};

exports.default = MenuExampleSimple;