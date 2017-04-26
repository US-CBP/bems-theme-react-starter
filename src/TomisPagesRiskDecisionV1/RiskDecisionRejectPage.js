import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import TextField from '../TomisMui/TextField';
import HeaderNavAction from '../TomisInternal/HeaderNavAction';
import RaisedButton from '../TomisMui/RaisedButton';
import FlatButton from '../TomisMui/FlatButton';
import { Card, CardActions, CardHeader, CardText } from '../TomisMui/Card';
import AutoComplete from '../TomisMui/AutoComplete';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../TomisMui/Table';
import Checkbox from '../TomisMui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from '../TomisMui/IconButton';
import RiskDecisionCore from './riskDecisionCommon/RiskDecisionCore';
import Popover from 'material-ui/Popover';
import SvgIconArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';

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
  open: false
};

class RiskDecisionRejectPage extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  handleUpdateInput(value) {
    this.setState({
      dataSource1: [value, value + value, value + value + value]
    });
  }

  handleClickSubCategoryCell = evt => {
    // This prevents ghost click.
    evt.preventDefault();
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

  render() {
    const { dataSource1, dataSource2 } = this.state;
    return (
      <div>
        <div className="flex-row row-spacer-24">
          <Card expanded={true}>
            <CardHeader title="No Launch Reason(s)" actAsExpander={true} showExpandableButton={true} style={{ backgroundColor: '#e9e9e9' }} />
            <CardText expandable={true}>
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
                    {tableData.map((row, index) => (
                      <TableRow key={index} selected={row.selected} className="red-table-row-TESTING">
                        <TableRowColumn><Checkbox /></TableRowColumn>
                        <TableRowColumn>{index}</TableRowColumn>
                        <TableRowColumn>
                          <div className="editable-cell" onClick={this.handleClickSubCategoryCell}>
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
                    <div className="flex-1 flex-row">
                      <AutoComplete
                        fullWidth={true}
                        hintText="Choose Sub-Category"
                        dataSource={dataSource1}
                        onUpdateInput={this.handleUpdateInput}
                        floatingLabelText="Sub-Category*"
                      />
                      {/* must use inline style for position on IconButton to override default */}
                      <IconButton className="inline-icon" style={{ position: 'absolute' }}>
                        <SvgIconArrowDropDown />
                      </IconButton>
                    </div>

                    <div className="flex-row flex-justify-end">
                      <FlatButton label="Save" primary={true} onClick={this.handleRequestClose} />
                      <FlatButton label="Cancel" primary={true} onClick={this.handleRequestClose} />
                    </div>
                  </div>
                </Popover>
              </div>
            </CardText>
          </Card>

        </div>
      </div>
    );
  }
}

export default muiThemeable()(RiskDecisionRejectPage);
