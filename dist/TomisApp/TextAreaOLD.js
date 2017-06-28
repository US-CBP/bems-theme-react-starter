'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('../TomisMui/TextField/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TextFieldSimple = function TextFieldSimple(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var maxLength = 9999999999999999;
  if (props.charCountMax) {
    maxLength = props.charCountMax;
  }
  return _react2.default.createElement(_TextField2.default, _extends({ hintText: 'Hint Text', floatingLabelText: 'Floating Label Text', multiLine: true, fullWidth: true }, props, { maxLength: maxLength }));
};

exports.default = TextFieldSimple;