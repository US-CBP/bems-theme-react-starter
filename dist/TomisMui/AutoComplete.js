'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AutoCompleteMui = require('../TomisMui/AutoCompleteMui');

var _AutoCompleteMui2 = _interopRequireDefault(_AutoCompleteMui);

var _IconButton = require('../TomisMui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _arrowDropDown = require('material-ui/svg-icons/navigation/arrow-drop-down');

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {};
var propTypes = {};

var initState = {
  dataSource: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6']
};

var AutoComplete = function (_Component) {
  _inherits(AutoComplete, _Component);

  function AutoComplete(props) {
    _classCallCheck(this, AutoComplete);

    var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call(this, props));

    _this.handleUpdateInput = function (event, date) {
      _this.setState({});
    };

    _this.state = initState;
    return _this;
  }

  _createClass(AutoComplete, [{
    key: 'render',
    value: function render() {
      var handleUpdateInput = this.handleUpdateInput;
      var _props = this.props,
          _props$fullWidth = _props.fullWidth,
          fullWidth = _props$fullWidth === undefined ? true : _props$fullWidth,
          _props$hintText = _props.hintText,
          hintText = _props$hintText === undefined ? 'Select Value' : _props$hintText,
          _props$floatingLabelT = _props.floatingLabelText,
          floatingLabelText = _props$floatingLabelT === undefined ? 'LOV Value' : _props$floatingLabelT;
      var dataSource = this.state.dataSource;

      return _react2.default.createElement(
        'div',
        { style: { position: 'relative', width: fullWidth ? '100%' : 'inherit' } },
        _react2.default.createElement(_AutoCompleteMui2.default, _extends({
          fullWidth: fullWidth,
          hintText: hintText,
          dataSource: dataSource,
          onUpdateInput: handleUpdateInput,
          floatingLabelText: floatingLabelText
        }, this.props)),
        _react2.default.createElement(
          _IconButton2.default,
          { className: 'inline-icon', style: { position: 'absolute', right: 0, bottom: 0 } },
          _react2.default.createElement(_arrowDropDown2.default, null)
        )
      );
    }
  }]);

  return AutoComplete;
}(_react.Component);

AutoComplete.defaultProps = defaultProps;
AutoComplete.propTypes = propTypes;
exports.default = AutoComplete;