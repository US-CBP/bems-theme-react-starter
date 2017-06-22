import React, { Component } from 'react';
import TextFieldSimple from '../../TomisMui/TextFieldSimple';
import FlatButton from '../../TomisMui/FlatButton';
import { Panel, PanelHeaderTable, PanelBody } from '../../TomisMui/Panel';
import AutoComplete from '../../TomisMui/AutoComplete';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TextFieldTableRowColumn,
  AutoCompleteTableRowColumn
} from '../../TomisMui/Table';
import Checkbox from '../../TomisMui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from '../../TomisMui/IconButton';
import Popover from '../../TomisMui/Popover';
import SvgIconArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import ButtonRaisedSimplePrimary from '../../TomisMui/ButtonRaisedSimplePrimary';

const anchorOrigin = { horizontal: 'left', vertical: 'top' };
const targetOrigin = { horizontal: 'left', vertical: 'top' };

const tableData = [
  {
    name: 'John Smith',
    status: 'Sample Justification 1',
    selected: true
  },
  {
    name: 'Randal White',
    status: 'Sample Justification 2'
  },
  {
    name: 'Stephanie Sanders',
    status: 'Sample Justification 3',
    selected: true
  },
  {
    name: 'Steve Brown',
    status: 'Sample Justification 4'
  },
  {
    name: 'Joyce Whitten',
    status: 'Sample Justification 5'
  },
  {
    name: 'Samuel Roberts',
    status: 'Sample Justification 6'
  },
  {
    name: 'Adam Moore',
    status: 'Sample Justification 7'
  }
];

const subcategoryLovValues = ['SubcategoryAlpha', 'SubcategoryBeta', 'SubcategoryDelta'];
let subCategoryEditValue = '';
let subCategoryEditIdx = 0;
let justificationEditValue = '';
let justificationEditIdx = 0;

const initState = () => {
  return {
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
};

class FlightFloatReject extends Component {
  constructor(props) {
    super(props);
    this.state = initState();
    this.handleUpdateSubCategory = this.handleUpdateSubCategory.bind(this);
    this.handleSaveSubCategory = this.handleSaveSubCategory.bind(this);
    this.handleUpdateJustification = this.handleUpdateJustification.bind(this);
    this.handleSaveJustification = this.handleSaveJustification.bind(this);
    this.addNoLaunchReasonRow = this.addNoLaunchReasonRow.bind(this);
    this.delNoLaunchReasonRow = this.delNoLaunchReasonRow.bind(this);
    this.handleSaveRejectTableRowColumnValue = this.handleSaveRejectTableRowColumnValue.bind(this);
  }

  handleUpdateSubCategory(value) {
    subCategoryEditValue = value;
  }

  handleSaveSubCategory(evt) {
    evt.stopPropagation();
    tableData[subCategoryEditIdx].name = subCategoryEditValue;
    this.handleRequestClose();
  }

  handleUpdateJustification(evt, value) {
    justificationEditValue = value;
  }

  handleSaveJustification(evt) {
    evt.stopPropagation();
    tableData[justificationEditIdx].status = justificationEditValue;
    this.handleRequestClose();
  }

  handleClickSubCategoryCell = (idx, evt) => {
    // This prevents ghost click from onTouchTap
    evt.preventDefault();
    subCategoryEditIdx = idx;
    this.setState({
      open: true,
      anchorEl: evt.currentTarget
    });
  };

  handleClickJustificationCell = (idx, evt) => {
    // This prevents ghost click from onTouchTap
    evt.preventDefault();
    justificationEditIdx = idx;
    this.setState({
      openJustification: true,
      anchorElJustification: evt.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
      openJustification: false
    });
  };

  addNoLaunchReasonRow(evt) {
    evt.stopPropagation();
    tableData.push({ name: '', status: '' });
    //force table refresh
    this.setState({ tableRowCnt: tableData.length });
  }

  delNoLaunchReasonRow(idx, evt) {
    evt.stopPropagation();
    tableData.splice(idx, 1);
    //force table refresh
    this.setState({ tableRowCnt: tableData.length });
  }

  handleSaveRejectTableRowColumnValue(rowIdx, propertyName, newValue) {
    tableData[rowIdx][propertyName] = newValue;
    //force table refresh
    this.setState({ tableRowCnt: tableData.length });
  }

  render() {
    const {
      handleClickSubCategoryCell,
      handleClickJustificationCell,
      addNoLaunchReasonRow,
      handleUpdateSubCategory,
      handleSaveSubCategory,
      handleUpdateJustification,
      handleSaveJustification,
      handleRequestClose,
      delNoLaunchReasonRow,
      handleSaveRejectTableRowColumnValue
    } = this;
    const { dataSource1, dataSource2, isPanelExpanded, openJustification, anchorElJustification } = this.state;
    const {
      height,
      fixedHeader,
      fixedFooter,
      selectable,
      multiSelectable,
      showCheckboxes,
      deselectOnClickaway,
      showRowHover,
      stripedRows,
      open,
      anchorEl
    } = this.state;
    return (
      <div className="flex-row row-spacer-24">
        <Panel>
          <PanelHeaderTable title="No Launch Reason(s)">
            <ButtonRaisedSimplePrimary label="Add No Launch Reason" onTouchTap={addNoLaunchReasonRow} />
          </PanelHeaderTable>
          <PanelBody>
            <div>
              <Table height={height} fixedHeader={fixedHeader} fixedFooter={fixedFooter} selectable={selectable} multiSelectable={multiSelectable}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
                  <TableRow selectable={false}>
                    <TableHeaderColumn tooltip="Primary">Primary*</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Category">Category*</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Sub-Category">Sub-Category*</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Justification">Justification*</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Delete">Delete</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={showCheckboxes} deselectOnClickaway={deselectOnClickaway} showRowHover={showRowHover} stripedRows={stripedRows}>
                  {tableData.map((row, idx) =>
                    <TableRow key={idx} selected={row.selected}>
                      <TableRowColumn><Checkbox /></TableRowColumn>
                      <TableRowColumn>{idx + 1}</TableRowColumn>
                      <TableRowColumn>
                        <AutoCompleteTableRowColumn
                          hintText="Select Sub-Category"
                          floatingLabelText="Sub-Category*"
                          rowPropertyName="name"
                          onSave={handleSaveRejectTableRowColumnValue}
                          rowData={row}
                          rowIdx={idx}
                          dataSource={subcategoryLovValues}
                        />
                      </TableRowColumn>
                      <TableRowColumn>
                        <TextFieldTableRowColumn
                          hintText="Type Justification"
                          floatingLabelText="Justification*"
                          rowPropertyName="status"
                          onSave={handleSaveRejectTableRowColumnValue}
                          rowData={row}
                          rowIdx={idx}
                        />
                      </TableRowColumn>
                      <TableRowColumn>
                        <IconButton tooltip="Delete Row" onTouchTap={delNoLaunchReasonRow.bind(this, idx)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableRowColumn>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </PanelBody>
        </Panel>
      </div>
    );
  }
}
export default FlightFloatReject;
