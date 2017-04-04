import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import DatePicker from 'material-ui/DatePicker';
import TextField from '../../TomisMui/TextField';
import HeaderNavAction from '../../TomisInternal/HeaderNavAction';
import RaisedButton from '../../TomisMui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from '../../TomisMui/Card';
import AutoComplete from '../../TomisMui/AutoComplete';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../../TomisMui/Table';
import Checkbox from 'material-ui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

const initState = {
    dataSource1: [],
    dataSource2: [],
    isExpanded: true,
    demoDate: new Date(),
    autoOk: false,
    disableYearSelection: false
};

const textFieldStyle = { width: '100%' };

class RiskDecisionCore extends Component {
    constructor(props) {
        super(props);
        this.state = initState;
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
    }

    handleUpdateInput(value) {
        this.setState({
            dataSource1: [value, value + value, value + value + value],
            dataSource2: [value, value + value, value + value + value]
        });
    }

    handleChangeDemoDate = (event, date) => {
        this.setState({
            demoDate: date
        });
    };

    render() {
        const { dataSource1, dataSource2 } = this.state;
        return (
            <div>
                <HeaderNavAction actionBarPageTitle="Flight Planning" />
                <Card expanded={true}>
                    <CardHeader title="Risk Decision" actAsExpander={true} showExpandableButton={true} />
                    <CardText expandable={true}>
                        <div className="flex-row">
                            <div className="flex-1">
                                <label>Flight Status (RA)*</label>
                                <div className="flex-row labeled-item">
                                    <RaisedButton label="Accept" />
                                    <RaisedButton label="Reject" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <AutoComplete
                                    className="text-field"
                                    hintText="Choose Title"
                                    dataSource={dataSource2}
                                    onUpdateInput={this.handleUpdateInput}
                                    floatingLabelText="Title*"
                                />
                            </div>
                            <div className="flex-1 flex-column-pad">
                                <AutoComplete
                                    style={textFieldStyle}
                                    hintText="Choose Name"
                                    dataSource={dataSource1}
                                    onUpdateInput={this.handleUpdateInput}
                                    floatingLabelText="Name*"
                                />
                            </div>
                            <div className="flex-1 flex-column-pad">
                                <DatePicker
                                    style={textFieldStyle}
                                    hintText="Select Date"
                                    floatingLabelText="Date*"
                                    defaultDate={this.state.demoDate}
                                    onChange={this.handleChangeDemoDate}
                                />
                            </div>
                        </div>
                        <div className="flex-row row-spacer-24">
                            <div>
                                <h3>Attachments</h3>
                                <img src="/images/fileUpload.png" />
                            </div>
                        </div>
                        {this.props.children}
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default RiskDecisionCore;
