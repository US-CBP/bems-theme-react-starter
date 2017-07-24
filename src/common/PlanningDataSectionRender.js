import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisInput from 'TomisApp/TomisInput';
import TomisSelect from 'TomisApp/TomisSelect';
import TomisHeading from 'TomisApp/TomisHeading';
import ToggleButtonYesNo from 'common/ToggleButtonYesNo';
import CowAndActionableIntelligenceSection from 'common/CowAndActionableIntelligenceSection';
import CaseInfoGrid from 'common/grids/CaseInfoGrid';

class PlanningDataSectionRender extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { yesNoValue, handleChangeYesNo, isCloneable } = this.props;
    return (
      <div>
        <div className="flex-row">
          <div className="flex-1">
            <TomisSelect floatingLabelText="Named Operation" hintText="Type Named Operation" isCloneable={isCloneable} />
          </div>
          <div className="flex-1">
            <TomisSelect floatingLabelText="Category*" isCloneable={isCloneable} disabledClone={true} />
          </div>
          <div className="flex-1">
            <TomisSelect floatingLabelText="Type*" isCloneable={isCloneable} disabledClone={true} />
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-1">
            <TomisSelect floatingLabelText="Sub type*" isCloneable={isCloneable} disabledClone={true} />
          </div>
          <div className="flex-1" />
          <div className="flex-1" />
        </div>
        <br />
        <CowAndActionableIntelligenceSection isCloneable={isCloneable} />
        <br />
        <br />
        <CaseInfoGrid />
        <br />
      </div>
    );
  }
}

export default PlanningDataSectionRender;
