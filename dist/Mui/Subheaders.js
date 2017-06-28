'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _ListExample = require('./muiExamples/subheaders/ListExample');

var _ListExample2 = _interopRequireDefault(_ListExample);

var _InsetExample = require('./muiExamples/subheaders/InsetExample');

var _InsetExample2 = _interopRequireDefault(_InsetExample);

var _GridListExample = require('./muiExamples/subheaders/GridListExample');

var _GridListExample2 = _interopRequireDefault(_GridListExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Subheaders = function Subheaders() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Subheader'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Simple Usage with List' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ListExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Inset Example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_InsetExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Simple Usage with GridList' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_GridListExample2.default, null)
      )
    )
  );
};
exports.default = Subheaders;