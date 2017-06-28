'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('material-ui/List');

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _MobileTearSheet = require('../MobileTearSheet');

var _MobileTearSheet2 = _interopRequireDefault(_MobileTearSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

var ListExampleSettings = function ListExampleSettings() {
  return _react2.default.createElement(
    'div',
    { style: styles.root },
    _react2.default.createElement(
      _MobileTearSheet2.default,
      null,
      _react2.default.createElement(
        _List.List,
        null,
        _react2.default.createElement(
          _Subheader2.default,
          null,
          'General'
        ),
        _react2.default.createElement(_List.ListItem, { primaryText: 'Profile photo', secondaryText: 'Change your Google+ profile photo' }),
        _react2.default.createElement(_List.ListItem, { primaryText: 'Show your status', secondaryText: 'Your status is visible to everyone you use with' })
      ),
      _react2.default.createElement(_Divider2.default, null),
      _react2.default.createElement(
        _List.List,
        null,
        _react2.default.createElement(
          _Subheader2.default,
          null,
          'Hangout Notifications'
        ),
        _react2.default.createElement(_List.ListItem, { leftCheckbox: _react2.default.createElement(_Checkbox2.default, null), primaryText: 'Notifications', secondaryText: 'Allow notifications' }),
        _react2.default.createElement(_List.ListItem, { leftCheckbox: _react2.default.createElement(_Checkbox2.default, null), primaryText: 'Sounds', secondaryText: 'Hangouts message' }),
        _react2.default.createElement(_List.ListItem, { leftCheckbox: _react2.default.createElement(_Checkbox2.default, null), primaryText: 'Video sounds', secondaryText: 'Hangouts video call' })
      )
    ),
    _react2.default.createElement(
      _MobileTearSheet2.default,
      null,
      _react2.default.createElement(
        _List.List,
        null,
        _react2.default.createElement(_List.ListItem, { primaryText: 'When calls and notifications arrive', secondaryText: 'Always interrupt' })
      ),
      _react2.default.createElement(_Divider2.default, null),
      _react2.default.createElement(
        _List.List,
        null,
        _react2.default.createElement(
          _Subheader2.default,
          null,
          'Priority Interruptions'
        ),
        _react2.default.createElement(_List.ListItem, { primaryText: 'Events and reminders', rightToggle: _react2.default.createElement(_Toggle2.default, null) }),
        _react2.default.createElement(_List.ListItem, { primaryText: 'Calls', rightToggle: _react2.default.createElement(_Toggle2.default, null) }),
        _react2.default.createElement(_List.ListItem, { primaryText: 'Messages', rightToggle: _react2.default.createElement(_Toggle2.default, null) })
      ),
      _react2.default.createElement(_Divider2.default, null),
      _react2.default.createElement(
        _List.List,
        null,
        _react2.default.createElement(
          _Subheader2.default,
          null,
          'Hangout Notifications'
        ),
        _react2.default.createElement(_List.ListItem, { primaryText: 'Notifications', leftCheckbox: _react2.default.createElement(_Checkbox2.default, null) }),
        _react2.default.createElement(_List.ListItem, { primaryText: 'Sounds', leftCheckbox: _react2.default.createElement(_Checkbox2.default, null) }),
        _react2.default.createElement(_List.ListItem, { primaryText: 'Video sounds', leftCheckbox: _react2.default.createElement(_Checkbox2.default, null) })
      )
    )
  );
};

exports.default = ListExampleSettings;