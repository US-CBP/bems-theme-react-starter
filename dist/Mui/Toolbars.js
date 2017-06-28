'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/toolbars/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toolbars = function Toolbars() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Toolbar'
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
    )
  );
};
exports.default = Toolbars;