'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('material-ui/List');

var _inbox = require('material-ui/svg-icons/content/inbox');

var _inbox2 = _interopRequireDefault(_inbox);

var _grade = require('material-ui/svg-icons/action/grade');

var _grade2 = _interopRequireDefault(_grade);

var _send = require('material-ui/svg-icons/content/send');

var _send2 = _interopRequireDefault(_send);

var _drafts = require('material-ui/svg-icons/content/drafts');

var _drafts2 = _interopRequireDefault(_drafts);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _info = require('material-ui/svg-icons/action/info');

var _info2 = _interopRequireDefault(_info);

var _MobileTearSheet = require('../MobileTearSheet');

var _MobileTearSheet2 = _interopRequireDefault(_MobileTearSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListExampleSimple = function ListExampleSimple() {
  return _react2.default.createElement(
    _MobileTearSheet2.default,
    null,
    _react2.default.createElement(
      _List.List,
      null,
      _react2.default.createElement(_List.ListItem, { primaryText: 'Inbox', leftIcon: _react2.default.createElement(_inbox2.default, null) }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Starred', leftIcon: _react2.default.createElement(_grade2.default, null) }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Sent mail', leftIcon: _react2.default.createElement(_send2.default, null) }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Drafts', leftIcon: _react2.default.createElement(_drafts2.default, null) }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Inbox', leftIcon: _react2.default.createElement(_inbox2.default, null) })
    ),
    _react2.default.createElement(_Divider2.default, null),
    _react2.default.createElement(
      _List.List,
      null,
      _react2.default.createElement(_List.ListItem, { primaryText: 'All mail', rightIcon: _react2.default.createElement(_info2.default, null) }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Trash', rightIcon: _react2.default.createElement(_info2.default, null) }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Spam', rightIcon: _react2.default.createElement(_info2.default, null) }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Follow up', rightIcon: _react2.default.createElement(_info2.default, null) })
    )
  );
};

exports.default = ListExampleSimple;