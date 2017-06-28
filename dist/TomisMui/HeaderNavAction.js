'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ToolbarCbpHeader = require('../TomisMui/ToolbarCbpHeader');

var _ToolbarCbpHeader2 = _interopRequireDefault(_ToolbarCbpHeader);

var _ToolbarActionBar = require('../TomisMui/ToolbarActionBar');

var _ToolbarActionBar2 = _interopRequireDefault(_ToolbarActionBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  actionBarPageTitle: _react.PropTypes.string
};

var HeaderNavAction = function (_Component) {
  _inherits(HeaderNavAction, _Component);

  function HeaderNavAction() {
    _classCallCheck(this, HeaderNavAction);

    return _possibleConstructorReturn(this, (HeaderNavAction.__proto__ || Object.getPrototypeOf(HeaderNavAction)).apply(this, arguments));
  }

  _createClass(HeaderNavAction, [{
    key: 'render',
    value: function render() {
      var actionBarPageTitle = this.props.actionBarPageTitle;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_ToolbarCbpHeader2.default, null),
        _react2.default.createElement(_ToolbarActionBar2.default, { pageTitle: actionBarPageTitle })
      );
    }
  }]);

  return HeaderNavAction;
}(_react.Component);

HeaderNavAction.propTypes = propTypes;
exports.default = HeaderNavAction;