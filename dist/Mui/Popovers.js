'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/popovers/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _AnimationExample = require('./muiExamples/popovers/AnimationExample');

var _AnimationExample2 = _interopRequireDefault(_AnimationExample);

var _AnchorExample = require('./muiExamples/popovers/AnchorExample');

var _AnchorExample2 = _interopRequireDefault(_AnchorExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popovers = function Popovers() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Popover'
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Animation' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_AnimationExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Anchor playground' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_AnchorExample2.default, null)
      )
    )
  );
};
exports.default = Popovers;