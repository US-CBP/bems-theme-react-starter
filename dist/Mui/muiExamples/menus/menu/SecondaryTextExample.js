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

var _navigationArrowDropRight = require('material-ui/svg-icons/navigation-arrow-drop-right');

var _navigationArrowDropRight2 = _interopRequireDefault(_navigationArrowDropRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  display: 'inline-block',
  float: 'left',
  margin: '16px 32px 16px 0'
};

var MenuExampleSecondary = function MenuExampleSecondary() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Paper2.default,
      { style: style },
      _react2.default.createElement(
        _Menu2.default,
        { desktop: true, width: 256 },
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Bold', secondaryText: '\u2318B' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Italic', secondaryText: '\u2318I' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Underline', secondaryText: '\u2318U' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Strikethrough', secondaryText: 'Alt+Shift+5' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Superscript', secondaryText: '\u2318.' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Subscript', secondaryText: '\u2318,' }),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Paragraph styles', rightIcon: _react2.default.createElement(_navigationArrowDropRight2.default, null) }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Align', rightIcon: _react2.default.createElement(_navigationArrowDropRight2.default, null) }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Line spacing', rightIcon: _react2.default.createElement(_navigationArrowDropRight2.default, null) }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Numbered list', rightIcon: _react2.default.createElement(_navigationArrowDropRight2.default, null) }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'List options', rightIcon: _react2.default.createElement(_navigationArrowDropRight2.default, null) }),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Clear formatting', secondaryText: '\u2318/' })
      )
    ),
    _react2.default.createElement(
      _Paper2.default,
      { style: style },
      _react2.default.createElement(
        _Menu2.default,
        { desktop: true, width: 256 },
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Open', secondaryText: 'Cmd + O' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Paste in place', secondaryText: 'Shift + V' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Research', secondaryText: 'Opt + Shift + Cmd + I' })
      )
    ),
    _react2.default.createElement(
      _Paper2.default,
      { style: style },
      _react2.default.createElement(
        _Menu2.default,
        { desktop: true, width: 256 },
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Open', secondaryText: '\u2318O' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Paste in place', secondaryText: '\u21E7\u2318V' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Research', secondaryText: '\u2325\u21E7\u2318I' })
      )
    )
  );
};

exports.default = MenuExampleSecondary;