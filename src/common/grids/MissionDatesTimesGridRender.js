import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  TomisTimeSpinnerTableRowColumn,
  TomisDurationTableRowColumn
} from 'TomisApp/TomisTable';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'TomisApp/TomisIconButton';
import ButtonRaisedSimplePrimary from 'TomisApp/TomisButtonRaisedSimplePrimary';

const propTypes = {
  tableData: PropTypes.array.isRequired,
  addRow: PropTypes.func.isRequired,
  delRow: PropTypes.func.isRequired,
  handleSaveTableRowColumnValue: PropTypes.func.isRequired,
  handleSaveTableRowColumnDate: PropTypes.func.isRequired
};

class MissionDatesTimesGridRender extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tableData, addRow, delRow, handleSaveTableRowColumnValue, handleSaveTableRowColumnDate } = this.props;
    return (
      <div>
        <Table>
          <TableHeader style={{ height: '100%' }}>
            <TableRow>
              <TableHeaderColumn tooltip="MSN #">MSN #</TableHeaderColumn>
              <TableHeaderColumn tooltip="Mission Description">
                Mission<br />Description
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Date (Local)">
                Date<br />(Local)
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Start Time (Local)">
                Start Time<br /> (Local)
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Hours">
                Duration<br />HH + MM
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="End Time (Local)">
                End Time<br /> (Local)
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Delete">Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, idx) =>
              <TableRow key={idx}>
                <TableRowColumn>
                  <div>
                    {row.msnNbr}
                  </div>
                </TableRowColumn>
                <TableRowColumn>
                  <TomisTextFieldTableRowColumn
                    hintText="Mission Description"
                    floatingLabelText="Mission Description*"
                    rowPropertyName="msnDesc"
                    onSave={handleSaveTableRowColumnValue}
                    rowData={row}
                    rowIdx={idx}
                  />
                </TableRowColumn>
                <TableRowColumn>
                  <TomisDatePickerTableRowColumn
                    hintText="Select Date"
                    floatingLabelText="Date*"
                    rowPropertyName="startDate"
                    onSave={handleSaveTableRowColumnDate}
                    rowData={row}
                    rowIdx={idx}
                  />
                </TableRowColumn>
                <TableRowColumn>
                  <TomisTimeSpinnerTableRowColumn
                    hintText="Start Time"
                    floatingLabelText="Start Time*"
                    rowPropertyName="startTime"
                    onSave={handleSaveTableRowColumnValue}
                    rowData={row}
                    rowIdx={idx}
                  />
                </TableRowColumn>
                <TableRowColumn>
                  <TomisDurationTableRowColumn rowPropertyName="duration" onSave={handleSaveTableRowColumnValue} rowData={row} rowIdx={idx} />
                </TableRowColumn>
                <TableRowColumn>
                  <TomisTimeSpinnerTableRowColumn
                    hintText="End Time"
                    floatingLabelText="End Time*"
                    rowPropertyName="endTime"
                    onSave={handleSaveTableRowColumnValue}
                    rowData={row}
                    rowIdx={idx}
                  />
                </TableRowColumn>
                <TableRowColumn>
                  {(idx > 0 ? true : false) &&
                    <IconButton tooltip="Delete Row" onTouchTap={delRow.bind(this, idx)}>
                      <DeleteIcon />
                    </IconButton>}
                </TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

MissionDatesTimesGridRender.propTypes = propTypes;
export default MissionDatesTimesGridRender;
