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
        <Panel>
          <PanelHeaderSection title="<M1>(Mission 1 Fly)" />
          <PanelBody>
            <div className="flex-row">
              <TomisHeading label="<M1>Initiation Details" />
            </div>
            <div className="flex-row">
              <div className="flex-1">
                <TomisInput floatingLabelText="City/Airport Code" hintText="Type City/Airport Code" isCloneable={isCloneable} disabledClone={true} />
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
                    <Duration />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-row flex-1">
              <TomisTextarea floatingLabelText="Mission Description" isCloneable={isCloneable} />
            </div>
            <PlanningDataSection isCloneable={isCloneable} />
            <br />
            <div className="flex-row flex-1">
              <ToggleButtonYesNo labelText="Are there any scheduled passengers?" isCloneable={isCloneable} />
            </div>
            <br />
            <div className="flex-row">
              <TomisHeading label="<M1>Conclusion Details" />
            </div>
            <div className="flex-row">
              <div className="flex-1">
                <TomisInput floatingLabelText="City/Airport Code" isCloneable={isCloneable} disabledClone={true} />
              </div>
              <div className="flex-1">
                <div className="flex-row">
                  <TomisTextFieldReadOnly floatingLabelText="Time Zone*" value="EDT (-4)" />
                  <TomisTextFieldReadOnly floatingLabelText="Date (Local)*" value="06/12/2017" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex-row">
                  <div className="flex-1">
                    <TomisTextFieldReadOnly floatingLabelText="Time (Local)*" value="0000" />
                  </div>
                  <div className="flex-1" />
                </div>
              </div>
            </div>
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default PlanningMissionSectionRender;
