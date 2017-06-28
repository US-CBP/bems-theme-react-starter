'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tabs = require('material-ui/Tabs');

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _personPin = require('material-ui/svg-icons/maps/person-pin');

var _personPin2 = _interopRequireDefault(_personPin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabsExampleIconText = function TabsExampleIconText() {
  return _react2.default.createElement(
    _Tabs.Tabs,
    null,
    _react2.default.createElement(_Tabs.Tab, { icon: _react2.default.createElement(
        _FontIcon2.default,
        { className: 'material-icons' },
        'phone'
      ), label: 'RECENTS' }),
    _react2.default.createElement(_Tabs.Tab, { icon: _react2.default.createElement(
        _FontIcon2.default,
        { className: 'material-icons' },
        'favorite'
      ), label: 'FAVORITES' }),
    _react2.default.createElement(_Tabs.Tab, { icon: _react2.default.createElement(_personPin2.default, null), label: 'NEARBY' })
  );
};

exports.default = TabsExampleIconText;