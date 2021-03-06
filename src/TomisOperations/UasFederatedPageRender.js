import React from 'react';
import StatusBar from 'common/StatusBar';
import PageNavLinks from 'common/PageNavLinks';
import { TomisPanel, TomisPanelBody } from 'TomisApp/TomisPanel';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisTextField from 'TomisApp/TomisTextField';
import TomisTextFieldMultiLine from 'TomisApp/TomisTextFieldMultiLine';
import TomisTextFieldReadOnly from 'TomisApp/TomisTextFieldReadOnly';
import TomisHeading from 'TomisApp/TomisHeading';
import ToggleButtonYesNo from 'common/ToggleButtonYesNo';
import UasLre1Section from 'common/UasLre1Section';
import UasMceSection from 'common/UasMceSection';
import UasLre2Section from 'common/UasLre2Section';
import PlanningDataSection from 'common/PlanningDataSection';
import TomisTimeSpinner from 'TomisApp/TomisTimeSpinner';
import KuFrequencyInfo from 'common/TomisKuFrequencyInfo';
import MissionDatesTimesUasFedGrid from 'common/grids/MissionDatesTimesUasFedGrid';
import TomisButtonRaised from 'TomisApp/TomisButtonRaised';
import CloningStepBar from 'common/CloningStepBar';
import { STEP_BAR_H } from 'globalJs/constants';

const UasFederatedPageRender = props => {
    const { defns, isCloneable, dimensions } = props;
    return (
        <div className="page-root">
            {!isCloneable && <PageNavLinks pageTitle="Flight Information" />}
            {isCloneable && <CloningStepBar stepNbr={1} dimensions={dimensions} />}
            {isCloneable && <div style={{ marginTop: `${STEP_BAR_H}px` }} />}
            <TomisPanel label="Flight Information (NASO Federated)">
                <TomisPanelBody>
                    <div className="flex-row">
                        <div className="flex-1 checkbox">
                            <TomisCheckbox label="Stand By" {...defns.standbyCb} onModify={props.handleModifyStandByCb} />
                        </div>
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
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisTextField label="Tail #*" placeholder="Type Tail #" {...defns.genericCloneableDisabled} onModify={props.handleModifyGenericCloneable} />
                        </div>
                        <div className="flex-1">
                            <TomisAutocomplete label="POC" placeholder="Type POC" {...defns.genericCloneableLov} onModify={props.handleModifyGenericCloneableLov} />
                        </div>
                        <div className="flex-1">
                            <ToggleButtonYesNo label="Vader Capable?*" {...defns.yesNoCloneableToggleDisabled} onModify={props.handleModifyYesNoToggle} />
                        </div>
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
                </TomisPanelBody>
            </TomisPanel>
            <br />
            <TomisPanel label="Mission Date(s) and Time(s)">
                <TomisButtonRaised style={{ marginRight: '12px' }} label="Add New" />
                <TomisButtonRaised style={{ marginRight: '12px' }} label="Apply" />
                <TomisButtonRaised label="Cancel Changes" />
                <TomisPanelBody>
                    <div className="flex-row table">
                        <MissionDatesTimesUasFedGrid {...props} />
                    </div>
                    <br />
                    <div className="flex-row right">Scheduled Handovers - 3 | Total Flight Hours - 0.00 Hrs (00+00)</div>
                </TomisPanelBody>
            </TomisPanel>
            <br />
            <TomisPanel label="Planning">
                <TomisPanelBody>
                    <UasLre1Section {...props} />
                    <br />
                    <UasMceSection {...props} />
                    <br />
                    <UasLre2Section {...props} />
                </TomisPanelBody>
            </TomisPanel>
            <br />
        </div>
    );
};

export default UasFederatedPageRender;
