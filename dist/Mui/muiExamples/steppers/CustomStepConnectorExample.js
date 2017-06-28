'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Stepper = require('material-ui/Stepper');

var _arrowForward = require('material-ui/svg-icons/navigation/arrow-forward');

var _arrowForward2 = _interopRequireDefault(_arrowForward);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * It is possible to specify your own step connector by passing an element to the `connector`
 * prop. If you want to remove the connector, pass `null` to the `connector` prop.
 */
var CustomStepConnector = function (_React$Component) {
  _inherits(CustomStepConnector, _React$Component);

  function CustomStepConnector(props) {
    _classCallCheck(this, CustomStepConnector);

    var _this = _possibleConstructorReturn(this, (CustomStepConnector.__proto__ || Object.getPrototypeOf(CustomStepConnector)).call(this, props));

    _this.state = {
      stepIndex: 0
    };


    _this.handleNext = _this.handleNext.bind(_this);
    _this.handlePrev = _this.handlePrev.bind(_this);
    return _this;
  }

  _createClass(CustomStepConnector, [{
    key: 'getStepContent',
    value: function getStepContent(stepIndex) {
      switch (stepIndex) {
        case 0:
          return _react2.default.createElement(
            'p',
            null,
            "For each ad campaign that you create, you can control how much you're willing to " + 'spend on clicks and conversions, which networks and geographical locations you want ' + 'your ads to show on, and more.'
          );

        case 1:
          return _react2.default.createElement(
            'p',
            null,
            'An ad group contains one or more ads which target a shared set of keywords.'
          );

        case 2:
          return _react2.default.createElement(
            'p',
            null,
            'Try out different ad text to see what brings in the most customers, and learn ' + 'how to enhance your ads using features like ad extensions. If you run into any ' + "problems with your ads, find out how to tell if they're running and how to " + 'resolve approval issues.'
          );
      }
    }
  }, {
    key: 'handleNext',
    value: function handleNext() {
      var stepIndex = this.state.stepIndex;


      if (stepIndex < 2) {
        this.setState({ stepIndex: stepIndex + 1 });
      }
    }
  }, {
    key: 'handlePrev',
    value: function handlePrev() {
      var stepIndex = this.state.stepIndex;


      if (stepIndex > 0) {
        this.setState({ stepIndex: stepIndex - 1 });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var stepIndex = this.state.stepIndex;


      return _react2.default.createElement(
        'div',
        { style: { width: '100%', maxWidth: 700, margin: 'auto' } },
        _react2.default.createElement(
          _Stepper.Stepper,
          { activeStep: stepIndex, connector: _react2.default.createElement(_arrowForward2.default, null) },
          _react2.default.createElement(
            _Stepper.Step,
            null,
            _react2.default.createElement(
              _Stepper.StepLabel,
              null,
              'Select campaign settings'
            )
          ),
          _react2.default.createElement(
            _Stepper.Step,
            null,
            _react2.default.createElement(
              _Stepper.StepLabel,
              null,
              'Create an ad group'
            )
          ),
          _react2.default.createElement(
            _Stepper.Step,
            null,
            _react2.default.createElement(
              _Stepper.StepLabel,
              null,
              'Create an ad'
            )
          )
        ),
        this.getStepContent(stepIndex),
        _react2.default.createElement(
          'div',
          { style: { marginTop: 24, marginBottom: 12 } },
          _react2.default.createElement(_FlatButton2.default, { label: 'Back', disabled: stepIndex === 0, onTouchTap: this.handlePrev, style: { marginRight: 12 } }),
          _react2.default.createElement(_RaisedButton2.default, { label: stepIndex === 2 ? 'Finish' : 'Next', primary: true, onTouchTap: this.handleNext })
        )
      );
    }
  }]);

  return CustomStepConnector;
}(_react2.default.Component);

exports.default = CustomStepConnector;