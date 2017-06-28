'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ToggleButtonConfirm = require('./ToggleButtonConfirm');

var _ToggleButtonConfirm2 = _interopRequireDefault(_ToggleButtonConfirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import warning from 'warning';

var ToggleButtonGroupConfirm = function (_Component) {
  _inherits(ToggleButtonGroupConfirm, _Component);

  function ToggleButtonGroupConfirm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToggleButtonGroupConfirm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToggleButtonGroupConfirm.__proto__ || Object.getPrototypeOf(ToggleButtonGroupConfirm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      numberCheckedRadioButtons: 0,
      selected: ''
    }, _this.handleChange = function (event, newSelection) {
      _this.updateRadioButtons(newSelection);

      // Successful update
      if (_this.state.numberCheckedRadioButtons === 0) {
        if (_this.props.onChange) _this.props.onChange(event, newSelection);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToggleButtonGroupConfirm, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var cnt = 0;
      var selected = '';
      var _props = this.props,
          valueSelected = _props.valueSelected,
          defaultSelected = _props.defaultSelected;

      if (valueSelected !== undefined) {
        selected = valueSelected;
      } else if (defaultSelected !== undefined) {
        selected = defaultSelected;
      }

      _react2.default.Children.forEach(this.props.children, function (option) {
        if (_this2.hasCheckAttribute(option)) cnt++;
      }, this);

      this.setState({
        numberCheckedRadioButtons: cnt,
        selected: selected
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.hasOwnProperty('valueSelected')) {
        this.setState({
          selected: nextProps.valueSelected
        });
      }
    }
  }, {
    key: 'hasCheckAttribute',
    value: function hasCheckAttribute(radioButton) {
      return radioButton.props.hasOwnProperty('checked') && radioButton.props.checked;
    }
  }, {
    key: 'updateRadioButtons',
    value: function updateRadioButtons(newSelection) {
      if (this.state.numberCheckedRadioButtons === 0) {
        this.setState({ selected: newSelection });
      } else {
        // warning(false, `Material-UI: Cannot select a different radio button while another radio button
        // has the 'checked' property set to true.`);
      }
    }
  }, {
    key: 'getSelectedValue',
    value: function getSelectedValue() {
      return this.state.selected;
    }
  }, {
    key: 'setSelectedValue',
    value: function setSelectedValue(newSelectionValue) {
      this.updateRadioButtons(newSelectionValue);
    }
  }, {
    key: 'clearValue',
    value: function clearValue() {
      this.setSelectedValue('');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var prepareStyles = this.context.muiTheme.prepareStyles;


      var options = _react2.default.Children.map(this.props.children, function (option) {
        var _option$props = option.props,
            name = _option$props.name,
            value = _option$props.value,
            label = _option$props.label,
            onCheck = _option$props.onCheck,
            other = _objectWithoutProperties(_option$props, ['name', 'value', 'label', 'onCheck']);

        return _react2.default.createElement(_ToggleButtonConfirm2.default, _extends({}, other, {
          ref: option.props.value,
          name: _this3.props.name,
          key: option.props.value,
          value: option.props.value,
          label: option.props.label,
          labelPosition: _this3.props.labelPosition,
          onCheck: _this3.handleChange,
          checked: option.props.value === _this3.state.selected
        }));
      }, this);

      return _react2.default.createElement(
        'div',
        { style: prepareStyles(Object.assign({}, this.props.style, { display: 'flex' })), className: this.props.className },
        options
      );
    }
  }]);

  return ToggleButtonGroupConfirm;
}(_react.Component);

ToggleButtonGroupConfirm.propTypes = {
  /**
   * Should be used to pass `ToggleButton` components.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * The `value` property of the radio button that will be
   * selected by default. This takes precedence over the `checked` property
   * of the `ToggleButton` elements.
   */
  defaultSelected: _react.PropTypes.any,
  /**
   * Where the label will be placed for all child radio buttons.
   * This takes precedence over the `labelPosition` property of the
   * `ToggleButton` elements.
   */
  labelPosition: _react.PropTypes.oneOf(['left', 'right']),
  /**
   * The name that will be applied to all child radio buttons.
   */
  name: _react.PropTypes.string.isRequired,
  /**
   * Callback function that is fired when a radio button has
   * been checked.
   *
   * @param {object} event `change` event targeting the selected
   * radio button.
   * @param {*} value The `value` of the selected radio button.
   */
  onChange: _react.PropTypes.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * The `value` of the currently selected radio button.
   */
  valueSelected: _react.PropTypes.any
};
ToggleButtonGroupConfirm.defaultProps = {
  style: {}
};
ToggleButtonGroupConfirm.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
exports.default = ToggleButtonGroupConfirm;