'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('material-ui/List');

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _call = require('material-ui/svg-icons/communication/call');

var _call2 = _interopRequireDefault(_call);

var _chatBubble = require('material-ui/svg-icons/communication/chat-bubble');

var _chatBubble2 = _interopRequireDefault(_chatBubble);

var _colors = require('material-ui/styles/colors');

var _email = require('material-ui/svg-icons/communication/email');

var _email2 = _interopRequireDefault(_email);

var _MobileTearSheet = require('../MobileTearSheet');

var _MobileTearSheet2 = _interopRequireDefault(_MobileTearSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListExamplePhone = function ListExamplePhone() {
  return _react2.default.createElement(
    _MobileTearSheet2.default,
    null,
    _react2.default.createElement(
      _List.List,
      null,
      _react2.default.createElement(_List.ListItem, {
        leftIcon: _react2.default.createElement(_call2.default, { color: _colors.indigo500 }),
        rightIcon: _react2.default.createElement(_chatBubble2.default, null),
        primaryText: '(650) 555 - 1234',
        secondaryText: 'Mobile'
      }),
      _react2.default.createElement(_List.ListItem, { insetChildren: true, rightIcon: _react2.default.createElement(_chatBubble2.default, null), primaryText: '(323) 555 - 6789', secondaryText: 'Work' })
    ),
    _react2.default.createElement(_Divider2.default, { inset: true }),
    _react2.default.createElement(
      _List.List,
      null,
      _react2.default.createElement(_List.ListItem, { leftIcon: _react2.default.createElement(_email2.default, { color: _colors.indigo500 }), primaryText: 'aliconnors@example.com', secondaryText: 'Personal' }),
      _react2.default.createElement(_List.ListItem, { insetChildren: true, primaryText: 'ali_connors@example.com', secondaryText: 'Work' })
    )
  );
};

exports.default = ListExamplePhone;