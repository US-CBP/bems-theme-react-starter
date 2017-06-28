'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/switches/checkboxSwitch/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _SimpleExample3 = require('./muiExamples/switches/radioButtonSwitch/SimpleExample');

var _SimpleExample4 = _interopRequireDefault(_SimpleExample3);

var _SimpleExample5 = require('./muiExamples/switches/toggleSwitch/SimpleExample');

var _SimpleExample6 = _interopRequireDefault(_SimpleExample5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Switches = function Switches() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Checkbox'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Checkbox Examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_SimpleExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h4',
      null,
      'Radio Button'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Radio Button Examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_SimpleExample4.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h4',
      null,
      'Toggle'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Toggle Examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_SimpleExample6.default, null)
      )
    )
  );
};
exports.default = Switches;