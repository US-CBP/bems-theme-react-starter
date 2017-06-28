'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DrawerUndockedExample = function (_React$Component) {
  _inherits(DrawerUndockedExample, _React$Component);

  function DrawerUndockedExample(props) {
    _classCallCheck(this, DrawerUndockedExample);

    var _this = _possibleConstructorReturn(this, (DrawerUndockedExample.__proto__ || Object.getPrototypeOf(DrawerUndockedExample)).call(this, props));

    _this.handleToggle = function () {
      return _this.setState({ open: !_this.state.open });
    };

    _this.handleClose = function () {
      return _this.setState({ open: false });
    };

    _this.state = { open: false };
    return _this;
  }

  _createClass(DrawerUndockedExample, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_RaisedButton2.default, { label: 'Open Drawer', onTouchTap: this.handleToggle }),
        _react2.default.createElement(
          _Drawer2.default,
          { docked: false, width: 200, open: this.state.open, onRequestChange: function onRequestChange(open) {
              return _this2.setState({ open: open });
            } },
          _react2.default.createElement(
            _MenuItem2.default,
            { onTouchTap: this.handleClose },
            'Menu Item'
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            { onTouchTap: this.handleClose },
            'Menu Item 2'
          )
        )
      );
    }
  }]);

  return DrawerUndockedExample;
}(_react2.default.Component);

exports.default = DrawerUndockedExample;