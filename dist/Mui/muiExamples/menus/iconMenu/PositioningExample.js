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

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Simple Icon Menus demonstrating some of the layouts possible using the `anchorOrigin` and
 * `targetOrigin` properties.
 */
var IconMenuExampleSimple = function IconMenuExampleSimple() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
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
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Refresh' }),
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Send feedback' }),
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Settings' }),
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Help' }),
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Sign out' })
    ),
    _react2.default.createElement(
      _IconMenu2.default,
      {
        iconButtonElement: _react2.default.createElement(
          _IconButton2.default,
          null,
          _react2.default.createElement(_moreVert2.default, null)
        ),
        anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
        targetOrigin: { horizontal: 'left', vertical: 'bottom' }
      },
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Refresh' }),
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Send feedback' }),
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Settings' }),
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Help' }),
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Sign out' })
    ),
    _react2.default.createElement(
      _IconMenu2.default,
      {
        iconButtonElement: _react2.default.createElement(
          _IconButton2.default,
          null,
          _react2.default.createElement(_moreVert2.default, null)
        ),
        anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
        targetOrigin: { horizontal: 'right', vertical: 'bottom' }
      },
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Refresh' }),
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Send feedback' }),
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Settings' }),
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Help' }),
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Sign out' })
    ),
    _react2.default.createElement(
      _IconMenu2.default,
      {
        iconButtonElement: _react2.default.createElement(
          _IconButton2.default,
          null,
          _react2.default.createElement(_moreVert2.default, null)
        ),
        anchorOrigin: { horizontal: 'right', vertical: 'top' },
        targetOrigin: { horizontal: 'right', vertical: 'top' }
      },
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Refresh' }),
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Send feedback' }),
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Settings' }),
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Help' }),
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'Sign out' })
    )
  );
};

exports.default = IconMenuExampleSimple;