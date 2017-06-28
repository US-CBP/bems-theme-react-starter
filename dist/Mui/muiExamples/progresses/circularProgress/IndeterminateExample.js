'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CircularProgress = require('material-ui/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CircularProgressExampleSimple = function CircularProgressExampleSimple() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_CircularProgress2.default, null),
    _react2.default.createElement(_CircularProgress2.default, { size: 60, thickness: 7 }),
    _react2.default.createElement(_CircularProgress2.default, { size: 80, thickness: 5 })
  );
};

exports.default = CircularProgressExampleSimple;