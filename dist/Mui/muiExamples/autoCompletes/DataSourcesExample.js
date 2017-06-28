'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AutoComplete = require('material-ui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataSource1 = [{
  text: 'text-value1',
  value: _react2.default.createElement(_MenuItem2.default, { primaryText: 'text-value1', secondaryText: '\u263A' })
}, {
  text: 'text-value2',
  value: _react2.default.createElement(_MenuItem2.default, { primaryText: 'text-value2', secondaryText: '\u263A' })
}];

var dataSource2 = ['12345', '23456', '34567'];

var dataSource3 = [{ textKey: 'Some Text', valueKey: 'someFirstValue' }, { textKey: 'Some Text', valueKey: 'someSecondValue' }];
var dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey'
};

/**
 * The first example has `MenuItem`s in its data source that display on data entry.
 * The second example uses an array of values as its `dataSource`, and updates on focus.
 * Both examples have filtering disabled.
 */
var AutoCompleteExampleDataSource = function AutoCompleteExampleDataSource() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_AutoComplete2.default, { hintText: 'text-value data', filter: _AutoComplete2.default.noFilter, dataSource: dataSource1 }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_AutoComplete2.default, { floatingLabelText: 'showAllItems', filter: _AutoComplete2.default.noFilter, openOnFocus: true, dataSource: dataSource2 }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_AutoComplete2.default, {
      floatingLabelText: 'Same text, different values',
      filter: _AutoComplete2.default.noFilter,
      openOnFocus: true,
      dataSource: dataSource3,
      dataSourceConfig: dataSourceConfig
    })
  );
};

exports.default = AutoCompleteExampleDataSource;