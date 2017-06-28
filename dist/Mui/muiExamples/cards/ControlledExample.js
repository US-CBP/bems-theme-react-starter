'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardExampleControlled = function (_React$Component) {
  _inherits(CardExampleControlled, _React$Component);

  function CardExampleControlled(props) {
    _classCallCheck(this, CardExampleControlled);

    var _this = _possibleConstructorReturn(this, (CardExampleControlled.__proto__ || Object.getPrototypeOf(CardExampleControlled)).call(this, props));

    _this.handleExpandChange = function (expanded) {
      _this.setState({ expanded: expanded });
    };

    _this.handleToggle = function (event, toggle) {
      _this.setState({ expanded: toggle });
    };

    _this.handleExpand = function () {
      _this.setState({ expanded: true });
    };

    _this.handleReduce = function () {
      _this.setState({ expanded: false });
    };

    _this.state = {
      expanded: false
    };
    return _this;
  }

  _createClass(CardExampleControlled, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Card.Card,
        { expanded: this.state.expanded, onExpandChange: this.handleExpandChange },
        _react2.default.createElement(_Card.CardHeader, { title: 'URL Avatar', subtitle: 'Subtitle', avatar: 'images/ok-128.jpg', actAsExpander: true, showExpandableButton: true }),
        _react2.default.createElement(
          _Card.CardText,
          null,
          _react2.default.createElement(_Toggle2.default, {
            toggled: this.state.expanded,
            onToggle: this.handleToggle,
            labelPosition: 'right',
            label: 'This toggle controls the expanded state of the component.'
          })
        ),
        _react2.default.createElement(
          _Card.CardMedia,
          { expandable: true, overlay: _react2.default.createElement(_Card.CardTitle, { title: 'Overlay title', subtitle: 'Overlay subtitle' }) },
          _react2.default.createElement('img', { src: 'images/nature-600-337.jpg' })
        ),
        _react2.default.createElement(_Card.CardTitle, { title: 'Card title', subtitle: 'Card subtitle', expandable: true }),
        _react2.default.createElement(
          _Card.CardText,
          { expandable: true },
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'
        ),
        _react2.default.createElement(
          _Card.CardActions,
          null,
          _react2.default.createElement(_FlatButton2.default, { label: 'Expand', onTouchTap: this.handleExpand }),
          _react2.default.createElement(_FlatButton2.default, { label: 'Reduce', onTouchTap: this.handleReduce })
        )
      );
    }
  }]);

  return CardExampleControlled;
}(_react2.default.Component);

exports.default = CardExampleControlled;