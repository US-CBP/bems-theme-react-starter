'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _PanelExpandable = require('./PanelExpandable');

var _PanelExpandable2 = _interopRequireDefault(_PanelExpandable);

var _velocityAnimate = require('velocity-animate');

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_Component) {
  _inherits(Panel, _Component);

  function Panel(props) {
    _classCallCheck(this, Panel);

    var _this = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));

    _this.state = {
      expanded: null
    };

    _this.handleExpanding = function (event) {
      event.preventDefault();
      var newExpandedState = !_this.state.expanded;
      // no automatic state update when the component is controlled
      // if (this.props.expanded === null) {
      //   this.setState({ expanded: newExpandedState });
      // }
      if (_this.props.onExpandChange) {
        _this.props.onExpandChange(newExpandedState);
      }
      var _this$props = _this.props,
          expansionDuration = _this$props.expansionDuration,
          isAnimate = _this$props.isAnimate;

      var duration = isAnimate ? expansionDuration : 0;
      var animVal = !newExpandedState ? 'slideUp' : 'slideDown';
      var self = _this;
      _this.setState({ expanded: newExpandedState }, function () {
        (0, _velocityAnimate2.default)(_this.panelBody, animVal, {
          duration: duration,
          complete: function complete() {}
        });
      });
    };

    _this.registerCollapseRef = function (childRef) {
      _this.panelBody = childRef;
    };

    _this.panelBody = null;
    _this.keepProps = {};
    return _this;
  }

  _createClass(Panel, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        expanded: this.props.expanded === null ? this.props.initiallyExpanded === true : this.props.expanded
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // update the state when the component is controlled.
      if (nextProps.expanded !== null) this.setState({ expanded: nextProps.expanded });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          containerStyle = _props.containerStyle,
          children = _props.children,
          expandable = _props.expandable,
          expandedProp = _props.expanded,
          initiallyExpanded = _props.initiallyExpanded,
          onExpandChange = _props.onExpandChange,
          other = _objectWithoutProperties(_props, ['style', 'containerStyle', 'children', 'expandable', 'expanded', 'initiallyExpanded', 'onExpandChange']);

      var lastElement = void 0;
      var expanded = this.state.expanded;
      var newChildren = _react2.default.Children.map(children, function (currentChild) {
        var doClone = false;
        var newChild = undefined;
        var newProps = {};
        var element = currentChild;
        if (!currentChild || !currentChild.props) {
          return null;
        }
        if (expanded === false && currentChild.props.expandable === true) return;
        if (currentChild.props.actAsExpander === true) {
          doClone = true;
          newProps.onTouchTap = _this2.handleExpanding;
          newProps.style = Object.assign({ cursor: 'pointer' }, currentChild.props.style);
        }
        if (currentChild.props.showExpandableButton === true) {
          doClone = true;
          newChild = _react2.default.createElement(_PanelExpandable2.default, {
            closeIcon: currentChild.props.closeIcon,
            expanded: expanded,
            onExpanding: _this2.handleExpanding,
            openIcon: currentChild.props.openIcon
          });
        }
        if (currentChild.type.muiName === 'PanelBody') {
          newProps.registerCollapseRef = _this2.registerCollapseRef;
          doClone = true;
        }
        if (doClone) {
          element = _react2.default.cloneElement(currentChild, newProps, currentChild.props.children, newChild);
        }
        lastElement = element;
        return element;
      }, this);

      // If the last element is text or a title we should add
      // 8px padding to the bottom of the card
      var mergedStyles = Object.assign({
        padding: '8px',
        width: '100%',
        zIndex: 'auto'
      }, style);
      var containerMergedStyles = Object.assign({}, containerStyle);

      this.keepProps = (0, _omit3.default)(other, ['expansionDuration', 'isAnimate']);
      var keepProps = this.keepProps;

      return _react2.default.createElement(
        _Paper2.default,
        _extends({}, keepProps, { style: mergedStyles }),
        _react2.default.createElement(
          'div',
          { style: containerMergedStyles },
          newChildren
        )
      );
    }
  }]);

  return Panel;
}(_react.Component);

Panel.propTypes = {
  /**
   * Can be used to render elements inside the Card.
   */
  children: _propTypes2.default.node,
  /**
   * Override the inline-styles of the container element.
   */
  containerStyle: _propTypes2.default.object,
  /**
   * If true, this card component is expandable. Can be set on any child of the `Card` component.
   */
  expandable: _propTypes2.default.bool,
  /**
   * Whether this card is expanded.
   * If `true` or `false` the component is controlled.
   * if `null` the component is uncontrolled.
   */
  expanded: _propTypes2.default.bool,
  /**
   * Whether this card is initially expanded.
   */
  initiallyExpanded: _propTypes2.default.bool,
  /**
   * Callback function fired when the `expandable` state of the card has changed.
   *
   * @param {boolean} newExpandedState Represents the new `expanded` state of the card.
   */
  onExpandChange: _propTypes2.default.func,
  /**
   * If true, this card component will include a button to expand the card. `CardTitle`,
   * `CardHeader` and `CardActions` implement `showExpandableButton`. Any child component
   * of `Card` can implements `showExpandableButton` or forwards the property to a child
   * component supporting it.
   */
  showExpandableButton: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the default animation expansionDuration.  Set this to 0 if you do not want any animation on open/close
   */
  expansionDuration: _propTypes2.default.number
  /**
   * Override the default animation flag.  Default is yes, animate open/close.  If you don't want that, set isAnimate to false, then open/close is immediate.
   */
};
Panel.defaultProps = {
  expandable: false,
  expanded: null,
  initiallyExpanded: true,
  expansionDuration: 500,
  isAnimate: true
};
exports.default = Panel;