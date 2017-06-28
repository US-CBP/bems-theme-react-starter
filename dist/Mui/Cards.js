'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _ComponentsExample = require('./muiExamples/cards/ComponentsExample');

var _ComponentsExample2 = _interopRequireDefault(_ComponentsExample);

var _ExpandableExample = require('./muiExamples/cards/ExpandableExample');

var _ExpandableExample2 = _interopRequireDefault(_ExpandableExample);

var _ControlledExample = require('./muiExamples/cards/ControlledExample');

var _ControlledExample2 = _interopRequireDefault(_ControlledExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cards = function Cards() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Card'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Card components example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ComponentsExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Expandable example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ExpandableExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Controlled example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ControlledExample2.default, null)
      )
    )
  );
};
exports.default = Cards;