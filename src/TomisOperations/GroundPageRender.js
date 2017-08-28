import React from 'react';
import PageNavLinksGround from 'common/PageNavLinksGround';
import { TomisPanel, TomisPanelBody } from 'TomisApp/TomisPanel';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisTextField from 'TomisApp/TomisTextField';
import TomisTimeSpinner from 'TomisApp/TomisTimeSpinner';
import TomisDatePicker from 'TomisApp/TomisDatePicker';
import TomisTextFieldMultiLine from 'TomisApp/TomisTextFieldMultiLine';
import TomisTextFieldReadOnly from 'TomisApp/TomisTextFieldReadOnly';
import TomisHeading from 'TomisApp/TomisHeading';
import AgentInfoGrid from 'common/grids/AgentInfoGrid';
import LocationInfoGrid from 'common/grids/LocationInfoGrid';
import CowAndActionableIntelligenceSection from 'common/CowAndActionableIntelligenceSection';
import PlanningDataSection from 'common/PlanningDataSection';
import CloningStepBar from 'common/CloningStepBar';
import TomisDuration from 'common/TomisDuration';
import { STEP_BAR_H } from 'globalJs/constants';

const GroundPageRender = props => {
    const { defns, isCloneable, dimensions } = props;
    return (
        <div className="page-root">
            {!isCloneable && <PageNavLinksGround pageTitle="Ground Information" />}
            {isCloneable && <CloningStepBar stepNbr={1} dimensions={dimensions} />}
            {isCloneable && <div style={{ marginTop: `${STEP_BAR_H}px` }} />}
            <TomisPanel label="Ground Operation Information">
                <TomisPanelBody>
                    <div className="flex-row">
                        <div className="flex-2">
                            <TomisTextFieldReadOnly label="Branch/Unit" {...defns.branchUnitLov} />
                        </div>
                        <div className="flex-1 checkbox">
                            <TomisCheckbox label="Stand By" {...defns.standbyCb} onModify={props.handleModifyStandByCb} />
                        </div>
                    </div>
                    <div className="flex-row flex-1">
                        <TomisTextField label="Operation Title" hintText="Type Operation Title" {...defns.title} onModify={props.handleModifyTitle} />
                    </div>
                    <div className="flex-row flex-1">
                        <TomisTextFieldMultiLine label="Remarks" {...defns.remarks} onModify={props.handleModifyRemarks} />
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisAutocomplete label="Team Lead" {...defns.genericCloneableLov} onModify={props.handleModifyGenericCloneableLov} />
                        </div>
                        <div className="flex-1" />
                        <div className="flex-1" />
                    </div>
                    <br />
                    <div className="flex-row table">
                        <div className="flex-1">
                            <AgentInfoGrid {...props} />
                        </div>
                    </div>
                    <br />
                    <div className="flex-row" style={{ marginBottom: '36px' }}>
                        <TomisHeading label="Capabilities" />
                    </div>
                    <div className="flex-row">
                        <TomisCheckbox style={{ width: '100px' }} label="EMT" {...defns.genericCb} onModify={props.handleModifyGenericCb} />
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
                            <TomisAutocomplete label="Time Zone*" {...defns.genericCloneableLovDisabled} onModify={props.handleModifyGenericCloneableLovDisabled} />
                        </div>
                        <div className="flex-1">
                            <TomisDatePicker label="Date (Local)*" {...defns.genericCloneableLovDisabled} onModify={props.handleModifyGenericCloneableLovDisabled} />
                        </div>
                        <div className="flex-1">
                            <TomisTimeSpinner
                                label="Time (Local)*"
                                {...defns.genericCloneableTimeSpinnerDisabled}
                                onModify={props.handleModifyGenericCloneableTimeSpinnerDisabled}
                            />
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisDuration {...defns.genericCloneableDurationDisabled} onModify={props.handleModifyGgenericCloneableDurationDisabled} />
                        </div>
                    </div>
                    <br />
                    <div className="flex-row table">
                        <div className="flex-1">
                            <LocationInfoGrid {...props} />
                        </div>
                    </div>
                    <br />
                    <PlanningDataSection {...props} />
                    <div className="flex-row">
                        <TomisHeading label="Conclusion Details" />
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisTextFieldReadOnly label="Date (Local)" {...defns.genericText} />
                        </div>
                        <div className="flex-1">
                            <TomisTimeSpinner
                                label="Time (Local)*"
                                {...defns.genericCloneableTimeSpinnerDisabled}
                                onModify={props.handleModifyGenericCloneableTimeSpinnerDisabled}
                            />
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
