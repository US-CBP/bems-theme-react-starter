'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/appBars/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _ButtonsExample = require('./muiExamples/appBars/ButtonsExample');

var _ButtonsExample2 = _interopRequireDefault(_ButtonsExample);

var _CompositionExample = require('./muiExamples/appBars/CompositionExample');

var _CompositionExample2 = _interopRequireDefault(_CompositionExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppBars = function AppBars() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'App Bar'
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Buttons example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ButtonsExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Composition example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_CompositionExample2.default, null)
      )
    )
  );
};
exports.default = AppBars;