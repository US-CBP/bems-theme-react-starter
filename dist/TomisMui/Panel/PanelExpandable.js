'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keyboardArrowUp = require('material-ui/svg-icons/hardware/keyboard-arrow-up');

var _keyboardArrowUp2 = _interopRequireDefault(_keyboardArrowUp);

var _keyboardArrowDown = require('material-ui/svg-icons/hardware/keyboard-arrow-down');

var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyles() {
  return {
    root: {
      top: 0,
      bottom: 0,
      right: 4,
      margin: 'auto',
      position: 'absolute'
    }
  };
}

var PanelExpandable = function (_Component) {
  _inherits(PanelExpandable, _Component);

  function PanelExpandable() {
    _classCallCheck(this, PanelExpandable);

    return _possibleConstructorReturn(this, (PanelExpandable.__proto__ || Object.getPrototypeOf(PanelExpandable)).apply(this, arguments));
  }

  _createClass(PanelExpandable, [{
    key: 'render',
    value: function render() {
      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        _IconButton2.default,
        { style: Object.assign(styles.root, this.props.style), onTouchTap: this.props.onExpanding },
        this.props.expanded ? this.props.openIcon : this.props.closeIcon
      );
    }
  }]);

  return PanelExpandable;
}(_react.Component);

PanelExpandable.propTypes = {
  closeIcon: _propTypes2.default.node,
  expanded: _propTypes2.default.bool,
  onExpanding: _propTypes2.default.func.isRequired,
  openIcon: _propTypes2.default.node,
  style: _propTypes2.default.object
};
PanelExpandable.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
PanelExpandable.defaultProps = {
  closeIcon: _react2.default.createElement(_keyboardArrowDown2.default, null),
  openIcon: _react2.default.createElement(_keyboardArrowUp2.default, null)
};
exports.default = PanelExpandable;