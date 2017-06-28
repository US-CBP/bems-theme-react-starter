'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/badges/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _FurtherExample = require('./muiExamples/badges/FurtherExample');

var _FurtherExample2 = _interopRequireDefault(_FurtherExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Badges = function Badges() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Badge'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Simple examples' }),
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Further examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_FurtherExample2.default, null)
      )
    )
  );
};
exports.default = Badges;