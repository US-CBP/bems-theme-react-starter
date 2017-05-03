import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { indigo100 } from 'material-ui/styles/colors';
import HeaderNavAction from '../../TomisInternal/HeaderNavAction';
import { Panel, PanelHeader, PanelText } from '../../TomisMui/Panel';
import ToggleButtons from '../../TomisNew/ToggleButtons';
import TextFieldSimple from '../../Tomis/TextFieldSimple';
import AutoComplete from '../../Tomis/AutoComplete';
import AutoCompleteInfo from '../../Tomis/AutoCompleteInfo';
import ButtonRaisedSimplePrimary from '../../Tomis/ButtonRaisedSimplePrimary';
import FileAttachment from '../../TomisNew/FileAttachment';
import DatePickerInlineLandscape from '../../Tomis/DatePickerInlineLandscape';
import DialogSimple from '../../Tomis/DialogSimple';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../../TomisMui/Table';
import { toggleButtonsOptions, setStateFlightStatus, setStateIsInfoVisible, setStateIsConfirmVisible } from './helper';

const tableData = [
  {
    name: '< 25',
    status: '25 - 45',
    selected: '> 45'
  },
  {
    name: '< 35',
    status: '35 - 55',
    selected: '> 55'
  },
  {
    name: '< 45',
    status: '35 - 55',
    selected: '> 55'
  },
  {
    name: '< 55',
    status: '55 - 75',
    selected: '> 75'
  },
  {
    name: '< 65',
    status: '65 - 85',
    selected: '> 85'
  },
  {
    name: '< 75',
    status: '75 - 95',
    selected: '> 95'
  }
];

const riskAssessmentLovValues = ['LOW', 'MEDIUM', 'HIGH'];

const defaultProps = {
  flightStatus: ''
};

const propTypes = {
  flightStatus: PropTypes.string.isRequired
};

class RiskDecisionCore extends Component {
  constructor(props) {
    super(props);
    this.handleCloseConfirm = this.handleCloseConfirm.bind(this);
    this.handleChangeFlightStatus = this.handleChangeFlightStatus.bind(this);
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.prevFlightStatus = 'PENDING';
  }

  state = {
    isPanelExpanded: true,
    isPending: true,
    isAccept: false,
    isReject: false,
    flightStatus: '',
    isInfoVisible: false,
    isConfirmVisible: false
  };

  componentDidMount() {
    const { flightStatus } = this.props;
    this.setState(setStateFlightStatus.bind(this, flightStatus));
  }

  handleTouchTapInfo = () => {
    this.setState(setStateIsInfoVisible.bind(this, true));
  };

  handleCloseInfo = () => {
    this.setState(setStateIsInfoVisible.bind(this, false));
  };

  handleChangeFlightStatus(event, value) {
    event.stopPropagation();
    event.preventDefault();
    const { prevFlightStatus } = this;
    console.log('handleChangeFlightStatus, prevFlightStatus=', prevFlightStatus, ', value=', value);
    if (prevFlightStatus != 'PENDING' && value === 'PENDING') {
      this.setState(setStateIsConfirmVisible.bind(this, true));
    }
    this.prevFlightStatus = value;
  }

  handleCloseConfirm(buttonLabel, buttonIdx) {
    console.log('handleCloseConfirm, buttonLabel=', buttonLabel, ', buttonIdx=', buttonIdx);
    this.setState(setStateIsConfirmVisible.bind(this, false));
    if (buttonLabel === 'No') {
      this.setState(setStateFlightStatus.bind(this, this.prevFlightStatus));
    }
  }

  handleExpandChange(newExpandedState) {
    this.setState({ isPanelExpanded: newExpandedState });
  }

