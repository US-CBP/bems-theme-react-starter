'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Popover = require('material-ui/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopoverExampleAnimation = function (_React$Component) {
  _inherits(PopoverExampleAnimation, _React$Component);

  function PopoverExampleAnimation(props) {
    _classCallCheck(this, PopoverExampleAnimation);

    var _this = _possibleConstructorReturn(this, (PopoverExampleAnimation.__proto__ || Object.getPrototypeOf(PopoverExampleAnimation)).call(this, props));

    _this.handleTouchTap = function (event) {
      // This prevents ghost click.
      event.preventDefault();

      _this.setState({
        open: true,
        anchorEl: event.currentTarget
      });
    };

    _this.handleRequestClose = function () {
      _this.setState({
        open: false
      });
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(PopoverExampleAnimation, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_RaisedButton2.default, { onTouchTap: this.handleTouchTap, label: 'Click me' }),
        _react2.default.createElement(
          _Popover2.default,
          {
            open: this.state.open,
            anchorEl: this.state.anchorEl,
            anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
            targetOrigin: { horizontal: 'left', vertical: 'top' },
            onRequestClose: this.handleRequestClose,
            animation: _Popover.PopoverAnimationVertical
          },
          _react2.default.createElement(
            _Menu2.default,
            null,
            _react2.default.createElement(_MenuItem2.default, { primaryText: 'Refresh' }),
            _react2.default.createElement(_MenuItem2.default, { primaryText: 'Help & feedback' }),
            _react2.default.createElement(_MenuItem2.default, { primaryText: 'Settings' }),
            _react2.default.createElement(_MenuItem2.default, { primaryText: 'Sign out' })
          )
        )
      );
    }
  }]);

  return PopoverExampleAnimation;
}(_react2.default.Component);

exports.default = PopoverExampleAnimation;