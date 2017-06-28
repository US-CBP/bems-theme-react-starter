'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('material-ui/List');

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _MobileTearSheet = require('../MobileTearSheet');

var _MobileTearSheet2 = _interopRequireDefault(_MobileTearSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectableList = (0, _List.makeSelectable)(_List.List);

function wrapState(ComposedComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    _inherits(SelectableList, _Component);

    function SelectableList() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SelectableList);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectableList.__proto__ || Object.getPrototypeOf(SelectableList)).call.apply(_ref, [this].concat(args))), _this), _this.handleRequestChange = function (event, index) {
        _this.setState({
          selectedIndex: index
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SelectableList, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.setState({
          selectedIndex: this.props.defaultValue
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          ComposedComponent,
          { value: this.state.selectedIndex, onChange: this.handleRequestChange },
          this.props.children
        );
      }
    }]);

    return SelectableList;
  }(_react.Component), _class.propTypes = {
    children: _react.PropTypes.node.isRequired,
    defaultValue: _react.PropTypes.number.isRequired
  }, _temp2;
}

SelectableList = wrapState(SelectableList);

var ListExampleSelectable = function ListExampleSelectable() {
  return _react2.default.createElement(
    _MobileTearSheet2.default,
    null,
    _react2.default.createElement(
      SelectableList,
      { defaultValue: 3 },
      _react2.default.createElement(
        _Subheader2.default,
        null,
        'Selectable Contacts'
      ),
      _react2.default.createElement(_List.ListItem, {
        value: 1,
        primaryText: 'Brendan Lim',
        leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/ok-128.jpg' }),
        nestedItems: [_react2.default.createElement(_List.ListItem, { value: 2, primaryText: 'Grace Ng', leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/uxceo-128.jpg' }) })]
      }),
      _react2.default.createElement(_List.ListItem, { value: 3, primaryText: 'Kerem Suer', leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/kerem-128.jpg' }) }),
      _react2.default.createElement(_List.ListItem, { value: 4, primaryText: 'Eric Hoffman', leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/kolage-128.jpg' }) }),
      _react2.default.createElement(_List.ListItem, { value: 5, primaryText: 'Raquel Parrado', leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/raquelromanp-128.jpg' }) })
    )
  );
};

exports.default = ListExampleSelectable;