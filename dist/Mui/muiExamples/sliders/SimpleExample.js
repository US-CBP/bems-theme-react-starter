'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slider = require('material-ui/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `defaultValue` property sets the initial position of the slider.
 * The slider appearance changes when not at the starting position.
 */
var SliderExampleSimple = function SliderExampleSimple() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Slider2.default, null),
    _react2.default.createElement(_Slider2.default, { defaultValue: 0.5 }),
    _react2.default.createElement(_Slider2.default, { defaultValue: 1 })
  );
};

exports.default = SliderExampleSimple;