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

var setStateIsOpen = function setStateIsOpen(open, state, props) {
  return { open: open };
};

var defaultProps = {
  drawerItems: [_react2.default.createElement(
    _MenuItem2.default,
    null,
    'Menu Item'
  ), _react2.default.createElement(
    _MenuItem2.default,
    null,
    'Menu Item 2'
  )]
};

var propTypes = {
  drawerItems: _react.PropTypes.array.isRequired
};

var DrawerUndocked = function (_Component) {
  _inherits(DrawerUndocked, _Component);

  function DrawerUndocked(props) {
    _classCallCheck(this, DrawerUndocked);

    var _this = _possibleConstructorReturn(this, (DrawerUndocked.__proto__ || Object.getPrototypeOf(DrawerUndocked)).call(this, props));

    _this.state = {
      open: false
    };

    _this.handleToggle = function () {
      return _this.setState({ open: !_this.state.open });
    };

    _this.handleClose = function () {
      return _this.setState({ open: false });
    };

    return _this;
  }

  _createClass(DrawerUndocked, [{
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

    // {drawerItems.map((drawerItem, idx) => {
    //   return drawerItem;
    // })}

    value: function render() {
      var _this2 = this;

      var drawerItems = this.props.drawerItems;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Drawer2.default,
          { docked: false, width: 300, open: this.state.open, onRequestChange: function onRequestChange(open) {
              return _this2.setState({ open: open });
            } },
          this.props.children
        )
      );
    }
  }]);

  return DrawerUndocked;
}(_react.Component);

DrawerUndocked.defaultProps = defaultProps;
DrawerUndocked.propTypes = propTypes;

exports.default = DrawerUndocked;