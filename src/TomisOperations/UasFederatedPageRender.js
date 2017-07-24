import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusBar from 'common/StatusBar';
import PageNavLinks from 'common/PageNavLinks';
import { Panel, PanelHeaderSection, PanelBody } from 'TomisApp/TomisPanel';
import TomisSelect from 'TomisApp/TomisSelect';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisInput from 'TomisApp/TomisInput';
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
import UasLre1Section from 'common/UasLre1Section';
import UasMceSection from 'common/UasMceSection';
import UasLre2Section from 'common/UasLre2Section';
import PlanningDataSection from 'common/PlanningDataSection';
import TomisTimeSpinner from 'TomisApp/TomisTimeSpinner';
import KuFrequencyInfo from 'TomisApp/TomisKuFrequencyInfo';
import MissionDatesTimesUasFedGrid from 'common/grids/MissionDatesTimesUasFedGrid';
import TomisButtonRaisedSimplePrimary from 'TomisApp/TomisButtonRaisedSimplePrimary';
import CloningStepBarPosition from 'common/CloningStepBarPosition';

const propTypes = {
    localZuluValue: PropTypes.string.isRequired,
    handleChangeLocalZulu: PropTypes.func.isRequired,
    isCloneable: PropTypes.bool,
    dimensions: PropTypes.object.isRequired
};

class UasFederatedPageRender extends Component {
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
                    <PanelHeaderSection title="Flight Information (NASO Federated)" />
                    <PanelBody>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisCheckbox label="Stand By" />
                            </div>
                            <div className="flex-1">
                                <TomisInput floatingLabelText="Title" hintText="Type Title" isCloneable={isCloneable} />
                            </div>
                            <div className="flex-1">
                                <TomisSelect floatingLabelText="Named Operation" hintText="Type Named Operation" isCloneable={isCloneable} />
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisInput floatingLabelText="Tail #" hintText="Type Tail #" isCloneable={isCloneable} disabledClone={true} />
                            </div>
                            <div className="flex-1">
                                <TomisSelect floatingLabelText="POC" hintText="Type POC" isCloneable={isCloneable} />
                            </div>
                            <div className="flex-1">
                                <ToggleButtonYesNo labelText="Vader Capable?" isCloneable={isCloneable} />
                            </div>
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
                    </PanelBody>
                </Panel>
                <br />
                <Panel>
                    <PanelHeaderSection title="Mission Date(s) and Time(s)">
                        <TomisButtonRaisedSimplePrimary style={{ marginRight: '12px' }} label="Add New" />
                        <TomisButtonRaisedSimplePrimary style={{ marginRight: '12px' }} label="Apply" />
                        <TomisButtonRaisedSimplePrimary label="Cancel Changes" />
                    </PanelHeaderSection>
                    <PanelBody>
                        <MissionDatesTimesUasFedGrid isCloneable={isCloneable} />
                        <br />
                        <div className="flex-row right">Scheduled Handovers - 2 | Total Flight Hours - 0.00 Hrs (00+00)</div>
                    </PanelBody>
                </Panel>
                <br />
                <Panel>
                    <PanelHeaderSection title="Planning" />
                    <PanelBody>
                        <UasLre1Section isCloneable={isCloneable} />
                        <br />
                        <UasMceSection isCloneable={isCloneable} />
                        <br />
                        <UasLre2Section isCloneable={isCloneable} />
                    </PanelBody>
                </Panel>
                <br />
            </div>
        );
    }
}

export default UasFederatedPageRender;
