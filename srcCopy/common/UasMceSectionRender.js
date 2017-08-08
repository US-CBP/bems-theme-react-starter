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
import TomisHeading from 'TomisApp/TomisHeading';
import Duration from 'TomisApp/TomisDurationReadOnly';
import ToggleButtonYesNo from 'common/ToggleButtonYesNo';
import TomisTimeSpinner from 'TomisApp/TomisTimeSpinner';

const propTypes = {
  isCloneable: PropTypes.bool
};

class UasMceSectionRender extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { yesNoValue, handleChangeYesNo, isCloneable } = this.props;
    return (
      <div>
        <Panel>
          <PanelHeaderSection title="<MCE1>(RDR-RDRGCS2)" />
          <PanelBody>
            <div className="flex-row">
              <div className="flex-1">
                <TomisTextFieldReadOnly floatingLabelText="MCE Site Name*" value="RDR" />
              </div>
              <div className="flex-1">
                <TomisSelect floatingLabelText="GCS Code" hintText="Type GCS Code" isCloneable={isCloneable} disabledClone={true} />
              </div>
              <div className="flex-1">
                <TomisTimeSpinner floatingLabelText="Brief Start Time (Zulu)" hintText="Type Brief Start time" isCloneable={isCloneable} disabledClone={true} />
              </div>
            </div>
            <div className="flex-row">
              <div className="flex-1">
                <TomisTextFieldReadOnly floatingLabelText="Brief End Time (Zulu)*" value="0000" />
              </div>
              <div className="flex-1">
                <TomisTextFieldReadOnly floatingLabelText="Handover Date (Zulu)*" value="mm/dd/yyyy" />
              </div>
              <div className="flex-1">
                <TomisTextFieldReadOnly floatingLabelText="Handover Time (Zulu)*" value="0000" />
              </div>
            </div>
            <div className="flex-row">
              <div className="flex-1">
                <Duration />
              </div>
              <div className="flex-1">
                <TomisSelect floatingLabelText="Number of Missions" hintText="Type Number of Missions" isCloneable={isCloneable} disabledClone={true} />
              </div>
              <div className="flex-1" />
            </div>
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default UasMceSectionRender;
