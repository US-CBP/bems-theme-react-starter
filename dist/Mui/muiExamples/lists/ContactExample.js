'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('material-ui/List');

var _grade = require('material-ui/svg-icons/action/grade');

var _grade2 = _interopRequireDefault(_grade);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _colors = require('material-ui/styles/colors');

var _MobileTearSheet = require('../MobileTearSheet');

var _MobileTearSheet2 = _interopRequireDefault(_MobileTearSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListExampleContacts = function ListExampleContacts() {
  return _react2.default.createElement(
    _MobileTearSheet2.default,
    null,
    _react2.default.createElement(
      _List.List,
      null,
      _react2.default.createElement(_List.ListItem, { primaryText: 'Chelsea Otakan', leftIcon: _react2.default.createElement(_grade2.default, { color: _colors.pinkA200 }), rightAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/chexee-128.jpg' }) }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Eric Hoffman', insetChildren: true, rightAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/kolage-128.jpg' }) }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'James Anderson', insetChildren: true, rightAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/jsa-128.jpg' }) }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Kerem Suer', insetChildren: true, rightAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/kerem-128.jpg' }) })
    ),
    _react2.default.createElement(_Divider2.default, { inset: true }),
    _react2.default.createElement(
      _List.List,
      null,
      _react2.default.createElement(_List.ListItem, {
        primaryText: 'Adelle Charles',
        leftAvatar: _react2.default.createElement(
          _Avatar2.default,
          { color: _colors.pinkA200, backgroundColor: _colors.transparent, style: { left: 8 } },
          'A'
        ),
        rightAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/adellecharles-128.jpg' })
      }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Adham Dannaway', insetChildren: true, rightAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/adhamdannaway-128.jpg' }) }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Allison Grayce', insetChildren: true, rightAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/allisongrayce-128.jpg' }) }),
      _react2.default.createElement(_List.ListItem, { primaryText: 'Angel Ceballos', insetChildren: true, rightAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/angelceballos-128.jpg' }) })
    )
  );
};

exports.default = ListExampleContacts;