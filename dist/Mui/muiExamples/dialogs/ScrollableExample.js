'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _RadioButton = require('material-ui/RadioButton');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  radioButton: {
    marginTop: 16
  }
};

/**
 * Dialog content can be scrollable.
 */

var DialogExampleScrollable = function (_React$Component) {
  _inherits(DialogExampleScrollable, _React$Component);

  function DialogExampleScrollable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DialogExampleScrollable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DialogExampleScrollable.__proto__ || Object.getPrototypeOf(DialogExampleScrollable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleOpen = function () {
      _this.setState({ open: true });
    }, _this.handleClose = function () {
      _this.setState({ open: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DialogExampleScrollable, [{
    key: 'render',
    value: function render() {
      var actions = [_react2.default.createElement(_FlatButton2.default, { label: 'Cancel', primary: true, onTouchTap: this.handleClose }), _react2.default.createElement(_FlatButton2.default, { label: 'Submit', primary: true, keyboardFocused: true, onTouchTap: this.handleClose })];

      var radios = [];
      for (var i = 0; i < 30; i++) {
        radios.push(_react2.default.createElement(_RadioButton.RadioButton, { key: i, value: 'value' + (i + 1), label: 'Option ' + (i + 1), style: styles.radioButton }));
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_RaisedButton2.default, { label: 'Scrollable Dialog', onTouchTap: this.handleOpen }),
        _react2.default.createElement(
          _Dialog2.default,
          { title: 'Scrollable Dialog', actions: actions, modal: false, open: this.state.open, onRequestClose: this.handleClose, autoScrollBodyContent: true },
          _react2.default.createElement(
            _RadioButton.RadioButtonGroup,
            { name: 'shipSpeed', defaultSelected: 'not_light' },
            radios
          )
        )
      );
    }
  }]);

  return DialogExampleScrollable;
}(_react2.default.Component);

exports.default = DialogExampleScrollable;