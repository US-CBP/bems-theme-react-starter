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
  margin: '16px 32px 16px 0'
};

var MenuExampleNested = function MenuExampleNested() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Paper2.default,
      { style: style },
      _react2.default.createElement(
        _Menu2.default,
        { desktop: true, width: 320 },
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Single', insetChildren: true }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: '1.15', insetChildren: true }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Double', insetChildren: true }),
        _react2.default.createElement(_MenuItem2.default, {
          primaryText: 'Custom: 1.2',
          checked: true,
          rightIcon: _react2.default.createElement(_navigationArrowDropRight2.default, null),
          menuItems: [_react2.default.createElement(_MenuItem2.default, {
            primaryText: 'Show',
            rightIcon: _react2.default.createElement(_navigationArrowDropRight2.default, null),
            menuItems: [_react2.default.createElement(_MenuItem2.default, { primaryText: 'Show Level 2' }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'Grid lines', checked: true }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'Page breaks', insetChildren: true }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'Rules', checked: true })]
          }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'Grid lines', checked: true }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'Page breaks', insetChildren: true }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'Rules', checked: true })]
        }),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Add space before paragraph' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Add space after paragraph' }),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Custom spacing...' })
      )
    )
  );
};

exports.default = MenuExampleNested;