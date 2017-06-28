'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require('../TomisMui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var setStateDemoDate = function setStateDemoDate(date, state, props) {
  return { demoDate: date };
};

/**
 * Inline Date Pickers are displayed below the input, rather than as a modal dialog.
 */

var DatePickerInlineLandscape = function (_Component) {
  _inherits(DatePickerInlineLandscape, _Component);

  function DatePickerInlineLandscape(props) {
    _classCallCheck(this, DatePickerInlineLandscape);

    var _this = _possibleConstructorReturn(this, (DatePickerInlineLandscape.__proto__ || Object.getPrototypeOf(DatePickerInlineLandscape)).call(this, props));

    _this.state = {
      demoDate: (0, _moment2.default)()
    };

    _this.handleChangeDemoDate = function (event, date) {
      var formattedDate = (0, _moment2.default)(date, 'MM/DD/YYYY');
      console.log('formattedDate=', formattedDate.toString());
      _this.setState(setStateDemoDate.bind(_this, formattedDate));
    };

    return _this;
  }

  _createClass(DatePickerInlineLandscape, [{
    key: 'render',
    value: function render() {
      var handleChangeDemoDate = this.handleChangeDemoDate;
      var demoDate = this.state.demoDate;
      var _props$fullWidth = this.props.fullWidth,
          fullWidth = _props$fullWidth === undefined ? true : _props$fullWidth;

      return _react2.default.createElement(_DatePicker2.default, _extends({
        autoOk: true,
        fullWidth: fullWidth,
        firstDayOfWeek: 0,
        floatingLabelText: 'Date',
        hintText: 'Type or Select Date'
      }, this.props, {
        container: 'inline',
        mode: 'landscape'
      }));
    }
  }]);

  return DatePickerInlineLandscape;
}(_react.Component);

exports.default = DatePickerInlineLandscape;