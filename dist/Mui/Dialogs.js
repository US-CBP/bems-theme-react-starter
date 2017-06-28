'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/dialogs/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _ModalExample = require('./muiExamples/dialogs/ModalExample');

var _ModalExample2 = _interopRequireDefault(_ModalExample);

var _StyledExample = require('./muiExamples/dialogs/StyledExample');

var _StyledExample2 = _interopRequireDefault(_StyledExample);

var _NestedExample = require('./muiExamples/dialogs/NestedExample');

var _NestedExample2 = _interopRequireDefault(_NestedExample);

var _ScrollableExample = require('./muiExamples/dialogs/ScrollableExample');

var _ScrollableExample2 = _interopRequireDefault(_ScrollableExample);

var _AlertExample = require('./muiExamples/dialogs/AlertExample');

var _AlertExample2 = _interopRequireDefault(_AlertExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dialogs = function Dialogs() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Dialog'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Simple dialog' }),
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Modal dialog' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ModalExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Styled dialog' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_StyledExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Nested dialog' }),
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Scrollable dialog' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ScrollableExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Alert dialog' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_AlertExample2.default, null)
      )
    )
  );
};
exports.default = Dialogs;