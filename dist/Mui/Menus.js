'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/menus/menu/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _DisabledExample = require('./muiExamples/menus/menu/DisabledExample');

var _DisabledExample2 = _interopRequireDefault(_DisabledExample);

var _IconsExample = require('./muiExamples/menus/menu/IconsExample');

var _IconsExample2 = _interopRequireDefault(_IconsExample);

var _SecondaryTextExample = require('./muiExamples/menus/menu/SecondaryTextExample');

var _SecondaryTextExample2 = _interopRequireDefault(_SecondaryTextExample);

var _NestedExample = require('./muiExamples/menus/menu/NestedExample');

var _NestedExample2 = _interopRequireDefault(_NestedExample);

var _PositioningExample = require('./muiExamples/menus/iconMenu/PositioningExample');

var _PositioningExample2 = _interopRequireDefault(_PositioningExample);

var _ControlledExample = require('./muiExamples/menus/iconMenu/ControlledExample');

var _ControlledExample2 = _interopRequireDefault(_ControlledExample);

var _ScrollableExample = require('./muiExamples/menus/iconMenu/ScrollableExample');

var _ScrollableExample2 = _interopRequireDefault(_ScrollableExample);

var _NestedExample3 = require('./muiExamples/menus/iconMenu/NestedExample');

var _NestedExample4 = _interopRequireDefault(_NestedExample3);

var _SimpleExample3 = require('./muiExamples/menus/dropdownMenu/SimpleExample');

var _SimpleExample4 = _interopRequireDefault(_SimpleExample3);

var _OpenImmediateExample = require('./muiExamples/menus/dropdownMenu/OpenImmediateExample');

var _OpenImmediateExample2 = _interopRequireDefault(_OpenImmediateExample);

var _LongExample = require('./muiExamples/menus/dropdownMenu/LongExample');

var _LongExample2 = _interopRequireDefault(_LongExample);

var _LabelExample = require('./muiExamples/menus/dropdownMenu/LabelExample');

var _LabelExample2 = _interopRequireDefault(_LabelExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menus = function Menus() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Menu'
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Disabled items' }),
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Icons' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_IconsExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Secondary text' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_SecondaryTextExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Nested menus' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_NestedExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h4',
      null,
      'Icon Menu'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Icon Menu positioning' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_PositioningExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Controlled Icon Menus' }),
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Scrollable Icon Menu' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ScrollableExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Nested Icon Menus' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_NestedExample4.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h4',
      null,
      'Drop Down Menu'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Simple example' }),
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Open Immediate example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_OpenImmediateExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Long example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_LongExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Label example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_LabelExample2.default, null)
      )
    )
  );
};
exports.default = Menus;