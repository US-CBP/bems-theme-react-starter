import React from 'react';
import PropTypes from 'prop-types';
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
import Duration from 'common/TomisDurationReadOnly';
import ToggleButtonYesNo from 'common/ToggleButtonYesNo';
import CaseInfoGrid from 'common/grids/CaseInfoGrid';
import AgentInfoGrid from 'common/grids/AgentInfoGrid';
import UasLre1Section from 'common/UasLre1Section';
import UasMceSection from 'common/UasMceSection';
import UasLre2Section from 'common/UasLre2Section';
import PlanningDataSection from 'common/PlanningDataSection';
import TomisTimeSpinner from 'TomisApp/TomisTimeSpinner';
import KuFrequencyInfo from 'common/TomisKuFrequencyInfo';
import MissionDatesTimesUasFedGrid from 'common/grids/MissionDatesTimesUasFedGrid';
import TomisButtonRaised from 'TomisApp/TomisButtonRaised';
import CloningStepBarPosition from 'common/CloningStepBarPosition';

const propTypes = {
  isCloneable: PropTypes.bool,
  dimensions: PropTypes.object.isRequired
};

const UasFederatedPageRender = props => {
  const { yesNoValue, handleChangeYesNo, isCloneable, dimensions } = props;
  return (
    <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
      {!isCloneable && <PageNavLinks pageTitle="Flight Information" />}
      {isCloneable && <CloningStepBarPosition stepNbr={1} dimensions={dimensions} />}
      <TomisPanel label="Flight Information (NASO Federated)">
        <TomisPanelBody>
          <div className="flex-row">
            <div className="flex-1">
              <TomisCheckbox label="Stand By" />
            </div>
            <div className="flex-1">
              <TomisTextField floatingLabelText="Title" hintText="Type Title" isCloneable={isCloneable} />
            </div>
            <div className="flex-1">
              <TomisAutocomplete floatingLabelText="Named Operation" hintText="Type Named Operation" isCloneable={isCloneable} />
            </div>
          </div>
          <div className="flex-row">
            <div className="flex-1">
              <TomisTextField floatingLabelText="Tail #*" hintText="Type Tail #" isCloneable={isCloneable} disabledClone={true} />
            </div>
            <div className="flex-1">
              <TomisAutocomplete floatingLabelText="POC" hintText="Type POC" isCloneable={isCloneable} />
            </div>
            <div className="flex-1">
              <ToggleButtonYesNo label="Vader Capable?*" isCloneable={isCloneable} disabledClone={true} value={yesNoValue} handleChange={handleChangeYesNo} />
            </div>
          </div>
          <div className="flex-row">
            <KuFrequencyInfo />
            <div className="flex-1">
              <TomisTimeSpinner floatingLabelText="KU On Time (Zulu)" hintText="Type KU On Time" isCloneable={isCloneable} isDisplayArrowIcons={true} />
            </div>
            <div className="flex-1">
              <TomisTimeSpinner floatingLabelText="KU Off Time (Zulu)" hintText="Type KU Off time" isCloneable={isCloneable} isDisplayArrowIcons={true} />
            </div>
          </div>
        </TomisPanelBody>
      </TomisPanel>
      <br />
      <TomisPanel label="Mission Date(s) and Time(s)">
        <TomisButtonRaised style={{ marginRight: '12px' }} label="Add New" />
        <TomisButtonRaised style={{ marginRight: '12px' }} label="Apply" />
        <TomisButtonRaised label="Cancel Changes" />
        <TomisPanelBody>
          <MissionDatesTimesUasFedGrid isCloneable={isCloneable} />
          <br />
          <div className="flex-row right">Scheduled Handovers - 3 | Total Flight Hours - 0.00 Hrs (00+00)</div>
        </TomisPanelBody>
      </TomisPanel>
      <br />
      <TomisPanel label="Planning">
        <TomisPanelBody>
          <UasLre1Section isCloneable={isCloneable} />
          <br />
          <UasMceSection isCloneable={isCloneable} />
          <br />
          <UasLre2Section isCloneable={isCloneable} />
        </TomisPanelBody>
      </TomisPanel>
      <br />
    </div>
  );
};

export default UasFederatedPageRender;
