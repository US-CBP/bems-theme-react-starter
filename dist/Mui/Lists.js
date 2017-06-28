'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/lists/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _ChatExample = require('./muiExamples/lists/ChatExample');

var _ChatExample2 = _interopRequireDefault(_ChatExample);

var _ContactExample = require('./muiExamples/lists/ContactExample');

var _ContactExample2 = _interopRequireDefault(_ContactExample);

var _FolderExample = require('./muiExamples/lists/FolderExample');

var _FolderExample2 = _interopRequireDefault(_FolderExample);

var _NestedExample = require('./muiExamples/lists/NestedExample');

var _NestedExample2 = _interopRequireDefault(_NestedExample);

var _SettingsExample = require('./muiExamples/lists/SettingsExample');

var _SettingsExample2 = _interopRequireDefault(_SettingsExample);

var _PhoneExample = require('./muiExamples/lists/PhoneExample');

var _PhoneExample2 = _interopRequireDefault(_PhoneExample);

var _MessagesExample = require('./muiExamples/lists/MessagesExample');

var _MessagesExample2 = _interopRequireDefault(_MessagesExample);

var _SelectableExample = require('./muiExamples/lists/SelectableExample');

var _SelectableExample2 = _interopRequireDefault(_SelectableExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lists = function Lists() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'List'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Simple list' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_SimpleExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Chat list' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ChatExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Contact list' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ContactExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Folder list' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_FolderExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Nested list' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_NestedExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Settings list' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_SettingsExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Phone list' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_PhoneExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Messages list' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_MessagesExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Selectable list' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_SelectableExample2.default, null)
      )
    )
  );
};
exports.default = Lists;