'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Drawer = require('../TomisMui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _IconMenu = require('../TomisMui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _Menu = require('../TomisMui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('../TomisMui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Popover = require('../TomisMui/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _FlatButton = require('../TomisMui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('../TomisMui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Toolbar = require('../TomisMui/Toolbar');

var _menu = require('material-ui/svg-icons/navigation/menu');

var _menu2 = _interopRequireDefault(_menu);

var _arrowDropDown = require('material-ui/svg-icons/navigation/arrow-drop-down');

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _chatBubbleOutline = require('material-ui/svg-icons/communication/chat-bubble-outline');

var _chatBubbleOutline2 = _interopRequireDefault(_chatBubbleOutline);

var _Logged = require('../TomisMui/Logged');

var _Logged2 = _interopRequireDefault(_Logged);

var _CalendarView = require('../TomisMui/CalendarView');

var _CalendarView2 = _interopRequireDefault(_CalendarView);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _styles = require('../app/helpers/styles');

var _save = require('material-ui/svg-icons/content/save');

var _save2 = _interopRequireDefault(_save);

var _cancel = require('material-ui/svg-icons/navigation/cancel');

var _cancel2 = _interopRequireDefault(_cancel);

var _filterList = require('material-ui/svg-icons/content/filter-list');

var _filterList2 = _interopRequireDefault(_filterList);

var _public = require('material-ui/svg-icons/social/public');

var _public2 = _interopRequireDefault(_public);

var _flight = require('material-ui/svg-icons/maps/flight');

var _flight2 = _interopRequireDefault(_flight);

var _directionsBoat = require('material-ui/svg-icons/maps/directions-boat');

var _directionsBoat2 = _interopRequireDefault(_directionsBoat);

var _threeDRotation = require('material-ui/svg-icons/action/three-d-rotation');

var _threeDRotation2 = _interopRequireDefault(_threeDRotation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var APPLICATIONS = 'APPLICATIONS';
var BRANCH_UNIT = 'BRANCH_UNIT';

var anchorOrigin = { horizontal: 'left', vertical: 'bottom' };
var targetOrigin = { horizontal: 'left', vertical: 'top' };

var setStatePopoverOpen = function setStatePopoverOpen(keyVal, anchorEl, state, props) {
  state.isOpen[keyVal] = true;
  state.anchorEl[keyVal] = anchorEl;
};
var setStatePopoverClose = function setStatePopoverClose(keyVal, state, props) {
  state.isOpen[keyVal] = false;
};

var ToolbarCbpHeader = function (_Component) {
  _inherits(ToolbarCbpHeader, _Component);

  function ToolbarCbpHeader(props) {
    _classCallCheck(this, ToolbarCbpHeader);

    var _this = _possibleConstructorReturn(this, (ToolbarCbpHeader.__proto__ || Object.getPrototypeOf(ToolbarCbpHeader)).call(this, props));

    _this.handleTouchTapButton = function (keyVal, event) {
      event.preventDefault();
      _this.setState(setStatePopoverOpen.bind(_this, keyVal, event.currentTarget));
    };

    _this.handleRequestCloseButton = function (keyVal) {
      _this.setState(setStatePopoverClose.bind(_this, keyVal));
    };

    _this.state = {
      isOpen: {},
      anchorEl: {}
    };
    return _this;
  }

  _createClass(ToolbarCbpHeader, [{
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
          _Toolbar.Toolbar,
          null,
          _react2.default.createElement(
            _Toolbar.ToolbarGroup,
            { firstChild: true },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_Toolbar.ToolbarTitle, { text: _react2.default.createElement(
                  'span',
                  null,
                  'U.S. Customs and Border Protection'
                ), style: (0, _styles.getStatusBarTitleStyle)(this.props) }),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'header-sub-title' },
                'Department of Homeland Security'
              )
            ),
            _react2.default.createElement(_FlatButton2.default, {
              onTouchTap: handleTouchTapButton.bind(this, APPLICATIONS),
              labelStyle: (0, _styles.getStatusBarTitleStyle)(this.props),
              label: 'TOMIS',
              labelPosition: 'before',
              icon: _react2.default.createElement(_arrowDropDown2.default, { color: (0, _styles.getAppBarIconColor)(this.props) })
            }),
            _react2.default.createElement(
              _Popover2.default,
              {
                open: isOpen[APPLICATIONS],
                anchorEl: anchorEl[APPLICATIONS],
                anchorOrigin: anchorOrigin,
                targetOrigin: targetOrigin,
                onRequestClose: handleRequestCloseButton.bind(this, APPLICATIONS)
              },
              _react2.default.createElement(
                _Menu2.default,
                null,
                _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'SEACATS' }),
                _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: 'FACTS' })
              )
            )
          ),
          _react2.default.createElement(
            _Toolbar.ToolbarGroup,
            null,
            _react2.default.createElement(_Logged2.default, this.props)
          )
        )
      );
    }
  }]);

  return ToolbarCbpHeader;
}(_react.Component);

exports.default = (0, _muiThemeable2.default)()(ToolbarCbpHeader);