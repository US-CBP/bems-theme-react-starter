'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tabs = require('material-ui/Tabs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

var TabsExampleControlled = function (_React$Component) {
  _inherits(TabsExampleControlled, _React$Component);

  function TabsExampleControlled(props) {
    _classCallCheck(this, TabsExampleControlled);

    var _this = _possibleConstructorReturn(this, (TabsExampleControlled.__proto__ || Object.getPrototypeOf(TabsExampleControlled)).call(this, props));

    _this.handleChange = function (value) {
      _this.setState({
        value: value
      });
    };

    _this.state = {
      value: 'a'
    };
    return _this;
  }

  _createClass(TabsExampleControlled, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Tabs.Tabs,
        { value: this.state.value, onChange: this.handleChange },
        _react2.default.createElement(
          _Tabs.Tab,
          { label: 'Tab A', value: 'a' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h2',
              { style: styles.headline },
              'Controllable Tab A'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Tabs are also controllable if you want to programmatically pass them their values. This allows for more functionality in Tabs such as not having any Tab selected or assigning them different values.'
            )
          )
        ),
        _react2.default.createElement(
          _Tabs.Tab,
          { label: 'Tab B', value: 'b' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h2',
              { style: styles.headline },
              'Controllable Tab B'
            ),
            _react2.default.createElement(
              'p',
              null,
              'This is another example of a controllable tab. Remember, if you use controllable Tabs, you need to give all of your tabs values or else you wont be able to select them.'
            )
          )
        )
      );
    }
  }]);

  return TabsExampleControlled;
}(_react2.default.Component);

exports.default = TabsExampleControlled;