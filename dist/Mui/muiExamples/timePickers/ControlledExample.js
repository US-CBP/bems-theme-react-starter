'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TimePicker = require('material-ui/TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimePickerExampleComplex = function (_React$Component) {
  _inherits(TimePickerExampleComplex, _React$Component);

  function TimePickerExampleComplex(props) {
    _classCallCheck(this, TimePickerExampleComplex);

    var _this = _possibleConstructorReturn(this, (TimePickerExampleComplex.__proto__ || Object.getPrototypeOf(TimePickerExampleComplex)).call(this, props));

    _this.handleChangeTimePicker24 = function (event, date) {
      _this.setState({ value24: date });
    };

    _this.handleChangeTimePicker12 = function (event, date) {
      _this.setState({ value12: date });
    };

    _this.state = { value24: null, value12: null };
    return _this;
  }

  _createClass(TimePickerExampleComplex, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_TimePicker2.default, { format: 'ampm', hintText: '12hr Format', value: this.state.value12, onChange: this.handleChangeTimePicker12 }),
        _react2.default.createElement(_TimePicker2.default, { format: '24hr', hintText: '24hr Format', value: this.state.value24, onChange: this.handleChangeTimePicker24 })
      );
    }
  }]);

  return TimePickerExampleComplex;
}(_react2.default.Component);

exports.default = TimePickerExampleComplex;