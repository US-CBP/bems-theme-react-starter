'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('material-ui/Table');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableExampleSimple = function TableExampleSimple() {
  return _react2.default.createElement(
    _Table.Table,
    null,
    _react2.default.createElement(
      _Table.TableHeader,
      null,
      _react2.default.createElement(
        _Table.TableRow,
        null,
        _react2.default.createElement(
          _Table.TableHeaderColumn,
          null,
          'ID'
        ),
        _react2.default.createElement(
          _Table.TableHeaderColumn,
          null,
          'Name'
        ),
        _react2.default.createElement(
          _Table.TableHeaderColumn,
          null,
          'Status'
        )
      )
    ),
    _react2.default.createElement(
      _Table.TableBody,
      null,
      _react2.default.createElement(
        _Table.TableRow,
        null,
        _react2.default.createElement(
          _Table.TableRowColumn,
          null,
          '1'
        ),
        _react2.default.createElement(
          _Table.TableRowColumn,
          null,
          'John Smith'
        ),
        _react2.default.createElement(
          _Table.TableRowColumn,
          null,
          'Employed'
        )
      ),
      _react2.default.createElement(
        _Table.TableRow,
        null,
        _react2.default.createElement(
          _Table.TableRowColumn,
          null,
          '2'
        ),
        _react2.default.createElement(
          _Table.TableRowColumn,
          null,
          'Randal White'
        ),
        _react2.default.createElement(
          _Table.TableRowColumn,
          null,
          'Unemployed'
        )
      ),
      _react2.default.createElement(
        _Table.TableRow,
        null,
        _react2.default.createElement(
          _Table.TableRowColumn,
          null,
          '3'
        ),
        _react2.default.createElement(
          _Table.TableRowColumn,
          null,
          'Stephanie Sanders'
        ),
        _react2.default.createElement(
          _Table.TableRowColumn,
          null,
          'Employed'
        )
      ),
      _react2.default.createElement(
        _Table.TableRow,
        null,
        _react2.default.createElement(
          _Table.TableRowColumn,
          null,
          '4'
        ),
        _react2.default.createElement(
          _Table.TableRowColumn,
          null,
          'Steve Brown'
        ),
        _react2.default.createElement(
          _Table.TableRowColumn,
          null,
          'Employed'
        )
      )
    )
  );
};

exports.default = TableExampleSimple;