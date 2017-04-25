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
import MonthlyCalendarIcon from 'material-ui/svg-icons/notification/event-note';
import SvgIconArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import { indigo100 } from 'material-ui/styles/colors';

const initState = {
  dataSource1: [],
  dataSource2: [],
  isExpanded: true,
  demoDate: new Date(),
  autoOk: false,
  disableYearSelection: false
};

const defaultProps = {
  isAccept: false,
  isReject: false
};

const propTypes = {
  isAccept: PropTypes.bool,
  isReject: PropTypes.bool
};

const selectedBackgroundColor = 'rgba(0,0,0,0.27)';
const unselectedBackgroundColor = '#ffffff';

const selectedLabelColor = 'rgba(0,0,0,0.87)';
const unselectedLabelColor = 'rgba(0,0,0,0.54)';

class GroundRiskDecision extends Component {
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

  getBackgroundColorAccept = () => {
    const { isAccept } = this.props;
    return isAccept ? selectedBackgroundColor : unselectedBackgroundColor;
  };

  getLabelColorAccept = () => {
    const { isAccept } = this.props;
    return isAccept ? selectedLabelColor : unselectedLabelColor;
  };

  getBackgroundColorReject = () => {
    const { isReject } = this.props;
    return isReject ? selectedBackgroundColor : unselectedBackgroundColor;
  };

  getLabelColorReject = () => {
    const { isReject } = this.props;
    return isReject ? selectedLabelColor : unselectedLabelColor;
  };

  render() {
    const { getBackgroundColorAccept, getLabelColorAccept, getBackgroundColorReject, getLabelColorReject } = this;
    const { isAccept, isReject } = this.props;
    const { dataSource1, dataSource2 } = this.state;
    return (
      <div>
        <HeaderNavAction actionBarPageTitle="Ground Operation" />
        <div className="outer-card-margin">
        <Card expanded={true}>
        <CardHeader
          title={<span>Executed/Canceled&nbsp;<a href="https://uconnect.cbpnet.cbp.dhs.gov/sites/OIT/bems/BEI/tomis/OAM/Forms/AllItems.aspx?RootFolder=%2Fsites%2FOIT%2Fbems%2FBEI%2Ftomis%2FOAM%2FTest%20for%20PRD&FolderCTID=0x012000E16EFDC3EAB388448214D711CE710140&View=%7BE25102CE%2DEA12%2D4305%2D90B1%2DD0037623B83F%7D" style={{ marginLeft: '650px' }} className="panel-link">Link to Sharepoint Site</a></span>}
          actAsExpander={true}
          showExpandableButton={true}
          style={{ backgroundColor: indigo100 }}
        />

          <CardText expandable={true}>
            <div className="flex-row">
              <div>
                <label className="labeled-item">Ground Operation Status (RA)*</label>
                <RaisedButton label="Executed" backgroundColor={getBackgroundColorAccept()} labelColor={getLabelColorAccept()} />
                <RaisedButton label="Canceled" backgroundColor={getBackgroundColorReject()} labelColor={getLabelColorReject()} />
              </div>

            </div>
          </CardText>
        </Card>
        </div>
      </div>
    );
  }
}

GroundRiskDecision.defaultProps = defaultProps;
GroundRiskDecision.propTypes = propTypes;

export default GroundRiskDecision;
