'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _fileDownload = require('material-ui/svg-icons/file/file-download');

var _fileDownload2 = _interopRequireDefault(_fileDownload);

var _navigationArrowDropRight = require('material-ui/svg-icons/navigation-arrow-drop-right');

var _navigationArrowDropRight2 = _interopRequireDefault(_navigationArrowDropRight);

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Example of nested menus within an IconMenu.
 */
var IconMenuExampleNested = function IconMenuExampleNested() {
  return _react2.default.createElement(
    _IconMenu2.default,
    {
      iconButtonElement: _react2.default.createElement(
        _IconButton2.default,
        null,
        _react2.default.createElement(_moreVert2.default, null)
      ),
      anchorOrigin: { horizontal: 'left', vertical: 'top' },
      targetOrigin: { horizontal: 'left', vertical: 'top' }
    },
    _react2.default.createElement(_MenuItem2.default, {
      primaryText: 'Copy & Paste',
      rightIcon: _react2.default.createElement(_navigationArrowDropRight2.default, null),
      menuItems: [_react2.default.createElement(_MenuItem2.default, { primaryText: 'Cut' }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'Copy' }), _react2.default.createElement(_Divider2.default, null), _react2.default.createElement(_MenuItem2.default, { primaryText: 'Paste' })]
    }),
    _react2.default.createElement(_MenuItem2.default, {
      primaryText: 'Case Tools',
      rightIcon: _react2.default.createElement(_navigationArrowDropRight2.default, null),
      menuItems: [_react2.default.createElement(_MenuItem2.default, { primaryText: 'UPPERCASE' }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'lowercase' }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'CamelCase' }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'Propercase' })]
    }),
    _react2.default.createElement(_Divider2.default, null),
    _react2.default.createElement(_MenuItem2.default, { primaryText: 'Download', leftIcon: _react2.default.createElement(_fileDownload2.default, null) }),
    _react2.default.createElement(_Divider2.default, null),
    _react2.default.createElement(_MenuItem2.default, { value: 'Del', primaryText: 'Delete' })
  );
};

exports.default = IconMenuExampleNested;