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
import ToggleButtonLocalZulu from 'common/ToggleButtonLocalZulu';
import CaseInfoGrid from 'common/grids/CaseInfoGrid';
import PlanningMissionSection from 'common/PlanningMissionSection';
import MissionDatesTimesGrid from 'common/grids/MissionDatesTimesGrid';
import TomisButtonRaised from 'TomisApp/TomisButtonRaised';
import CloningStepBarPosition from 'common/CloningStepBarPosition';

const initState = {};

const propTypes = {
    localZuluValue: PropTypes.string.isRequired,
    handleChangeLocalZulu: PropTypes.func.isRequired,
    isCloneable: PropTypes.bool,
    dimensions: PropTypes.object.isRequired
};

class FlightFloatPageRender extends Component {
    constructor(props) {
        super(props);
        this.state = initState;
    }
    render() {
        const { localZuluValue, handleChangeLocalZulu, isCloneable, dimensions } = this.props;
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
                        <div className="flex-row flex-1">
                            <TomisTextFieldSingleLine isCloneable={isCloneable} floatingLabelText="Flight Title" hintText="Type Flight Title" isCloneable={isCloneable} />
                        </div>
                        <div className="flex-row flex-1">
                            <TomisTextFieldMultiLine floatingLabelText="Remarks" isCloneable={isCloneable} />
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisAutocomplete floatingLabelText="Aircraft Type*" hintText="Type Aircraft Type" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <TomisAutocomplete floatingLabelText="Tail #*" hintText="Type Tail #" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <TomisAutocomplete floatingLabelText="PIC (Risk Assessment)*" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                        </div>
                        <br />
                        <CrewInfoGrid />
                        <br />
                        <div className="flex-row" style={{ marginBottom: '36px' }}>
                            <TomisHeading label="Capabilities" />
                        </div>
                        <div className="flex-row">
                            <TomisCheckbox style={{ width: '100px' }} label="EMT" />
                            <TomisCheckbox style={{ width: '100px' }} label="HRST" />
                            <TomisCheckbox style={{ width: '100px' }} label="HOIST" />
                            <TomisCheckbox style={{ width: '100px' }} label="HSL" />
                            <TomisCheckbox style={{ width: '100px' }} label="ACR" />
                            <TomisCheckbox style={{ width: '100px' }} label="ADF" />
                        </div>
                    </TomisPanelBody>
                </TomisPanel>
                <br />
                <TomisPanel label="Mission Date(s) and Time(s)">
                    <TomisButtonRaised style={{ marginRight: '12px' }} label="Add New" />
                    <TomisButtonRaised style={{ marginRight: '12px' }} label="Apply" />
                    <TomisButtonRaised label="Cancel Changes" />
                    <TomisPanelBody>
                        <div className="flex-row">
                            <div className="flex-1">
                                <ToggleButtonLocalZulu valueSelected={localZuluValue} onChange={handleChangeLocalZulu} />
                            </div>
                            <div className="flex-1">
                                <TomisAutocomplete floatingLabelText="Time Zone*" />
                            </div>
                            <div className="flex-1" />
                        </div>
                        <div className="flex-row">
                            <br />
                            <br />
                            <br />
                            <div style={{ marginTop: '2rem' }} className="flex-1">
                                <MissionDatesTimesGrid />
                            </div>
                        </div>
                    </TomisPanelBody>
                </TomisPanel>
                <br />
                <TomisPanel label="Planning">
                    <TomisPanelBody>
                        <PlanningMissionSection isCloneable={isCloneable} />
                    </TomisPanelBody>
                </TomisPanel>
                <br />
            </div>
        );
    }
}

export default FlightFloatPageRender;
