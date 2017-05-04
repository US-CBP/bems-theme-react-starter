import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import DatePicker from 'material-ui/DatePicker';
import TextField from '../TomisMui/TextField';
import HeaderNavAction from '../TomisInternal/HeaderNavAction';
import RaisedButton from '../TomisMui/RaisedButton';
import { Panel, PanelHeaderSection, PanelBody } from '../TomisMui/Panel';
import AutoComplete from '../TomisMui/AutoComplete';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../TomisMui/Table';
import Checkbox from 'material-ui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import MonthlyCalendarIcon from 'material-ui/svg-icons/notification/event-note';
import SvgIconArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import ToggleButtons from '../TomisNew/ToggleButtons';

export const toggleButtonsOptions = [{ label: 'Executed', value: 'EXECUTED' }, { label: 'Canceled', value: 'CANCELED' }];

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

class GroundRiskDecisionCancelPage extends Component {
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
          <Panel>
            <PanelHeaderSection title="Executed/Canceled" />
            <PanelBody>
              <div className="flex-row">
                <div className="flex-column-pad">
                  <ToggleButtons labelText="Ground Operation Status*" valueSelected={'CANCELED'} options={toggleButtonsOptions} />
                </div>
                <div>
                  <TextField hintText="Hint Text" floatingLabelText="Reason*" />
                </div>
              </div>
            </PanelBody>
          </Panel>
        </div>
      </div>
    );
  }
}

GroundRiskDecisionCancelPage.defaultProps = defaultProps;
GroundRiskDecisionCancelPage.propTypes = propTypes;

export default GroundRiskDecisionCancelPage;
