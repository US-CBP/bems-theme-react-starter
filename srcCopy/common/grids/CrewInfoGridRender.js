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
  TomisSelectTableRowColumn
} from 'TomisApp/TomisTable';
import Checkbox from 'TomisApp/TomisCheckbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'TomisApp/TomisIconButton';
import ButtonRaisedSimplePrimary from 'TomisApp/TomisButtonRaisedSimplePrimary';

const propTypes = {
  tableData: PropTypes.array.isRequired,
  addRow: PropTypes.func.isRequired,
  delRow: PropTypes.func.isRequired,
  handleSaveTableRowColumnValue: PropTypes.func.isRequired,
  handleSaveTableRowColumnDate: PropTypes.func.isRequired,
  crewNameLov: PropTypes.array.isRequired
};

class CrewInfoGridRender extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tableData, addRow, delRow, handleSaveTableRowColumnValue, handleSaveTableRowColumnDate, crewNameLov } = this.props;
    return (
      <div className="flex-row row-spacer-24">
        <Panel>
          <PanelHeaderTable title="Crew Information">
            <ButtonRaisedSimplePrimary label="Add Crew" onTouchTap={addRow} />
          </PanelHeaderTable>
          <PanelBody>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn tooltip="Pilot in Command (Risk Assessment)*">
                    Pilot in Command<br />(Risk Assessment)
                  </TableHeaderColumn>
                  <TableHeaderColumn tooltip="Name*">Name</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Role*">Role</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Delete">Delete</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, idx) =>
                  <TableRow key={idx} selected={row.selected}>
                    <TableRowColumn>
                      <TomisDatePickerTableRowColumn
                        hintText="Add Check Icon"
                        floatingLabelText="Pilot in Command (Risk Assessment)"
                        rowPropertyName="departureDt"
                        onSave={handleSaveTableRowColumnDate}
                        rowData={row}
                        rowIdx={idx}
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
                        dataSource={crewNameLov}
                      />
                    </TableRowColumn>
                    <TableRowColumn>
                      <TomisTextFieldTableRowColumn
                        hintText="Type Role"
                        floatingLabelText="Role"
                        rowPropertyName="status"
                        onSave={handleSaveTableRowColumnValue}
                        rowData={row}
                        rowIdx={idx}
                      />
                    </TableRowColumn>
                    <TableRowColumn>
                      <IconButton tooltip="Delete Row" onTouchTap={delRow.bind(this, idx)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableRowColumn>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

CrewInfoGridRender.propTypes = propTypes;
export default CrewInfoGridRender;
