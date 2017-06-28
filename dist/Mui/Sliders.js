'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/sliders/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _DisabledExample = require('./muiExamples/sliders/DisabledExample');

var _DisabledExample2 = _interopRequireDefault(_DisabledExample);

var _SteppedExample = require('./muiExamples/sliders/SteppedExample');

var _SteppedExample2 = _interopRequireDefault(_SteppedExample);

var _ControlledExample = require('./muiExamples/sliders/ControlledExample');

var _ControlledExample2 = _interopRequireDefault(_ControlledExample);

var _AlternativeAxisExample = require('./muiExamples/sliders/AlternativeAxisExample');

var _AlternativeAxisExample2 = _interopRequireDefault(_AlternativeAxisExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sliders = function Sliders() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Slider'
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Disabled examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_DisabledExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Stepped example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_SteppedExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Controlled Examples' }),
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Alternative Axis Examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_AlternativeAxisExample2.default, null)
      )
    )
  );
};
exports.default = Sliders;