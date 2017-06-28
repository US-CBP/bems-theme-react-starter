'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MobileTearSheet = function MobileTearSheet(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'div',
    { style: { border: '1px solid #cccccc', maxWidth: '360px' } },
    children
  );
};
exports.default = MobileTearSheet;