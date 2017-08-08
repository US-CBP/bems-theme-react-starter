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
import TomisCheckboxClone from 'TomisApp/TomisCheckboxClone';

const propTypes = {
  tableData: PropTypes.array.isRequired,
  addRow: PropTypes.func.isRequired,
  delRow: PropTypes.func.isRequired,
  handleSaveTableRowColumnValue: PropTypes.func.isRequired,
  handleSaveTableRowColumnDate: PropTypes.func.isRequired,
  subcategoryLovValues: PropTypes.array.isRequired
};

class CaseInfoGridRender extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tableData, addRow, delRow, handleSaveTableRowColumnValue, handleSaveTableRowColumnDate, subcategoryLovValues } = this.props;
    return (
      <div>
        <Panel>
          <PanelHeaderTable title="Case Information">
            <ButtonRaisedSimplePrimary label="Add Case" onTouchTap={addRow} />
          </PanelHeaderTable>
          <PanelBody>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn tooltip="Case #">
                    Case #
                    {/*<div className="flex-row flex-align-center">
                      <TomisCheckboxClone />
                      <span>Case #</span>
                    </div>*/}
                  </TableHeaderColumn>
                  <TableHeaderColumn tooltip="Agent Full Name">Agent Full Name</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Agent Phone #">Agent Phone #</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Case Description">Case Description</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Delete">Delete</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, idx) =>
                  <TableRow key={idx} selected={row.selected}>
                    <TableRowColumn>
                      <TomisTextFieldTableRowColumn
                        hintText="Type Case #"
                        floatingLabelText="Case #"
                        rowPropertyName="status"
                        onSave={handleSaveTableRowColumnValue}
                        rowData={row}
                        rowIdx={idx}
                      />
                    </TableRowColumn>
                    <TableRowColumn>
                      <TomisTextFieldTableRowColumn
                        hintText="Type Agent Full Name"
                        floatingLabelText="Agent Full Name"
                        rowPropertyName="status"
                        onSave={handleSaveTableRowColumnValue}
                        rowData={row}
                        rowIdx={idx}
                      />
                    </TableRowColumn>
                    <TableRowColumn>
                      <TomisTextFieldTableRowColumn
                        hintText="Agent Phone #"
                        floatingLabelText="Agent Phone #"
                        rowPropertyName="status"
                        onSave={handleSaveTableRowColumnValue}
                        rowData={row}
                        rowIdx={idx}
                      />
                    </TableRowColumn>
                    <TableRowColumn>
                      <TomisTextFieldTableRowColumn
                        hintText="Type Case Description"
                        floatingLabelText="Case Description*"
                        rowPropertyName="desc"
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

CaseInfoGridRender.propTypes = propTypes;
export default CaseInfoGridRender;
