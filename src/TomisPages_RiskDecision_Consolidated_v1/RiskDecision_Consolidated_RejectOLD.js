import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import TextFieldSimple from '../TomisMui/TextFieldSimple';
import HeaderNavAction from '../TomisMui/HeaderNavAction';
import FlatButton from '../TomisMui/FlatButton';
import { Panel, PanelHeaderTable, PanelBody } from '../TomisMui/Panel';
import AutoComplete from '../TomisMui/AutoComplete';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TextFieldTableRowColumn, AutoCompleteTableRowColumn } from '../TomisMui/Table';
import Checkbox from '../TomisMui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from '../TomisMui/IconButton';
import RiskDecisionCore from './riskDecisionCommon/RiskDecisionCore';
import NewRejectDat from './riskDecisionCommon/NewRejectData';
import Popover from 'material-ui/Popover';
import SvgIconArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import ButtonRaisedSimplePrimary from '../TomisMui/ButtonRaisedSimplePrimary';
// import TextFieldTableRowColumn from '../TomisMui/helpers/TextFieldTableRowColumn';
// import AutoCompleteTableRowColumn from '../TomisMui/helpers/AutoCompleteTableRowColumn';

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

const caseInformationTableData = [
  {
    caseNumber: 'Case# 3389473289',
    agentFullName: 'John Smith',
    agentNumber: '#BestAgent',
    caseDescription: 'Case Desc'
  },
  {
    caseNumber: 'Case# 3389473289',
    agentFullName: 'John Smith',
    agentNumber: '#BestAgent',
    caseDescription: 'Case Desc'
  },
  {
    caseNumber: 'Case# 3389473289',
    agentFullName: 'John Smith',
    agentNumber: '#BestAgent',
    caseDescription: 'Case Desc'
  },
  {
    caseNumber: 'Case# 3389473289',
    agentFullName: 'John Smith',
    agentNumber: '#BestAgent',
    caseDescription: 'Case Desc'
  },
  {
    caseNumber: 'Case# 3389473289',
    agentFullName: 'John Smith',
    agentNumber: '#BestAgent',
    caseDescription: 'Case Desc'
  },
  {
    caseNumber: 'Case# 3389473289',
    agentFullName: 'John Smith',
    agentNumber: '#BestAgent',
    caseDescription: 'Case Desc'
  },
  {
    caseNumber: 'Case# 3389473289',
    agentFullName: 'John Smith',
    agentNumber: '#BestAgent',
    caseDescription: 'Case Desc'
  }
];

const subcategoryLovValues = ['SubcategoryAlpha', 'SubcategoryBeta', 'SubcategoryDelta'];

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
  tableRowCnt: tableData.length,
  caseInforomationTableRowCnt: caseInformationTableData.length
};

