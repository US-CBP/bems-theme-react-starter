import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Panel, PanelHeaderSection, PanelBody } from '../../TomisMui/Panel';
import ToggleButtons from '../../TomisMui/ToggleButtons';
import TextFieldSimple from '../../TomisMui/TextFieldSimple';
import AutoComplete from '../../TomisMui/AutoComplete';
import AutoCompleteInfo from '../../TomisMui/AutoCompleteInfo';
import ButtonRaisedSimplePrimary from '../../TomisMui/ButtonRaisedSimplePrimary';
import FileAttachment from '../../TomisMui/FileAttachment';
import TomisDatePicker from 'TomisApp/TomisDatePicker';
import DialogSimple from '../../TomisMui/DialogSimple';
import NewRejectData from '../riskDecisionCommon/NewRejectData';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../../TomisMui/Table';
import {
  operationStatusUasToggleButtonOptions,
  setStateUasStatus,
  setStateIsInfoVisible,
  setStateIsConfirmVisible,
  numberOfMissionsLovValues,
  riskAssessmentLovValues
} from './helper';
import ConsolidatedReject from '../riskDecisionCommon/ConsolidatedReject';

const initState = {
  isPending: true,
  isAccept: false,
  isReject: false,
  flightStatus: 'PENDING',
  isInfoVisible: false,
  isConfirmVisible: false
};

const defaultProps = {
  isDisplayNewRejectData: false
};

const propTypes = {
  isDisplayNewRejectData: PropTypes.bool.isRequired
};

class RiskDecisionCore extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.handleCloseConfirm = this.handleCloseConfirm.bind(this);
    this.handleChangeFlightStatus = this.handleChangeFlightStatus.bind(this);
    const { flightStatus } = initState;
    this.prevFlightStatus = flightStatus;
  }

  handleTouchTapInfo = () => {
    this.setState(setStateIsInfoVisible.bind(this, true));
  };

  handleCloseInfo = () => {
    this.setState(setStateIsInfoVisible.bind(this, false));
  };

  handleChangeFlightStatus(evt, val) {
    evt.stopPropagation();
    evt.preventDefault();
    const { prevFlightStatus } = this;
    if (prevFlightStatus != 'PENDING' && val === 'PENDING') {
      this.setState(setStateIsConfirmVisible.bind(this, true));
    } else {
      this.prevFlightStatus = val;
      this.setState(setStateUasStatus.bind(this, this.prevFlightStatus));
    }
  }

  handleCloseConfirm(buttonLabel, buttonIdx) {
    console.log('handleCloseConfirm, buttonLabel=', buttonLabel, ', buttonIdx=', buttonIdx);
    this.setState(setStateIsConfirmVisible.bind(this, false));
    if (buttonLabel === 'No') {
    } else {
      this.prevFlightStatus = 'PENDING';
      this.setState(setStateUasStatus.bind(this, this.prevFlightStatus));
    }
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
      handleCloseConfirm
    } = this;
    const { isPending, isAccept, isReject, flightStatus, isInfoVisible, isConfirmVisible } = this.state;
    const { isDisplayNewRejectData, isSaved } = this.props;
    return (
      <div>
        <DialogSimple title="Warning" onRequestClose={handleCloseConfirm} initOpen={isConfirmVisible} modal={true} buttonLabels={['Yes', 'No']}>
          <div>You will lose all of your changes. Is this ok?</div>
        </DialogSimple>

        <div className="outer-card-margin">
          <Panel>
            <PanelHeaderSection title="Risk Decision">
              <a
                href="https://uconnect.cbpnet.cbp.dhs.gov/sites/OIT/bems/BEI/tomis/OAM/Forms/AllItems.aspx?RootFolder=%2Fsites%2FOIT%2Fbems%2FBEI%2Ftomis%2FOAM%2FTest%20for%20PRD&FolderCTID=0x012000E16EFDC3EAB388448214D711CE710140&View=%7BE25102CE%2DEA12%2D4305%2D90B1%2DD0037623B83F%7D"
                style={{ marginLeft: '0px' }}
                className="panel-link"
              >
                Risk Assessment Form
              </a>
            </PanelHeaderSection>
            <PanelBody>
              <div className="flex-row">
                <div className="flex-1">
                  <ToggleButtons
                    labelText="Flight Status (RA)*"
                    valueSelected={flightStatus}
                    options={operationStatusUasToggleButtonOptions}
                    onChange={handleChangeFlightStatus}
                  />
                </div>
              </div>
              <div className="flex-row">
                <div className="flex-1">
                  <AutoComplete
                    dataSource={numberOfMissionsLovValues}
                    hintText="Number of Missions"
                    floatingLabelText={`Number of Missions${isAccept || isReject ? '*' : ''}`}
                  />
                </div>
                <div className="flex-1">
                  <TextFieldSimple hintText="Risk Score" fullWidth={true} floatingLabelText={`Risk Score${isAccept ? '*' : ''}`} />
                </div>
                <div className="flex-1">
                  <AutoComplete
                    dataSource={riskAssessmentLovValues}
                    hintText="Total Risk Assessment Range"
                    floatingLabelText={`Total Risk Assessment Range${isAccept ? '*' : ''}`}
                  />
                </div>
              </div>
              <div className="flex-row">
                <div className="flex-1">
                  <AutoComplete hintText="Choose Title" floatingLabelText={`Title${isAccept || isReject ? '*' : ''}`} />
                </div>
                <div className="flex-1">
                  <AutoComplete hintText="Choose Name" floatingLabelText={`Name${isAccept || isReject ? '*' : ''}`} />
                </div>
                <div className="flex-1">
                  <TomisDatePicker floatingLabelText={`Date${isAccept || isReject ? '*' : ''}`} />
                </div>
              </div>
              {isDisplayNewRejectData && <NewRejectData />}
              <div className="row-spacer-24">
                <h3>Attachments</h3>
                <FileAttachment label="Upload TSS Risk Assessment" />
              </div>
              {isReject && <ConsolidatedReject />}
              {isAccept &&
                isSaved &&
                <div className="flex-row row-spacer-24">
                  <div>
                    <ButtonRaisedSimplePrimary label="Proceed to Execution" />
                  </div>
                </div>}
            </PanelBody>
          </Panel>
        </div>
      </div>
    );
  }
}

RiskDecisionCore.defaultProps = defaultProps;
RiskDecisionCore.propTypes = propTypes;

export default RiskDecisionCore;
