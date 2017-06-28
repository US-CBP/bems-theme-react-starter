'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _home = require('material-ui/svg-icons/action/home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  smallIcon: {
    width: 36,
    height: 36
  },
  mediumIcon: {
    width: 48,
    height: 48
  },
  largeIcon: {
    width: 60,
    height: 60
  },
  small: {
    width: 72,
    height: 72,
    padding: 16
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24
  },
  large: {
    width: 120,
    height: 120,
    padding: 30
  }
};

var IconButtonExampleSize = function IconButtonExampleSize() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _IconButton2.default,
      null,
      _react2.default.createElement(_home2.default, null)
    ),
    _react2.default.createElement(
      _IconButton2.default,
      { iconStyle: styles.smallIcon, style: styles.small },
      _react2.default.createElement(_home2.default, null)
    ),
    _react2.default.createElement(
      _IconButton2.default,
      { iconStyle: styles.mediumIcon, style: styles.medium },
      _react2.default.createElement(_home2.default, null)
    ),
    _react2.default.createElement(
      _IconButton2.default,
      { iconStyle: styles.largeIcon, style: styles.large },
      _react2.default.createElement(_home2.default, null)
    )
  );
};

exports.default = IconButtonExampleSize;