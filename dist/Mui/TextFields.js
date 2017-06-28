'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/textFields/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _ErrorExample = require('./muiExamples/textFields/ErrorExample');

var _ErrorExample2 = _interopRequireDefault(_ErrorExample);

var _StyledExample = require('./muiExamples/textFields/StyledExample');

var _StyledExample2 = _interopRequireDefault(_StyledExample);

var _DisabledExample = require('./muiExamples/textFields/DisabledExample');

var _DisabledExample2 = _interopRequireDefault(_DisabledExample);

var _ControlledExample = require('./muiExamples/textFields/ControlledExample');

var _ControlledExample2 = _interopRequireDefault(_ControlledExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextFields = function TextFields() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Text Field'
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Error examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ErrorExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Styled examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_StyledExample2.default, null)
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Controlled example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ControlledExample2.default, null)
      )
    )
  );
};
exports.default = TextFields;