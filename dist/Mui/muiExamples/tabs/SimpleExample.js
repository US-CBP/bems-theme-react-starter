'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tabs = require('material-ui/Tabs');

var _Slider = require('material-ui/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

function handleActive(tab) {
  alert('A tab with this route property ' + tab.props['data-route'] + ' was activated.');
}

var TabsExampleSimple = function TabsExampleSimple() {
  return _react2.default.createElement(
    _Tabs.Tabs,
    null,
    _react2.default.createElement(
      _Tabs.Tab,
      { label: 'Item One' },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          { style: styles.headline },
          'Tab One'
        ),
        _react2.default.createElement(
          'p',
          null,
          'This is an example tab.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'You can put any sort of HTML or react component in here. It even keeps the component state!'
        ),
        _react2.default.createElement(_Slider2.default, { name: 'slider0', defaultValue: 0.5 })
      )
    ),
    _react2.default.createElement(
      _Tabs.Tab,
      { label: 'Item Two' },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          { style: styles.headline },
          'Tab Two'
        ),
        _react2.default.createElement(
          'p',
          null,
          'This is another example tab.'
        )
      )
    ),
    _react2.default.createElement(
      _Tabs.Tab,
      { label: 'onActive', 'data-route': '/home', onActive: handleActive },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          { style: styles.headline },
          'Tab Three'
        ),
        _react2.default.createElement(
          'p',
          null,
          'This is a third example tab.'
        )
      )
    )
  );
};

exports.default = TabsExampleSimple;