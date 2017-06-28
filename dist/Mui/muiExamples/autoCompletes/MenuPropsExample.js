'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AutoComplete = require('material-ui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'White'];

var menuProps = {
  desktop: true,
  disableAutoFocus: true
};

/**
 * Provide props to be passed into the Menu component.
 */

var AutoCompleteExampleMenuProps = function (_Component) {
  _inherits(AutoCompleteExampleMenuProps, _Component);

  function AutoCompleteExampleMenuProps() {
    _classCallCheck(this, AutoCompleteExampleMenuProps);

    return _possibleConstructorReturn(this, (AutoCompleteExampleMenuProps.__proto__ || Object.getPrototypeOf(AutoCompleteExampleMenuProps)).apply(this, arguments));
  }

  _createClass(AutoCompleteExampleMenuProps, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AutoComplete2.default, { hintText: 'Type anything', dataSource: colors, menuProps: menuProps })
      );
    }
  }]);

  return AutoCompleteExampleMenuProps;
}(_react.Component);

exports.default = AutoCompleteExampleMenuProps;