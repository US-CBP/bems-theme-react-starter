'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ToggleButtons = require('./ToggleButtons');

var _ToggleButtons2 = _interopRequireDefault(_ToggleButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var setStateValue = function setStateValue(curValue, state, props) {
  return { curValue: curValue };
};

var defaultProps = {
  options: [{ label: 'Btn 1 Value 1', value: 'V1' }, { label: 'Btn2', value: 'V2' }],
  defaultSelected: -1
};

var propTypes = {
  options: _react.PropTypes.array.isRequired,
  labelText: _react.PropTypes.string,
  valueSelected: _react.PropTypes.string.isRequired
};

var ToggleButtonsTwo = function (_Component) {
  _inherits(ToggleButtonsTwo, _Component);

  function ToggleButtonsTwo(props) {
    _classCallCheck(this, ToggleButtonsTwo);

    var _this = _possibleConstructorReturn(this, (ToggleButtonsTwo.__proto__ || Object.getPrototypeOf(ToggleButtonsTwo)).call(this, props));

    _this.handleChangeValue = _this.handleChangeValue.bind(_this);
    _this.state = {
      curValue: ''
    };
    return _this;
  }

  // componentDidMount() {
  //   const {valueSelected} = this.props;
  //   this.setState(setStateValue.bind(this, valueSelected));
  // }

  // componentWillReceiveProps(nextProps) {
  //   const {valueSelected} = nextProps.props;
  //   this.setState(setStateValue.bind(this, valueSelected));
  // }

  _createClass(ToggleButtonsTwo, [{
    key: 'handleChangeValue',
    value: function handleChangeValue(event, curValue) {
      event.stopPropagation();
      event.preventDefault();
      this.setState(setStateValue.bind(this, curValue));
    }
  }, {
    key: 'render',
    value: function render() {
      var curValue = this.state.curValue;
      var _props = this.props,
          options = _props.options,
          _props$labelText = _props.labelText,
          labelText = _props$labelText === undefined ? 'Default Label' : _props$labelText,
          valueSelected = _props.valueSelected;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          { className: 'labeled-item' },
          labelText
        ),
        _react2.default.createElement(
          ToggleButtonGroup,
          _extends({ name: 'genericName', valueSelected: curValue }, this.props),
          options.map(function (option, idx) {
            var label = option.label,
                value = option.value;

            return _react2.default.createElement(ToggleButton, { key: 'TB' + idx, label: label, value: value });
          })
        )
      );
    }
  }]);

  return ToggleButtonsTwo;
}(_react.Component);

ToggleButtonsTwo.defaultProps = defaultProps;
ToggleButtonsTwo.propTypes = propTypes;

exports.default = ToggleButtonsTwo;