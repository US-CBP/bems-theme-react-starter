'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DropDownMenu = require('material-ui/DropDownMenu');

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropDownMenuLabeledExample = function (_React$Component) {
  _inherits(DropDownMenuLabeledExample, _React$Component);

  function DropDownMenuLabeledExample(props) {
    _classCallCheck(this, DropDownMenuLabeledExample);

    var _this = _possibleConstructorReturn(this, (DropDownMenuLabeledExample.__proto__ || Object.getPrototypeOf(DropDownMenuLabeledExample)).call(this, props));

    _this.handleChange = function (event, index, value) {
      return _this.setState({ value: value });
    };

    _this.state = { value: 2 };
    return _this;
  }

  _createClass(DropDownMenuLabeledExample, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _DropDownMenu2.default,
        { value: this.state.value, onChange: this.handleChange },
        _react2.default.createElement(_MenuItem2.default, { value: 1, label: '5 am - 12 pm', primaryText: 'Morning' }),
        _react2.default.createElement(_MenuItem2.default, { value: 2, label: '12 pm - 5 pm', primaryText: 'Afternoon' }),
        _react2.default.createElement(_MenuItem2.default, { value: 3, label: '5 pm - 9 pm', primaryText: 'Evening' }),
        _react2.default.createElement(_MenuItem2.default, { value: 4, label: '9 pm - 5 am', primaryText: 'Night' })
      );
    }
  }]);

  return DropDownMenuLabeledExample;
}(_react2.default.Component);

exports.default = DropDownMenuLabeledExample;