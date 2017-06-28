'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuSimple = function MenuSimple(props) {
  return _react2.default.createElement(
    _Paper2.default,
    null,
    _react2.default.createElement(
      _Menu2.default,
      null,
      props.children
    )
  );
};

exports.default = MenuSimple;