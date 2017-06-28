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
  refresh: {
    display: 'inline-block',
    position: 'relative'
  }
};

var ProgressRefreshLoading = function ProgressRefreshLoading(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? 50 : _ref$size,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left;
  return _react2.default.createElement(_RefreshIndicator2.default, { size: size, left: left, top: top, status: 'loading', style: style.refresh });
};

exports.default = ProgressRefreshLoading;