'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var names = ['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander', 'Carlos Abbott', 'Miriam Wagner', 'Bradley Wilkerson', 'Virginia Andrews', 'Kelly Snyder'];

/**
 * `SelectField` can handle multiple selections. It is enabled with the `multiple` property.
 */

var SelectFieldExampleMultiSelect = function (_Component) {
  _inherits(SelectFieldExampleMultiSelect, _Component);

  function SelectFieldExampleMultiSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectFieldExampleMultiSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectFieldExampleMultiSelect.__proto__ || Object.getPrototypeOf(SelectFieldExampleMultiSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      values: []
    }, _this.handleChange = function (event, index, values) {
      return _this.setState({ values: values });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectFieldExampleMultiSelect, [{
    key: 'menuItems',
    value: function menuItems(values) {
      return names.map(function (name) {
        return _react2.default.createElement(_MenuItem2.default, { key: name, insetChildren: true, checked: values && values.includes(name), value: name, primaryText: name });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var values = this.state.values;

      return _react2.default.createElement(
        _SelectField2.default,
        { multiple: true, hintText: 'Select a name', value: values, onChange: this.handleChange },
        this.menuItems(values)
      );
    }
  }]);

  return SelectFieldExampleMultiSelect;
}(_react.Component);

exports.default = SelectFieldExampleMultiSelect;