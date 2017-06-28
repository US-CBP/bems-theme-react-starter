'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../app/helpers/styles');

var _Popover = require('material-ui/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _IconButton = require('../TomisMui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _moreHoriz = require('material-ui/svg-icons/navigation/more-horiz');

var _moreHoriz2 = _interopRequireDefault(_moreHoriz);

var _today = require('material-ui/svg-icons/action/today');

var _today2 = _interopRequireDefault(_today);

var _eventNote = require('material-ui/svg-icons/notification/event-note');

var _eventNote2 = _interopRequireDefault(_eventNote);

var _dateRange = require('material-ui/svg-icons/action/date-range');

var _dateRange2 = _interopRequireDefault(_dateRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CALENDAR_VIEW = 'CALENDAR_VIEW';

var anchorOrigin = { horizontal: 'left', vertical: 'bottom' };
var targetOrigin = { horizontal: 'left', vertical: 'top' };

var setStatePopoverOpen = function setStatePopoverOpen(keyVal, anchorEl, state, props) {
    state.isOpen[keyVal] = true;
    state.anchorEl[keyVal] = anchorEl;
};
var setStatePopoverClose = function setStatePopoverClose(keyVal, state, props) {
    state.isOpen[keyVal] = false;
};

var CalendarView = function (_Component) {
    _inherits(CalendarView, _Component);

    function CalendarView(props) {
        _classCallCheck(this, CalendarView);

        var _this = _possibleConstructorReturn(this, (CalendarView.__proto__ || Object.getPrototypeOf(CalendarView)).call(this, props));

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

    _createClass(CalendarView, [{
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
                    _IconButton2.default,
                    { onTouchTap: handleTouchTapButton.bind(this, CALENDAR_VIEW), tooltip: 'Today, Monthly, Weekly View' },
                    _react2.default.createElement(_moreHoriz2.default, { color: (0, _styles.getActionBarIconColor)(this.props) })
                ),
                _react2.default.createElement(
                    _Popover2.default,
                    {
                        open: isOpen[CALENDAR_VIEW],
                        anchorEl: anchorEl[CALENDAR_VIEW],
                        anchorOrigin: anchorOrigin,
                        targetOrigin: targetOrigin,
                        onRequestClose: handleRequestCloseButton.bind(this, CALENDAR_VIEW)
                    },
                    _react2.default.createElement(
                        _Menu2.default,
                        null,
                        _react2.default.createElement(_MenuItem2.default, { value: 1, leftIcon: _react2.default.createElement(_today2.default, null), primaryText: 'Today' }),
                        _react2.default.createElement(_MenuItem2.default, { value: 2, leftIcon: _react2.default.createElement(_eventNote2.default, null), primaryText: 'Monthly' }),
                        _react2.default.createElement(_MenuItem2.default, { value: 3, leftIcon: _react2.default.createElement(_dateRange2.default, null), primaryText: 'Weekly' })
                    )
                )
            );
        }
    }]);

    return CalendarView;
}(_react.Component);

CalendarView.muiName = 'IconMenu';
exports.default = CalendarView;