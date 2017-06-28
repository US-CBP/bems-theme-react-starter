'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto'
};

/**
 * This example allows you to set a date range, and to toggle `autoOk`, and `disableYearSelection`.
 */

var DatePickerExampleToggle = function (_React$Component) {
  _inherits(DatePickerExampleToggle, _React$Component);

  function DatePickerExampleToggle(props) {
    _classCallCheck(this, DatePickerExampleToggle);

    var _this = _possibleConstructorReturn(this, (DatePickerExampleToggle.__proto__ || Object.getPrototypeOf(DatePickerExampleToggle)).call(this, props));

    _this.handleChangeMinDate = function (event, date) {
      _this.setState({
        minDate: date
      });
    };

    _this.handleChangeMaxDate = function (event, date) {
      _this.setState({
        maxDate: date
      });
    };

    _this.handleToggle = function (event, toggled) {
      _this.setState(_defineProperty({}, event.target.name, toggled));
    };

    var minDate = new Date();
    var maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);

    _this.state = {
      minDate: minDate,
      maxDate: maxDate,
      autoOk: false,
      disableYearSelection: false
    };
    return _this;
  }

  _createClass(DatePickerExampleToggle, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_DatePicker2.default, {
          floatingLabelText: 'Ranged Date Picker',
          autoOk: this.state.autoOk,
          minDate: this.state.minDate,
          maxDate: this.state.maxDate,
          disableYearSelection: this.state.disableYearSelection
        }),
        _react2.default.createElement(
          'div',
          { style: optionsStyle },
          _react2.default.createElement(_DatePicker2.default, {
            onChange: this.handleChangeMinDate,
            autoOk: this.state.autoOk,
            floatingLabelText: 'Min Date',
            defaultDate: this.state.minDate,
            disableYearSelection: this.state.disableYearSelection
          }),
          _react2.default.createElement(_DatePicker2.default, {
            onChange: this.handleChangeMaxDate,
            autoOk: this.state.autoOk,
            floatingLabelText: 'Max Date',
            defaultDate: this.state.maxDate,
            disableYearSelection: this.state.disableYearSelection
          }),
          _react2.default.createElement(_Toggle2.default, { name: 'autoOk', value: 'autoOk', label: 'Auto Ok', toggled: this.state.autoOk, onToggle: this.handleToggle }),
          _react2.default.createElement(_Toggle2.default, {
            name: 'disableYearSelection',
            value: 'disableYearSelection',
            label: 'Disable Year Selection',
            toggled: this.state.disableYearSelection,
            onToggle: this.handleToggle
          })
        )
      );
    }
  }]);

  return DatePickerExampleToggle;
}(_react2.default.Component);

exports.default = DatePickerExampleToggle;