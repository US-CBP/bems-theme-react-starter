'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LinearProgress = require('material-ui/LinearProgress');

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinearProgressExampleSimple = function LinearProgressExampleSimple() {
  return _react2.default.createElement(_LinearProgress2.default, { mode: 'indeterminate' });
};

exports.default = LinearProgressExampleSimple;