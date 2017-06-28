'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _HorizontalLinearExample = require('./muiExamples/steppers/HorizontalLinearExample');

var _HorizontalLinearExample2 = _interopRequireDefault(_HorizontalLinearExample);

var _VerticalLinearExample = require('./muiExamples/steppers/VerticalLinearExample');

var _VerticalLinearExample2 = _interopRequireDefault(_VerticalLinearExample);

var _HorizontalNonLinearExample = require('./muiExamples/steppers/HorizontalNonLinearExample');

var _HorizontalNonLinearExample2 = _interopRequireDefault(_HorizontalNonLinearExample);

var _VerticalNonLinearExample = require('./muiExamples/steppers/VerticalNonLinearExample');

var _VerticalNonLinearExample2 = _interopRequireDefault(_VerticalNonLinearExample);

var _GranularControlExample = require('./muiExamples/steppers/GranularControlExample');

var _GranularControlExample2 = _interopRequireDefault(_GranularControlExample);

var _CustomIconExample = require('./muiExamples/steppers/CustomIconExample');

var _CustomIconExample2 = _interopRequireDefault(_CustomIconExample);

var _HorizontalStepTransitionExample = require('./muiExamples/steppers/HorizontalStepTransitionExample');

var _HorizontalStepTransitionExample2 = _interopRequireDefault(_HorizontalStepTransitionExample);

var _CustomStepConnectorExample = require('./muiExamples/steppers/CustomStepConnectorExample');

var _CustomStepConnectorExample2 = _interopRequireDefault(_CustomStepConnectorExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Steppers = function Steppers() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Stepper'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Horizontal linear stepper' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_HorizontalLinearExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Vertical linear stepper' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_VerticalLinearExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Horizontal non-linear stepper' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_HorizontalNonLinearExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Vertical non-linear stepper' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_VerticalNonLinearExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Granular control' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_GranularControlExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Custom icon' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_CustomIconExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Horizontal step transition example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_HorizontalStepTransitionExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Custom step connector' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_CustomStepConnectorExample2.default, null)
      )
    )
  );
};
exports.default = Steppers;