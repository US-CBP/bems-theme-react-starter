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

var persons = [{ value: 0, name: 'Oliver Hansen' }, { value: 1, name: 'Van Henry' }, { value: 2, name: 'April Tucker' }, { value: 3, name: 'Ralph Hubbard' }, { value: 4, name: 'Omar Alexander' }, { value: 5, name: 'Carlos Abbott' }, { value: 6, name: 'Miriam Wagner' }, { value: 7, name: 'Bradley Wilkerson' }, { value: 8, name: 'Virginia Andrews' }, { value: 9, name: 'Kelly Snyder' }];

/**
 * The rendering of selected items can be customized by providing a `selectionRenderer`.
 */

var SelectFieldExampleSelectionRenderer = function (_Component) {
  _inherits(SelectFieldExampleSelectionRenderer, _Component);

  function SelectFieldExampleSelectionRenderer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectFieldExampleSelectionRenderer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectFieldExampleSelectionRenderer.__proto__ || Object.getPrototypeOf(SelectFieldExampleSelectionRenderer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      values: []
    }, _this.handleChange = function (event, index, values) {
      return _this.setState({ values: values });
    }, _this.selectionRenderer = function (values) {
      switch (values.length) {
        case 0:
          return '';

        case 1:
          return persons[values[0]].name;

        default:
          return values.length + ' names selected';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectFieldExampleSelectionRenderer, [{
    key: 'menuItems',
    value: function menuItems(persons) {
      var _this2 = this;

      return persons.map(function (person) {
        return _react2.default.createElement(_MenuItem2.default, { key: person.value, insetChildren: true, checked: _this2.state.values.includes(person.value), value: person.value, primaryText: person.name });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SelectField2.default,
        { multiple: true, hintText: 'Select a name', value: this.state.values, onChange: this.handleChange, selectionRenderer: this.selectionRenderer },
        this.menuItems(persons)
      );
    }
  }]);

  return SelectFieldExampleSelectionRenderer;
}(_react.Component);

exports.default = SelectFieldExampleSelectionRenderer;