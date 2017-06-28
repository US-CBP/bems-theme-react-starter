'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _FormExample = require('./muiExamples/dividers/FormExample');

var _FormExample2 = _interopRequireDefault(_FormExample);

var _InsetExample = require('./muiExamples/dividers/InsetExample');

var _InsetExample2 = _interopRequireDefault(_InsetExample);

var _MenuExample = require('./muiExamples/dividers/MenuExample');

var _MenuExample2 = _interopRequireDefault(_MenuExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dividers = function Dividers() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Divider'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Form divider' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_FormExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Inset divider' }),
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Menu divider' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_MenuExample2.default, null)
      )
    )
  );
};
exports.default = Dividers;