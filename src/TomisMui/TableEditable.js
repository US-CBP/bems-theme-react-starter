import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Panel, PanelHeaderTable, PanelBody } from '../TomisMui/Panel';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../TomisMui/Table';
import Checkbox from '../TomisMui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from '../TomisMui/IconButton';
import ButtonRaisedSimplePrimary from '../TomisMui/ButtonRaisedSimplePrimary';
import TextFieldTableRowColumn from './helpers/TextFieldTableRowColumn';

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

  render() {
    const { addRow, delNoLaunchReasonRow, handleSaveTableRowColumnValue } = this;
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
                    <TableHeaderColumn tooltip="Category">Category*</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Sub-Category">Sub-Category*</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Justification">Justification*</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Delete">Delete</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={showCheckboxes} deselectOnClickaway={deselectOnClickaway} showRowHover={showRowHover} stripedRows={stripedRows}>
                  {tableData.map((row, idx) => (
                    <TableRow key={idx} selected={row.selected}>
                      <TableRowColumn><Checkbox /></TableRowColumn>
                      <TableRowColumn>{idx + 1}</TableRowColumn>
                      <TableRowColumn>
                        <TextFieldTableRowColumn
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
