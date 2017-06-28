'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
  buttonLabels: buttonLabels
};

var propTypes = {
  title: _react.PropTypes.string,
  labels: _react.PropTypes.array
};

var DialogModal = function (_Component) {
  _inherits(DialogModal, _Component);

  function DialogModal(props) {
    _classCallCheck(this, DialogModal);

    var _this = _possibleConstructorReturn(this, (DialogModal.__proto__ || Object.getPrototypeOf(DialogModal)).call(this, props));

    _this.state = {
      open: false
    };

    _this.handleOpen = function () {
      _this.setState(setStateIsOpen.bind(_this, true));
    };

    _this.handleClose = function () {
      _this.setState(setStateIsOpen.bind(_this, false));
    };

    _this.getButtonActions = function () {
      var buttonLabels = _this.props.buttonLabels;

      var actions = buttonLabels.map(function (buttonLabel, idx) {
        var c = '';
        if (idx > 0) {
          c = 'dialog-btn-margin-left';
        }
        return _react2.default.createElement(_RaisedButton2.default, { className: c, label: buttonLabel, primary: true, onTouchTap: _this.handleClose });
      });
      return actions;
    };

    return _this;
  }

  _createClass(DialogModal, [{
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
        { title: 'Dialog With Actions', actions: getButtonActions(), modal: true, open: open, onRequestClose: onRequestClose },
        this.props.children
      );
    }
  }]);

  return DialogModal;
}(_react.Component);

DialogModal.defaultProps = defaultProps;
DialogModal.propTypes = propTypes;
exports.default = DialogModal;