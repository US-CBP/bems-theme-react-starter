import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Panel, PanelHeaderTable, PanelBody } from '../TomisMui/Panel';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../TomisMui/Table';
import Checkbox from '../TomisMui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from '../TomisMui/IconButton';
import ButtonRaisedSimplePrimary from '../TomisMui/ButtonRaisedSimplePrimary';
import TextFieldTableRowColumn from './helpers/TextFieldTableRowColumn';
import DatePickerTableRowColumn from './helpers/DatePickerTableRowColumn';
import TimeSpinnerTableRowColumn from './helpers/TimeSpinnerTableRowColumn';
import AutoCompleteTableRowColumn from './helpers/AutoCompleteTableRowColumn';
import moment from 'moment';

const tableData = [
  {
    name: 'John Smith',
    status: 'Sample Justification 1',
    departureDt: undefined,
    departureTime: 0,
    selected: true
  },
  {
    name: 'Randal White',
    status: 'Sample Justification 2',
    departureDt: moment().toDate(),
    departureTime: 0,
    selected: true
  },
  {
    name: 'Stephanie Sanders',
    status: 'Sample Justification 3',
    departureDt: undefined,
    departureTime: 0,
    selected: true
  },
  {
    name: 'Steve Brown',
    status: 'Sample Justification 4',
    departureDt: moment().toDate(),
    departureTime: 0,
    selected: true
  },
  {
    name: 'Joyce Whitten',
    status: 'Sample Justification 5',
    departureDt: moment().subtract(2, 'months').toDate(),
    departureTime: 0,
    selected: true
  },
  {
    name: 'Samuel Roberts',
    status: 'Sample Justification 6',
    departureDt: undefined,
    departureTime: 0,
    selected: true
  },
  {
    name: 'Adam Moore',
    status: 'Sample Justification 7',
    departureDt: moment().subtract(3, 'years').toDate(),
    departureTime: 0,
    selected: true
  }
];

const subcategoryLovValues = ['SubcategoryAlpha', 'SubcategoryBeta', 'SubcategoryDelta'];
let subCategoryEditValue = '';
let subCategoryEditIdx = 0;
let justificationEditValue = '';
let justificationEditIdx = 0;

const initState = {
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

class TableEditable extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.addRow = this.addRow.bind(this);
    this.delNoLaunchReasonRow = this.delNoLaunchReasonRow.bind(this);
    this.handleSaveTableRowColumnValue = this.handleSaveTableRowColumnValue.bind(this);
    this.handleSaveTableRowColumnDate = this.handleSaveTableRowColumnDate.bind(this);
  }

  addRow(evt) {
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

  handleSaveTableRowColumnValue(rowIdx, propertyName, newValue) {
    tableData[rowIdx][propertyName] = newValue;
    //force table refresh
    this.setState({ tableRowCnt: tableData.length });
  }

  handleSaveTableRowColumnDate(rowIdx, propertyName, newValue) {
    tableData[rowIdx][propertyName] = newValue;
    //force table refresh
    this.setState({ tableRowCnt: tableData.length });
  }

  render() {
    const { addRow, delNoLaunchReasonRow, handleSaveTableRowColumnValue, handleSaveTableRowColumnDate } = this;
    const { height, fixedHeader, fixedFooter, selectable, multiSelectable, showCheckboxes, deselectOnClickaway, showRowHover, stripedRows } = this.state;
    return (
      <div className="flex-row row-spacer-24">
        <Panel>
          <PanelHeaderTable title="My Table Panel Title">
            <ButtonRaisedSimplePrimary label="Add Row" onTouchTap={addRow} />
          </PanelHeaderTable>
          <PanelBody>
            <div>
              <Table height={height} fixedHeader={fixedHeader} fixedFooter={fixedFooter} selectable={selectable} multiSelectable={multiSelectable}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
                  <TableRow selectable={false}>
                    <TableHeaderColumn tooltip="Primary">Primary*</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Departure Date">Departure Date*</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Departure Time">Departure Date*</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Sub-Category">Sub-Category*</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Justification">Justification*</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Delete">Delete</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={showCheckboxes} deselectOnClickaway={deselectOnClickaway} showRowHover={showRowHover} stripedRows={stripedRows}>
                  {tableData.map((row, idx) => (
                    <TableRow key={idx} selected={row.selected}>
                      <TableRowColumn><Checkbox /></TableRowColumn>
                      <TableRowColumn>
                        <DatePickerTableRowColumn
                          hintText="Type Date"
                          floatingLabelText="Date*"
                          rowPropertyName="departureDt"
                          onSave={handleSaveTableRowColumnDate}
                          rowData={row}
                          rowIdx={idx}
                        />
                      </TableRowColumn>
                      <TableRowColumn>
                        <TimeSpinnerTableRowColumn
                          hintText="Type Time"
                          floatingLabelText="Time*"
                          rowPropertyName="departureTime"
                          onSave={handleSaveTableRowColumnValue}
                          rowData={row}
                          rowIdx={idx}
                        />
                      </TableRowColumn>
                      <TableRowColumn>
                        <AutoCompleteTableRowColumn
                          hintText="Type Name"
                          floatingLabelText="Name*"
                          rowPropertyName="name"
                          onSave={handleSaveTableRowColumnValue}
                          rowData={row}
                          rowIdx={idx}
                        />
                      </TableRowColumn>
                      <TableRowColumn>
                        <TextFieldTableRowColumn
                          hintText="Type Justification"
                          floatingLabelText="Justification*"
                          rowPropertyName="status"
                          onSave={handleSaveTableRowColumnValue}
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
                  ))}
                </TableBody>
              </Table>
            </div>
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default muiThemeable()(TableEditable);
