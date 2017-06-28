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
 * By default, the slider is continuous.
 * The `step` property causes the slider to move in discrete increments.
 */
var SliderExampleStep = function SliderExampleStep() {
  return _react2.default.createElement(_Slider2.default, { step: 0.10, value: 0.5 });
};

exports.default = SliderExampleStep;