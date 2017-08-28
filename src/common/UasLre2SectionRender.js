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
import TomisTimeSpinner from 'TomisApp/TomisTimeSpinner';

const propTypes = {
    isCloneable: PropTypes.bool
};

class UasLre2SectionRender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { yesNoValue, handleModifyYesNoToggle, isCloneable } = this.props;
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
                                <TomisTextFieldReadOnly floatingLabelText="Handover Date (Zulu)" value="mm/dd/yyyy" />
                            </div>
                            <div className="flex-1">
                                <TomisTextFieldReadOnly floatingLabelText="Handover Time (Zulu)" value="0000" />
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisDuration readOnly={true} />
                            </div>
                            <div className="flex-1">
                                <TomisTextFieldReadOnly floatingLabelText="Land Date (Zulu)" value="0716/2017" />
                            </div>
                            <div className="flex-1">
                                <TomisTextFieldReadOnly floatingLabelText="Land Time (Zulu)" value="0000" />
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisAutocomplete floatingLabelText="Land Location*" hintText="Land Location" isCloneable={isCloneable} />
                            </div>
                            <div className="flex-1">
                                <TomisTextField floatingLabelText="Other*" hintText="Type Other" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1" />
                        </div>
                    </TomisPanelBody>
                </TomisPanel>
            </div>
        );
    }
}

export default UasLre2SectionRender;
