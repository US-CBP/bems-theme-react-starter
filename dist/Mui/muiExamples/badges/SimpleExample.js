'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Badge = require('material-ui/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _notifications = require('material-ui/svg-icons/social/notifications');

var _notifications2 = _interopRequireDefault(_notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BadgeExampleSimple = function BadgeExampleSimple() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Badge2.default,
      { badgeContent: 4, primary: true },
      _react2.default.createElement(_notifications2.default, null)
    ),
    _react2.default.createElement(
      _Badge2.default,
      { badgeContent: 10, secondary: true, badgeStyle: { top: 12, right: 12 } },
      _react2.default.createElement(
        _IconButton2.default,
        { tooltip: 'Notifications' },
        _react2.default.createElement(_notifications2.default, null)
      )
    )
  );
};

exports.default = BadgeExampleSimple;