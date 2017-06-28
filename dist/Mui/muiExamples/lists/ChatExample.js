'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _List = require('material-ui/List');

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _chatBubble = require('material-ui/svg-icons/communication/chat-bubble');

var _chatBubble2 = _interopRequireDefault(_chatBubble);

var _MobileTearSheet = require('../MobileTearSheet');

var _MobileTearSheet2 = _interopRequireDefault(_MobileTearSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListExampleChat = function ListExampleChat() {
  return _react2.default.createElement(
    _MobileTearSheet2.default,
    null,
    _react2.default.createElement(
      _List.List,
      null,
      _react2.default.createElement(
        _Subheader2.default,
        null,
        'Recent chats'
      ),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Brendan Lim', leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/ok-128.jpg' }), rightIcon: _react2.default.createElement(_chatBubble2.default, null) }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Eric Hoffman', leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/kolage-128.jpg' }), rightIcon: _react2.default.createElement(_chatBubble2.default, null) }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Grace Ng', leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/uxceo-128.jpg' }), rightIcon: _react2.default.createElement(_chatBubble2.default, null) }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Kerem Suer', leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/kerem-128.jpg' }), rightIcon: _react2.default.createElement(_chatBubble2.default, null) }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Raquel Parrado', leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/raquelromanp-128.jpg' }), rightIcon: _react2.default.createElement(_chatBubble2.default, null) })
    ),
    _react2.default.createElement(_Divider2.default, null),
    _react2.default.createElement(
      _List.List,
      null,
      _react2.default.createElement(
        _Subheader2.default,
        null,
        'Previous chats'
      ),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Chelsea Otakan', leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/chexee-128.jpg' }) }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'James Anderson', leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/jsa-128.jpg' }) })
    )
  );
};

exports.default = ListExampleChat;