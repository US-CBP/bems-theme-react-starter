'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * With a `label` applied to each `MenuItem`, `SelectField` displays
 * a complementary description of the selected item.
 */
var SelectFieldExampleCustomLabel = function (_Component) {
  _inherits(SelectFieldExampleCustomLabel, _Component);

  function SelectFieldExampleCustomLabel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectFieldExampleCustomLabel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectFieldExampleCustomLabel.__proto__ || Object.getPrototypeOf(SelectFieldExampleCustomLabel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: 1
    }, _this.handleChange = function (event, index, value) {
      return _this.setState({ value: value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectFieldExampleCustomLabel, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SelectField2.default,
        { value: this.state.value, onChange: this.handleChange },
        _react2.default.createElement(_MenuItem2.default, { value: 1, label: '5 am - 12 pm', primaryText: 'Morning' }),
        _react2.default.createElement(_MenuItem2.default, { value: 2, label: '12 pm - 5 pm', primaryText: 'Afternoon' }),
        _react2.default.createElement(_MenuItem2.default, { value: 3, label: '5 pm - 9 pm', primaryText: 'Evening' }),
        _react2.default.createElement(_MenuItem2.default, { value: 4, label: '9 pm - 5 am', primaryText: 'Night' })
      );
    }
  }]);

  return SelectFieldExampleCustomLabel;
}(_react.Component);

exports.default = SelectFieldExampleCustomLabel;