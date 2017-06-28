'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/papers/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _NonRoundedExample = require('./muiExamples/papers/NonRoundedExample');

var _NonRoundedExample2 = _interopRequireDefault(_NonRoundedExample);

var _CircularExample = require('./muiExamples/papers/CircularExample');

var _CircularExample2 = _interopRequireDefault(_CircularExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Papers = function Papers() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Paper'
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Non-rounded cornders' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_NonRoundedExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Circular Paper' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_CircularExample2.default, null)
      )
    )
  );
};
exports.default = Papers;