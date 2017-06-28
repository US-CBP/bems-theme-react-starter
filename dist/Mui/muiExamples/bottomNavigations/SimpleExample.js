'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _BottomNavigation = require('material-ui/BottomNavigation');

var _locationOn = require('material-ui/svg-icons/communication/location-on');

var _locationOn2 = _interopRequireDefault(_locationOn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var recentsIcon = _react2.default.createElement(
  _FontIcon2.default,
  { className: 'material-icons' },
  'restore'
);
var favoritesIcon = _react2.default.createElement(
  _FontIcon2.default,
  { className: 'material-icons' },
  'favorite'
);
var nearbyIcon = _react2.default.createElement(_locationOn2.default, null);

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */

var BottomNavigationExampleSimple = function (_Component) {
  _inherits(BottomNavigationExampleSimple, _Component);

  function BottomNavigationExampleSimple() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BottomNavigationExampleSimple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BottomNavigationExampleSimple.__proto__ || Object.getPrototypeOf(BottomNavigationExampleSimple)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedIndex: 0
    }, _this.select = function (index) {
      return _this.setState({ selectedIndex: index });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BottomNavigationExampleSimple, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _BottomNavigation.BottomNavigation,
        { selectedIndex: this.state.selectedIndex },
        _react2.default.createElement(_BottomNavigation.BottomNavigationItem, { label: 'Recents', icon: recentsIcon, onTouchTap: function onTouchTap() {
            return _this2.select(0);
          } }),
        _react2.default.createElement(_BottomNavigation.BottomNavigationItem, { label: 'Favorites', icon: favoritesIcon, onTouchTap: function onTouchTap() {
            return _this2.select(1);
          } }),
        _react2.default.createElement(_BottomNavigation.BottomNavigationItem, { label: 'Nearby', icon: nearbyIcon, onTouchTap: function onTouchTap() {
            return _this2.select(2);
          } })
      );
    }
  }]);

  return BottomNavigationExampleSimple;
}(_react.Component);

exports.default = BottomNavigationExampleSimple;