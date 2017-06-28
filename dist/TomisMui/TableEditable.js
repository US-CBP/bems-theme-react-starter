'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _Panel = require('../TomisMui/Panel');

var _Table = require('../TomisMui/Table');

var _Checkbox = require('../TomisMui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _delete = require('material-ui/svg-icons/action/delete');

var _delete2 = _interopRequireDefault(_delete);

var _IconButton = require('../TomisMui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ButtonRaisedSimplePrimary = require('../TomisMui/ButtonRaisedSimplePrimary');

var _ButtonRaisedSimplePrimary2 = _interopRequireDefault(_ButtonRaisedSimplePrimary);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tableData = [{
  name: 'John Smith',
  status: 'Sample Justification 1',
  departureDt: undefined,
  departureTime: 0,
  selected: true
}, {
  name: 'Randal White',
  status: 'Sample Justification 2',
  departureDt: (0, _moment2.default)().toDate(),
  departureTime: 0,
  selected: true
}, {
  name: 'Stephanie Sanders',
  status: 'Sample Justification 3',
  departureDt: undefined,
  departureTime: 0,
  selected: true
}, {
  name: 'Steve Brown',
  status: 'Sample Justification 4',
  departureDt: (0, _moment2.default)().toDate(),
  departureTime: 0,
  selected: true
}, {
  name: 'Joyce Whitten',
  status: 'Sample Justification 5',
  departureDt: (0, _moment2.default)().subtract(2, 'months').toDate(),
  departureTime: 0,
  selected: true
}, {
  name: 'Samuel Roberts',
  status: 'Sample Justification 6',
  departureDt: undefined,
  departureTime: 0,
  selected: true
}, {
  name: 'Adam Moore',
  status: 'Sample Justification 7',
  departureDt: (0, _moment2.default)().subtract(3, 'years').toDate(),
  departureTime: 0,
  selected: true
}];

var subcategoryLovValues = ['SubcategoryAlpha', 'SubcategoryBeta', 'SubcategoryDelta'];
var subCategoryEditValue = '';
var subCategoryEditIdx = 0;
var justificationEditValue = '';
var justificationEditIdx = 0;

var initState = {
  fixedHeader: true,
  fixedFooter: false,
  stripedRows: false,
  showRowHover: true,
  selectable: false,
  multiSelectable: false,
  enableSelectAll: false,
  deselectOnClickaway: true,
  showCheckboxes: false,
  height: '500px',
  tableRowCnt: tableData.length
};

var TableEditable = function (_Component) {
  _inherits(TableEditable, _Component);

  function TableEditable(props) {
    _classCallCheck(this, TableEditable);

    var _this = _possibleConstructorReturn(this, (TableEditable.__proto__ || Object.getPrototypeOf(TableEditable)).call(this, props));

    _this.state = initState;
    _this.addRow = _this.addRow.bind(_this);
    _this.delNoLaunchReasonRow = _this.delNoLaunchReasonRow.bind(_this);
    _this.handleSaveTableRowColumnValue = _this.handleSaveTableRowColumnValue.bind(_this);
    _this.handleSaveTableRowColumnDate = _this.handleSaveTableRowColumnDate.bind(_this);
    return _this;
  }

  _createClass(TableEditable, [{
    key: 'addRow',
    value: function addRow(evt) {
      evt.stopPropagation();
      tableData.push({ name: '', status: '' });
      //force table refresh
      this.setState({ tableRowCnt: tableData.length });
    }
  }, {
    key: 'delNoLaunchReasonRow',
    value: function delNoLaunchReasonRow(idx, evt) {
      evt.stopPropagation();
      tableData.splice(idx, 1);
      //force table refresh
      this.setState({ tableRowCnt: tableData.length });
    }
  }, {
    key: 'handleSaveTableRowColumnValue',
    value: function handleSaveTableRowColumnValue(rowIdx, propertyName, newValue) {
      tableData[rowIdx][propertyName] = newValue;
      //force table refresh
      this.setState({ tableRowCnt: tableData.length });
    }
  }, {
    key: 'handleSaveTableRowColumnDate',
    value: function handleSaveTableRowColumnDate(rowIdx, propertyName, newValue) {
      tableData[rowIdx][propertyName] = newValue;
      //force table refresh
      this.setState({ tableRowCnt: tableData.length });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var addRow = this.addRow,
          delNoLaunchReasonRow = this.delNoLaunchReasonRow,
          handleSaveTableRowColumnValue = this.handleSaveTableRowColumnValue,
          handleSaveTableRowColumnDate = this.handleSaveTableRowColumnDate;
      var _state = this.state,
          height = _state.height,
          fixedHeader = _state.fixedHeader,
          fixedFooter = _state.fixedFooter,
          selectable = _state.selectable,
          multiSelectable = _state.multiSelectable,
          showCheckboxes = _state.showCheckboxes,
          deselectOnClickaway = _state.deselectOnClickaway,
          showRowHover = _state.showRowHover,
          stripedRows = _state.stripedRows;

      return _react2.default.createElement(
        'div',
        { className: 'flex-row row-spacer-24' },
        _react2.default.createElement(
          _Panel.Panel,
          null,
          _react2.default.createElement(
            _Panel.PanelHeaderTable,
            { title: 'My Table Panel Title' },
            _react2.default.createElement(_ButtonRaisedSimplePrimary2.default, { label: 'Add Row', onTouchTap: addRow })
          ),
          _react2.default.createElement(
            _Panel.PanelBody,
            null,
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _Table.Table,
                { height: height, fixedHeader: fixedHeader, fixedFooter: fixedFooter, selectable: selectable, multiSelectable: multiSelectable },
                _react2.default.createElement(
                  _Table.TableHeader,
                  { displaySelectAll: false, adjustForCheckbox: false, enableSelectAll: false },
                  _react2.default.createElement(
                    _Table.TableRow,
                    { selectable: false },
                    _react2.default.createElement(
                      _Table.TableHeaderColumn,
                      { tooltip: 'Primary' },
                      'Primary*'
                    ),
                    _react2.default.createElement(
                      _Table.TableHeaderColumn,
                      { tooltip: 'Departure Date' },
                      'Departure Date*'
                    ),
                    _react2.default.createElement(
                      _Table.TableHeaderColumn,
                      { tooltip: 'Sub-Category' },
                      'Sub-Category*'
                    ),
                    _react2.default.createElement(
                      _Table.TableHeaderColumn,
                      { tooltip: 'Justification' },
                      'Justification*'
                    ),
                    _react2.default.createElement(
                      _Table.TableHeaderColumn,
                      { tooltip: 'Delete' },
                      'Delete'
                    )
                  )
                ),
                _react2.default.createElement(
                  _Table.TableBody,
                  { displayRowCheckbox: showCheckboxes, deselectOnClickaway: deselectOnClickaway, showRowHover: showRowHover, stripedRows: stripedRows },
                  tableData.map(function (row, idx) {
                    return _react2.default.createElement(
                      _Table.TableRow,
                      { key: idx, selected: row.selected },
                      _react2.default.createElement(
                        _Table.TableRowColumn,
                        null,
                        _react2.default.createElement(_Checkbox2.default, null)
                      ),
                      _react2.default.createElement(
                        _Table.TableRowColumn,
                        null,
                        _react2.default.createElement(_Table.DatePickerTableRowColumn, {
                          hintText: 'Select Date',
                          floatingLabelText: 'Date*',
                          rowPropertyName: 'departureDt',
                          onSave: handleSaveTableRowColumnDate,
                          rowData: row,
                          rowIdx: idx
                        })
                      ),
                      _react2.default.createElement(
                        _Table.TableRowColumn,
                        null,
                        _react2.default.createElement(_Table.AutoCompleteTableRowColumn, {
                          hintText: 'Select Name',
                          floatingLabelText: 'Name*',
                          rowPropertyName: 'name',
                          onSave: handleSaveTableRowColumnValue,
                          rowData: row,
                          rowIdx: idx,
                          dataSource: subcategoryLovValues
                        })
                      ),
                      _react2.default.createElement(
                        _Table.TableRowColumn,
                        null,
                        _react2.default.createElement(_Table.TextFieldTableRowColumn, {
                          hintText: 'Type Justification',
                          floatingLabelText: 'Justification*',
                          rowPropertyName: 'status',
                          onSave: handleSaveTableRowColumnValue,
                          rowData: row,
                          rowIdx: idx
                        })
                      ),
                      _react2.default.createElement(
                        _Table.TableRowColumn,
                        null,
                        _react2.default.createElement(
                          _IconButton2.default,
                          { tooltip: 'Delete Row', onTouchTap: delNoLaunchReasonRow.bind(_this2, idx) },
                          _react2.default.createElement(_delete2.default, null)
                        )
                      )
                    );
                  })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return TableEditable;
}(_react.Component);

exports.default = (0, _muiThemeable2.default)()(TableEditable);