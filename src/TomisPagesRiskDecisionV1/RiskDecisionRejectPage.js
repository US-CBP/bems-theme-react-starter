import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import TextField from '../TomisMui/TextField';
import HeaderNavAction from '../TomisInternal/HeaderNavAction';
import RaisedButton from '../TomisMui/RaisedButton';
import FlatButton from '../TomisMui/FlatButton';
import { Panel, PanelHeader, PanelText } from '../TomisMui/Panel';
import AutoComplete from '../Tomis/AutoComplete';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../TomisMui/Table';
import Checkbox from '../TomisMui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from '../TomisMui/IconButton';
import RiskDecisionCore from './riskDecisionCommon/RiskDecisionCore';
import Popover from 'material-ui/Popover';
import SvgIconArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import ButtonRaisedSimplePrimary from '../Tomis/ButtonRaisedSimplePrimary';

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

const subcategoryLovValues = ['SubcategoryAlpha', 'SubcategoryBeta', 'SubcategoryDelta'];
let subCategoryEditValue = '';
let subCategoryEditIdx = 0;

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
  dataSource1: [],
  open: false,
  isPanelExpanded: true,
  tableRowCnt: tableData.length
};

class RiskDecisionRejectPage extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.handleUpdateSubCategory = this.handleUpdateSubCategory.bind(this);
    this.handleSaveSubCategory = this.handleSaveSubCategory.bind(this);
    this.addNoLaunchReasonRow = this.addNoLaunchReasonRow.bind(this);
    this.handleExpandChange = this.handleExpandChange.bind(this);
  }

  handleUpdateSubCategory(value) {
    console.log('handleUpdateSubCategory value=', value);
    subCategoryEditValue = value;
  }

  handleSaveSubCategory(evt) {
    evt.stopPropagation();
    console.log('subCategoryEditIdx=', subCategoryEditIdx);
    tableData[subCategoryEditIdx].name = subCategoryEditValue;
    this.handleRequestClose();
  }

  handleClickSubCategoryCell = (idx, evt) => {
    // This prevents ghost click.
    evt.preventDefault();
    subCategoryEditIdx = idx;
    this.setState({
      open: true,
      anchorEl: evt.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  addNoLaunchReasonRow(evt) {
    evt.stopPropagation();
    tableData.push({ name: '', status: '' });
    this.setState({ tableRowCnt: this.tableRowCnt + 1 });
  }

  handleExpandChange(newExpandedState) {
    this.setState({ isPanelExpanded: newExpandedState });
  }

  render() {
    const { handleClickSubCategoryCell, addNoLaunchReasonRow, handleExpandChange, handleUpdateSubCategory, handleSaveSubCategory, handleRequestClose } = this;
    const { dataSource1, dataSource2, isPanelExpanded } = this.state;
    return (
      <div>
        <RiskDecisionCore flightStatus="REJECT">
          <div className="flex-row row-spacer-24">
            <Panel expanded={isPanelExpanded} onExpandChange={handleExpandChange}>
              <PanelHeader title="No Launch Reason(s)" showExpandableButton={true} style={{ backgroundColor: '#e9e9e9' }}>
                <ButtonRaisedSimplePrimary label="Add No Launch Reason" onTouchTap={addNoLaunchReasonRow} />
              </PanelHeader>
              <PanelText expandable={true}>
                <div>
                  <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                  >
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
                      displayRowCheckbox={this.state.showCheckboxes}
                      deselectOnClickaway={this.state.deselectOnClickaway}
                      showRowHover={this.state.showRowHover}
                      stripedRows={this.state.stripedRows}
                    >
                      {tableData.map((row, idx) => (
                        <TableRow key={idx} selected={row.selected} className="red-table-row-TESTING">
                          <TableRowColumn><Checkbox /></TableRowColumn>
                          <TableRowColumn>{idx}</TableRowColumn>
                          <TableRowColumn>
                            <div className="editable-cell" style={{ minHeight: '14px' }} onClick={handleClickSubCategoryCell.bind(this, idx)}>
                              {row.name}
                            </div>
                          </TableRowColumn>
                          <TableRowColumn>{row.status}</TableRowColumn>
                          <TableRowColumn>
                            <IconButton tooltip="Delete Row">
                              <DeleteIcon />
                            </IconButton>
                          </TableRowColumn>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={anchorOrigin}
                    targetOrigin={targetOrigin}
                    onRequestClose={this.handleRequestClose}
                  >
                    <div className="editable-subcategory">
                      <AutoComplete
                        dataSource={subcategoryLovValues}
                        onUpdateInput={handleUpdateSubCategory}
                        hintText="Select Sub-Category"
                        floatingLabelText="Sub-Category*"
                      />
                      <div className="flex-row flex-justify-end">
                        <FlatButton label="Save" primary={true} onClick={handleSaveSubCategory} />
                        <FlatButton label="Cancel" primary={true} onClick={handleRequestClose} />
                      </div>
                    </div>
                  </Popover>
                </div>
              </PanelText>
            </Panel>
          </div>
        </RiskDecisionCore>
      </div>
    );
  }
}

export default muiThemeable()(RiskDecisionRejectPage);
