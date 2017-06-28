'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Badge = require('material-ui/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _cloudUpload = require('material-ui/svg-icons/file/cloud-upload');

var _cloudUpload2 = _interopRequireDefault(_cloudUpload);

var _folderOpen = require('material-ui/svg-icons/file/folder-open');

var _folderOpen2 = _interopRequireDefault(_folderOpen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BadgeExampleContent = function BadgeExampleContent() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Badge2.default,
      { badgeContent: _react2.default.createElement(
          _IconButton2.default,
          { tooltip: 'Backup' },
          _react2.default.createElement(_cloudUpload2.default, null)
        ) },
      _react2.default.createElement(_folderOpen2.default, null)
    ),
    _react2.default.createElement(
      _Badge2.default,
      { badgeContent: '\xA9', badgeStyle: { fontSize: 20 } },
      'Company Name'
    )
  );
};

exports.default = BadgeExampleContent;