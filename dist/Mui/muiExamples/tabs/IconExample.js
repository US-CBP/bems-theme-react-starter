'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tabs = require('material-ui/Tabs');

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _flightTakeoff = require('material-ui/svg-icons/action/flight-takeoff');

var _flightTakeoff2 = _interopRequireDefault(_flightTakeoff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabsExampleIcon = function TabsExampleIcon() {
  return _react2.default.createElement(
    _Tabs.Tabs,
    null,
    _react2.default.createElement(_Tabs.Tab, { icon: _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-action-home' }) }),
    _react2.default.createElement(_Tabs.Tab, { icon: _react2.default.createElement(_flightTakeoff2.default, null) }),
    _react2.default.createElement(_Tabs.Tab, { icon: _react2.default.createElement(
        _FontIcon2.default,
        { className: 'material-icons' },
        'favorite'
      ) })
  );
};

exports.default = TabsExampleIcon;