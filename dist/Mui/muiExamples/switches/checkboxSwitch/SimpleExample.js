'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _favorite = require('material-ui/svg-icons/action/favorite');

var _favorite2 = _interopRequireDefault(_favorite);

var _favoriteBorder = require('material-ui/svg-icons/action/favorite-border');

var _favoriteBorder2 = _interopRequireDefault(_favoriteBorder);

var _visibility = require('material-ui/svg-icons/action/visibility');

var _visibility2 = _interopRequireDefault(_visibility);

var _visibilityOff = require('material-ui/svg-icons/action/visibility-off');

var _visibilityOff2 = _interopRequireDefault(_visibilityOff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};

var CheckboxExampleSimple = function CheckboxExampleSimple() {
  return _react2.default.createElement(
    'div',
    { style: styles.block },
    _react2.default.createElement(_Checkbox2.default, { label: 'Simple', style: styles.checkbox }),
    _react2.default.createElement(_Checkbox2.default, { checkedIcon: _react2.default.createElement(_favorite2.default, null), uncheckedIcon: _react2.default.createElement(_favoriteBorder2.default, null), label: 'Custom icon', style: styles.checkbox }),
    _react2.default.createElement(_Checkbox2.default, { checkedIcon: _react2.default.createElement(_visibility2.default, null), uncheckedIcon: _react2.default.createElement(_visibilityOff2.default, null), label: 'Custom icon of different shapes', style: styles.checkbox }),
    _react2.default.createElement(_Checkbox2.default, { label: 'Disabled unchecked', disabled: true, style: styles.checkbox }),
    _react2.default.createElement(_Checkbox2.default, { label: 'Disabled checked', checked: true, disabled: true, style: styles.checkbox }),
    _react2.default.createElement(_Checkbox2.default, { label: 'Label on the left', labelPosition: 'left', style: styles.checkbox })
  );
};

exports.default = CheckboxExampleSimple;