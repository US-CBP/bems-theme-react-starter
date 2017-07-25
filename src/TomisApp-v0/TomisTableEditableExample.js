import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeaderTable, PanelBody } from 'TomisApp/TomisPanel';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TomisTextFieldTableRowColumn,
  TomisDatePickerTableRowColumn,
  TomisSelectTableRowColumn,
  TomisDurationTableRowColumn
} from 'TomisApp/TomisTable';
import Checkbox from 'TomisApp/TomisCheckbox';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import TomisIconButton from 'TomisApp/TomisIconButton';
import ButtonRaisedSimplePrimary from 'TomisApp/TomisButtonRaisedSimplePrimary';
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
  tableRowCnt: tableData.length
};

class TomisTableEditableExample extends Component {
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
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn tooltip="Primary">Primary*</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Departure Date">Departure Date*</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Sub-Category">Sub-Category*</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Justification">Justification*</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Delete">Delete</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((row, idx) =>
                    <TableRow key={idx} selected={row.selected}>
                      <TableRowColumn>
                        <Checkbox />
                      </TableRowColumn>
                      <TableRowColumn>
                        <TomisDatePickerTableRowColumn
                          hintText="Select Date"
                          floatingLabelText="Date*"
                          rowPropertyName="departureDt"
                          onSave={handleSaveTableRowColumnDate}
                          rowData={row}
                          rowIdx={idx}
                          isCloneable={true}
                          disabledClone={true}
                        />
                      </TableRowColumn>
                      <TableRowColumn>
                        <TomisSelectTableRowColumn
                          hintText="Select Name"
                          floatingLabelText="Name*"
                          rowPropertyName="name"
                          onSave={handleSaveTableRowColumnValue}
                          rowData={row}
                          rowIdx={idx}
                          dataSource={subcategoryLovValues}
                          isCloneable={true}
                        />
                      </TableRowColumn>
                      <TableRowColumn>
                        <TomisDurationTableRowColumn
                          hintText="Type Justification"
                          floatingLabelText="Justification*"
                          rowPropertyName="status"
                          onSave={handleSaveTableRowColumnValue}
                          rowData={row}
                          rowIdx={idx}
                        />
                      </TableRowColumn>
                      <TableRowColumn>
                        <TomisIconButton tooltip="Delete Row" onTouchTap={delNoLaunchReasonRow.bind(this, idx)}>
                          <TomisFontIcon name="delete" />
                        </TomisIconButton>
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

export default TomisTableEditableExample;
