'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  errorStyle: {
    color: _colors.orange500
  },
  underlineStyle: {
    borderColor: _colors.orange500
  },
  floatingLabelStyle: {
    color: _colors.orange500
  },
  floatingLabelFocusStyle: {
    color: _colors.blue500
  }
};

var TextFieldExampleCustomize = function TextFieldExampleCustomize() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_TextField2.default, { hintText: 'Styled Hint Text', hintStyle: styles.errorStyle }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { hintText: 'Custom error color', errorText: 'This field is required.', errorStyle: styles.errorStyle }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { hintText: 'Custom Underline Color', underlineStyle: styles.underlineStyle }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, { hintText: 'Custom Underline Focus Color', underlineFocusStyle: styles.underlineStyle }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_TextField2.default, {
      floatingLabelText: 'Styled Floating Label Text',
      floatingLabelStyle: styles.floatingLabelStyle,
      floatingLabelFocusStyle: styles.floatingLabelFocusStyle
    })
  );
};

exports.default = TextFieldExampleCustomize;