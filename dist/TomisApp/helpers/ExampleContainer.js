"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExampleContainer = function ExampleContainer(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    "div",
    { className: "example-container" },
    children
  );
};
exports.default = ExampleContainer;