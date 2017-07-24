import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusBar from 'common/StatusBar';
import PageNavLinks from 'common/PageNavLinks';
import { Panel, PanelHeaderSection, PanelBody } from 'TomisApp/TomisPanel';
import TomisSelect from 'TomisApp/TomisSelect';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisInput from 'TomisApp/TomisInput';
import TomisTextarea from 'TomisApp/TomisTextarea';
import TomisTextFieldReadOnly from 'TomisApp/TomisTextFieldReadOnly';
import CrewInfoGrid from 'common/grids/CrewInfoGrid';
import TomisHeading from 'TomisApp/TomisHeading';
import ToggleButtonLocalZulu from 'common/ToggleButtonLocalZulu';
import ToggleButtonYesNo from 'common/ToggleButtonYesNo';
import CaseInfoGrid from 'common/grids/CaseInfoGrid';
import PlanningMissionSection from 'common/PlanningMissionSection';
import MissionDatesTimesGrid from 'common/grids/MissionDatesTimesGrid';
import TomisButtonRaisedSimplePrimary from 'TomisApp/TomisButtonRaisedSimplePrimary';
import CloningStepBarPosition from 'common/CloningStepBarPosition';

const initState = {};

const propTypes = {
  localZuluValue: PropTypes.string.isRequired,
  handleChangeLocalZulu: PropTypes.func.isRequired,
  isCloneable: PropTypes.bool,
  dimensions: PropTypes.object.isRequired
};

class FlightFloatPageRender extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }
  render() {
    const { localZuluValue, handleChangeLocalZulu, isCloneable, dimensions } = this.props;
    return (
      <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
        {!isCloneable && <PageNavLinks pageTitle="Flight Information" />}
        {isCloneable && <CloningStepBarPosition stepNbr={1} dimensions={dimensions} />}
        <Panel>
          <PanelHeaderSection title="Flight Information" />
          <PanelBody>
            <div className="flex-row">
              <div className="flex-2">
                <TomisTextFieldReadOnly floatingLabelText="Branch/Unit*" value="Buffalo Air Branch" />
              </div>
              <div className="flex-1">
                <TomisCheckbox label="Stand By" />
              </div>
            </div>
            <div className="flex-row flex-1">
              <TomisInput isCloneable={isCloneable} floatingLabelText="Flight Title" hintText="Type Flight Title" isCloneable={isCloneable} />
            </div>
            <div className="flex-row flex-1">
              <TomisTextarea floatingLabelText="Remarks" isCloneable={isCloneable} />
            </div>
            <div className="flex-row">
              <div className="flex-1">
                <TomisSelect floatingLabelText="Aircraft Type*" hintText="Type Aircraft Type" isCloneable={isCloneable} disabledClone={true} />
              </div>
              <div className="flex-1">
                <TomisSelect floatingLabelText="Tail #*" hintText="Type Tail #" isCloneable={isCloneable} disabledClone={true} />
              </div>
              <div className="flex-1">
                <TomisSelect floatingLabelText="PIC (Risk Assessment)*" isCloneable={isCloneable} disabledClone={true} />
              </div>
            </div>
            <br />
            <CrewInfoGrid />
            <br />
            <div className="flex-row">
              <TomisHeading label="Capabilities" />
            </div>
            <div className="flex-row">
              <TomisCheckbox label="EMT" />
              <TomisCheckbox label="HRST" />
              <TomisCheckbox label="HOIST" />
              <TomisCheckbox label="HSL" />
              <TomisCheckbox label="ACR" />
              <TomisCheckbox label="ADF" />
            </div>
          </PanelBody>
        </Panel>
        <br />
        <Panel>
          <PanelHeaderSection title="Mission Date(s) and Time(s)">
            <TomisButtonRaisedSimplePrimary style={{ marginRight: '12px' }} label="Add New" />
            <TomisButtonRaisedSimplePrimary style={{ marginRight: '12px' }} label="Apply" />
            <TomisButtonRaisedSimplePrimary label="Cancel Changes" />
          </PanelHeaderSection>
          <PanelBody>
            <div className="flex-row">
              <div className="flex-1">
                <ToggleButtonLocalZulu valueSelected={localZuluValue} onChange={handleChangeLocalZulu} />
              </div>
              <div className="flex-1">
                <TomisSelect floatingLabelText="Time Zone*" />
              </div>
              <div className="flex-1" />
            </div>
            <div className="flex-row">
              <br />
              <br />
              <br />
              <div style={{ marginTop: '2rem' }} className="flex-1">
                <MissionDatesTimesGrid />
              </div>
            </div>
          </PanelBody>
        </Panel>
        <br />
        <Panel>
          <PanelHeaderSection title="Planning" />
          <PanelBody>
            <PlanningMissionSection isCloneable={isCloneable} />
          </PanelBody>
        </Panel>
        <br />
      </div>
    );
  }
}

export default FlightFloatPageRender;
