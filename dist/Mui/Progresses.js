'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _DeterminateExample = require('./muiExamples/progresses/circularProgress/DeterminateExample');

var _DeterminateExample2 = _interopRequireDefault(_DeterminateExample);

var _IndeterminateExample = require('./muiExamples/progresses/circularProgress/IndeterminateExample');

var _IndeterminateExample2 = _interopRequireDefault(_IndeterminateExample);

var _DeterminateExample3 = require('./muiExamples/progresses/linearProgress/DeterminateExample');

var _DeterminateExample4 = _interopRequireDefault(_DeterminateExample3);

var _IndeterminateExample3 = require('./muiExamples/progresses/linearProgress/IndeterminateExample');

var _IndeterminateExample4 = _interopRequireDefault(_IndeterminateExample3);

var _ReadyExample = require('./muiExamples/progresses/refreshIndicator/ReadyExample');

var _ReadyExample2 = _interopRequireDefault(_ReadyExample);

var _LoadingExample = require('./muiExamples/progresses/refreshIndicator/LoadingExample');

var _LoadingExample2 = _interopRequireDefault(_LoadingExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Progresses = function Progresses() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Circular Progress'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Indeterminate progress' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_DeterminateExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Determinate progress' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_IndeterminateExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h4',
      null,
      'Linear Progress'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Indeterminate progress' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_IndeterminateExample4.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Determinate progress' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_DeterminateExample4.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h4',
      null,
      'Refresh Indicator'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Ready' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ReadyExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Loading' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_LoadingExample2.default, null)
      )
    )
  );
};
exports.default = Progresses;