'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slider = require('material-ui/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The slider bar can have a set minimum and maximum, and the value can be
 * obtained through the value parameter fired on an onChange event.
 */
var SliderExampleControlled = function (_Component) {
  _inherits(SliderExampleControlled, _Component);

  function SliderExampleControlled() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SliderExampleControlled);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SliderExampleControlled.__proto__ || Object.getPrototypeOf(SliderExampleControlled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      firstSlider: 0.5,
      secondSlider: 50
    }, _this.handleFirstSlider = function (event, value) {
      _this.setState({ firstSlider: value });
    }, _this.handleSecondSlider = function (event, value) {
      _this.setState({ secondSlider: value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SliderExampleControlled, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Slider2.default, { defaultValue: 0.5, value: this.state.firstSlider, onChange: this.handleFirstSlider }),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'span',
            null,
            'The value of this slider is: '
          ),
          _react2.default.createElement(
            'span',
            null,
            this.state.firstSlider
          ),
          _react2.default.createElement(
            'span',
            null,
            ' from a range of 0 to 1 inclusive'
          )
        ),
        _react2.default.createElement(_Slider2.default, { min: 0, max: 100, step: 1, defaultValue: 50, value: this.state.secondSlider, onChange: this.handleSecondSlider }),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'span',
            null,
            'The value of this slider is: '
          ),
          _react2.default.createElement(
            'span',
            null,
            this.state.secondSlider
          ),
          _react2.default.createElement(
            'span',
            null,
            ' from a range of 0 to 100 inclusive'
          )
        )
      );
    }
  }]);

  return SliderExampleControlled;
}(_react.Component);

exports.default = SliderExampleControlled;