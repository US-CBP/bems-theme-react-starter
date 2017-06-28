'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _SimpleExample = require('./muiExamples/autoCompletes/SimpleExample');

var _SimpleExample2 = _interopRequireDefault(_SimpleExample);

var _DataSourcesExample = require('./muiExamples/autoCompletes/DataSourcesExample');

var _DataSourcesExample2 = _interopRequireDefault(_DataSourcesExample);

var _FiltersExample = require('./muiExamples/autoCompletes/FiltersExample');

var _FiltersExample2 = _interopRequireDefault(_FiltersExample);

var _ControlledExample = require('./muiExamples/autoCompletes/ControlledExample');

var _ControlledExample2 = _interopRequireDefault(_ControlledExample);

var _MenuPropsExample = require('./muiExamples/autoCompletes/MenuPropsExample');

var _MenuPropsExample2 = _interopRequireDefault(_MenuPropsExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AutoCompletes = function AutoCompletes() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Auto Complete'
    ),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Simple example' }),
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
      _react2.default.createElement(_Card.CardHeader, { title: 'Data sources' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_DataSourcesExample2.default, null)
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _Card.Card,
      null,
      _react2.default.createElement(_Card.CardHeader, { title: 'Filters' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_FiltersExample2.default, null)
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
      _react2.default.createElement(_Card.CardHeader, { title: 'MenuProps example' }),
      _react2.default.createElement(
        _Card.CardText,
        null,
        _react2.default.createElement(_MenuPropsExample2.default, null)
      )
    )
  );
};
exports.default = AutoCompletes;