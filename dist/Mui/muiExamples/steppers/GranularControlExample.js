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

var getStyles = function getStyles() {
  return {
    root: {
      width: '100%',
      maxWidth: 700,
      margin: 'auto'
    },
    content: {
      margin: '0 16px'
    },
    actions: {
      marginTop: 12
    },
    backButton: {
      marginRight: 12
    }
  };
};

/**
 * This is similar to the horizontal non-linear example, except the
 * `<Step>` components are being controlled manually via individual props.
 *
 * An enhancement made possible by this functionality (shown below),
 * is to permanently mark steps as complete once the user has satisfied the
 * application's required conditions (in this case, once it has visited the step).
 *
 */

var GranularControlStepper = function (_React$Component) {
  _inherits(GranularControlStepper, _React$Component);

  function GranularControlStepper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GranularControlStepper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GranularControlStepper.__proto__ || Object.getPrototypeOf(GranularControlStepper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      stepIndex: null,
      visited: []
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

  _createClass(GranularControlStepper, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _state = this.state,
          stepIndex = _state.stepIndex,
          visited = _state.visited;

      this.setState({ visited: visited.concat(stepIndex) });
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      var stepIndex = nextState.stepIndex,
          visited = nextState.visited;

      if (visited.indexOf(stepIndex) === -1) {
        this.setState({ visited: visited.concat(stepIndex) });
      }
    }
  }, {
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
          return 'Click a step to get started.';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state2 = this.state,
          stepIndex = _state2.stepIndex,
          visited = _state2.visited;

      var styles = getStyles();

      return _react2.default.createElement(
        'div',
        { style: styles.root },
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'a',
            {
              href: '#',
              onClick: function onClick(event) {
                event.preventDefault();
                _this2.setState({ stepIndex: null, visited: [] });
              }
            },
            'Click here'
          ),
          ' to reset the example.'
        ),
        _react2.default.createElement(
          _Stepper.Stepper,
          { linear: false },
          _react2.default.createElement(
            _Stepper.Step,
            { completed: visited.indexOf(0) !== -1, active: stepIndex === 0 },
            _react2.default.createElement(
              _Stepper.StepButton,
              { onClick: function onClick() {
                  return _this2.setState({ stepIndex: 0 });
                } },
              'Select campaign settings'
            )
          ),
          _react2.default.createElement(
            _Stepper.Step,
            { completed: visited.indexOf(1) !== -1, active: stepIndex === 1 },
            _react2.default.createElement(
              _Stepper.StepButton,
              { onClick: function onClick() {
                  return _this2.setState({ stepIndex: 1 });
                } },
              'Create an ad group'
            )
          ),
          _react2.default.createElement(
            _Stepper.Step,
            { completed: visited.indexOf(2) !== -1, active: stepIndex === 2 },
            _react2.default.createElement(
              _Stepper.StepButton,
              { onClick: function onClick() {
                  return _this2.setState({ stepIndex: 2 });
                } },
              'Create an ad'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: styles.content },
          _react2.default.createElement(
            'p',
            null,
            this.getStepContent(stepIndex)
          ),
          stepIndex !== null && _react2.default.createElement(
            'div',
            { style: styles.actions },
            _react2.default.createElement(_FlatButton2.default, { label: 'Back', disabled: stepIndex === 0, onTouchTap: this.handlePrev, style: styles.backButton }),
            _react2.default.createElement(_RaisedButton2.default, { label: 'Next', primary: true, onTouchTap: this.handleNext })
          )
        )
      );
    }
  }]);

  return GranularControlStepper;
}(_react2.default.Component);

exports.default = GranularControlStepper;