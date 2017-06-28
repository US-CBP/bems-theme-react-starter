'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tabs = require('material-ui/Tabs');

var _reactSwipeableViews = require('react-swipeable-views');

var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// From https://github.com/oliviertassinari/react-swipeable-views


var styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {
    padding: 10
  }
};

var TabsExampleSwipeable = function (_React$Component) {
  _inherits(TabsExampleSwipeable, _React$Component);

  function TabsExampleSwipeable(props) {
    _classCallCheck(this, TabsExampleSwipeable);

    var _this = _possibleConstructorReturn(this, (TabsExampleSwipeable.__proto__ || Object.getPrototypeOf(TabsExampleSwipeable)).call(this, props));

    _this.handleChange = function (value) {
      _this.setState({
        slideIndex: value
      });
    };

    _this.state = {
      slideIndex: 0
    };
    return _this;
  }

  _createClass(TabsExampleSwipeable, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Tabs.Tabs,
          { onChange: this.handleChange, value: this.state.slideIndex },
          _react2.default.createElement(_Tabs.Tab, { label: 'Tab One', value: 0 }),
          _react2.default.createElement(_Tabs.Tab, { label: 'Tab Two', value: 1 }),
          _react2.default.createElement(_Tabs.Tab, { label: 'Tab Three', value: 2 })
        ),
        _react2.default.createElement(
          _reactSwipeableViews2.default,
          { index: this.state.slideIndex, onChangeIndex: this.handleChange },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h2',
              { style: styles.headline },
              'Tabs with slide effect'
            ),
            'Swipe to see the next slide.',
            _react2.default.createElement('br', null)
          ),
          _react2.default.createElement(
            'div',
            { style: styles.slide },
            'slide n\xB02'
          ),
          _react2.default.createElement(
            'div',
            { style: styles.slide },
            'slide n\xB03'
          )
        )
      );
    }
  }]);

  return TabsExampleSwipeable;
}(_react2.default.Component);

exports.default = TabsExampleSwipeable;