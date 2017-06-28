'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextFieldExampleControlled = function (_React$Component) {
  _inherits(TextFieldExampleControlled, _React$Component);

  function TextFieldExampleControlled(props) {
    _classCallCheck(this, TextFieldExampleControlled);

    var _this = _possibleConstructorReturn(this, (TextFieldExampleControlled.__proto__ || Object.getPrototypeOf(TextFieldExampleControlled)).call(this, props));

    _this.handleChange = function (event) {
      _this.setState({
        value: event.target.value
      });
    };

    _this.state = {
      value: 'Property Value'
    };
    return _this;
  }

  _createClass(TextFieldExampleControlled, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_TextField2.default, { id: 'text-field-controlled', value: this.state.value, onChange: this.handleChange })
      );
    }
  }]);

  return TextFieldExampleControlled;
}(_react2.default.Component);

exports.default = TextFieldExampleControlled;