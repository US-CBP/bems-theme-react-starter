'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LinearProgress = require('material-ui/LinearProgress');

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinearProgressExampleDeterminate = function (_React$Component) {
  _inherits(LinearProgressExampleDeterminate, _React$Component);

  function LinearProgressExampleDeterminate(props) {
    _classCallCheck(this, LinearProgressExampleDeterminate);

    var _this = _possibleConstructorReturn(this, (LinearProgressExampleDeterminate.__proto__ || Object.getPrototypeOf(LinearProgressExampleDeterminate)).call(this, props));

    _this.state = {
      completed: 0
    };
    return _this;
  }

  _createClass(LinearProgressExampleDeterminate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timer = setTimeout(function () {
        return _this2.progress(5);
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: 'progress',
    value: function progress(completed) {
      var _this3 = this;

      if (completed > 100) {
        this.setState({ completed: 100 });
      } else {
        this.setState({ completed: completed });
        var diff = Math.random() * 10;
        this.timer = setTimeout(function () {
          return _this3.progress(completed + diff);
        }, 1000);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_LinearProgress2.default, { mode: 'determinate', value: this.state.completed });
    }
  }]);

  return LinearProgressExampleDeterminate;
}(_react2.default.Component);

exports.default = LinearProgressExampleDeterminate;