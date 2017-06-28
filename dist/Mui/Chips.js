'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/chips/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _ArrayExample = require('./muiExamples/chips/ArrayExample');

var _ArrayExample2 = _interopRequireDefault(_ArrayExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chips = function Chips() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Chip'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Example Chips' }),
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Example array' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ArrayExample2.default, null)
      )
    )
  );
};
exports.default = Chips;