'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _tomisLightTheme = require('../app/themes/tomisLightTheme.js');

var _tomisLightTheme2 = _interopRequireDefault(_tomisLightTheme);

require('../app/index.css');

var _FormWithAllComponents = require('./FormWithAllComponents');

var _FormWithAllComponents2 = _interopRequireDefault(_FormWithAllComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = (0, _getMuiTheme2.default)(_tomisLightTheme2.default);
/* Keep all lines END */
/* eslint-disable import/no-extraneous-dependencies */
/* Keep all lines BEGIN */


(0, _storybook.storiesOf)('TOMIS Internal', module).addDecorator(function (story) {
  var storyKind = story();
  return _react2.default.createElement(
    'div',
    { style: { display: 'flex', justifyContent: 'center' } },
    _react2.default.createElement(
      'div',
      { style: { width: '100%', minWidth: 600 } },
      _react2.default.createElement(
        _MuiThemeProvider2.default,
        { muiTheme: theme },
        storyKind
      )
    )
  );
}).add('Form with All Components', function () {
  return _react2.default.createElement(_FormWithAllComponents2.default, null);
});