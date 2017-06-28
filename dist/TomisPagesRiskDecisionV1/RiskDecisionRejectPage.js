'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _TextFieldSimple = require('../TomisMui/TextFieldSimple');

var _TextFieldSimple2 = _interopRequireDefault(_TextFieldSimple);

var _HeaderNavAction = require('../TomisMui/HeaderNavAction');

var _HeaderNavAction2 = _interopRequireDefault(_HeaderNavAction);

var _FlatButton = require('../TomisMui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Panel = require('../TomisMui/Panel');

var _AutoComplete = require('../TomisMui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _Table = require('../TomisMui/Table');

var _Checkbox = require('../TomisMui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _delete = require('material-ui/svg-icons/action/delete');

var _delete2 = _interopRequireDefault(_delete);

var _IconButton = require('../TomisMui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _RiskDecisionCore = require('./riskDecisionCommon/RiskDecisionCore');

var _RiskDecisionCore2 = _interopRequireDefault(_RiskDecisionCore);

var _Popover = require('../TomisMui/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _arrowDropDown = require('material-ui/svg-icons/navigation/arrow-drop-down');

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _ButtonRaisedSimplePrimary = require('../TomisMui/ButtonRaisedSimplePrimary');

var _ButtonRaisedSimplePrimary2 = _interopRequireDefault(_ButtonRaisedSimplePrimary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  dataSource1: [],
  open: false,
  openJustification: false,
  isPanelExpanded: true,
  tableRowCnt: tableData.length
};

var RiskDecisionRejectPage = function (_Component) {
  _inherits(RiskDecisionRejectPage, _Component);

  function RiskDecisionRejectPage(props) {
    _classCallCheck(this, RiskDecisionRejectPage);

    var _this = _possibleConstructorReturn(this, (RiskDecisionRejectPage.__proto__ || Object.getPrototypeOf(RiskDecisionRejectPage)).call(this, props));

    _this.handleClickSubCategoryCell = function (idx, evt) {
      // This prevents ghost click from onTouchTap
      evt.preventDefault();
      subCategoryEditIdx = idx;
      _this.setState({
        open: true,
        anchorEl: evt.currentTarget
      });
    };

    _this.handleClickJustificationCell = function (idx, evt) {
      // This prevents ghost click from onTouchTap
      evt.preventDefault();
      justificationEditIdx = idx;
      _this.setState({
        openJustification: true,
        anchorElJustification: evt.currentTarget
      });
    };

    _this.handleRequestClose = function () {
      _this.setState({
        open: false,
        openJustification: false
      });
    };

    _this.state = initState;
    _this.handleUpdateSubCategory = _this.handleUpdateSubCategory.bind(_this);
    _this.handleSaveSubCategory = _this.handleSaveSubCategory.bind(_this);
    _this.handleUpdateJustification = _this.handleUpdateJustification.bind(_this);
    _this.handleSaveJustification = _this.handleSaveJustification.bind(_this);
    _this.addNoLaunchReasonRow = _this.addNoLaunchReasonRow.bind(_this);
    _this.delNoLaunchReasonRow = _this.delNoLaunchReasonRow.bind(_this);
    return _this;
  }

  _createClass(RiskDecisionRejectPage, [{
    key: 'handleUpdateSubCategory',
    value: function handleUpdateSubCategory(value) {
      subCategoryEditValue = value;
    }
  }, {
    key: 'handleSaveSubCategory',
    value: function handleSaveSubCategory(evt) {
      evt.stopPropagation();
      tableData[subCategoryEditIdx].name = subCategoryEditValue;
      this.handleRequestClose();
    }
  }, {
    key: 'handleUpdateJustification',
    value: function handleUpdateJustification(evt, value) {
      justificationEditValue = value;
    }
  }, {
    key: 'handleSaveJustification',
    value: function handleSaveJustification(evt) {
      evt.stopPropagation();
      tableData[justificationEditIdx].status = justificationEditValue;
      this.handleRequestClose();
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
    key: 'delNoLaunchReasonRow',
    value: function delNoLaunchReasonRow(idx, evt) {
      evt.stopPropagation();
      tableData.splice(idx, 1);
      //force table refresh
      this.setState({ tableRowCnt: tableData.length });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var handleClickSubCategoryCell = this.handleClickSubCategoryCell,
          handleClickJustificationCell = this.handleClickJustificationCell,
          addNoLaunchReasonRow = this.addNoLaunchReasonRow,
          handleUpdateSubCategory = this.handleUpdateSubCategory,
          handleSaveSubCategory = this.handleSaveSubCategory,
          handleUpdateJustification = this.handleUpdateJustification,
          handleSaveJustification = this.handleSaveJustification,
          handleRequestClose = this.handleRequestClose,
          delNoLaunchReasonRow = this.delNoLaunchReasonRow;
      var _state = this.state,
          dataSource1 = _state.dataSource1,
          dataSource2 = _state.dataSource2,
          isPanelExpanded = _state.isPanelExpanded,
          openJustification = _state.openJustification,
          anchorElJustification = _state.anchorElJustification;
      var _state2 = this.state,
          height = _state2.height,
          fixedHeader = _state2.fixedHeader,
          fixedFooter = _state2.fixedFooter,
          selectable = _state2.selectable,
          multiSelectable = _state2.multiSelectable,
          showCheckboxes = _state2.showCheckboxes,
          deselectOnClickaway = _state2.deselectOnClickaway,
          showRowHover = _state2.showRowHover,
          stripedRows = _state2.stripedRows,
          open = _state2.open,
          anchorEl = _state2.anchorEl;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _RiskDecisionCore2.default,
          { flightStatus: 'REJECT' },
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
                            _react2.default.createElement(
                              'div',
                              { className: 'editable-cell', onClick: handleClickSubCategoryCell.bind(_this2, idx) },
                              row.name
                            ),
                            _react2.default.createElement(
                              _Popover2.default,
                              {
                                open: open,
                                anchorEl: anchorEl,
                                anchorOrigin: anchorOrigin,
                                targetOrigin: targetOrigin,
                                onRequestClose: handleRequestClose
                              },
                              _react2.default.createElement(
                                'div',
                                { className: 'editable-popover' },
                                _react2.default.createElement(_AutoComplete2.default, {
                                  dataSource: subcategoryLovValues,
                                  onUpdateInput: handleUpdateSubCategory,
                                  hintText: 'Select Sub-Category',
                                  floatingLabelText: 'Sub-Category*'
                                }),
                                _react2.default.createElement(
                                  'div',
                                  { className: 'flex-row flex-justify-end' },
                                  _react2.default.createElement(_FlatButton2.default, { label: 'Cancel', primary: true, onClick: handleRequestClose }),
                                  _react2.default.createElement(_FlatButton2.default, { label: 'Save', primary: true, onClick: handleSaveSubCategory })
                                )
                              )
                            )
                          ),
                          _react2.default.createElement(
                            _Table.TableRowColumn,
                            null,
                            _react2.default.createElement(
                              'div',
                              { className: 'editable-cell', onClick: handleClickJustificationCell.bind(_this2, idx) },
                              row.status
                            ),
                            _react2.default.createElement(
                              _Popover2.default,
                              {
                                open: openJustification,
                                anchorEl: anchorElJustification,
                                anchorOrigin: anchorOrigin,
                                targetOrigin: targetOrigin,
                                onRequestClose: handleRequestClose
                              },
                              _react2.default.createElement(
                                'div',
                                { className: 'editable-popover' },
                                _react2.default.createElement(_TextFieldSimple2.default, {
                                  onChange: handleUpdateJustification,
                                  hintText: 'Justification',
                                  fullWidth: true,
                                  floatingLabelText: 'Justification*'
                                }),
                                _react2.default.createElement(
                                  'div',
                                  { className: 'flex-row' },
                                  _react2.default.createElement(_FlatButton2.default, { label: 'Cancel', primary: true, onClick: handleRequestClose }),
                                  _react2.default.createElement(_FlatButton2.default, { label: 'Save', primary: true, onClick: handleSaveJustification })
                                )
                              )
                            )
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
        )
      );
    }
  }]);

  return RiskDecisionRejectPage;
}(_react.Component);

exports.default = (0, _muiThemeable2.default)()(RiskDecisionRejectPage);