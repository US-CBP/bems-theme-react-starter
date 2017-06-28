'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _DockedExample = require('./muiExamples/drawers/DockedExample');

var _DockedExample2 = _interopRequireDefault(_DockedExample);

var _UndockedExample = require('./muiExamples/drawers/UndockedExample');

var _UndockedExample2 = _interopRequireDefault(_UndockedExample);

var _OpenSecondaryExample = require('./muiExamples/drawers/OpenSecondaryExample');

var _OpenSecondaryExample2 = _interopRequireDefault(_OpenSecondaryExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Drawers = function Drawers() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Drawer'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Docked example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_DockedExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Undocked example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_UndockedExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Open secondary example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_OpenSecondaryExample2.default, null)
      )
    )
  );
};
exports.default = Drawers;