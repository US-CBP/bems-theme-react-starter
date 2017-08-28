import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusBar from 'common/StatusBar';
import PageNavLinks from 'common/PageNavLinks';
import { TomisPanel, TomisPanelBody } from 'TomisApp/TomisPanel';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisTextField from 'TomisApp/TomisTextField';
import TomisTextFieldMultiLine from 'TomisApp/TomisTextFieldMultiLine';
import TomisTextFieldReadOnly from 'TomisApp/TomisTextFieldReadOnly';
import TomisHeading from 'TomisApp/TomisHeading';
import TomisDuration from 'common/TomisDuration';
import ToggleButtonLocalZulu from 'common/ToggleButtonLocalZulu';
import ToggleButtonYesNo from 'common/ToggleButtonYesNo';
import CowAndActionableIntelligenceSection from 'common/CowAndActionableIntelligenceSection';
import PlanningDataSection from 'common/PlanningDataSection';

class PlanningMissionSectionRender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { isCloneable, yesNoValue, handleModifyYesNoToggle } = this.props;
        return (
            <div>
                <TomisPanel label="M1 (Mission 1 Fly)">
                    <TomisPanelBody>
                        <div className="flex-row">
                            <TomisHeading label="M1 Initiation Details" />
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisTextField label="City/Airport Code" placeholder="Type City/Airport Code" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <div className="flex-row">
                                    <TomisTextFieldReadOnly label="Time Zone" placeholder="Time Zone" value="EDT (-4)" />
                                    <TomisTextFieldReadOnly label="Date (Local)" placeholder="Date (Local)" value="06/12/2017" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex-row">
                                    <div className="flex-1">
                                        <TomisTextFieldReadOnly label="Time (Local)" placeholder="Time (Local)" value="0000" />
                                    </div>
                                    <div className="flex-1">
                                        <TomisDuration readOnly={true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-row flex-1">
                            <TomisTextFieldMultiLine label="Mission Description" placeholder="Type Mission Description" isCloneable={isCloneable} />
                        </div>
                        <PlanningDataSection {...this.props} />
                        <br />
                        <div className="flex-row flex-1">
                            <ToggleButtonYesNo
                                label="Are there any scheduled passengers?"
                                property="yesNoValue"
                                value={yesNoValue}
                                handleChange={handleModifyYesNoToggle}
                                isCloneable={isCloneable}
                            />
                        </div>
                        <br />
                        <div className="flex-row">
                            <TomisHeading label="M1 Conclusion Details" />
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisTextField label="City/Airport Code" placeholder="Type City/Airport Code" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <div className="flex-row">
                                    <TomisTextFieldReadOnly label="Time Zone" placeholder="Time Zone" value="EDT (-4)" />
                                    <TomisTextFieldReadOnly label="Date (Local)" placeholder="Date (Local)" value="06/12/2017" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex-row">
                                    <div className="flex-1">
                                        <TomisTextFieldReadOnly label="Time (Local)" value="0000" />
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
