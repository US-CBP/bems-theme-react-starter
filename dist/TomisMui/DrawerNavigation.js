'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('material-ui/List');

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Search = require('../TomisMui/Search');

var _Search2 = _interopRequireDefault(_Search);

var _search = require('react-material-icons/icons/action/search');

var _search2 = _interopRequireDefault(_search);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _styles = require('../app/helpers/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isInitiallyOpen = false;
var isPrimaryTogglesNestedList = true;

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
  }(_react.Component), _class.defaultProps = {
    defaultValue: 0
  }, _class.propTypes = {
    children: _react.PropTypes.node.isRequired,
    defaultValue: _react.PropTypes.number.isRequired
  }, _temp2;
}

SelectableList = wrapState(SelectableList);

var NavigationDrawer = function (_Component2) {
  _inherits(NavigationDrawer, _Component2);

  function NavigationDrawer(props) {
    _classCallCheck(this, NavigationDrawer);

    var _this2 = _possibleConstructorReturn(this, (NavigationDrawer.__proto__ || Object.getPrototypeOf(NavigationDrawer)).call(this, props));

    _this2.state = {
      isOpen: {},
      anchorEl: {}
    };
    return _this2;
  }

  _createClass(NavigationDrawer, [{
    key: 'render',
    value: function render() {
      var handleTouchTapButton = this.handleTouchTapButton,
          handleRequestCloseButton = this.handleRequestCloseButton;
      var _state = this.state,
          isOpen = _state.isOpen,
          anchorEl = _state.anchorEl;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _List.List,
          { style: (0, _styles.getDrawerSearchListStyle)() },
          _react2.default.createElement(
            _List.ListItem,
            { innerDivStyle: (0, _styles.getDrawerSearchListItemStyle)() },
            _react2.default.createElement(_AppBar2.default, { iconElementLeft: _react2.default.createElement(
                _IconButton2.default,
                null,
                _react2.default.createElement(_search2.default, null)
              ), title: _react2.default.createElement(_Search2.default, this.props) })
          )
        ),
        _react2.default.createElement(_Divider2.default, { inset: false }),
        _react2.default.createElement(
          SelectableList,
          null,
          _react2.default.createElement(_List.ListItem, {
            value: 1,
            primaryText: 'Search',
            initiallyOpen: isInitiallyOpen,
            primaryTogglesNestedList: isPrimaryTogglesNestedList,
            nestedItems: [_react2.default.createElement(_List.ListItem, { value: 2, primaryText: 'Search 1', key: 'SEARCH_1' }), _react2.default.createElement(_List.ListItem, { value: 3, primaryText: 'Search 2', key: 'SEARCH_2' }), _react2.default.createElement(_List.ListItem, { value: 4, primaryText: 'Search 3', key: 'SEARCH_3' })]
          }),
          _react2.default.createElement(_Divider2.default, { inset: false }),
          _react2.default.createElement(_List.ListItem, { value: 5, primaryText: 'Home' }),
          _react2.default.createElement(_Divider2.default, { inset: false }),
          _react2.default.createElement(_List.ListItem, {
            value: 6,
            primaryText: 'Ops',
            initiallyOpen: isInitiallyOpen,
            primaryTogglesNestedList: isPrimaryTogglesNestedList,
            nestedItems: [_react2.default.createElement(_List.ListItem, { value: 7, primaryText: 'Add Item 1', key: 'ADD_ITEM_2' }), _react2.default.createElement(_List.ListItem, { value: 8, primaryText: 'Add Item 2', key: 'ADD_ITEM_1' })]
          })
        ),
        _react2.default.createElement(_Divider2.default, { inset: false }),
        _react2.default.createElement(
          _List.List,
          null,
          _react2.default.createElement(_List.ListItem, {
            value: 17,
            primaryText: 'Events',
            initiallyOpen: isInitiallyOpen,
            primaryTogglesNestedList: isPrimaryTogglesNestedList,
            nestedItems: [_react2.default.createElement(_List.ListItem, { primaryText: 'Add Item 3', key: 'ADD_ITEM_3' })]
          })
        ),
        _react2.default.createElement(_Divider2.default, { inset: false }),
        _react2.default.createElement(
          _List.List,
          null,
          _react2.default.createElement(_List.ListItem, {
            value: 18,
            primaryText: 'Reports',
            initiallyOpen: isInitiallyOpen,
            primaryTogglesNestedList: isPrimaryTogglesNestedList,
            nestedItems: [_react2.default.createElement(_List.ListItem, { value: 19, primaryText: 'Retrieve 1', key: 'RETRIEVE' }), _react2.default.createElement(_List.ListItem, { value: 20, primaryText: 'Dashboard', key: 'DASHBOARD' })]
          })
        ),
        _react2.default.createElement(_Divider2.default, { inset: false }),
        _react2.default.createElement(
          _List.List,
          null,
          _react2.default.createElement(_List.ListItem, {
            value: 21,
            primaryText: 'Maintenance',
            initiallyOpen: isInitiallyOpen,
            primaryTogglesNestedList: isPrimaryTogglesNestedList,
            nestedItems: [_react2.default.createElement(_List.ListItem, { value: 22, primaryText: 'Abc', key: 'ABC' }), _react2.default.createElement(_List.ListItem, { value: 23, primaryText: 'COA', key: 'COA' })]
          })
        ),
        _react2.default.createElement(_Divider2.default, { inset: false }),
        _react2.default.createElement(
          _List.List,
          null,
          _react2.default.createElement(_List.ListItem, {
            value: 27,
            primaryText: 'Supervisor',
            initiallyOpen: isInitiallyOpen,
            primaryTogglesNestedList: isPrimaryTogglesNestedList,
            nestedItems: [_react2.default.createElement(_List.ListItem, { value: 28, primaryText: 'Approvals', key: 'APPROVALS' })]
          })
        ),
        _react2.default.createElement(_Divider2.default, { inset: false }),
        _react2.default.createElement(
          _List.List,
          null,
          _react2.default.createElement(_List.ListItem, {
            value: 29,
            primaryText: 'Option',
            initiallyOpen: isInitiallyOpen,
            primaryTogglesNestedList: isPrimaryTogglesNestedList,
            nestedItems: [_react2.default.createElement(_List.ListItem, { value: 30, primaryText: 'Reports Status Page', key: 'REPORTS_STATUS_PAGE' })]
          })
        )
      );
    }
  }]);

  return NavigationDrawer;
}(_react.Component);

exports.default = (0, _muiThemeable2.default)()(NavigationDrawer);