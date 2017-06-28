'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextFieldSimple = require('../../TomisMui/TextFieldSimple');

var _TextFieldSimple2 = _interopRequireDefault(_TextFieldSimple);

var _FlatButton = require('../../TomisMui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Panel = require('../../TomisMui/Panel');

var _AutoComplete = require('../../TomisMui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _Table = require('../../TomisMui/Table');

var _Checkbox = require('../../TomisMui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _delete = require('material-ui/svg-icons/action/delete');

var _delete2 = _interopRequireDefault(_delete);

var _IconButton = require('../../TomisMui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Popover = require('material-ui/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _arrowDropDown = require('material-ui/svg-icons/navigation/arrow-drop-down');

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _ButtonRaisedSimplePrimary = require('../../TomisMui/ButtonRaisedSimplePrimary');

var _ButtonRaisedSimplePrimary2 = _interopRequireDefault(_ButtonRaisedSimplePrimary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import TextFieldTableRowColumn from '../TomisMui/helpers/TextFieldTableRowColumn';
// import AutoCompleteTableRowColumn from '../TomisMui/helpers/AutoCompleteTableRowColumn';

var anchorOrigin = { horizontal: 'left', vertical: 'top' };
var targetOrigin = { horizontal: 'left', vertical: 'top' };

var tableData = [{
  name: 'John Smith',
  status: 'Sample Justification 1',
  selected: true
}, {
  name: 'Randal White',
  status: 'Sample Justification 2'
}, {
  name: 'Stephanie Sanders',
  status: 'Sample Justification 3',
  selected: true
}, {
  name: 'Steve Brown',
  status: 'Sample Justification 4'
}, {
  name: 'Joyce Whitten',
  status: 'Sample Justification 5'
}, {
  name: 'Samuel Roberts',
  status: 'Sample Justification 6'
}, {
  name: 'Adam Moore',
  status: 'Sample Justification 7'
}];

var caseInformationTableData = [{
  caseNumber: 'Case# 3389473289',
  agentFullName: 'John Smith',
  agentNumber: '#BestAgent',
  caseDescription: 'Case Desc'
}, {
  caseNumber: 'Case# 3389473289',
  agentFullName: 'John Smith',
  agentNumber: '#BestAgent',
  caseDescription: 'Case Desc'
}, {
  caseNumber: 'Case# 3389473289',
  agentFullName: 'John Smith',
  agentNumber: '#BestAgent',
  caseDescription: 'Case Desc'
}, {
  caseNumber: 'Case# 3389473289',
  agentFullName: 'John Smith',
  agentNumber: '#BestAgent',
  caseDescription: 'Case Desc'
}, {
  caseNumber: 'Case# 3389473289',
  agentFullName: 'John Smith',
  agentNumber: '#BestAgent',
  caseDescription: 'Case Desc'
}, {
  caseNumber: 'Case# 3389473289',
  agentFullName: 'John Smith',
  agentNumber: '#BestAgent',
  caseDescription: 'Case Desc'
}, {
  caseNumber: 'Case# 3389473289',
  agentFullName: 'John Smith',
  agentNumber: '#BestAgent',
  caseDescription: 'Case Desc'
}];

var subcategoryLovValues = ['SubcategoryAlpha', 'SubcategoryBeta', 'SubcategoryDelta'];

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
  tableRowCnt: tableData.length,
  caseInforomationTableRowCnt: caseInformationTableData.length
};

var ConsolidatedReject = function (_Component) {
  _inherits(ConsolidatedReject, _Component);

  function ConsolidatedReject(props) {
    _classCallCheck(this, ConsolidatedReject);

    var _this = _possibleConstructorReturn(this, (ConsolidatedReject.__proto__ || Object.getPrototypeOf(ConsolidatedReject)).call(this, props));

    _this.state = initState;
    _this.addCaseInformationRow = _this.addCaseInformationRow.bind(_this);
    _this.delCaseInformationRow = _this.delCaseInformationRow.bind(_this);
    _this.addNoLaunchReasonRow = _this.addNoLaunchReasonRow.bind(_this);
    _this.delNoLaunchReasonRow = _this.delNoLaunchReasonRow.bind(_this);
    _this.handleSaveTableRowColumnValue = _this.handleSaveTableRowColumnValue.bind(_this);
    _this.handleSaveCaseInformationTableRowColumnValue = _this.handleSaveCaseInformationTableRowColumnValue.bind(_this);
    return _this;
  }

  _createClass(ConsolidatedReject, [{
    key: 'addCaseInformationRow',
    value: function addCaseInformationRow(evt) {
      evt.stopPropagation();
      caseInformationTableData.push({ name: '', status: '' });
      //force table refresh
      this.setState({ caseInforomationTableRowCnt: caseInformationTableData.length });
    }
  }, {
    key: 'addNoLaunchReasonRow',
    value: function addNoLaunchReasonRow(evt) {
      evt.stopPropagation();
      tableData.push({ name: '', status: '' });
      //force table refresh
      this.setState({ tableRowCnt: tableData.length });
    }
  }, {
    key: 'delCaseInformationRow',
    value: function delCaseInformationRow(idx, evt) {
      evt.stopPropagation();
      caseInformationTableData.splice(idx, 1);
      //force table refresh
      this.setState({ caseInforomationTableRowCnt: caseInformationTableData.length });
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
    key: 'handleSaveCaseInformationTableRowColumnValue',
    value: function handleSaveCaseInformationTableRowColumnValue(rowIdx, propertyName, newValue) {
      caseInformationTableData[rowIdx][propertyName] = newValue;
      //force table refresh
      this.setState({ tableRowCnt: caseInformationTableData.length });
    }
  }, {
    key: 'handleSaveTableRowColumnValue',
    value: function handleSaveTableRowColumnValue(rowIdx, propertyName, newValue) {
      tableData[rowIdx][propertyName] = newValue;
      //force table refresh
      this.setState({ tableRowCnt: tableData.length });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var addCaseInformationRow = this.addCaseInformationRow,
          addNoLaunchReasonRow = this.addNoLaunchReasonRow,
          delCaseInformationRow = this.delCaseInformationRow,
          delNoLaunchReasonRow = this.delNoLaunchReasonRow,
          handleSaveCaseInformationTableRowColumnValue = this.handleSaveCaseInformationTableRowColumnValue,
          handleSaveTableRowColumnValue = this.handleSaveTableRowColumnValue;
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
        null,
        _react2.default.createElement(
          'div',
          { className: 'flex-row row-spacer-24' },
          _react2.default.createElement(
            _Panel.Panel,
            null,
            _react2.default.createElement(
              _Panel.PanelHeaderTable,
              { title: 'Case Information' },
              _react2.default.createElement(_ButtonRaisedSimplePrimary2.default, { label: 'Add Case Number', onTouchTap: addCaseInformationRow })
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
                        { tooltip: 'Case Number' },
                        'Case Number*'
                      ),
                      _react2.default.createElement(
                        _Table.TableHeaderColumn,
                        { tooltip: 'Agent Full Name' },
                        'Agent Full Name'
                      ),
                      _react2.default.createElement(
                        _Table.TableHeaderColumn,
                        { tooltip: 'Agent Number' },
                        'Agent Number'
                      ),
                      _react2.default.createElement(
                        _Table.TableHeaderColumn,
                        { tooltip: 'Case Description' },
                        'Case Description'
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
                    {
                      displayRowCheckbox: showCheckboxes,
                      deselectOnClickaway: deselectOnClickaway,
                      showRowHover: showRowHover,
                      stripedRows: stripedRows
                    },
                    caseInformationTableData.map(function (row, idx) {
                      return _react2.default.createElement(
                        _Table.TableRow,
                        { key: idx, selected: row.selected },
                        _react2.default.createElement(
                          _Table.TableRowColumn,
                          null,
                          _react2.default.createElement(_Table.TextFieldTableRowColumn, {
                            hintText: 'Type Case Number',
                            floatingLabelText: 'Case Number*',
                            rowPropertyName: 'caseNumber',
                            onSave: handleSaveCaseInformationTableRowColumnValue,
                            rowData: row,
                            rowIdx: idx
                          })
                        ),
                        _react2.default.createElement(
                          _Table.TableRowColumn,
                          null,
                          _react2.default.createElement(_Table.TextFieldTableRowColumn, {
                            hintText: 'Type Agent Full Name',
                            floatingLabelText: 'Agent Full Name',
                            rowPropertyName: 'agentFullName',
                            onSave: handleSaveCaseInformationTableRowColumnValue,
                            rowData: row,
                            rowIdx: idx
                          })
                        ),
                        _react2.default.createElement(
                          _Table.TableRowColumn,
                          null,
                          _react2.default.createElement(_Table.TextFieldTableRowColumn, {
                            hintText: 'Type Agent Number',
                            floatingLabelText: 'Agent Number',
                            rowPropertyName: 'agentNumber',
                            onSave: handleSaveCaseInformationTableRowColumnValue,
                            rowData: row,
                            rowIdx: idx
                          })
                        ),
                        _react2.default.createElement(
                          _Table.TableRowColumn,
                          null,
                          _react2.default.createElement(_Table.TextFieldTableRowColumn, {
                            hintText: 'Type Case Description',
                            floatingLabelText: 'Case Description',
                            rowPropertyName: 'caseDescription',
                            onSave: handleSaveCaseInformationTableRowColumnValue,
                            rowData: row,
                            rowIdx: idx
                          })
                        ),
                        _react2.default.createElement(
                          _Table.TableRowColumn,
                          null,
                          _react2.default.createElement(
                            _IconButton2.default,
                            { tooltip: 'Delete Row', onTouchTap: delCaseInformationRow.bind(_this2, idx) },
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
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'flex-row row-spacer-24' },
          _react2.default.createElement(
            _Panel.Panel,
            null,
            _react2.default.createElement(
              _Panel.PanelHeaderTable,
              { title: 'No Launch Reason(s)' },
              _react2.default.createElement(_ButtonRaisedSimplePrimary2.default, { label: 'Add No Launch Reason', onTouchTap: addNoLaunchReasonRow })
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
                        { tooltip: 'Category' },
                        'Category*'
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
                    {
                      displayRowCheckbox: showCheckboxes,
                      deselectOnClickaway: deselectOnClickaway,
                      showRowHover: showRowHover,
                      stripedRows: stripedRows
                    },
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
                          idx + 1
                        ),
                        _react2.default.createElement(
                          _Table.TableRowColumn,
                          null,
                          _react2.default.createElement(_Table.AutoCompleteTableRowColumn, {
                            hintText: 'Select Sub-Category',
                            floatingLabelText: 'Sub-Category*',
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
        )
      );
    }
  }]);

  return ConsolidatedReject;
}(_react.Component);

exports.default = ConsolidatedReject;