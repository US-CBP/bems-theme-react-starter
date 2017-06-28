'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('material-ui/List');

var _info = require('material-ui/svg-icons/action/info');

var _info2 = _interopRequireDefault(_info);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _folder = require('material-ui/svg-icons/file/folder');

var _folder2 = _interopRequireDefault(_folder);

var _assignment = require('material-ui/svg-icons/action/assignment');

var _assignment2 = _interopRequireDefault(_assignment);

var _colors = require('material-ui/styles/colors');

var _insertChart = require('material-ui/svg-icons/editor/insert-chart');

var _insertChart2 = _interopRequireDefault(_insertChart);

var _MobileTearSheet = require('../MobileTearSheet');

var _MobileTearSheet2 = _interopRequireDefault(_MobileTearSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListExampleFolder = function ListExampleFolder() {
  return _react2.default.createElement(
    _MobileTearSheet2.default,
    null,
    _react2.default.createElement(
      _List.List,
      null,
      _react2.default.createElement(
        _Subheader2.default,
        { inset: true },
        'Folders'
      ),
      _react2.default.createElement(_List.ListItem, { leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_folder2.default, null) }), rightIcon: _react2.default.createElement(_info2.default, null), primaryText: 'Photos', secondaryText: 'Jan 9, 2014' }),
      _react2.default.createElement(_List.ListItem, { leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_folder2.default, null) }), rightIcon: _react2.default.createElement(_info2.default, null), primaryText: 'Recipes', secondaryText: 'Jan 17, 2014' }),
      _react2.default.createElement(_List.ListItem, { leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_folder2.default, null) }), rightIcon: _react2.default.createElement(_info2.default, null), primaryText: 'Work', secondaryText: 'Jan 28, 2014' })
    ),
    _react2.default.createElement(_Divider2.default, { inset: true }),
    _react2.default.createElement(
      _List.List,
      null,
      _react2.default.createElement(
        _Subheader2.default,
        { inset: true },
        'Files'
      ),
      _react2.default.createElement(_List.ListItem, {
        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_assignment2.default, null), backgroundColor: _colors.blue500 }),
        rightIcon: _react2.default.createElement(_info2.default, null),
        primaryText: 'Vacation itinerary',
        secondaryText: 'Jan 20, 2014'
      }),
      _react2.default.createElement(_List.ListItem, {
        leftAvatar: _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(_insertChart2.default, null), backgroundColor: _colors.yellow600 }),
        rightIcon: _react2.default.createElement(_info2.default, null),
        primaryText: 'Kitchen remodel',
        secondaryText: 'Jan 10, 2014'
      })
    )
  );
};

exports.default = ListExampleFolder;