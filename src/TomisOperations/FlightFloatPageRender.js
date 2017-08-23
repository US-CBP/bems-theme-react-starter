import React from 'react';
import StatusBar from 'common/StatusBar';
import PageNavLinks from 'common/PageNavLinks';
import { TomisPanel, TomisPanelBody } from 'TomisApp/TomisPanel';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisTextField from 'TomisApp/TomisTextField';
import TomisTextFieldMultiLine from 'TomisApp/TomisTextFieldMultiLine';
import TomisTextFieldReadOnly from 'TomisApp/TomisTextFieldReadOnly';
import CrewInfoGrid from 'common/grids/CrewInfoGrid';
import TomisHeading from 'TomisApp/TomisHeading';
import ToggleButtonLocalZulu from 'common/ToggleButtonLocalZulu';
import CaseInfoGrid from 'common/grids/CaseInfoGrid';
import PlanningMissionSection from 'common/PlanningMissionSection';
import MissionDatesTimesGrid from 'common/grids/MissionDatesTimesGrid';
import TomisButtonRaised from 'TomisApp/TomisButtonRaised';
import CloningStepBarPosition from 'common/CloningStepBarPosition';

const FlightFloatPageRender = props => {
  const { defns, isCloneable, dimensions } = props;
  console.log('FlightFloatPageRender, props=', props);
  return (
    <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
      {!isCloneable && <PageNavLinks pageTitle="Flight Information" />}
      {isCloneable && <CloningStepBarPosition stepNbr={1} dimensions={dimensions} />}
      <TomisPanel label="Flight Information">
        <TomisPanelBody>
          <div className="flex-row">
            <div className="flex-2">
              <TomisTextFieldReadOnly label="Branch/Unit" {...defns.branchUnitLov} />
            </div>
            <div className="flex-1">
              <TomisCheckbox label="Stand By" {...defns.standbyCb} onModify={props.handleModifyStandByCb} />
            </div>
          </div>
          <div className="flex-row flex-1">
            <TomisTextField isCloneable={isCloneable} label="Flight Title" placeholder="Type Flight Title" isCloneable={isCloneable} />
          </div>
          <div className="flex-row flex-1">
            <TomisTextFieldMultiLine label="Remarks" isCloneable={isCloneable} {...defns.remarks} onModify={props.handleModifyRemarks} />
          </div>
          <div className="flex-row">
            <div className="flex-1">
              <TomisAutocomplete
                label="Aircraft Type*"
                placeholder="Type Aircraft Type"
                isCloneable={isCloneable}
                disabledClone={true}
                {...defns.aircraftTypeLov}
                onModify={props.handleModifyAircraftTypeLov}
              />
            </div>
            <div className="flex-1">
              <TomisAutocomplete
                label="Tail #*"
                placeholder="Type Tail #"
                isCloneable={isCloneable}
                disabledClone={true}
                {...defns.tailNumberLov}
                onModify={props.handleModifyTailNumberLov}
              />
            </div>
            <div className="flex-1">
              <TomisAutocomplete
                label="PIC (Risk Assessment)*"
                isCloneable={isCloneable}
                disabledClone={true}
                {...defns.picLov}
                onModify={props.handleModifyPicLov}
              />
            </div>
          </div>
          <br />
          <CrewInfoGrid {...props} />
          <br />
          <div className="flex-row" style={{ marginBottom: '36px' }}>
            <TomisHeading label="Capabilities" />
          </div>
          <div className="flex-row">
            <TomisCheckbox style={{ width: '100px' }} label="EMT" {...defns.standbyCb} onModify={props.handleModifyStandByCb} />
            <TomisCheckbox style={{ width: '100px' }} label="HRST" {...defns.standbyCb} onModify={props.handleModifyStandByCb} />
            <TomisCheckbox style={{ width: '100px' }} label="HOIST" {...defns.standbyCb} onModify={props.handleModifyStandByCb} />
            <TomisCheckbox style={{ width: '100px' }} label="HSL" {...defns.standbyCb} onModify={props.handleModifyStandByCb} />
            <TomisCheckbox style={{ width: '100px' }} label="ACR" {...defns.standbyCb} onModify={props.handleModifyStandByCb} />
            <TomisCheckbox style={{ width: '100px' }} label="ADF" {...defns.standbyCb} onModify={props.handleModifyStandByCb} />
          </div>
        </TomisPanelBody>
      </TomisPanel>
      <br />
      <TomisPanel label="Mission Date(s) and Time(s)">
        <TomisButtonRaised style={{ marginRight: '12px' }} label="Add New" onClick={props.handleClickAddMissionDatesTimes} />
        <TomisButtonRaised style={{ marginRight: '12px' }} label="Apply" onClick={props.handleClickApplyMissionDatesTime} />
        <TomisButtonRaised label="Cancel Changes" onClick={props.handleClickCancelMissionDatesTimes} />
        <TomisPanelBody>
          <div className="flex-row">
            <div className="flex-1">
              <ToggleButtonLocalZulu {...defns.localZuluToggle} onModify={props.handleModifyLocalZuluToggle} />
            </div>
            <div className="flex-1">
              <TomisAutocomplete label="Time Zone*" {...defns.tailNumberLov} onModify={props.handleModifyTailNumberLov} />
            </div>
            <div className="flex-1" />
          </div>
          <div className="flex-row">
            <br />
            <br />
            <br />
            <div style={{ marginTop: '2rem' }} className="flex-1">
              <MissionDatesTimesGrid {...props} />
            </div>
          </div>
        </TomisPanelBody>
      </TomisPanel>
      <br />
      <TomisPanel label="Planning">
        <TomisPanelBody>
          <PlanningMissionSection {...props} />
        </TomisPanelBody>
      </TomisPanel>
      <br />
    </div>
  );
};

export default FlightFloatPageRender;
