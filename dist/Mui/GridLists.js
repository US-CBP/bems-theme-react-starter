'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/gridLists/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _ComplexExample = require('./muiExamples/gridLists/ComplexExample');

var _ComplexExample2 = _interopRequireDefault(_ComplexExample);

var _OneLineExample = require('./muiExamples/gridLists/OneLineExample');

var _OneLineExample2 = _interopRequireDefault(_OneLineExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridLists = function GridLists() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Grid List'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Simple example' }),
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Complex example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ComplexExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'One line example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_OneLineExample2.default, null)
      )
    )
  );
};
exports.default = GridLists;