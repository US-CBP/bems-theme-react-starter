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
  TomisSelectTableRowColumn,
  TomisTimeSpinnerTableRowColumn,
  TomisDurationTableRowColumn
} from 'TomisApp/TomisTable';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import DragHandleIcon from 'material-ui/svg-icons/editor/drag-handle';
import IconButton from 'TomisApp/TomisIconButton';
import ButtonRaisedSimplePrimary from 'TomisApp/TomisButtonRaisedSimplePrimary';

const propTypes = {
  tableData: PropTypes.array.isRequired,
  subcategoryLovValues: PropTypes.array.isRequired,
  addRow: PropTypes.func.isRequired,
  delRow: PropTypes.func.isRequired,
  handleSaveTableRowColumnValue: PropTypes.func.isRequired,
  handleSaveTableRowColumnDate: PropTypes.func.isRequired
};

class MissionDatesTimesUasFedGridRender extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tableData, addRow, delRow, handleSaveTableRowColumnValue, handleSaveTableRowColumnDate, subcategoryLovValues } = this.props;
    return (
      <div>
        <Table>
          <TableHeader style={{ height: '100%' }}>
            <TableRow>
              <TableHeaderColumn tooltip="" />
              <TableHeaderColumn tooltip="Site Type">Site Type</TableHeaderColumn>
              <TableHeaderColumn tooltip="Site Name">Site Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="Date (Zulu)">
                Date<br />(Zulu)
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Time (Local)">
                Time<br /> (Zulu)
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Hours">
                Duration<br />HH + MM
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Delete">Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, idx) =>
              <TableRow key={idx}>
                <TableRowColumn>
                  <div>
                    {row.draggable && <DragHandleIcon />}
                  </div>
                </TableRowColumn>
                <TableRowColumn>
                  <TomisTextFieldTableRowColumn
                    hintText="Site Type"
                    floatingLabelText="Site Type"
                    rowPropertyName="siteType"
                    onSave={handleSaveTableRowColumnValue}
                    rowData={row}
                    rowIdx={idx}
                  />
                </TableRowColumn>
                <TableRowColumn>
                  <TomisSelectTableRowColumn
                    hintText="Site Name"
                    floatingLabelText="Site Name*"
                    rowPropertyName="siteName"
                    onSave={handleSaveTableRowColumnValue}
                    rowData={row}
                    rowIdx={idx}
                    dataSource={subcategoryLovValues}
                  />
                </TableRowColumn>
                <TableRowColumn>
                  <TomisDatePickerTableRowColumn
                    hintText="Date (Zulu)"
                    floatingLabelText="Date (Zulu)"
                    rowPropertyName="startDate"
                    onSave={handleSaveTableRowColumnDate}
                    rowData={row}
                    rowIdx={idx}
                  />
                </TableRowColumn>
                <TableRowColumn>
                  <TomisTimeSpinnerTableRowColumn
                    hintText="Time (Zulu)"
                    floatingLabelText="Time (Zulu)"
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
                  {(row.siteType !== 'LRE' ? true : false) &&
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

MissionDatesTimesUasFedGridRender.propTypes = propTypes;
export default MissionDatesTimesUasFedGridRender;
