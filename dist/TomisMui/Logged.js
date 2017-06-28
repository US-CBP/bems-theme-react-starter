'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconButton = require('../TomisMui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

var _styles = require('../app/helpers/styles');

var _arrowDropDown = require('material-ui/svg-icons/navigation/arrow-drop-down');

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _Popover = require('material-ui/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _person = require('material-ui/svg-icons/social/person');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PROFILE = 'PROFILE';

var anchorOrigin = { horizontal: 'left', vertical: 'bottom' };
var targetOrigin = { horizontal: 'left', vertical: 'top' };

var setStatePopoverOpen = function setStatePopoverOpen(keyVal, anchorEl, state, props) {
    state.isOpen[keyVal] = true;
    state.anchorEl[keyVal] = anchorEl;
};
var setStatePopoverClose = function setStatePopoverClose(keyVal, state, props) {
    state.isOpen[keyVal] = false;
};

var Logged = function (_Component) {
    _inherits(Logged, _Component);

    function Logged(props) {
        _classCallCheck(this, Logged);

        var _this = _possibleConstructorReturn(this, (Logged.__proto__ || Object.getPrototypeOf(Logged)).call(this, props));

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

    _createClass(Logged, [{
        key: 'render',
        value: function render() {
            var handleClickToggleDrawer = this.handleClickToggleDrawer,
                handleTouchTapButton = this.handleTouchTapButton,
                handleRequestCloseButton = this.handleRequestCloseButton;
            var _state = this.state,
                isNavigationDrawerOpen = _state.isNavigationDrawerOpen,
                isOpen = _state.isOpen,
                anchorEl = _state.anchorEl;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_FlatButton2.default, { style: (0, _styles.getLoggedInSocialPersonStyle)(this.props), icon: _react2.default.createElement(_person2.default, { color: (0, _styles.getAppBarIconColor)(this.props) }) }),
                _react2.default.createElement(_FlatButton2.default, {
                    onTouchTap: handleTouchTapButton.bind(this, PROFILE),
                    label: 'First / Last Name',
                    labelStyle: (0, _styles.getStatusBarTitleStyle)(this.props),
                    labelPosition: 'before',
                    icon: _react2.default.createElement(_arrowDropDown2.default, { color: (0, _styles.getAppBarIconColor)(this.props) })
                }),
                _react2.default.createElement(
                    _Popover2.default,
                    {
                        open: isOpen[PROFILE],
                        anchorEl: anchorEl[PROFILE],
                        anchorOrigin: anchorOrigin,
                        targetOrigin: targetOrigin,
                        onRequestClose: handleRequestCloseButton.bind(this, PROFILE)
                    },
                    _react2.default.createElement(
                        _Menu2.default,
                        null,
                        _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Preferences' }),
                        _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: 'Logout' })
                    )
                )
            );
        }
    }]);

    return Logged;
}(_react.Component);

Logged.muiName = 'IconMenu';
exports.default = Logged;