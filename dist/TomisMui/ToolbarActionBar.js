'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _IconButton = require('../TomisMui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Popover = require('material-ui/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Toolbar = require('material-ui/Toolbar');

var _DrawerNavigation = require('./DrawerNavigation');

var _DrawerNavigation2 = _interopRequireDefault(_DrawerNavigation);

var _menu = require('material-ui/svg-icons/navigation/menu');

var _menu2 = _interopRequireDefault(_menu);

var _arrowDropDown = require('material-ui/svg-icons/navigation/arrow-drop-down');

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _chatBubbleOutline = require('material-ui/svg-icons/communication/chat-bubble-outline');

var _chatBubbleOutline2 = _interopRequireDefault(_chatBubbleOutline);

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _Logged = require('../TomisMui/Logged');

var _Logged2 = _interopRequireDefault(_Logged);

var _CalendarView = require('../TomisMui/CalendarView');

var _CalendarView2 = _interopRequireDefault(_CalendarView);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _styles = require('../app/helpers/styles');

var _today = require('material-ui/svg-icons/action/today');

var _today2 = _interopRequireDefault(_today);

var _eventNote = require('material-ui/svg-icons/notification/event-note');

var _eventNote2 = _interopRequireDefault(_eventNote);

var _dateRange = require('material-ui/svg-icons/action/date-range');

var _dateRange2 = _interopRequireDefault(_dateRange);

var _contentCopy = require('material-ui/svg-icons/content/content-copy');

var _contentCopy2 = _interopRequireDefault(_contentCopy);

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

var _multilineChart = require('material-ui/svg-icons/editor/multiline-chart');

var _multilineChart2 = _interopRequireDefault(_multilineChart);

var _kuFrequency = require('./svg-icons/kuFrequency');

var _kuFrequency2 = _interopRequireDefault(_kuFrequency);

var _delete = require('material-ui/svg-icons/action/delete');

var _delete2 = _interopRequireDefault(_delete);

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

var setStateIsDrawerNavigationOpen = function setStateIsDrawerNavigationOpen(isOpen, state, props) {
  return { isDrawerNavigationOpen: isOpen };
};

var statusBarStyle = {
  height: '20px',
  backgroundColor: 'red'
};

var defaultProps = {
  pageTitle: 'Sample Page Title',
  isHideKuFrequencyIcon: false,
  isHideDeleteIcon: false
};

var propTypes = {
  pageTitle: _react.PropTypes.string.isRequired,
  isHideKuFrequencyIcon: _react.PropTypes.bool.isRequired,
  isHideDeleteIcon: _react.PropTypes.bool.isRequired
};

var ToolbarActionBar = function (_Component) {
  _inherits(ToolbarActionBar, _Component);

  function ToolbarActionBar(props) {
    _classCallCheck(this, ToolbarActionBar);

    var _this = _possibleConstructorReturn(this, (ToolbarActionBar.__proto__ || Object.getPrototypeOf(ToolbarActionBar)).call(this, props));

    _this.state = {
      value: 3,
      open: false,
      isDrawerNavigationOpen: false,
      isOpen: {},
      anchorEl: {}
    };

    _this.handleTouchTap = function (event) {
      // This prevents ghost click.
      event.preventDefault();
      _this.setState({
        open: true,
        anchorEl: event.currentTarget
      });
    };

    _this.handleRequestClose = function () {
      _this.setState({
        open: false
      });
    };

    _this.handleClickToggleDrawer = function (event) {
      return _this.setState(setStateIsDrawerNavigationOpen.bind(_this, !_this.state.isDrawerNavigationOpen));
    };

    _this.handleTouchTapButton = function (keyVal, event) {
      event.preventDefault();
      _this.setState(setStatePopoverOpen.bind(_this, keyVal, event.currentTarget));
    };

    _this.handleRequestCloseButton = function (keyVal) {
      _this.setState(setStatePopoverClose.bind(_this, keyVal));
    };

    _this.iconColor = (0, _styles.getActionBarIconColor)(props);
    return _this;
  }

  _createClass(ToolbarActionBar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var iconColor = this.iconColor,
          handleClickToggleDrawer = this.handleClickToggleDrawer,
          handleTouchTapButton = this.handleTouchTapButton,
          handleRequestCloseButton = this.handleRequestCloseButton;
      var _state = this.state,
          isDrawerNavigationOpen = _state.isDrawerNavigationOpen,
          isOpen = _state.isOpen,
          anchorEl = _state.anchorEl;
      var _props = this.props,
          pageTitle = _props.pageTitle,
          isHideDeleteIcon = _props.isHideDeleteIcon,
          isHideKuFrequencyIcon = _props.isHideKuFrequencyIcon;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Toolbar.Toolbar,
          { style: (0, _styles.getActionBarStyle)(this.props) },
          _react2.default.createElement(
            _Toolbar.ToolbarGroup,
            { firstChild: true },
            _react2.default.createElement(
              _IconButton2.default,
              { onTouchTap: handleClickToggleDrawer },
              _react2.default.createElement(_menu2.default, { color: (0, _styles.getAppBarIconColor)(this.props) })
            ),
            _react2.default.createElement(_Toolbar.ToolbarTitle, { text: pageTitle, style: (0, _styles.getToolbarTitleStyle)(this.props) })
          ),
          _react2.default.createElement(
            _Toolbar.ToolbarGroup,
            null,
            _react2.default.createElement(_public2.default, { color: iconColor }),
            _react2.default.createElement(
              'span',
              null,
              '\xA0\xA0'
            ),
            _react2.default.createElement(_FlatButton2.default, {
              style: (0, _styles.getActionBarPopoverStyle)(this.props),
              onTouchTap: handleTouchTapButton.bind(this, BRANCH_UNIT),
              label: 'CBP Air and Marine Headq...',
              labelStyle: (0, _styles.getActionBarLovStyle)(this.props),
              labelPosition: 'before',
              icon: _react2.default.createElement(_arrowDropDown2.default, { color: (0, _styles.getAppBarIconColor)(this.props) })
            }),
            _react2.default.createElement(
              _IconButton2.default,
              { onTouchTap: this.handleTouchTap, tooltip: 'Today' },
              _react2.default.createElement(_today2.default, { color: iconColor })
            ),
            _react2.default.createElement(
              _IconButton2.default,
              { onTouchTap: this.handleTouchTap, tooltip: 'Weekly View' },
              _react2.default.createElement(_dateRange2.default, { color: iconColor })
            ),
            _react2.default.createElement(
              _IconButton2.default,
              { onTouchTap: this.handleTouchTap, tooltip: 'Monthly View' },
              _react2.default.createElement(_eventNote2.default, { color: iconColor })
            ),
            !isHideKuFrequencyIcon && _react2.default.createElement(
              _IconButton2.default,
              { onTouchTap: this.handleTouchTap, tooltip: 'KU NOC Coverage' },
              _react2.default.createElement(_kuFrequency2.default, { color: iconColor })
            )
          ),
          _react2.default.createElement(
            _Toolbar.ToolbarGroup,
            null,
            _react2.default.createElement(
              _IconButton2.default,
              { onTouchTap: this.handleTouchTap, tooltip: 'Save' },
              _react2.default.createElement(_save2.default, { color: iconColor })
            ),
            _react2.default.createElement(
              _IconButton2.default,
              { onTouchTap: this.handleTouchTap, tooltip: 'Clone' },
              _react2.default.createElement(_contentCopy2.default, { color: iconColor })
            ),
            _react2.default.createElement(
              _IconButton2.default,
              { onTouchTap: this.handleTouchTap, tooltip: 'Cancel' },
              _react2.default.createElement(_cancel2.default, { color: iconColor })
            ),
            !isHideDeleteIcon && _react2.default.createElement(
              _IconButton2.default,
              { onTouchTap: this.handleTouchTap, tooltip: 'Delete' },
              _react2.default.createElement(_delete2.default, { color: iconColor })
            )
          )
        ),
        _react2.default.createElement(
          _Drawer2.default,
          {
            open: isDrawerNavigationOpen,
            docked: false,
            width: 350,
            onRequestChange: function onRequestChange(open) {
              return _this2.setState(setStateIsDrawerNavigationOpen.bind(_this2, open));
            }
          },
          _react2.default.createElement(_DrawerNavigation2.default, this.props)
        )
      );
    }
  }]);

  return ToolbarActionBar;
}(_react.Component);

ToolbarActionBar.defaultProps = defaultProps;
ToolbarActionBar.propTypes = propTypes;

exports.default = (0, _muiThemeable2.default)()(ToolbarActionBar);