  render() {
    const {
      getBackgroundColorAccept,
      getLabelColorAccept,
      getBackgroundColorReject,
      getLabelColorReject,
      handleTouchTapInfo,
      handleCloseInfo,
      handleChangeFlightStatus,
      handleCloseConfirm,
      handleExpandChange
    } = this;
    const { isPending, isAccept, isReject, flightStatus, isInfoVisible, isConfirmVisible, isPanelExpanded } = this.state;
    return (
      <div>
        <HeaderNavAction actionBarPageTitle="Flight Planning" />
        {isInfoVisible &&
          <DialogSimple title="(17 Total Risk Assessment Range)" onRequestClose={handleCloseInfo} initOpen={isInfoVisible} buttonLabels={['Ok']}>
            <Table height={300} fixedHeader={true} selectable={false} multiSelectable={false}>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
                <TableRow selectable={false}>
                  <TableHeaderColumn tooltip="# Crew Members"># CREW MEMBERS</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Low">LOW</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Medium">MEDIUM</TableHeaderColumn>
                  <TableHeaderColumn tooltip="High">HIGH</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false} deselectOnClickaway={false} showRowHover={false} stripedRows={false}>
                {tableData.map((row, index) => (
                  <TableRow key={index} selected={row.selected}>
                    <TableRowColumn>{index + 1}</TableRowColumn>
                    <TableRowColumn>
                      {row.name}
                    </TableRowColumn>
                    <TableRowColumn>{row.status}</TableRowColumn>
                    <TableRowColumn>{row.selected}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DialogSimple>}
        <DialogSimple title="Warning" onRequestClose={handleCloseConfirm} initOpen={isConfirmVisible} modal={true} buttonLabels={['Yes', 'No']}>
          <div>You will lose all of your changes.  Is this ok?</div>
        </DialogSimple>

        <div className="outer-card-margin">
          <Panel expanded={isPanelExpanded} onExpandChange={handleExpandChange}>
            <PanelHeader
              title={
                <span>
                  Risk Decision&nbsp;
                </span>
              }
              showExpandableButton={true}
              style={{ backgroundColor: indigo100 }}
            >
              <a
                href="https://uconnect.cbpnet.cbp.dhs.gov/sites/OIT/bems/BEI/tomis/OAM/Forms/AllItems.aspx?RootFolder=%2Fsites%2FOIT%2Fbems%2FBEI%2Ftomis%2FOAM%2FTest%20for%20PRD&FolderCTID=0x012000E16EFDC3EAB388448214D711CE710140&View=%7BE25102CE%2DEA12%2D4305%2D90B1%2DD0037623B83F%7D"
                style={{ marginLeft: '0px' }}
                className="flex-1 panel-link"
              >
                Link to Sharepoint Site
              </a>
              <ButtonRaisedSimplePrimary label="Do Something" />
            </PanelHeader>
            <PanelText expandable={true}>
              <div className="flex-row">
                <div className="flex-1">
                  <ToggleButtons
                    labelText="Flight Status (RA)*"
                    valueSelected={flightStatus}
                    options={toggleButtonsOptions}
                    onChange={handleChangeFlightStatus}
                  />
                </div>
                <div className="flex-1 flex-column-pad flex-row">
                  <TextFieldSimple hintText="Risk Score" fullWidth={true} floatingLabelText={`Risk Score${isAccept ? '*' : ''}`} />
                </div>
                <div className="flex-1 flex-column-pad flex-row">
                  <AutoComplete
                    dataSource={riskAssessmentLovValues}
                    hintText="Select Risk Assessment"
                    floatingLabelText={`Risk Assessment${isAccept ? '*' : ''}`}
                  />
                </div>
              </div>
              <br />
              <div className="flex-row">
                <div className="flex-1 flex-row">
                  <AutoComplete hintText="Choose Title" floatingLabelText={`Title${isAccept || isReject ? '*' : ''}`} />
                </div>
                <div className="flex-1 flex-column-pad flex-row">
                  <AutoComplete hintText="Choose Name" floatingLabelText={`Name${isAccept || isReject ? '*' : ''}`} />
                </div>
                <div className="flex-1 flex-column-pad flex-row">
                  <DatePickerInlineLandscape floatingLabelText={`Date${isAccept || isReject ? '*' : ''}`} />
                </div>
              </div>
              <div className="row-spacer-24">
                <FileAttachment />
              </div>
              {this.props.children}
            </PanelText>
          </Panel>
        </div>
      </div>
    );
  }
}

RiskDecisionCore.defaultProps = defaultProps;
RiskDecisionCore.propTypes = propTypes;

export default RiskDecisionCore;
