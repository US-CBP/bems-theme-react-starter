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

var _removeRedEye = require('material-ui/svg-icons/image/remove-red-eye');

var _removeRedEye2 = _interopRequireDefault(_removeRedEye);

var _personAdd = require('material-ui/svg-icons/social/person-add');

var _personAdd2 = _interopRequireDefault(_personAdd);

var _link = require('material-ui/svg-icons/content/link');

var _link2 = _interopRequireDefault(_link);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _contentCopy = require('material-ui/svg-icons/content/content-copy');

var _contentCopy2 = _interopRequireDefault(_contentCopy);

var _fileDownload = require('material-ui/svg-icons/file/file-download');

var _fileDownload2 = _interopRequireDefault(_fileDownload);

var _delete = require('material-ui/svg-icons/action/delete');

var _delete2 = _interopRequireDefault(_delete);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0'
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px'
  }
};

var MenuExampleIcons = function MenuExampleIcons() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Paper2.default,
      { style: style.paper },
      _react2.default.createElement(
        _Menu2.default,
        null,
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Preview', leftIcon: _react2.default.createElement(_removeRedEye2.default, null) }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Share', leftIcon: _react2.default.createElement(_personAdd2.default, null) }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Get links', leftIcon: _react2.default.createElement(_link2.default, null) }),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Make a copy', leftIcon: _react2.default.createElement(_contentCopy2.default, null) }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Download', leftIcon: _react2.default.createElement(_fileDownload2.default, null) }),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Remove', leftIcon: _react2.default.createElement(_delete2.default, null) })
      )
    ),
    _react2.default.createElement(
      _Paper2.default,
      { style: style.paper },
      _react2.default.createElement(
        _Menu2.default,
        null,
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Clear Config' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'New Config', rightIcon: _react2.default.createElement(_personAdd2.default, null) }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Project', rightIcon: _react2.default.createElement(
            _FontIcon2.default,
            { className: 'material-icons' },
            'settings'
          ) }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Workspace', rightIcon: _react2.default.createElement(
            _FontIcon2.default,
            { className: 'material-icons', style: { color: '#559' } },
            'settings'
          ) }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Paragraph', rightIcon: _react2.default.createElement(
            'b',
            { style: style.rightIcon },
            '\xB6'
          ) }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Section', rightIcon: _react2.default.createElement(
            'b',
            { style: style.rightIcon },
            '\xA7'
          ) })
      )
    )
  );
};

exports.default = MenuExampleIcons;