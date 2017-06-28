'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transitions = require('material-ui/styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _EnhancedSwitch = require('./EnhancedSwitch');

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

var _radioButtonUnchecked = require('material-ui/svg-icons/toggle/radio-button-unchecked');

var _radioButtonUnchecked2 = _interopRequireDefault(_radioButtonUnchecked);

var _radioButtonChecked = require('material-ui/svg-icons/toggle/radio-button-checked');

var _radioButtonChecked2 = _interopRequireDefault(_radioButtonChecked);

var _RaisedButton = require('../../TomisMui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import EnhancedSwitch from 'material-ui/internal/EnhancedSwitch';


function getStyles(props, context) {
  var toggleButton = context.muiTheme.toggleButton;


  return {
    icon: {
      height: toggleButton.size,
      width: 'auto',
      marginRight: 0
    },
    target: {
      transition: _transitions2.default.easeOut(),
      position: 'static',
      opacity: 1,
      transform: 'scale(1)'
    },
    fill: {
      position: 'static',
      opacity: 1,
      transform: 'scale(0)',
      transformOrigin: '50% 50%',
      transition: _transitions2.default.easeOut()
    },
    targetWhenChecked: {
      opacity: 0,
      transform: 'scale(0)'
    },
    fillWhenChecked: {
      opacity: 1,
      transform: 'scale(1)'
    },
    targetWhenDisabled: {
      // fill: radioButton.disabledColor
    },
    fillWhenDisabled: {
      // fill: radioButton.disabledColor
    },
    label: {
      // color: props.disabled ? radioButton.labelDisabledColor : radioButton.labelColor
    },
    ripple: {
      // color: props.checked ? toggleButton.checkedColor : radioButton.borderColor
    },
    toggleButton: toggleButton
  };
}

var ToggleButtonConfirm = function (_Component) {
  _inherits(ToggleButtonConfirm, _Component);

  function ToggleButtonConfirm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToggleButtonConfirm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToggleButtonConfirm.__proto__ || Object.getPrototypeOf(ToggleButtonConfirm)).call.apply(_ref, [this].concat(args))), _this), _this.handleSwitch = function (event) {
      if (_this.props.onCheck) {
        _this.props.onCheck(event, _this.props.value);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Only called when selected, not when unselected.


  _createClass(ToggleButtonConfirm, [{
    key: 'isChecked',
    value: function isChecked() {
      return this.refs.enhancedSwitch.isSwitched();
    }

    // Use RadioButtonGroup.setSelectedValue(newSelectionValue) to set a
    // RadioButton's checked value.

  }, {
    key: 'setChecked',
    value: function setChecked(newCheckedValue) {
      this.refs.enhancedSwitch.setSwitched(newCheckedValue);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.enhancedSwitch.getValue();
    }
  }, {
    key: 'render',
    value: function render() {
      var isChecked = this.isChecked;

      var _props = this.props,
          checkedIcon = _props.checkedIcon,
          checked = _props.checked,
          iconStyle = _props.iconStyle,
          labelStyle = _props.labelStyle,
          labelPosition = _props.labelPosition,
          onCheck = _props.onCheck,
          uncheckedIcon = _props.uncheckedIcon,
          disabled = _props.disabled,
          label = _props.label,
          other = _objectWithoutProperties(_props, ['checkedIcon', 'checked', 'iconStyle', 'labelStyle', 'labelPosition', 'onCheck', 'uncheckedIcon', 'disabled', 'label']);

      var styles = getStyles(this.props, this.context);

      var buttonStyles = this.props.buttonStyles ? this.props.buttonStyles : {};

      var uncheckedStyles = Object.assign(styles.target, checked && styles.targetWhenChecked, iconStyle, disabled && styles.targetWhenDisabled);

      var checkedStyles = Object.assign(styles.fill, checked && styles.fillWhenChecked, iconStyle, disabled && styles.fillWhenDisabled);

      // const uncheckedElement = React.isValidElement(uncheckedIcon)
      //     ? React.cloneElement(uncheckedIcon, {
      //           style: Object.assign(uncheckedStyles, uncheckedIcon.props.style)
      //       })
      //     : <RadioButtonOff style={uncheckedStyles} />;

      // const checkedElement = React.isValidElement(checkedIcon)
      //     ? React.cloneElement(checkedIcon, {
      //           style: Object.assign(checkedStyles, checkedIcon.props.style)
      //       })
      //     : <RadioButtonOn style={checkedStyles} />;
      var _styles$toggleButton = styles.toggleButton,
          uncheckedBackgroundColor = _styles$toggleButton.uncheckedBackgroundColor,
          uncheckedLabelColor = _styles$toggleButton.uncheckedLabelColor,
          checkedBackgroundColor = _styles$toggleButton.checkedBackgroundColor,
          checkedLabelColor = _styles$toggleButton.checkedLabelColor;

      var uncheckedElement = _react2.default.createElement(_RaisedButton2.default, {
        label: label,
        buttonStyle: buttonStyles,
        backgroundColor: uncheckedBackgroundColor,
        labelColor: uncheckedLabelColor,
        disabled: disabled,
        style: uncheckedStyles
      });
      var checkedElement = _react2.default.createElement(_RaisedButton2.default, {
        label: label,
        buttonStyle: buttonStyles,
        backgroundColor: checkedBackgroundColor,
        labelColor: uncheckedLabelColor,
        disabled: disabled,
        style: checkedStyles
      });

      // const mergedIconStyle = Object.assign(styles.icon, iconStyle, { width: '72px' });
      var mergedIconStyle = Object.assign(styles.icon, iconStyle);
      var mergedLabelStyle = Object.assign(styles.label, labelStyle);

      return _react2.default.createElement(_EnhancedSwitch2.default, _extends({}, other, {
        ref: 'enhancedSwitch',
        inputType: 'radio',
        checked: checked,
        switched: checked,
        disabled: disabled,
        rippleColor: styles.ripple.color,
        iconStyle: mergedIconStyle,
        labelStyle: mergedLabelStyle,
        labelPosition: labelPosition,
        onSwitch: this.handleSwitch,
        switchElement: _react2.default.createElement(
          'div',
          null,
          !checked && uncheckedElement,
          checked && checkedElement
        ),
        style: { width: 'auto' }
      }));
    }
  }]);

  return ToggleButtonConfirm;
}(_react.Component);

ToggleButtonConfirm.propTypes = {
  /**
   * @ignore
   * checked if true
   * Used internally by `RadioButtonGroup`.
   */
  checked: _react.PropTypes.bool,
  /**
   * The icon element to show when the radio button is checked.
   */
  checkedIcon: _react.PropTypes.element,
  /**
   * If true, the radio button is disabled.
   */
  disabled: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the icon element.
   */
  iconStyle: _react.PropTypes.object,
  /**
   * Override the inline-styles of the input element.
   */
  inputStyle: _react.PropTypes.object,
  /**
   * @ignore
   * Used internally by `RadioButtonGroup`. Use the `labelPosition` property of `RadioButtonGroup` instead.
   * Where the label will be placed next to the radio button.
   */
  labelPosition: _react.PropTypes.oneOf(['left', 'right']),
  /**
   * Override the inline-styles of the label element.
   */
  labelStyle: _react.PropTypes.object,
  /**
   * @ignore
   * Callback function fired when the radio button is checked. Note that this
   * function will not be called if the radio button is part of a
   * radio button group: in this case, use the `onChange` property of
   * `RadioButtonGroup`.
   *
   * @param {object} event `change` event targeting the element.
   * @param {string} value The element's `value`.
   */
  onCheck: _react.PropTypes.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * The icon element to show when the radio button is unchecked.
   */
  uncheckedIcon: _react.PropTypes.element,
  /**
   * The value of the radio button.
   */
  value: _react.PropTypes.any
};
ToggleButtonConfirm.defaultProps = {
  checked: false,
  disabled: false,
  labelPosition: 'right'
};
ToggleButtonConfirm.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
exports.default = ToggleButtonConfirm;