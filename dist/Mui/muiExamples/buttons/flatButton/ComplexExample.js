'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _android = require('material-ui/svg-icons/action/android');

var _android2 = _interopRequireDefault(_android);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  uploadButton: {
    verticalAlign: 'middle'
  },
  uploadInput: {
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

var FlatButtonExampleComplex = function FlatButtonExampleComplex() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _FlatButton2.default,
      { label: 'Choose an Image', labelPosition: 'before', style: styles.uploadButton, containerElement: 'label' },
      _react2.default.createElement('input', { type: 'file', style: styles.uploadInput })
    ),
    _react2.default.createElement(_FlatButton2.default, { label: 'Label before', labelPosition: 'before', primary: true, icon: _react2.default.createElement(_android2.default, null) }),
    _react2.default.createElement(_FlatButton2.default, {
      href: 'https://github.com/callemall/material-ui',
      target: '_blank',
      label: 'GitHub Link',
      secondary: true,
      icon: _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-custom-github' })
    })
  );
};

exports.default = FlatButtonExampleComplex;