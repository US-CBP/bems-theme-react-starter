'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _android = require('material-ui/svg-icons/action/android');

var _android2 = _interopRequireDefault(_android);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  button: {
    margin: 12
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
};

var RaisedButtonExampleComplex = function RaisedButtonExampleComplex() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _RaisedButton2.default,
      { label: 'Choose an Image', labelPosition: 'before', style: styles.button, containerElement: 'label' },
      _react2.default.createElement('input', { type: 'file', style: styles.exampleImageInput })
    ),
    _react2.default.createElement(_RaisedButton2.default, { label: 'Label before', labelPosition: 'before', primary: true, icon: _react2.default.createElement(_android2.default, null), style: styles.button }),
    _react2.default.createElement(_RaisedButton2.default, {
      href: 'https://github.com/callemall/material-ui',
      target: '_blank',
      label: 'Github Link',
      secondary: true,
      style: styles.button,
      icon: _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-custom-github' })
    })
  );
};

exports.default = RaisedButtonExampleComplex;