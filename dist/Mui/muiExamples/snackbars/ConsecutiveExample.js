'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SnackbarExampleTwice = function (_React$Component) {
  _inherits(SnackbarExampleTwice, _React$Component);

  function SnackbarExampleTwice(props) {
    _classCallCheck(this, SnackbarExampleTwice);

    var _this = _possibleConstructorReturn(this, (SnackbarExampleTwice.__proto__ || Object.getPrototypeOf(SnackbarExampleTwice)).call(this, props));

    _this.handleTouchTap = function () {
      _this.setState({
        open: true
      });

      _this.timer = setTimeout(function () {
        _this.setState({
          message: 'Event ' + Math.round(Math.random() * 100) + ' added to your calendar'
        });
      }, 1500);
    };

    _this.handleRequestClose = function () {
      _this.setState({
        open: false
      });
    };

    _this.state = {
      message: 'Event 1 added to your calendar',
      open: false
    };
    _this.timer = undefined;
    return _this;
  }

  _createClass(SnackbarExampleTwice, [{
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      clearTimeout(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_RaisedButton2.default, { onTouchTap: this.handleTouchTap, label: 'Add to my calendar two times' }),
        _react2.default.createElement(_Snackbar2.default, { open: this.state.open, message: this.state.message, action: 'undo', autoHideDuration: 3000, onRequestClose: this.handleRequestClose })
      );
    }
  }]);

  return SnackbarExampleTwice;
}(_react2.default.Component);

exports.default = SnackbarExampleTwice;