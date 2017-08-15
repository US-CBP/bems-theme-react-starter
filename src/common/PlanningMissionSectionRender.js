import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusBar from 'common/StatusBar';
import PageNavLinks from 'common/PageNavLinks';
import { TomisPanel, TomisPanelBody } from 'TomisApp/TomisPanel';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisTextFieldSingleLine from 'TomisApp/TomisTextFieldSingleLine';
import TomisTextFieldMultiLine from 'TomisApp/TomisTextFieldMultiLine';
import TomisTextFieldReadOnly from 'TomisApp/TomisTextFieldReadOnly';
import CrewInfoGrid from 'common/grids/CrewInfoGrid';
import TomisHeading from 'TomisApp/TomisHeading';
import TomisDurationReadOnly from 'common/TomisDurationReadOnly';
import ToggleButtonLocalZulu from 'common/ToggleButtonLocalZulu';
import ToggleButtonYesNo from 'common/ToggleButtonYesNo';
import CaseInfoGrid from 'common/grids/CaseInfoGrid';
import AgentInfoGrid from 'common/grids/AgentInfoGrid';
import CowAndActionableIntelligenceSection from 'common/CowAndActionableIntelligenceSection';
import PlanningDataSection from 'common/PlanningDataSection';

class PlanningMissionSectionRender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { yesNoValue, handleChangeYesNo, isCloneable } = this.props;
        return (
            <div>
                <TomisPanel label="M1 (Mission 1 Fly)">
                    <TomisPanelBody>
                        <div className="flex-row">
                            <TomisHeading label="M1 Initiation Details" />
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisTextFieldSingleLine floatingLabelText="City/Airport Code" hintText="Type City/Airport Code" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <div className="flex-row">
                                    <TomisTextFieldReadOnly floatingLabelText="Time Zone" value="EDT (-4)" />
                                    <TomisTextFieldReadOnly floatingLabelText="Date (Local)" value="06/12/2017" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex-row">
                                    <div className="flex-1">
                                        <TomisTextFieldReadOnly floatingLabelText="Time (Local)" value="0000" />
                                    </div>
                                    <div className="flex-1">
                                        <TomisDurationReadOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-row flex-1">
                            <TomisTextFieldMultiLine floatingLabelText="Mission Description" isCloneable={isCloneable} />
                        </div>
                        <PlanningDataSection isCloneable={isCloneable} />
                        <br />
                        <div className="flex-row flex-1">
                            <ToggleButtonYesNo labelText="Are there any scheduled passengers?" isCloneable={isCloneable} />
                        </div>
                        <br />
                        <div className="flex-row">
                            <TomisHeading label="M1 Conclusion Details" />
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisTextFieldSingleLine floatingLabelText="City/Airport Code" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <div className="flex-row">
                                    <TomisTextFieldReadOnly floatingLabelText="Time Zone" value="EDT (-4)" />
                                    <TomisTextFieldReadOnly floatingLabelText="Date (Local)" value="06/12/2017" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex-row">
                                    <div className="flex-1">
                                        <TomisTextFieldReadOnly floatingLabelText="Time (Local)" value="0000" />
                                    </div>
                                    <div className="flex-1" />
                                </div>
                            </div>
                        </div>
                    </TomisPanelBody>
                </TomisPanel>
            </div>
        );
    }
}

export default PlanningMissionSectionRender;
