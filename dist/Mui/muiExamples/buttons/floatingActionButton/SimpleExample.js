'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FloatingActionButton = require('material-ui/FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  marginRight: 20
};

/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
var FloatingActionButtonExampleSimple = function FloatingActionButtonExampleSimple() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _FloatingActionButton2.default,
      { style: style },
      _react2.default.createElement(_add2.default, null)
    ),
    _react2.default.createElement(
      _FloatingActionButton2.default,
      { mini: true, style: style },
      _react2.default.createElement(_add2.default, null)
    ),
    _react2.default.createElement(
      _FloatingActionButton2.default,
      { secondary: true, style: style },
      _react2.default.createElement(_add2.default, null)
    ),
    _react2.default.createElement(
      _FloatingActionButton2.default,
      { mini: true, secondary: true, style: style },
      _react2.default.createElement(_add2.default, null)
    ),
    _react2.default.createElement(
      _FloatingActionButton2.default,
      { disabled: true, style: style },
      _react2.default.createElement(_add2.default, null)
    ),
    _react2.default.createElement(
      _FloatingActionButton2.default,
      { mini: true, disabled: true, style: style },
      _react2.default.createElement(_add2.default, null)
    )
  );
};

exports.default = FloatingActionButtonExampleSimple;