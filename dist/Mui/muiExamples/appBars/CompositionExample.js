'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

var _close = require('material-ui/svg-icons/navigation/close');

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_FlatButton2.default, _extends({}, this.props, { label: 'Login' }));
    }
  }]);

  return Login;
}(_react.Component);

Login.muiName = 'FlatButton';


var Logged = function Logged(props) {
  return _react2.default.createElement(
    _IconMenu2.default,
    _extends({}, props, {
      iconButtonElement: _react2.default.createElement(
        _IconButton2.default,
        null,
        _react2.default.createElement(_moreVert2.default, null)
      ),
      targetOrigin: { horizontal: 'right', vertical: 'top' },
      anchorOrigin: { horizontal: 'right', vertical: 'top' }
    }),
    _react2.default.createElement(_MenuItem2.default, { primaryText: 'Refresh' }),
    _react2.default.createElement(_MenuItem2.default, { primaryText: 'Help' }),
    _react2.default.createElement(_MenuItem2.default, { primaryText: 'Sign out' })
  );
};

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */

var AppBarExampleComposition = function (_Component2) {
  _inherits(AppBarExampleComposition, _Component2);

  function AppBarExampleComposition() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, AppBarExampleComposition);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = AppBarExampleComposition.__proto__ || Object.getPrototypeOf(AppBarExampleComposition)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
      logged: true
    }, _this2.handleChange = function (event, logged) {
      _this2.setState({ logged: logged });
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(AppBarExampleComposition, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Toggle2.default, { label: 'Logged', defaultToggled: true, onToggle: this.handleChange, labelPosition: 'right', style: { margin: 20 } }),
        _react2.default.createElement(_AppBar2.default, { title: 'Title', iconElementLeft: _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(_close2.default, null)
          ), iconElementRight: this.state.logged ? _react2.default.createElement(Logged, null) : _react2.default.createElement(Login, null) })
      );
    }
  }]);

  return AppBarExampleComposition;
}(_react.Component);

exports.default = AppBarExampleComposition;