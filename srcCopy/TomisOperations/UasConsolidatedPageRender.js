import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageNavLinks from 'common/PageNavLinks';
import { Panel, PanelHeaderSection, PanelBody } from 'TomisApp/TomisPanel';
import TomisSelect from 'TomisApp/TomisSelect';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisInput from 'TomisApp/TomisInput';
import TomisTextFieldReadOnly from 'TomisApp/TomisTextFieldReadOnly';
import CrewInfoGrid from 'common/grids/CrewInfoGrid';
import TomisHeading from 'TomisApp/TomisHeading';
import TomisDuration from 'TomisApp/TomisDuration';
import ToggleButtonYesNo from 'common/ToggleButtonYesNo';
import CaseInfoGrid from 'common/grids/CaseInfoGrid';
import AgentInfoGrid from 'common/grids/AgentInfoGrid';
import TomisTimeSpinner from 'TomisApp/TomisTimeSpinner';
import TomisDatePicker from 'TomisApp/TomisDatePicker';
import KuFrequencyInfo from 'TomisApp/TomisKuFrequencyInfo';
import CloningStepBarPosition from 'common/CloningStepBarPosition';

const propTypes = {
    localZuluValue: PropTypes.string.isRequired,
    handleChangeLocalZulu: PropTypes.func.isRequired,
    isCloneable: PropTypes.bool,
    dimensions: PropTypes.object.isRequired
};

class UasConsolidatedPageRender extends Component {
    constructor(props) {
        super(props);
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
                                <TomisSelect floatingLabelText="Branch/Unit*" />
                            </div>
                            <div className="flex-1">
                                <TomisCheckbox label="Stand By" />
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisInput floatingLabelText="Title" hintText="Type Title" isCloneable={isCloneable} />
                            </div>
                            <div className="flex-1">
                                <TomisSelect floatingLabelText="Named Operation" hintText="Type Named Operation" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <TomisSelect floatingLabelText="Number of Missions*" hintText="Type Number of Missions" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisInput floatingLabelText="GCS Code" hintText="Type GCS Code" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <TomisSelect floatingLabelText="Tail #*" hintText="Type Tail #" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <ToggleButtonYesNo labelText="Vader Capable?*" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisDatePicker floatingLabelText="Takeoff Date (Zulu)" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <TomisTimeSpinner
                                    isCloneable={true}
                                    floatingLabelText="Takeoff Time (Zulu)"
                                    hintText="Type Takeoff time"
                                    isCloneable={isCloneable}
                                    disabledClone={true}
                                />
                            </div>
                            <div className="flex-1">
                                <TomisDuration isCloneable={isCloneable} />
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisSelect floatingLabelText="Takeoff Location" hintText="Type Takeoff Location" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <TomisInput floatingLabelText="Other*" hintText="Type Other" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1" />
                        </div>
                        <div className="flex-row">
                            <KuFrequencyInfo />
                            <div className="flex-1">
                                <TomisTimeSpinner floatingLabelText="KU On Time (Zulu)" hintText="Type KU On Time" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <TomisTimeSpinner floatingLabelText="KU Off Time (Zulu)" hintText="Type KU Off time" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisTimeSpinner floatingLabelText="Brief Start Time (Zulu)" hintText="Type Brief Start Time" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <TomisTextFieldReadOnly floatingLabelText="Brief End Time (Zulu)" value="0000" />
                            </div>
                            <div className="flex-1" />
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisSelect floatingLabelText="Land Location" hintText="Type Land Location" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <TomisInput floatingLabelText="Other*" hintText="Type Other" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <div className="flex-row">
                                    <TomisTextFieldReadOnly floatingLabelText="Land Date (Zulu)" value="mm/dd/yyyy" />
                                    <TomisTextFieldReadOnly floatingLabelText="Land Time (Zulu)" value="0000" />
                                </div>
                            </div>
                        </div>
                    </PanelBody>
                </Panel>
                <br />
            </div>
        );
    }
}

export default UasConsolidatedPageRender;
