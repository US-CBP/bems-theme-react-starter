import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusBar from 'common/StatusBar';
import PageNavLinksGround from 'common/PageNavLinksGround';
import { Panel, PanelHeaderSection, PanelBody } from 'TomisApp/TomisPanel';
import TomisSelect from 'TomisApp/TomisSelect';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisInput from 'TomisApp/TomisInput';
import TomisTimeSpinner from 'TomisApp/TomisTimeSpinner';
import TomisDatePicker from 'TomisApp/TomisDatePicker';
import TomisTextarea from 'TomisApp/TomisTextarea';
import TomisTextFieldReadOnly from 'TomisApp/TomisTextFieldReadOnly';
import CrewInfoGrid from 'common/grids/CrewInfoGrid';
import TomisHeading from 'TomisApp/TomisHeading';
import Duration from 'TomisApp/TomisDurationReadOnly';
import ToggleButtonLocalZulu from 'common/ToggleButtonLocalZulu';
import ToggleButtonYesNo from 'common/ToggleButtonYesNo';
import CaseInfoGrid from 'common/grids/CaseInfoGrid';
import AgentInfoGrid from 'common/grids/AgentInfoGrid';
import LocationInfoGrid from 'common/grids/LocationInfoGrid';
import CowAndActionableIntelligenceSection from 'common/CowAndActionableIntelligenceSection';
import PlanningDataSection from 'common/PlanningDataSection';
import CloningStepBarPosition from 'common/CloningStepBarPosition';

const propTypes = {
    localZuluValue: PropTypes.string.isRequired,
    handleChangeLocalZulu: PropTypes.func.isRequired,
    isCloneable: PropTypes.bool,
    dimensions: PropTypes.object.isRequired
};

class GroundPageRender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { localZuluValue, handleChangeLocalZulu, isCloneable, dimensions } = this.props;
        return (
            <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                {!isCloneable && <PageNavLinksGround pageTitle="Ground Information" />}
                {isCloneable && <CloningStepBarPosition stepNbr={1} dimensions={dimensions} />}
                <Panel>
                    <PanelHeaderSection title="Ground Operation Information" />
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
                            <TomisInput floatingLabelText="Operation Title" hintText="Type Operation Title" isCloneable={isCloneable} />
                        </div>
                        <div className="flex-row flex-1">
                            <TomisTextarea floatingLabelText="Remarks" isCloneable={isCloneable} />
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisSelect floatingLabelText="Team Lead" isCloneable={isCloneable} />
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
                        <div className="flex-row">
                            <TomisHeading label="Capabilities" />
                        </div>
                        <div className="flex-row">
                            <TomisCheckbox label="EMT" />
                        </div>
                    </PanelBody>
                </Panel>
                <br />
                <Panel>
                    <PanelHeaderSection title="Planning" />
                    <PanelBody>
                        <div className="flex-row">
                            <TomisHeading label="Initiation Details" />
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisSelect floatingLabelText="Time Zone*" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <TomisDatePicker floatingLabelText="Date (Local)*" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <TomisTimeSpinner floatingLabelText="Time (Local)*" isCloneable={isCloneable} disabledClone={true} />
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
                                <TomisTimeSpinner floatingLabelText="Time (Local)*" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1" />
                            <div className="flex-1" />
                        </div>
                    </PanelBody>
                </Panel>
                <br />
            </div>
        );
    }
}

export default GroundPageRender;
