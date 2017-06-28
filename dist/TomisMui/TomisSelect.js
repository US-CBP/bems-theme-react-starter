'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TomisSelect = function (_Select) {
  _inherits(TomisSelect, _Select);

  function TomisSelect(props) {
    _classCallCheck(this, TomisSelect);

    // this.renderOuter = this.renderOuter.bind(this);
    var _this = _possibleConstructorReturn(this, (TomisSelect.__proto__ || Object.getPrototypeOf(TomisSelect)).call(this, props));

    _this.renderOuter = function (options, valueArray, focusedOption) {
      console.log('TomisSelect renderOuter');
      var menu = _this.renderMenu(options, valueArray, focusedOption);
      if (!menu) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { ref: function ref(_ref2) {
            return _this.menuContainer = _ref2;
          }, className: 'Select-menu-outer', style: _this.props.menuContainerStyle },
        _react2.default.createElement(
          'div',
          {
            ref: function ref(_ref) {
              return _this.menu = _ref;
            },
            role: 'listbox',
            className: 'Select-menu',
            id: _this._instancePrefix + '-list',
            style: _this.props.menuStyle,
            onScroll: _this.handleMenuScroll,
            onMouseDown: _this.handleMouseDownOnMenu
          },
          menu
        )
      );
    };

    return _this;
  }

  return TomisSelect;
}(_reactSelect2.default);

exports.default = TomisSelect;