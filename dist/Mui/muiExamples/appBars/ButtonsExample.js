'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _close = require('material-ui/svg-icons/navigation/close');

var _close2 = _interopRequireDefault(_close);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

var styles = {
  title: {
    cursor: 'pointer'
  }
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
var AppBarExampleIconButton = function AppBarExampleIconButton() {
  return _react2.default.createElement(_AppBar2.default, {
    title: _react2.default.createElement(
      'span',
      { style: styles.title },
      'Title'
    ),
    onTitleTouchTap: handleTouchTap,
    iconElementLeft: _react2.default.createElement(
      _IconButton2.default,
      null,
      _react2.default.createElement(_close2.default, null)
    ),
    iconElementRight: _react2.default.createElement(_FlatButton2.default, { label: 'Save' })
  });
};

exports.default = AppBarExampleIconButton;