'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AutoComplete = require('material-ui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'White'];

var fruit = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Blood Orange', 'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry', 'Coconut', 'Cranberry', 'Clementine', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava', 'Honeydew', 'Huckleberry', 'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry', 'Kiwi fruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Lychee', 'Nectarine', 'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine', 'Olive', 'Orange', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple', 'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen', 'Quince', 'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant', 'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry', 'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine', 'Ugli fruit', 'Watermelon'];

/**
 * Two examples of filtering. The first uses `caseInsensitiveFilter`, the second uses `fuzzyFilter`,
 * and limits the number of results displayed using the `maxSearchResults` property.
 */
var AutoCompleteExampleFilters = function AutoCompleteExampleFilters() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_AutoComplete2.default, { floatingLabelText: 'Type \'r\', case insensitive', filter: _AutoComplete2.default.caseInsensitiveFilter, dataSource: colors }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_AutoComplete2.default, { floatingLabelText: 'Type \'peah\', fuzzy search', filter: _AutoComplete2.default.fuzzyFilter, dataSource: fruit, maxSearchResults: 5 })
  );
};

exports.default = AutoCompleteExampleFilters;