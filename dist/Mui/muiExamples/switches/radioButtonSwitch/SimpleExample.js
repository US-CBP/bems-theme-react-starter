'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RadioButton = require('material-ui/RadioButton');

var _favorite = require('material-ui/svg-icons/action/favorite');

var _favorite2 = _interopRequireDefault(_favorite);

var _favoriteBorder = require('material-ui/svg-icons/action/favorite-border');

var _favoriteBorder2 = _interopRequireDefault(_favoriteBorder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16
  }
};

var RadioButtonExampleSimple = function RadioButtonExampleSimple() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _RadioButton.RadioButtonGroup,
      { name: 'shipSpeed', defaultSelected: 'not_light' },
      _react2.default.createElement(_RadioButton.RadioButton, { value: 'light', label: 'Simple', style: styles.radioButton }),
      _react2.default.createElement(_RadioButton.RadioButton, { value: 'not_light', label: 'Selected by default', style: styles.radioButton }),
      _react2.default.createElement(_RadioButton.RadioButton, {
        value: 'ludicrous',
        label: 'Custom icon',
        checkedIcon: _react2.default.createElement(_favorite2.default, { style: { color: '#F44336' } }),
        uncheckedIcon: _react2.default.createElement(_favoriteBorder2.default, null),
        style: styles.radioButton
      })
    ),
    _react2.default.createElement(
      _RadioButton.RadioButtonGroup,
      { name: 'shipName', defaultSelected: 'community' },
      _react2.default.createElement(_RadioButton.RadioButton, { value: 'enterprise', label: 'Disabled unchecked', disabled: true, style: styles.radioButton }),
      _react2.default.createElement(_RadioButton.RadioButton, { value: 'community', label: 'Disabled checked', disabled: true, style: styles.radioButton })
    ),
    _react2.default.createElement(
      _RadioButton.RadioButtonGroup,
      { name: 'notRight', labelPosition: 'left', style: styles.block },
      _react2.default.createElement(_RadioButton.RadioButton, { value: 'reverse', label: 'Label on the left', style: styles.radioButton })
    )
  );
};

exports.default = RadioButtonExampleSimple;