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
import TomisHeading from 'TomisApp/TomisHeading';
import Duration from 'common/TomisDurationReadOnly';
import ToggleButtonYesNo from 'common/ToggleButtonYesNo';
import TomisTimeSpinner from 'TomisApp/TomisTimeSpinner';

const propTypes = {
    isCloneable: PropTypes.bool
};

class UasLre1SectionRender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { yesNoValue, handleChangeYesNo, isCloneable } = this.props;
        return (
            <div>
                <TomisPanel label="LRE (CRP-CRPGCS3)">
                    <TomisPanelBody>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisTextFieldReadOnly floatingLabelText="LRE Site Name" value="CRP" />
                            </div>
                            <div className="flex-1">
                                <TomisAutocomplete floatingLabelText="GCS Code" hintText="Type GCS Code" isCloneable={isCloneable} />
                            </div>
                            <div className="flex-1">
                                <TomisTimeSpinner
                                    floatingLabelText="Brief Start Time (Zulu)"
                                    hintText="Type Brief Start time"
                                    isCloneable={isCloneable}
                                    isDisplayArrowIcons={true}
                                />
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisTextFieldReadOnly floatingLabelText="Brief End Time (Zulu)" value="0000" />
                            </div>
                            <div className="flex-1">
                                <TomisTextFieldReadOnly floatingLabelText="Takeoff Date (Zulu)" value="mm/dd/yyyy" />
                            </div>
                            <div className="flex-1">
                                <TomisTextFieldReadOnly floatingLabelText="Takeoff Time (Zulu)" value="0000" />
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <Duration />
                            </div>
                            <div className="flex-1">
                                <TomisAutocomplete floatingLabelText="Takeoff Location*" hintText="Type Takeoff Location" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <TomisTextFieldSingleLine floatingLabelText="Other*" hintText="Type Other" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                        </div>
                    </TomisPanelBody>
                </TomisPanel>
            </div>
        );
    }
}

export default UasLre1SectionRender;
