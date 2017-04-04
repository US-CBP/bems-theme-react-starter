import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import DatePicker from 'material-ui/DatePicker';
import TextField from '../TomisMui/TextField';
import HeaderNavAction from '../TomisInternal/HeaderNavAction';
import RaisedButton from '../TomisMui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from '../TomisMui/Card';
import AutoComplete from '../TomisMui/AutoComplete';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../TomisMui/Table';
import Checkbox from 'material-ui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import RiskDecisionCore from './riskDecisionCommon/RiskDecisionCore';

const tableData = [
    {
        name: 'John Smith',
        status: 'Employed',
        selected: true
    },
    {
        name: 'Randal White',
        status: 'Unemployed'
    },
    {
        name: 'Stephanie Sanders',
        status: 'Employed',
        selected: true
    },
    {
        name: 'Steve Brown',
        status: 'Employed'
    },
    {
        name: 'Joyce Whitten',
        status: 'Employed'
    },
    {
        name: 'Samuel Roberts',
        status: 'Employed'
    },
    {
        name: 'Adam Moore',
        status: 'Employed'
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
    height: '500px'
};

class RiskDecisionRejectPage extends Component {
    constructor(props) {
        super(props);
        this.state = initState;
    }

    render() {
        const { dataSource1, dataSource2 } = this.state;
        return (
            <div>
                <RiskDecisionCore>
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
                                                <TableHeaderColumn tooltip="Sub-Category">Sub-Category</TableHeaderColumn>
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
                                                <TableRow key={index} selected={row.selected}>
                                                    <TableRowColumn><Checkbox /></TableRowColumn>
                                                    <TableRowColumn>{index}</TableRowColumn>
                                                    <TableRowColumn>{row.name}</TableRowColumn>
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
                                </div>
                            </CardText>
                        </Card>
                    </div>
                </RiskDecisionCore>
            </div>
        );
    }
}

export default muiThemeable()(RiskDecisionRejectPage);
