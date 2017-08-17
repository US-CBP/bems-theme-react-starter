import React from 'react';
import PropTypes from 'prop-types';
import StatusBar from 'common/StatusBar';
import PageNavLinksGround from 'common/PageNavLinksGround';
import { TomisPanel, TomisPanelBody } from 'TomisApp/TomisPanel';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisTextField from 'TomisApp/TomisTextField';
import TomisTimeSpinner from 'TomisApp/TomisTimeSpinner';
import TomisDatePicker from 'TomisApp/TomisDatePicker';
import TomisTextFieldMultiLine from 'TomisApp/TomisTextFieldMultiLine';
import TomisTextFieldReadOnly from 'TomisApp/TomisTextFieldReadOnly';
import CrewInfoGrid from 'common/grids/CrewInfoGrid';
import TomisHeading from 'TomisApp/TomisHeading';
import Duration from 'common/TomisDurationReadOnly';
import ToggleButtonLocalZulu from 'common/ToggleButtonLocalZulu';
import ToggleButtonYesNo from 'common/ToggleButtonYesNo';
import CaseInfoGrid from 'common/grids/CaseInfoGrid';
import AgentInfoGrid from 'common/grids/AgentInfoGrid';
import LocationInfoGrid from 'common/grids/LocationInfoGrid';
import CowAndActionableIntelligenceSection from 'common/CowAndActionableIntelligenceSection';
import PlanningDataSection from 'common/PlanningDataSection';
import CloningStepBarPosition from 'common/CloningStepBarPosition';
import TomisDuration from 'common/TomisDuration';

const propTypes = {
    localZuluValue: PropTypes.string.isRequired,
    handleChangeLocalZulu: PropTypes.func.isRequired,
    isCloneable: PropTypes.bool,
    dimensions: PropTypes.object.isRequired
};

const GroundPageRender = props => {
    const { localZuluValue, handleChangeLocalZulu, isCloneable, dimensions } = props;
    return (
        <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            {!isCloneable && <PageNavLinksGround pageTitle="Ground Information" />}
            {isCloneable && <CloningStepBarPosition stepNbr={1} dimensions={dimensions} />}
            <TomisPanel label="Ground Operation Information">
                <TomisPanelBody>
                    <div className="flex-row">
                        <div className="flex-2">
                            <TomisTextFieldReadOnly floatingLabelText="Branch/Unit" value="Buffalo Air Branch" />
                        </div>
                        <div className="flex-1">
                            <TomisCheckbox label="Stand By" />
                        </div>
                    </div>
                    <div className="flex-row flex-1">
                        <TomisTextField floatingLabelText="Operation Title" hintText="Type Operation Title" isCloneable={isCloneable} />
                    </div>
                    <div className="flex-row flex-1">
                        <TomisTextFieldMultiLine floatingLabelText="Remarks" isCloneable={isCloneable} />
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisAutocomplete floatingLabelText="Team Lead" isCloneable={isCloneable} />
                        </div>
                        <div className="flex-1" />
                        <div className="flex-1" />
                    </div>
                    <br />
                    <div className="flex-row">
                        <div className="flex-1">
                            <AgentInfoGrid />
                        </div>
                    </div>
                    <br />
                    <div className="flex-row" style={{ marginBottom: '36px' }}>
                        <TomisHeading label="Capabilities" />
                    </div>
                    <div className="flex-row">
                        <TomisCheckbox style={{ width: '100px' }} label="EMT" />
                    </div>
                </TomisPanelBody>
            </TomisPanel>
            <br />
            <TomisPanel label="Planning">
                <TomisPanelBody>
                    <div className="flex-row">
                        <TomisHeading label="Initiation Details" />
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisAutocomplete floatingLabelText="Time Zone*" isCloneable={isCloneable} disabledClone={true} />
                        </div>
                        <div className="flex-1">
                            <TomisDatePicker floatingLabelText="Date (Local)*" isCloneable={isCloneable} disabledClone={true} />
                        </div>
                        <div className="flex-1">
                            <TomisTimeSpinner floatingLabelText="Time (Local)*" isCloneable={isCloneable} disabledClone={true} isDisplayArrowIcons={true} />
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisDuration isCloneable={isCloneable} disabledClone={true} />
                        </div>
                    </div>
                    <br />
                    <div className="flex-row">
                        <div className="flex-1">
                            <LocationInfoGrid />
                        </div>
                    </div>
                    <br />
                    <PlanningDataSection isCloneable={isCloneable} />
                    <div className="flex-row">
                        <TomisHeading label="Conclusion Details" />
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisTextFieldReadOnly floatingLabelText="Date (Local)" value="07/31/2017" />
                        </div>
                        <div className="flex-1">
                            <TomisTimeSpinner floatingLabelText="Time (Local)*" isCloneable={isCloneable} disabledClone={true} isDisplayArrowIcons={true} />
                        </div>
                        <div className="flex-1" />
                        <div className="flex-1" />
                    </div>
                </TomisPanelBody>
            </TomisPanel>
            <br />
        </div>
    );
};

export default GroundPageRender;
