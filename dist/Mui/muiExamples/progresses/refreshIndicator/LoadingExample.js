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

var RefreshIndicatorExampleLoading = function RefreshIndicatorExampleLoading() {
  return _react2.default.createElement(
    'div',
    { style: style.container },
    _react2.default.createElement(_RefreshIndicator2.default, { size: 40, left: 10, top: 0, status: 'loading', style: style.refresh }),
    _react2.default.createElement(_RefreshIndicator2.default, { size: 50, left: 70, top: 0, loadingColor: '#FF9800', status: 'loading', style: style.refresh })
  );
};

exports.default = RefreshIndicatorExampleLoading;