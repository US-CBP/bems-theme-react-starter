'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  registerCollapseRef: function registerCollapseRef() {}
};

var propTypes = {
  registerCollapseRef: _propTypes2.default.func.isRequired
};

function getStyles(props, context) {
  var cardText = context.muiTheme.cardText;


  return {
    root: {
      padding: 16,
      fontSize: 14,
      color: props.color || cardText.textColor
    }
  };
}

var PanelBody = function (_Component) {
  _inherits(PanelBody, _Component);

  function PanelBody() {
    _classCallCheck(this, PanelBody);

    return _possibleConstructorReturn(this, (PanelBody.__proto__ || Object.getPrototypeOf(PanelBody)).apply(this, arguments));
  }

  _createClass(PanelBody, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var registerCollapseRef = this.props.registerCollapseRef;

      registerCollapseRef(this.collapseRef);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          actAsExpander = _props.actAsExpander,
          children = _props.children,
          color = _props.color,
          expandable = _props.expandable,
          style = _props.style,
          other = _objectWithoutProperties(_props, ['actAsExpander', 'children', 'color', 'expandable', 'style']);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var rootStyle = Object.assign(styles.root, style);

      this.keepProps = (0, _omit3.default)(other, 'registerCollapseRef');
      var keepProps = this.keepProps;

      return _react2.default.createElement(
        'div',
        _extends({ ref: function ref(_ref) {
            return _this2.collapseRef = _ref;
          } }, keepProps, { style: prepareStyles(rootStyle) }),
        children
      );
    }
  }]);

  return PanelBody;
}(_react.Component);

PanelBody.keepProps = {};
PanelBody.collapseRef = null;
PanelBody.muiName = 'PanelBody';
PanelBody.propTypes = {
  /**
   * If true, a click on this card component expands the card.
   */
  actAsExpander: _propTypes2.default.bool,
  /**
   * Can be used to render elements inside the Card Text.
   */
  children: _propTypes2.default.node,
  /**
   * Override the PanelBody color.
   */
  color: _propTypes2.default.string,
  /**
   * If true, this card component is expandable.
   */
  expandable: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};
PanelBody.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = PanelBody;