'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/timePickers/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _ControlledExample = require('./muiExamples/timePickers/ControlledExample');

var _ControlledExample2 = _interopRequireDefault(_ControlledExample);

var _LocalisedExample = require('./muiExamples/timePickers/LocalisedExample');

var _LocalisedExample2 = _interopRequireDefault(_LocalisedExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimePickers = function TimePickers() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Time Picker'
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Controlled examples' }),
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Localised example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_LocalisedExample2.default, null)
      )
    )
  );
};
exports.default = TimePickers;