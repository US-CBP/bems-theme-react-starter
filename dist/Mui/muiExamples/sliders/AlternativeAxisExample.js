'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slider = require('material-ui/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    display: 'flex',
    height: 124,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
};

/**
 * The orientation of the slider can be reversed and rotated using the `axis` prop.
 */
var SliderExampleAxis = function SliderExampleAxis() {
  return _react2.default.createElement(
    'div',
    { style: styles.root },
    _react2.default.createElement(_Slider2.default, { style: { height: 100 }, axis: 'y', defaultValue: 0.5 }),
    _react2.default.createElement(_Slider2.default, { style: { width: 200 }, axis: 'x-reverse' }),
    _react2.default.createElement(_Slider2.default, { style: { height: 100 }, axis: 'y-reverse', defaultValue: 1 })
  );
};

exports.default = SliderExampleAxis;