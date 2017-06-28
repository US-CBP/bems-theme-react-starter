'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('../TomisMui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _RaisedButton = require('../TomisMui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var buttonLabels = ['Cancel', 'Submit'];

var setStateIsOpen = function setStateIsOpen(open, state, props) {
  return { open: open };
};

var defaultProps = {
  title: 'Default Title',
  buttonLabels: buttonLabels
};

var propTypes = {
  title: _react.PropTypes.string,
  labels: _react.PropTypes.array
};

var DialogSimple = function (_Component) {
  _inherits(DialogSimple, _Component);

  function DialogSimple(props) {
    _classCallCheck(this, DialogSimple);

    var _this = _possibleConstructorReturn(this, (DialogSimple.__proto__ || Object.getPrototypeOf(DialogSimple)).call(this, props));

    _this.state = {
      open: false
    };

    _this.handleClose = function (buttonLabel, buttonIdx, evt) {
      evt.stopPropagation();
      evt.preventDefault();
      var onRequestClose = _this.props.onRequestClose;

      if (onRequestClose) {
        onRequestClose(buttonLabel, buttonIdx);
      }
      // this.setState(setStateIsOpen.bind(this, false));
    };

    _this.getButtonActions = function () {
      var buttonLabels = _this.props.buttonLabels;

      var actions = buttonLabels.map(function (buttonLabel, idx) {
        var c = '';
        if (idx > 0) {
          c = 'dialog-btn-margin-left';
        }
        return _react2.default.createElement(_RaisedButton2.default, { className: c, label: buttonLabel, primary: true, onTouchTap: _this.handleClose.bind(_this, buttonLabel, idx) });
      });
      return actions;
    };

    return _this;
  }

  _createClass(DialogSimple, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$initOpen = this.props.initOpen,
          initOpen = _props$initOpen === undefined ? false : _props$initOpen;

      this.setState(setStateIsOpen.bind(this, initOpen));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _nextProps$initOpen = nextProps.initOpen,
          initOpen = _nextProps$initOpen === undefined ? false : _nextProps$initOpen;

      this.setState(setStateIsOpen.bind(this, initOpen));
    }
  }, {
    key: 'render',
    value: function render() {
      var getButtonActions = this.getButtonActions;
      var open = this.state.open;
      var _props = this.props,
          title = _props.title,
          initOpen = _props.initOpen,
          onRequestClose = _props.onRequestClose;

      return _react2.default.createElement(
        _Dialog2.default,
        _extends({ title: title, actions: getButtonActions(), modal: false, open: open, onRequestClose: onRequestClose }, this.props),
        this.props.children
      );
    }
  }]);

  return DialogSimple;
}(_react.Component);

DialogSimple.defaultProps = defaultProps;
DialogSimple.propTypes = propTypes;
exports.default = DialogSimple;