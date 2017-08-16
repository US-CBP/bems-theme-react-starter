import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisTextFieldSingleLine from 'TomisApp/TomisTextFieldSingleLine';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import TomisHeading from 'TomisApp/TomisHeading';
import ToggleButtonYesNo from 'common/ToggleButtonYesNo';

class CowAndActionableIntelligenceSectionRender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('CowAndActionableIntelligenceSectionRender this.props=', this.props);
        const { yesNoValue, handleChangeYesNo, isCloneable, isInitAmo } = this.props;
        return (
            <div>
                <div className="flex-row">
                    <TomisHeading label="Coordinated Operation With" />
                </div>
                <br />
                <div className="flex-row">
                    <div className="flex-1">
                        <ToggleButtonYesNo
                            label="Mission Initiated by AMO?*"
                            property="isInitAmo"
                            yesNoValue={isInitAmo}
                            handleChange={handleChangeYesNo}
                            isCloneable={isCloneable}
                            disabledClone={true}
                        />
                    </div>
                    <div className="flex-1">
                        <ToggleButtonYesNo
                            label="Mission Initiated by USBP?*"
                            property="yesNoValue"
                            yesNoValue={yesNoValue}
                            handleChange={handleChangeYesNo}
                            isCloneable={isCloneable}
                            disabledClone={true}
                        />
                    </div>
                    <div className="flex-1">
                        <ToggleButtonYesNo
                            label="Coordinated with Other Agency?*"
                            property="yesNoValue"
                            yesNoValue={yesNoValue}
                            handleChange={handleChangeYesNo}
                            isCloneable={isCloneable}
                            disabledClone={true}
                        />
                    </div>
                </div>
                <div className="flex-row">
                    <div className="flex-1">
                        <TomisAutocomplete floatingLabelText="Agency Group*" isCloneable={isCloneable} disabledClone={true} />
                    </div>
                    <div className="flex-1">
                        <TomisAutocomplete floatingLabelText="Agency Name*" isCloneable={isCloneable} disabledClone={true} />
                    </div>
                    <div className="flex-1">
                        <TomisAutocomplete floatingLabelText="Other Agency Name*" isCloneable={isCloneable} disabledClone={true} />
                    </div>
                </div>
                <div className="flex-row">
                    <div className="flex-1">
                        <TomisAutocomplete floatingLabelText="Office/Agency Description" isCloneable={isCloneable} />
                    </div>
                    <div className="flex-1">
                        <TomisAutocomplete floatingLabelText="SAC Name*" isCloneable={isCloneable} disabledClone={true} />
                    </div>
                    <div className="flex-1">
                        <TomisAutocomplete floatingLabelText="Office Name*" isCloneable={isCloneable} disabledClone={true} />
                    </div>
                </div>
                <br />
                <div className="flex-row">
                    <div className="flex-1">
                        <ToggleButtonYesNo
                            label="Is this mission based on Actionable Intelligence?*"
                            property="yesNoValue"
                            yesNoValue={yesNoValue}
                            handleChange={handleChangeYesNo}
                            isCloneable={isCloneable}
                            disabledClone={true}
                        />
                    </div>
                    <div className="flex-1" />
                    <div className="flex-1" />
                </div>
                <div className="flex-row">
                    <div className="flex-1">
                        {/* TODO: hide other TomisTextFieldSingleLine when "other" selected */}
                        <TomisAutocomplete floatingLabelText="Intelligence Source*" isCloneable={isCloneable} disabledClone={true} />
                    </div>
                    <div className="flex-2">
                        <TomisTextFieldSingleLine floatingLabelText="Other*" isCloneable={isCloneable} disabledClone={true} />
                    </div>
                </div>
                <div className="flex-row">
                    <div className="flex-1">
                        <TomisAutocomplete floatingLabelText="Intel Type*" isCloneable={isCloneable} disabledClone={true} />
                    </div>
                    <div className="flex-2">
                        <TomisTextFieldSingleLine floatingLabelText="Other*" isCloneable={isCloneable} disabledClone={true} />
                    </div>
                </div>
                <br />
                <div className="flex-row">
                    <div className="flex-1">
                        <ToggleButtonYesNo
                            label="Is this an Investigative Mission?*"
                            property="yesNoValue"
                            yesNoValue={yesNoValue}
                            handleChange={handleChangeYesNo}
                            isCloneable={isCloneable}
                            disabledClone={true}
                        />
                    </div>
                    <div className="flex-1" />
                    <div className="flex-1" />
                </div>
            </div>
        );
    }
}

export default CowAndActionableIntelligenceSectionRender;
