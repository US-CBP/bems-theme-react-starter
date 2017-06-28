'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/selectFields/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _NullableExample = require('./muiExamples/selectFields/NullableExample');

var _NullableExample2 = _interopRequireDefault(_NullableExample);

var _LongExample = require('./muiExamples/selectFields/LongExample');

var _LongExample2 = _interopRequireDefault(_LongExample);

var _LabelExample = require('./muiExamples/selectFields/LabelExample');

var _LabelExample2 = _interopRequireDefault(_LabelExample);

var _FloatingLabelExample = require('./muiExamples/selectFields/FloatingLabelExample');

var _FloatingLabelExample2 = _interopRequireDefault(_FloatingLabelExample);

var _ErrorTextExample = require('./muiExamples/selectFields/ErrorTextExample');

var _ErrorTextExample2 = _interopRequireDefault(_ErrorTextExample);

var _MultipleSelectionExample = require('./muiExamples/selectFields/MultipleSelectionExample');

var _MultipleSelectionExample2 = _interopRequireDefault(_MultipleSelectionExample);

var _SelectionRendererExample = require('./muiExamples/selectFields/SelectionRendererExample');

var _SelectionRendererExample2 = _interopRequireDefault(_SelectionRendererExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectFields = function SelectFields() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Select Field'
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Nullable select' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_NullableExample2.default, null)
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
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Floating label example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_FloatingLabelExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'ErrorText example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_ErrorTextExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Multiple selection example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_MultipleSelectionExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Selection renderer example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_SelectionRendererExample2.default, null)
      )
    )
  );
};
exports.default = SelectFields;