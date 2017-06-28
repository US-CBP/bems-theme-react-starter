'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconButtonExampleSimple = function IconButtonExampleSimple() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_IconButton2.default, { iconClassName: 'muidocs-icon-custom-github' }),
    _react2.default.createElement(_IconButton2.default, { iconClassName: 'muidocs-icon-custom-github', disabled: true })
  );
};

exports.default = IconButtonExampleSimple;