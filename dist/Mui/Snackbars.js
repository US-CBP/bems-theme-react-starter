'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/snackbars/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _ActionExample = require('./muiExamples/snackbars/ActionExample');

var _ActionExample2 = _interopRequireDefault(_ActionExample);

var _ConsecutiveExample = require('./muiExamples/snackbars/ConsecutiveExample');

var _ConsecutiveExample2 = _interopRequireDefault(_ConsecutiveExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Snackbars = function Snackbars() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Snackbar'
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Example action' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ActionExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Consecutive Snackbars' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ConsecutiveExample2.default, null)
      )
    )
  );
};
exports.default = Snackbars;