'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/datePickers/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _InlineExample = require('./muiExamples/datePickers/InlineExample');

var _InlineExample2 = _interopRequireDefault(_InlineExample);

var _RangedExample = require('./muiExamples/datePickers/RangedExample');

var _RangedExample2 = _interopRequireDefault(_RangedExample);

var _ControlledExample = require('./muiExamples/datePickers/ControlledExample');

var _ControlledExample2 = _interopRequireDefault(_ControlledExample);

var _DisabledExample = require('./muiExamples/datePickers/DisabledExample');

var _DisabledExample2 = _interopRequireDefault(_DisabledExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import LocalisedExample from './muiExamples/datePickers/LocalisedExample';

var DatePickers = function DatePickers() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Date Picker'
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Inline examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_InlineExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Ranged example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_RangedExample2.default, null)
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Disabled dates example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_DisabledExample2.default, null)
      )
    )
  );
};
exports.default = DatePickers;