'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _folder = require('material-ui/svg-icons/file/folder');

var _folder2 = _interopRequireDefault(_folder);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _List = require('material-ui/List/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('material-ui/List/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = { margin: 5 };

/**
 * Examples of `Avatar` using an image, [Font Icon](/#/components/font-icon), [SVG Icon](/#/components/svg-icon)
 * and "Letter" (string), with and without custom colors at the default size (`40dp`) and an alternate size (`30dp`).
 */
var AvatarExampleSimple = function AvatarExampleSimple() {
  return _react2.default.createElement(
    _List2.default,
    null,
    _react2.default.createElement(
      _ListItem2.default,
      { disabled: true, leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/uxceo-128.jpg' }) },
      'Image Avatar'
    ),
    _react2.default.createElement(
      _ListItem2.default,
      { disabled: true, leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/uxceo-128.jpg', size: 30, style: style }) },
      'Image Avatar with custom size'
    ),
    _react2.default.createElement(
      _ListItem2.default,
      { disabled: true, leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-communication-voicemail' }) }) },
      'FontIcon Avatar'
    ),
    _react2.default.createElement(
      _ListItem2.default,
      {
        disabled: true,
        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-communication-voicemail' }), color: _colors.blue300, backgroundColor: _colors.indigo900, size: 30, style: style })
      },
      'FontIcon Avatar with custom colors and size'
    ),
    _react2.default.createElement(
      _ListItem2.default,
      { disabled: true, leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_folder2.default, null) }) },
      'SvgIcon Avatar'
    ),
    _react2.default.createElement(
      _ListItem2.default,
      { disabled: true, leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_folder2.default, null), color: _colors.orange200, backgroundColor: _colors.pink400, size: 30, style: style }) },
      'SvgIcon Avatar with custom colors and size'
    ),
    _react2.default.createElement(
      _ListItem2.default,
      { disabled: true, leftAvatar: _react2.default.createElement(
          _Avatar2.default,
          null,
          'A'
        ) },
      'Letter Avatar'
    ),
    _react2.default.createElement(
      _ListItem2.default,
      {
        disabled: true,
        leftAvatar: _react2.default.createElement(
          _Avatar2.default,
          { color: _colors.deepOrange300, backgroundColor: _colors.purple500, size: 30, style: style },
          'A'
        )
      },
      'Letter Avatar with custom colors and size'
    )
  );
};

exports.default = AvatarExampleSimple;