class RiskDecision_Consolidated_Reject extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.addCaseInformationRow = this.addCaseInformationRow.bind(this);
    this.delCaseInformationRow = this.delCaseInformationRow.bind(this);
    this.addNoLaunchReasonRow = this.addNoLaunchReasonRow.bind(this);
    this.delNoLaunchReasonRow = this.delNoLaunchReasonRow.bind(this);
    this.handleSaveTableRowColumnValue = this.handleSaveTableRowColumnValue.bind(this);
    this.handleSaveCaseInformationTableRowColumnValue = this.handleSaveCaseInformationTableRowColumnValue.bind(this);
  }

  addCaseInformationRow(evt) {
    evt.stopPropagation();
    caseInformationTableData.push({ name: '', status: '' });
    //force table refresh
    this.setState({ caseInforomationTableRowCnt: caseInformationTableData.length });
  }

  addNoLaunchReasonRow(evt) {
    evt.stopPropagation();
    tableData.push({ name: '', status: '' });
    //force table refresh
    this.setState({ tableRowCnt: tableData.length });
  }

  delCaseInformationRow(idx, evt) {
    evt.stopPropagation();
    caseInformationTableData.splice(idx, 1);
    //force table refresh
    this.setState({ caseInforomationTableRowCnt: caseInformationTableData.length });
  }

  delNoLaunchReasonRow(idx, evt) {
    evt.stopPropagation();
    tableData.splice(idx, 1);
    //force table refresh
    this.setState({ tableRowCnt: tableData.length });
  }

  handleSaveCaseInformationTableRowColumnValue(rowIdx, propertyName, newValue) {
    caseInformationTableData[rowIdx][propertyName] = newValue;
    //force table refresh
    this.setState({ tableRowCnt: caseInformationTableData.length });
  }

  handleSaveTableRowColumnValue(rowIdx, propertyName, newValue) {
    tableData[rowIdx][propertyName] = newValue;
    //force table refresh
    this.setState({ tableRowCnt: tableData.length });
  }

  render() {
    const { addCaseInformationRow, addNoLaunchReasonRow, delCaseInformationRow, delNoLaunchReasonRow, handleSaveCaseInformationTableRowColumnValue, handleSaveTableRowColumnValue } = this;
    const { height, fixedHeader, fixedFooter, selectable, multiSelectable, showCheckboxes, deselectOnClickaway, showRowHover, stripedRows } = this.state;
    return (
      <div>
        <RiskDecisionCore flightStatus="REJECT" isDisplayNewRejectData={true}>
          <div className="flex-row row-spacer-24">
            <Panel>
              <PanelHeaderTable title="Case Information">
                <ButtonRaisedSimplePrimary label="Add Case Number" onTouchTap={addCaseInformationRow} />
              </PanelHeaderTable>
              <PanelBody>
                <div>
                  <Table height={height} fixedHeader={fixedHeader} fixedFooter={fixedFooter} selectable={selectable} multiSelectable={multiSelectable}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
                      <TableRow selectable={false}>
                        <TableHeaderColumn tooltip="Case Number">Case Number*</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Agent Full Name">Agent Full Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Agent Number">Agent Number</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Case Description">Case Description</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Delete">Delete</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody
                      displayRowCheckbox={showCheckboxes}
                      deselectOnClickaway={deselectOnClickaway}
                      showRowHover={showRowHover}
                      stripedRows={stripedRows}
                    >
                      {caseInformationTableData.map((row, idx) => (
                        <TableRow key={idx} selected={row.selected}>
                          <TableRowColumn>
                            <TextFieldTableRowColumn
                              hintText="Type Case Number"
                              floatingLabelText="Case Number*"
                              rowPropertyName="caseNumber"
                              onSave={handleSaveCaseInformationTableRowColumnValue}
                              rowData={row}
                              rowIdx={idx}
                            />
                          </TableRowColumn>
                          <TableRowColumn>
                            <TextFieldTableRowColumn
                              hintText="Type Agent Full Name"
                              floatingLabelText="Agent Full Name"
                              rowPropertyName="agentFullName"
                              onSave={handleSaveCaseInformationTableRowColumnValue}
                              rowData={row}
                              rowIdx={idx}
                            />
                          </TableRowColumn>
                          <TableRowColumn>
                            <TextFieldTableRowColumn
                              hintText="Type Agent Number"
                              floatingLabelText="Agent Number"
                              rowPropertyName="agentNumber"
                              onSave={handleSaveCaseInformationTableRowColumnValue}
                              rowData={row}
                              rowIdx={idx}
                            />
                          </TableRowColumn>
                          <TableRowColumn>
                            <TextFieldTableRowColumn
                              hintText="Type Case Description"
                              floatingLabelText="Case Description"
                              rowPropertyName="caseDescription"
                              onSave={handleSaveCaseInformationTableRowColumnValue}
                              rowData={row}
                              rowIdx={idx}
                            />
                          </TableRowColumn>
                          <TableRowColumn>
                            <IconButton tooltip="Delete Row" onTouchTap={delCaseInformationRow.bind(this, idx)}>
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
          <br/>
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
                    <TableBody
                      displayRowCheckbox={showCheckboxes}
                      deselectOnClickaway={deselectOnClickaway}
                      showRowHover={showRowHover}
                      stripedRows={stripedRows}
                    >
                      {tableData.map((row, idx) => (
                        <TableRow key={idx} selected={row.selected}>
                          <TableRowColumn><Checkbox /></TableRowColumn>
                          <TableRowColumn>{idx + 1}</TableRowColumn>
                          <TableRowColumn>
                            <AutoCompleteTableRowColumn
                              hintText="Select Sub-Category"
                              floatingLabelText="Sub-Category*"
                              rowPropertyName="name"
                              onSave={handleSaveTableRowColumnValue}
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
        </RiskDecisionCore>
      </div>
    );
  }
}

export default muiThemeable()(RiskDecision_Consolidated_Reject);
