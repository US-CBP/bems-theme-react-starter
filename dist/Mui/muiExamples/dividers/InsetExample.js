'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _List = require('material-ui/List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DividerExampleList = function DividerExampleList() {
  return _react2.default.createElement(
    _Paper2.default,
    { zDepth: 2 },
    _react2.default.createElement(
      _List.List,
      null,
      _react2.default.createElement(_List.ListItem, { insetChildren: true, primaryText: 'Janet Perkins Bennet' }),
      _react2.default.createElement(_List.ListItem, { insetChildren: true, primaryText: 'Peter Carlsson' })
    ),
    _react2.default.createElement(_Divider2.default, { inset: true }),
    _react2.default.createElement(
      _List.List,
      null,
      _react2.default.createElement(_List.ListItem, { insetChildren: true, primaryText: 'Aaron Bennet' }),
      _react2.default.createElement(_List.ListItem, { insetChildren: true, primaryText: 'Abbey Christensen' })
    )
  );
};

exports.default = DividerExampleList;