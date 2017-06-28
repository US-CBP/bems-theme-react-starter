'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _CustomExample = require('./muiExamples/icons/fontIcon/CustomExample');

var _CustomExample2 = _interopRequireDefault(_CustomExample);

var _PublicExample = require('./muiExamples/icons/fontIcon/PublicExample');

var _PublicExample2 = _interopRequireDefault(_PublicExample);

var _CustomExample3 = require('./muiExamples/icons/svgIcon/CustomExample');

var _CustomExample4 = _interopRequireDefault(_CustomExample3);

var _MaterialExample = require('./muiExamples/icons/svgIcon/MaterialExample');

var _MaterialExample2 = _interopRequireDefault(_MaterialExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icons = function Icons() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'SVG Icon'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Custom examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_CustomExample4.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Material examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_MaterialExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h4',
      null,
      'Font Icon'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Custom example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_CustomExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Public example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_PublicExample2.default, null)
      )
    )
  );
};
exports.default = Icons;