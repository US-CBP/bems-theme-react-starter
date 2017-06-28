'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('../TomisMui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require('../TomisMui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _search = require('react-material-icons/icons/action/search');

var _search2 = _interopRequireDefault(_search);

var _styles = require('../app/helpers/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function Search(props) {
        return _react2.default.createElement(_TextField2.default, { hintText: 'Search' });
};

Search.muiName = 'IconMenu';
exports.default = Search;
/*<TextField
        inputStyle={getTextFieldAlternateTextStyle(props)}
        hintText="Search"
        hintStyle={getTextFieldAlternateTextStyle(props)}
        underlineFocusStyle={getTextFieldAlternateTextStyle(props)}
        underlineStyle={getTextFieldAlternateTextStyle(props)}
    />*/