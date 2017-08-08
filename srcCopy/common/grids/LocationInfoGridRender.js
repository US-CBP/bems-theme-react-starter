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
  subcategoryLovValues: PropTypes.array.isRequired
};

class LocationInfoGridRender extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tableData, addRow, delRow, handleSaveTableRowColumnValue, handleSaveTableRowColumnDate, subcategoryLovValues } = this.props;
    return (
      <div className="flex-row row-spacer-24">
        <Panel>
          <PanelHeaderTable title="Location Information">
            <ButtonRaisedSimplePrimary label="Add Location" onTouchTap={addRow} />
          </PanelHeaderTable>
          <PanelBody>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn tooltip="Location (Airport/Marina)*">Location (Airport/Marina)</TableHeaderColumn>
                  <TableHeaderColumn tooltip="City*">City</TableHeaderColumn>
                  <TableHeaderColumn tooltip="State*">State</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Delete">Delete</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, idx) =>
                  <TableRow key={idx} selected={row.selected}>
                    <TableRowColumn>
                      <TomisTextFieldTableRowColumn
                        hintText="Select Location"
                        floatingLabelText="Location"
                        rowPropertyName="location"
                        onSave={handleSaveTableRowColumnValue}
                        rowData={row}
                        rowIdx={idx}
                        dataSource={subcategoryLovValues}
                      />
                    </TableRowColumn>
                    <TableRowColumn>
                      <TomisSelectTableRowColumn
                        hintText="Select City"
                        floatingLabelText="City"
                        rowPropertyName="city"
                        onSave={handleSaveTableRowColumnValue}
                        rowData={row}
                        rowIdx={idx}
                        dataSource={subcategoryLovValues}
                      />
                    </TableRowColumn>
                    <TableRowColumn>
                      <TomisSelectTableRowColumn
                        hintText="Select State"
                        floatingLabelText="State"
                        rowPropertyName="state"
                        onSave={handleSaveTableRowColumnValue}
                        rowData={row}
                        rowIdx={idx}
                        dataSource={subcategoryLovValues}
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

LocationInfoGridRender.propTypes = propTypes;
export default LocationInfoGridRender;
