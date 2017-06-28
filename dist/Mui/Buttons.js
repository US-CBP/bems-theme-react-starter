'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/buttons/raisedButton/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _ComplexExample = require('./muiExamples/buttons/raisedButton/ComplexExample');

var _ComplexExample2 = _interopRequireDefault(_ComplexExample);

var _IconExample = require('./muiExamples/buttons/raisedButton/IconExample');

var _IconExample2 = _interopRequireDefault(_IconExample);

var _SimpleExample3 = require('./muiExamples/buttons/flatButton/SimpleExample');

var _SimpleExample4 = _interopRequireDefault(_SimpleExample3);

var _ComplexExample3 = require('./muiExamples/buttons/flatButton/ComplexExample');

var _ComplexExample4 = _interopRequireDefault(_ComplexExample3);

var _IconExample3 = require('./muiExamples/buttons/flatButton/IconExample');

var _IconExample4 = _interopRequireDefault(_IconExample3);

var _SimpleExample5 = require('./muiExamples/buttons/iconButton/SimpleExample');

var _SimpleExample6 = _interopRequireDefault(_SimpleExample5);

var _FurtherExample = require('./muiExamples/buttons/iconButton/FurtherExample');

var _FurtherExample2 = _interopRequireDefault(_FurtherExample);

var _SizeExample = require('./muiExamples/buttons/iconButton/SizeExample');

var _SizeExample2 = _interopRequireDefault(_SizeExample);

var _TooltipExample = require('./muiExamples/buttons/iconButton/TooltipExample');

var _TooltipExample2 = _interopRequireDefault(_TooltipExample);

var _TouchExample = require('./muiExamples/buttons/iconButton/TouchExample');

var _TouchExample2 = _interopRequireDefault(_TouchExample);

var _SimpleExample7 = require('./muiExamples/buttons/floatingActionButton/SimpleExample');

var _SimpleExample8 = _interopRequireDefault(_SimpleExample7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Buttons = function Buttons() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Raised Button'
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Complex examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ComplexExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Icon examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_IconExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h4',
      null,
      'Flat Button'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Simple examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_SimpleExample4.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Complex examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ComplexExample4.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Icon examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_IconExample4.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h4',
      null,
      'Icon Button'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Simple example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_SimpleExample6.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Further examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_FurtherExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Size examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_SizeExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Tooltip examples' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_TooltipExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Touch example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_TouchExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h4',
      null,
      'Floating Action Button'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Simple example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_SimpleExample8.default, null)
      )
    )
  );
};
exports.default = Buttons;