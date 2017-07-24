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

class AgentInfoGridRender extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tableData, addRow, delRow, handleSaveTableRowColumnValue, handleSaveTableRowColumnDate, subcategoryLovValues } = this.props;
    return (
      <div className="flex-row row-spacer-24">
        <Panel>
          <PanelHeaderTable title="Agent Information">
            <ButtonRaisedSimplePrimary label="Add Agent" onTouchTap={addRow} />
          </PanelHeaderTable>
          <PanelBody>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn tooltip="Agent Name">Agent Name</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Delete">Delete</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, idx) =>
                  <TableRow key={idx} selected={row.selected}>
                    <TableRowColumn>
                      <TomisSelectTableRowColumn
                        hintText="Agent Name"
                        floatingLabelText="Name*"
                        rowPropertyName="name"
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

AgentInfoGridRender.propTypes = propTypes;
export default AgentInfoGridRender;
