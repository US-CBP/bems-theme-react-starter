import React from 'react';
import PageNavLinks from 'common/PageNavLinks';
import { TomisPanel, TomisPanelBody } from 'TomisApp/TomisPanel';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisTextField from 'TomisApp/TomisTextField';
import TomisTextFieldReadOnly from 'TomisApp/TomisTextFieldReadOnly';
import TomisHeading from 'TomisApp/TomisHeading';
import TomisDuration from 'common/TomisDuration';
import ToggleButtonYesNo from 'common/ToggleButtonYesNo';
import TomisTimeSpinner from 'TomisApp/TomisTimeSpinner';
import TomisDatePicker from 'TomisApp/TomisDatePicker';
import KuFrequencyInfo from 'common/TomisKuFrequencyInfo';
import CloningStepBar from 'common/CloningStepBar';
import { STEP_BAR_H } from 'globalJs/constants';

const UasConsolidatedPageRender = props => {
    const { defns, isCloneable, dimensions } = props;
    return (
        <div className="page-root">
            {!isCloneable && <PageNavLinks pageTitle="Flight Information" />}
            {isCloneable && <CloningStepBar stepNbr={1} dimensions={dimensions} />}
            {isCloneable && <div style={{ marginTop: `${STEP_BAR_H}px` }} />}
            <TomisPanel label="Flight Information">
                <TomisPanelBody>
                    <div className="flex-row">
                        <div className="flex-2">
                            <TomisTextFieldReadOnly label="Branch/Unit" {...defns.branchUnitLov} />
                        </div>
                        <div className="flex-1 checkbox">
                            <TomisCheckbox label="Stand By" {...defns.standbyCb} onModify={props.handleModifyStandByCb} />
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisTextField label="Title" placeholder="Type Title" {...defns.title} onModify={props.handleModifyTitle} />
                        </div>
                        <div className="flex-1">
                            <TomisAutocomplete
                                label="Named Operation"
                                placeholder="Type Named Operation"
                                {...defns.genericCloneableLov}
                                onModify={props.handleModifyGenericCloneableLov}
                            />
                        </div>
                        <div className="flex-1">
                            <TomisAutocomplete
                                label="Number of Missions*"
                                placeholder="Type Number of Missions"
                                {...defns.genericCloneableLovDisabled}
                                onModify={props.handleModifyGenericCloneableLovDisabled}
                            />
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisAutocomplete label="GCS Code" placeholder="Type GCS Code" {...defns.genericCloneableLov} onModify={props.handleModifyGenericCloneableLov} />
                        </div>
                        <div className="flex-1">
                            <TomisAutocomplete
                                label="Tail #*"
                                placeholder="Type Tail #"
                                {...defns.genericCloneableLovDisabled}
                                onModify={props.handleModifyGenericCloneableLovDisabled}
                            />
                        </div>
                        <div className="flex-1">
                            <ToggleButtonYesNo label="Vader Capable?*" {...defns.yesNoCloneableToggleDisabled} onModify={props.handleModifyYesNoToggle} />
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisTextFieldReadOnly label="Takeoff Date (Zulu)" {...defns.genericText} />
                        </div>
                        <div className="flex-1">
                            <TomisTimeSpinner
                                label="Takeoff Time (Zulu)*"
                                placeholder="Type Takeoff time"
                                {...defns.genericCloneableTimeSpinnerDisabled}
                                onModify={props.handleModifyGenericCloneableTimeSpinner}
                            />
                        </div>
                        <div className="flex-1">
                            <TomisDuration isRequired={true} {...defns.genericCloneableDurationDisabled} onModify={props.handleModifyGenericCloneableDuration} />
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisAutocomplete
                                label="Takeoff Location*"
                                placeholder="Type Takeoff Location"
                                {...defns.genericCloneableLovDisabled}
                                onModify={props.handleModifyGenericCloneableLov}
                            />
                        </div>
                        <div className="flex-1">
                            <TomisTextField label="Other*" placeholder="Type Other" {...defns.genericCloneableDisabled} onModify={props.handleModifyGenericCloneable} />
                        </div>
                        <div className="flex-1" />
                    </div>
                    <div className="flex-row">
                        <KuFrequencyInfo />
                        <div className="flex-1">
                            <TomisTimeSpinner
                                label="KU On Time (Zulu)"
                                placeholder="Type KU On Time"
                                {...defns.genericCloneableTimeSpinner}
                                onModify={props.handleModifyGenericCloneableTimeSpinner}
                            />
                        </div>
                        <div className="flex-1">
                            <TomisTimeSpinner
                                label="KU Off Time (Zulu)"
                                placeholder="Type KU Off time"
                                isDisplayArrowIcons={true}
                                {...defns.genericCloneableTimeSpinner}
                                onModify={props.handleModifyGenericCloneableTimeSpinner}
                            />
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisTimeSpinner
                                label="Brief Start Time (Zulu)"
                                placeholder="Type Brief Start Time"
                                {...defns.genericCloneableTimeSpinner}
                                onModify={props.handleModifyGenericCloneableTimeSpinner}
                            />
                        </div>
                        <div className="flex-1">
                            <TomisTextFieldReadOnly label="Brief End Time (Zulu)" {...defns.genericText} />
                        </div>
                        <div className="flex-1" />
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisAutocomplete label="Land Location" placeholder="Type Land Location" {...defns.aircraftTypeLov} onModify={props.handleModifyAircraftTypeLov} />
                        </div>
                        <div className="flex-1">
                            <TomisTextField label="Other*" placeholder="Type Other" {...defns.genericCloneableLov} onModify={props.handleModifyGenericCloneableLov} />
                        </div>
                        <div className="flex-1">
                            <div className="flex-row">
                                <TomisTextFieldReadOnly label="Land Date (Zulu)" {...defns.genericText} />
                                <TomisTextFieldReadOnly label="Land Time (Zulu)" {...defns.genericText} />
                            </div>
                        </div>
                    </div>
                </TomisPanelBody>
            </TomisPanel>
            <br />
        </div>
    );
};

export default UasConsolidatedPageRender;
