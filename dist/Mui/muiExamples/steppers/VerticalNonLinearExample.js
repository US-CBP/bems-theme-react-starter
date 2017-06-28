'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Stepper = require('material-ui/Stepper');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A basic vertical non-linear implementation
 */
var VerticalNonLinear = function (_React$Component) {
  _inherits(VerticalNonLinear, _React$Component);

  function VerticalNonLinear() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VerticalNonLinear);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VerticalNonLinear.__proto__ || Object.getPrototypeOf(VerticalNonLinear)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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

  _createClass(VerticalNonLinear, [{
    key: 'renderStepActions',
    value: function renderStepActions(step) {
      return _react2.default.createElement(
        'div',
        { style: { margin: '12px 0' } },
        _react2.default.createElement(_RaisedButton2.default, {
          label: 'Next',
          disableTouchRipple: true,
          disableFocusRipple: true,
          primary: true,
          onTouchTap: this.handleNext,
          style: { marginRight: 12 }
        }),
        step > 0 && _react2.default.createElement(_FlatButton2.default, { label: 'Back', disableTouchRipple: true, disableFocusRipple: true, onTouchTap: this.handlePrev })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var stepIndex = this.state.stepIndex;


      return _react2.default.createElement(
        'div',
        { style: { maxWidth: 380, maxHeight: 400, margin: 'auto' } },
        _react2.default.createElement(
          _Stepper.Stepper,
          { activeStep: stepIndex, linear: false, orientation: 'vertical' },
          _react2.default.createElement(
            _Stepper.Step,
            null,
            _react2.default.createElement(
              _Stepper.StepButton,
              { onTouchTap: function onTouchTap() {
                  return _this2.setState({ stepIndex: 0 });
                } },
              'Select campaign settings'
            ),
            _react2.default.createElement(
              _Stepper.StepContent,
              null,
              _react2.default.createElement(
                'p',
                null,
                'For each ad campaign that you create, you can control how much you\'re willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.'
              ),
              this.renderStepActions(0)
            )
          ),
          _react2.default.createElement(
            _Stepper.Step,
            null,
            _react2.default.createElement(
              _Stepper.StepButton,
              { onTouchTap: function onTouchTap() {
                  return _this2.setState({ stepIndex: 1 });
                } },
              'Create an ad group'
            ),
            _react2.default.createElement(
              _Stepper.StepContent,
              null,
              _react2.default.createElement(
                'p',
                null,
                'An ad group contains one or more ads which target a shared set of keywords.'
              ),
              this.renderStepActions(1)
            )
          ),
          _react2.default.createElement(
            _Stepper.Step,
            null,
            _react2.default.createElement(
              _Stepper.StepButton,
              { onTouchTap: function onTouchTap() {
                  return _this2.setState({ stepIndex: 2 });
                } },
              'Create an ad'
            ),
            _react2.default.createElement(
              _Stepper.StepContent,
              null,
              _react2.default.createElement(
                'p',
                null,
                'Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they\'re running and how to resolve approval issues.'
              ),
              this.renderStepActions(2)
            )
          )
        )
      );
    }
  }]);

  return VerticalNonLinear;
}(_react2.default.Component);

exports.default = VerticalNonLinear;