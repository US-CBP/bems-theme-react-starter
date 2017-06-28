'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RefreshIndicator = require('material-ui/RefreshIndicator');

var _RefreshIndicator2 = _interopRequireDefault(_RefreshIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  container: {
    position: 'relative'
  },
  refresh: {
    display: 'inline-block',
    position: 'relative'
  }
};

var RefreshIndicatorExampleSimple = function RefreshIndicatorExampleSimple() {
  return _react2.default.createElement(
    'div',
    { style: style.container },
    _react2.default.createElement(_RefreshIndicator2.default, { percentage: 30, size: 40, left: 10, top: 0, status: 'ready', style: style.refresh }),
    _react2.default.createElement(_RefreshIndicator2.default, { percentage: 60, size: 50, left: 65, top: 0, status: 'ready', style: style.refresh }),
    _react2.default.createElement(_RefreshIndicator2.default, { percentage: 80, size: 60, left: 120, top: 0, color: 'red', status: 'ready', style: style.refresh }),
    _react2.default.createElement(_RefreshIndicator2.default, {
      percentage: 100,
      size: 70,
      left: 175,
      top: 0,
      color: 'red' // Overridden by percentage={100}
      , status: 'ready',
      style: style.refresh
    })
  );
};

exports.default = RefreshIndicatorExampleSimple;