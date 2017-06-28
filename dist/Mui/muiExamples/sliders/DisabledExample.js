'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slider = require('material-ui/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderExampleDisabled = function SliderExampleDisabled() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Slider2.default, { disabled: true }),
    _react2.default.createElement(_Slider2.default, { disabled: true, value: 0.5 }),
    _react2.default.createElement(_Slider2.default, { disabled: true, value: 1 })
  );
};

exports.default = SliderExampleDisabled;