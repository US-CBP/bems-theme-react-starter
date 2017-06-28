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

var _ExpandTransition = require('material-ui/internal/ExpandTransition');

var _ExpandTransition2 = _interopRequireDefault(_ExpandTransition);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A contrived example using a transition between steps
 */
var HorizontalTransition = function (_React$Component) {
  _inherits(HorizontalTransition, _React$Component);

  function HorizontalTransition() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HorizontalTransition);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HorizontalTransition.__proto__ || Object.getPrototypeOf(HorizontalTransition)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: false,
      finished: false,
      stepIndex: 0
    }, _this.dummyAsync = function (cb) {
      _this.setState({ loading: true }, function () {
        _this.asyncTimer = setTimeout(cb, 500);
      });
    }, _this.handleNext = function () {
      var stepIndex = _this.state.stepIndex;

      if (!_this.state.loading) {
        _this.dummyAsync(function () {
          return _this.setState({
            loading: false,
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2
          });
        });
      }
    }, _this.handlePrev = function () {
      var stepIndex = _this.state.stepIndex;

      if (!_this.state.loading) {
        _this.dummyAsync(function () {
          return _this.setState({
            loading: false,
            stepIndex: stepIndex - 1
          });
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HorizontalTransition, [{
    key: 'getStepContent',
    value: function getStepContent(stepIndex) {
      switch (stepIndex) {
        case 0:
          return _react2.default.createElement(
            'p',
            null,
            'Select campaign settings. Campaign settings can include your budget, network, bidding options and adjustments, location targeting, campaign end date, and other settings that affect an entire campaign.'
          );

        case 1:
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TextField2.default, { style: { marginTop: 0 }, floatingLabelText: 'Ad group name' }),
            _react2.default.createElement(
              'p',
              null,
              'Ad group status is different than the statuses for campaigns, ads, and keywords, though the statuses can affect each other. Ad groups are contained within a campaign, and each campaign can have one or more ad groups. Within each ad group are ads, keywords, and bids.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Something something whatever cool'
            )
          );

        case 2:
          return _react2.default.createElement(
            'p',
            null,
            'Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they\'re running and how to resolve approval issues.'
          );

        default:
          return "You're a long way from home sonny jim!";
      }
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var _this2 = this;

      var _state = this.state,
          finished = _state.finished,
          stepIndex = _state.stepIndex;

      var contentStyle = { margin: '0 16px', overflow: 'hidden' };

      if (finished) {
        return _react2.default.createElement(
          'div',
          { style: contentStyle },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'a',
              {
                href: '#',
                onClick: function onClick(event) {
                  event.preventDefault();
                  _this2.setState({ stepIndex: 0, finished: false });
                }
              },
              'Click here'
            ),
            ' to reset the example.'
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { style: contentStyle },
        _react2.default.createElement(
          'div',
          null,
          this.getStepContent(stepIndex)
        ),
        _react2.default.createElement(
          'div',
          { style: { marginTop: 24, marginBottom: 12 } },
          _react2.default.createElement(_FlatButton2.default, { label: 'Back', disabled: stepIndex === 0, onTouchTap: this.handlePrev, style: { marginRight: 12 } }),
          _react2.default.createElement(_RaisedButton2.default, { label: stepIndex === 2 ? 'Finish' : 'Next', primary: true, onTouchTap: this.handleNext })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          loading = _state2.loading,
          stepIndex = _state2.stepIndex;


      return _react2.default.createElement(
        'div',
        { style: { width: '100%', maxWidth: 700, margin: 'auto' } },
        _react2.default.createElement(
          _Stepper.Stepper,
          { activeStep: stepIndex },
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
        _react2.default.createElement(
          _ExpandTransition2.default,
          { loading: loading, open: true },
          this.renderContent()
        )
      );
    }
  }]);

  return HorizontalTransition;
}(_react2.default.Component);

exports.default = HorizontalTransition;