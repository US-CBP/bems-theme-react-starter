'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};

var PaperExampleCircle = function PaperExampleCircle() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Paper2.default, { style: style, zDepth: 1, circle: true }),
    _react2.default.createElement(_Paper2.default, { style: style, zDepth: 2, circle: true }),
    _react2.default.createElement(_Paper2.default, { style: style, zDepth: 3, circle: true }),
    _react2.default.createElement(_Paper2.default, { style: style, zDepth: 4, circle: true }),
    _react2.default.createElement(_Paper2.default, { style: style, zDepth: 5, circle: true })
  );
};

exports.default = PaperExampleCircle;