'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('material-ui/List');

var _grade = require('material-ui/svg-icons/action/grade');

var _grade2 = _interopRequireDefault(_grade);

var _inbox = require('material-ui/svg-icons/content/inbox');

var _inbox2 = _interopRequireDefault(_inbox);

var _drafts = require('material-ui/svg-icons/content/drafts');

var _drafts2 = _interopRequireDefault(_drafts);

var _send = require('material-ui/svg-icons/content/send');

var _send2 = _interopRequireDefault(_send);

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _MobileTearSheet = require('../MobileTearSheet');

var _MobileTearSheet2 = _interopRequireDefault(_MobileTearSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListExampleNested = function (_React$Component) {
  _inherits(ListExampleNested, _React$Component);

  function ListExampleNested() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ListExampleNested);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListExampleNested.__proto__ || Object.getPrototypeOf(ListExampleNested)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleToggle = function () {
      _this.setState({
        open: !_this.state.open
      });
    }, _this.handleNestedListToggle = function (item) {
      _this.setState({
        open: item.state.open
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListExampleNested, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Toggle2.default, {
          toggled: this.state.open,
          onToggle: this.handleToggle,
          labelPosition: 'right',
          label: 'This toggle controls the expanded state of the submenu item.'
        }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _MobileTearSheet2.default,
          null,
          _react2.default.createElement(
            _List.List,
            null,
            _react2.default.createElement(
              _Subheader2.default,
              null,
              'Nested List Items'
            ),
            _react2.default.createElement(_List.ListItem, { primaryText: 'Sent mail', leftIcon: _react2.default.createElement(_send2.default, null) }),
            _react2.default.createElement(_List.ListItem, { primaryText: 'Drafts', leftIcon: _react2.default.createElement(_drafts2.default, null) }),
            _react2.default.createElement(_List.ListItem, {
              primaryText: 'Inbox',
              leftIcon: _react2.default.createElement(_inbox2.default, null),
              initiallyOpen: true,
              primaryTogglesNestedList: true,
              nestedItems: [_react2.default.createElement(_List.ListItem, { key: 1, primaryText: 'Starred', leftIcon: _react2.default.createElement(_grade2.default, null) }), _react2.default.createElement(_List.ListItem, {
                key: 2,
                primaryText: 'Sent Mail',
                leftIcon: _react2.default.createElement(_send2.default, null),
                disabled: true,
                nestedItems: [_react2.default.createElement(_List.ListItem, { key: 1, primaryText: 'Drafts', leftIcon: _react2.default.createElement(_drafts2.default, null) })]
              }), _react2.default.createElement(_List.ListItem, {
                key: 3,
                primaryText: 'Inbox',
                leftIcon: _react2.default.createElement(_inbox2.default, null),
                open: this.state.open,
                onNestedListToggle: this.handleNestedListToggle,
                nestedItems: [_react2.default.createElement(_List.ListItem, { key: 1, primaryText: 'Drafts', leftIcon: _react2.default.createElement(_drafts2.default, null) })]
              })]
            })
          )
        )
      );
    }
  }]);

  return ListExampleNested;
}(_react2.default.Component);

exports.default = ListExampleNested;