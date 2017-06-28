'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Stepper = require('material-ui/Stepper');

var _warning = require('material-ui/svg-icons/alert/warning');

var _warning2 = _interopRequireDefault(_warning);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Custom icons can be used to create different visual states.
 */
var CustomIcon = function (_React$Component) {
  _inherits(CustomIcon, _React$Component);

  function CustomIcon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomIcon.__proto__ || Object.getPrototypeOf(CustomIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      stepIndex: 0
    }, _this.handleNext = function () {
      var stepIndex = _this.state.stepIndex;

      if (stepIndex < 2) {
        _this.setState({ stepIndex: stepIndex + 1 });
      }
    }, _this.handlePrev = function () {
      var stepIndex = _this.state.stepIndex;

      if (stepIndex > 0) {
        _this.setState({ stepIndex: stepIndex - 1 });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomIcon, [{
    key: 'getStepContent',
    value: function getStepContent(stepIndex) {
      switch (stepIndex) {
        case 0:
          return 'Select campaign settings...';

        case 1:
          return 'What is an ad group anyways?';

        case 2:
          return 'This is the bit I really care about!';

        default:
          return "You're a long way from home sonny jim!";
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { width: '100%', maxWidth: 700, margin: 'auto' } },
        _react2.default.createElement(
          _Stepper.Stepper,
          { linear: false },
          _react2.default.createElement(
            _Stepper.Step,
            { completed: false },
            _react2.default.createElement(
              _Stepper.StepLabel,
              null,
              'Select campaign settings'
            )
          ),
          _react2.default.createElement(
            _Stepper.Step,
            { completed: false },
            _react2.default.createElement(
              _Stepper.StepLabel,
              { icon: _react2.default.createElement(_warning2.default, { color: _colors.red500 }), style: { color: _colors.red500 } },
              'Create an ad group'
            )
          ),
          _react2.default.createElement(
            _Stepper.Step,
            { completed: false },
            _react2.default.createElement(
              _Stepper.StepLabel,
              null,
              'Create an ad'
            )
          )
        )
      );
    }
  }]);

  return CustomIcon;
}(_react2.default.Component);

exports.default = CustomIcon;