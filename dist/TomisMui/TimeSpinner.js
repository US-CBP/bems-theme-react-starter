'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextFieldSimple = require('../TomisMui/TextFieldSimple');

var _TextFieldSimple2 = _interopRequireDefault(_TextFieldSimple);

var _IconButton = require('../TomisMui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _info = require('material-ui/svg-icons/action/info');

var _info2 = _interopRequireDefault(_info);

var _arrowDropDown = require('material-ui/svg-icons/navigation/arrow-drop-down');

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _arrowDropUp = require('material-ui/svg-icons/navigation/arrow-drop-up');

var _arrowDropUp2 = _interopRequireDefault(_arrowDropUp);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {};
var propTypes = {};

var defaultPaddingLeft = 30;
var shrinkPaddingLeft = defaultPaddingLeft / 0.75;

var styles = {
  arrowDropUpIconStyle: { position: 'absolute', bottom: '24px', left: 0, cursor: 'pointer', zIndex: 2 },
  arrowDropDownIconStyle: { position: 'absolute', bottom: '12px', left: 0, cursor: 'pointer', zIndex: 2 },
  inputStyle: { paddingLeft: defaultPaddingLeft + 'px' },
  hintStyle: { paddingLeft: defaultPaddingLeft + 'px' },
  floatingLabelStyle: { paddingLeft: defaultPaddingLeft + 'px' },
  floatingLabelShrinkStyle: { paddingLeft: shrinkPaddingLeft + 'px' }
};

var initState = {};

var TimeSpinner = function (_Component) {
  _inherits(TimeSpinner, _Component);

  function TimeSpinner(props) {
    _classCallCheck(this, TimeSpinner);

    var _this = _possibleConstructorReturn(this, (TimeSpinner.__proto__ || Object.getPrototypeOf(TimeSpinner)).call(this, props));

    _this.handleUpdateInput = function (event, date) {
      _this.setState({});
    };

    _this.handleClickInfoIcon = function (event) {
      //TODO: Implement Time Spin
    };

    _this.state = initState;
    _this.keepProps = {};
    return _this;
  }

  _createClass(TimeSpinner, [{
    key: 'render',
    value: function render() {
      this.keepProps = (0, _omit3.default)(this.props, 'onTouchTapInfo');
      var handleClickInfoIcon = this.handleClickInfoIcon,
          keepProps = this.keepProps;
      var _props = this.props,
          _props$fullWidth = _props.fullWidth,
          fullWidth = _props$fullWidth === undefined ? true : _props$fullWidth,
          _props$hintText = _props.hintText,
          hintText = _props$hintText === undefined ? 'Hint Text' : _props$hintText,
          _props$floatingLabelT = _props.floatingLabelText,
          floatingLabelText = _props$floatingLabelT === undefined ? 'Time Spinner Label' : _props$floatingLabelT,
          _props$onTouchTapInfo = _props.onTouchTapInfo,
          onTouchTapInfo = _props$onTouchTapInfo === undefined ? handleClickInfoIcon : _props$onTouchTapInfo;
      var arrowDropDownIconStyle = styles.arrowDropDownIconStyle,
          arrowDropUpIconStyle = styles.arrowDropUpIconStyle,
          inputStyle = styles.inputStyle,
          hintStyle = styles.hintStyle,
          floatingLabelStyle = styles.floatingLabelStyle,
          floatingLabelShrinkStyle = styles.floatingLabelShrinkStyle;

      return _react2.default.createElement(
        'div',
        { style: { position: 'relative', width: fullWidth ? '100%' : 'inherit' } },
        _react2.default.createElement(_arrowDropUp2.default, { style: arrowDropUpIconStyle, onTouchTap: onTouchTapInfo }),
        _react2.default.createElement(_arrowDropDown2.default, { style: arrowDropDownIconStyle, onTouchTap: onTouchTapInfo }),
        _react2.default.createElement(_TextFieldSimple2.default, _extends({
          inputStyle: inputStyle,
          fullWidth: fullWidth,
          hintStyle: hintStyle,
          hintText: hintText,
          floatingLabelStyle: floatingLabelStyle,
          floatingLabelText: floatingLabelText,
          floatingLabelShrinkStyle: floatingLabelShrinkStyle
        }, keepProps))
      );
    }
  }]);

  return TimeSpinner;
}(_react.Component);

TimeSpinner.defaultProps = defaultProps;
TimeSpinner.propTypes = propTypes;
exports.default = TimeSpinner;