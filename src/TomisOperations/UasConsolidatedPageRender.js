import React from 'react';
import PropTypes from 'prop-types';
import PageNavLinks from 'common/PageNavLinks';
import { TomisPanel, TomisPanelBody } from 'TomisApp/TomisPanel';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisTextField from 'TomisApp/TomisTextField';
import TomisTextFieldReadOnly from 'TomisApp/TomisTextFieldReadOnly';
import CrewInfoGrid from 'common/grids/CrewInfoGrid';
import TomisHeading from 'TomisApp/TomisHeading';
import TomisDuration from 'common/TomisDuration';
import ToggleButtonYesNo from 'common/ToggleButtonYesNo';
import CaseInfoGrid from 'common/grids/CaseInfoGrid';
import AgentInfoGrid from 'common/grids/AgentInfoGrid';
import TomisTimeSpinner from 'TomisApp/TomisTimeSpinner';
import TomisDatePicker from 'TomisApp/TomisDatePicker';
import KuFrequencyInfo from 'common/TomisKuFrequencyInfo';
import CloningStepBarPosition from 'common/CloningStepBarPosition';

const propTypes = {
    localZuluValue: PropTypes.string.isRequired,
    handleChangeLocalZulu: PropTypes.func.isRequired,
    isCloneable: PropTypes.bool,
    dimensions: PropTypes.object.isRequired
};

const UasConsolidatedPageRender = props => {
    const { localZuluValue, handleChangeLocalZulu, isCloneable, dimensions } = props;
    return (
        <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            {!isCloneable && <PageNavLinks pageTitle="Flight Information" />}
            {isCloneable && <CloningStepBarPosition stepNbr={1} dimensions={dimensions} />}
            <TomisPanel label="Flight Information">
                <TomisPanelBody>
                    <div className="flex-row">
                        <div className="flex-2">
                            <TomisTextFieldReadOnly floatingLabelText="Branch/Unit" value="Buffalo Air Branch" />
                        </div>
                        <div className="flex-1">
                            <TomisCheckbox label="Stand By" />
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisTextField floatingLabelText="Title" hintText="Type Title" isCloneable={isCloneable} />
                        </div>
                        <div className="flex-1">
                            <TomisAutocomplete floatingLabelText="Named Operation" hintText="Type Named Operation" isCloneable={isCloneable} />
                        </div>
                        <div className="flex-1">
                            <TomisAutocomplete floatingLabelText="Number of Missions*" hintText="Type Number of Missions" isCloneable={isCloneable} disabledClone={true} />
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisAutocomplete floatingLabelText="GCS Code" hintText="Type GCS Code" isCloneable={isCloneable} />
                        </div>
                        <div className="flex-1">
                            <TomisAutocomplete floatingLabelText="Tail #*" hintText="Type Tail #" isCloneable={isCloneable} disabledClone={true} />
                        </div>
                        <div className="flex-1">
                            <ToggleButtonYesNo labelText="Vader Capable?*" isCloneable={isCloneable} disabledClone={true} />
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisTextFieldReadOnly floatingLabelText="Takeoff Date (Zulu)" value="07/16/2017" />
                        </div>
                        <div className="flex-1">
                            <TomisTimeSpinner
                                isCloneable={true}
                                floatingLabelText="Takeoff Time (Zulu)*"
                                hintText="Type Takeoff time"
                                isCloneable={isCloneable}
                                disabledClone={true}
                                isDisplayArrowIcons={true}
                            />
                        </div>
                        <div className="flex-1">
                            <TomisDuration isRequired={true} isCloneable={isCloneable} disabledClone={true} />
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisAutocomplete floatingLabelText="Takeoff Location*" hintText="Type Takeoff Location" isCloneable={isCloneable} disabledClone={true} />
                        </div>
                        <div className="flex-1">
                            <TomisTextField floatingLabelText="Other*" hintText="Type Other" isCloneable={isCloneable} disabledClone={true} />
                        </div>
                        <div className="flex-1" />
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
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisTimeSpinner floatingLabelText="Brief Start Time (Zulu)" hintText="Type Brief Start Time" isCloneable={isCloneable} isDisplayArrowIcons={true} />
                        </div>
                        <div className="flex-1">
                            <TomisTextFieldReadOnly floatingLabelText="Brief End Time (Zulu)" value="0000" />
                        </div>
                        <div className="flex-1" />
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisAutocomplete floatingLabelText="Land Location" hintText="Type Land Location" isCloneable={isCloneable} />
                        </div>
                        <div className="flex-1">
                            <TomisTextField floatingLabelText="Other*" hintText="Type Other" isCloneable={isCloneable} disabledClone={true} />
                        </div>
                        <div className="flex-1">
                            <div className="flex-row">
                                <TomisTextFieldReadOnly floatingLabelText="Land Date (Zulu)" value="mm/dd/yyyy" />
                                <TomisTextFieldReadOnly floatingLabelText="Land Time (Zulu)" value="0000" />
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
