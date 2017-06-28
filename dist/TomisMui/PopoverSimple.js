'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ExampleContainer = require('./helpers/ExampleContainer');

var _ExampleContainer2 = _interopRequireDefault(_ExampleContainer);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _RadioButton = require('material-ui/RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _Popover = require('material-ui/Popover/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _ButtonRaisedSimplePrimary = require('./ButtonRaisedSimplePrimary');

var _ButtonRaisedSimplePrimary2 = _interopRequireDefault(_ButtonRaisedSimplePrimary);

var _Menu = require('material-ui/Menu');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  h3: {
    marginTop: 20,
    fontWeight: 400
  },
  block: {
    display: 'flex'
  },
  block2: {
    margin: 10
  },
  pre: {
    overflow: 'hidden' // Fix a scrolling issue on iOS.
  }
};

var setStateIsOpen = function setStateIsOpen(open, state, props) {
  return { open: open };
};

var defaultProps = {};

var propTypes = {};

var PopoverSimple = function (_React$Component) {
  _inherits(PopoverSimple, _React$Component);

  function PopoverSimple(props) {
    _classCallCheck(this, PopoverSimple);

    var _this = _possibleConstructorReturn(this, (PopoverSimple.__proto__ || Object.getPrototypeOf(PopoverSimple)).call(this, props));

    _this.state = {
      open: false,
      anchorEl: null,
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom'
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top'
      }
    };

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

    _this.setAnchor = function (positionElement, position) {
      var anchorOrigin = _this.state.anchorOrigin;

      anchorOrigin[positionElement] = position;

      _this.setState({
        anchorOrigin: anchorOrigin
      });
    };

    _this.setTarget = function (positionElement, position) {
      var targetOrigin = _this.state.targetOrigin;

      targetOrigin[positionElement] = position;

      _this.setState({
        targetOrigin: targetOrigin
      });
    };

    return _this;
  }

  _createClass(PopoverSimple, [{
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
      var handleRequestClose = this.handleRequestClose,
          handleTouchTap = this.handleTouchTap;
      var _state = this.state,
          open = _state.open,
          anchorOrigin = _state.anchorOrigin,
          targetOrigin = _state.targetOrigin,
          anchorEl = _state.anchorEl;
      var _props$label = this.props.label,
          label = _props$label === undefined ? 'Primary' : _props$label;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_ButtonRaisedSimplePrimary2.default, { label: label, onTouchTap: handleTouchTap }),
        _react2.default.createElement(
          _Popover2.default,
          { open: open, anchorEl: anchorEl, anchorOrigin: anchorOrigin, targetOrigin: targetOrigin, onRequestClose: handleRequestClose },
          _react2.default.createElement(
            _Menu.Menu,
            null,
            _react2.default.createElement(_Menu.MenuItem, { primaryText: 'Refresh' }),
            _react2.default.createElement(_Menu.MenuItem, { primaryText: 'Help & feedback' }),
            _react2.default.createElement(_Menu.MenuItem, { primaryText: 'Settings' }),
            _react2.default.createElement(_Menu.MenuItem, { primaryText: 'Sign out' })
          )
        )
      );
    }
  }]);

  return PopoverSimple;
}(_react2.default.Component);

exports.default = PopoverSimple;