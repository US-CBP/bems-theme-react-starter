'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  marginLeft: 20
};

var DividerExampleForm = function DividerExampleForm() {
  return _react2.default.createElement(
    _Paper2.default,
    { zDepth: 2 },
    _react2.default.createElement(_TextField2.default, { hintText: 'First name', style: style, underlineShow: false }),
    _react2.default.createElement(_Divider2.default, null),
    _react2.default.createElement(_TextField2.default, { hintText: 'Middle name', style: style, underlineShow: false }),
    _react2.default.createElement(_Divider2.default, null),
    _react2.default.createElement(_TextField2.default, { hintText: 'Last name', style: style, underlineShow: false }),
    _react2.default.createElement(_Divider2.default, null),
    _react2.default.createElement(_TextField2.default, { hintText: 'Email address', style: style, underlineShow: false }),
    _react2.default.createElement(_Divider2.default, null)
  );
};

exports.default = DividerExampleForm;