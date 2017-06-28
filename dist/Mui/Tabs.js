'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/tabs/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _ControlledExample = require('./muiExamples/tabs/ControlledExample');

var _ControlledExample2 = _interopRequireDefault(_ControlledExample);

var _SwipeableExample = require('./muiExamples/tabs/SwipeableExample');

var _SwipeableExample2 = _interopRequireDefault(_SwipeableExample);

var _IconExample = require('./muiExamples/tabs/IconExample');

var _IconExample2 = _interopRequireDefault(_IconExample);

var _IconTextExample = require('./muiExamples/tabs/IconTextExample');

var _IconTextExample2 = _interopRequireDefault(_IconTextExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = function Tabs() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Tabs'
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Controlled example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ControlledExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Swipeable example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_SwipeableExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Icon example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_IconExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Icon and text example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_IconTextExample2.default, null)
      )
    )
  );
};
exports.default = Tabs;