import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisInput from 'TomisApp/TomisInput';
import TomisSelect from 'TomisApp/TomisSelect';
import TomisHeading from 'TomisApp/TomisHeading';
import ToggleButtonYesNo from 'common/ToggleButtonYesNo';

class CowAndActionableIntelligenceSectionRender extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { yesNoValue, handleChangeYesNo, isCloneable } = this.props;
    return (
      <div>
        <div className="flex-row">
          <TomisHeading label="Coordinated Operation With" />
        </div>
        <br />
        <div className="flex-row">
          <div className="flex-1">
            <ToggleButtonYesNo labelText="Mission Initiated by AMO?*" isCloneable={isCloneable} disabledClone={true} />
          </div>
          <div className="flex-1">
            <ToggleButtonYesNo labelText="Mission Initiated by USBP?*" isCloneable={isCloneable} disabledClone={true} />
          </div>
          <div className="flex-1">
            <ToggleButtonYesNo labelText="Coordinated with Other Agency?*" isCloneable={isCloneable} disabledClone={true} />
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-1">
            <TomisSelect floatingLabelText="Agency Group*" isCloneable={isCloneable} disabledClone={true} />
          </div>
          <div className="flex-1">
            <TomisSelect floatingLabelText="Agency Name*" isCloneable={isCloneable} disabledClone={true} />
          </div>
          <div className="flex-1">
            <TomisSelect floatingLabelText="Other Agency Name*" isCloneable={isCloneable} disabledClone={true} />
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-1">
            <TomisSelect floatingLabelText="Office/Agency Description*" isCloneable={isCloneable} />
          </div>
          <div className="flex-1">
            <TomisSelect floatingLabelText="SAC Name*" isCloneable={isCloneable} disabledClone={true} />
          </div>
          <div className="flex-1">
            <TomisSelect floatingLabelText="Office Name*" isCloneable={isCloneable} disabledClone={true} />
          </div>
        </div>
        <br />
        <div className="flex-row">
          <div className="flex-1">
            <ToggleButtonYesNo labelText="Is this mission based on Actionable Intelligence?*" isCloneable={isCloneable} disabledClone={true} />
          </div>
          <div className="flex-1" />
          <div className="flex-1" />
        </div>
        <div className="flex-row">
          <div className="flex-1">
            <TomisSelect floatingLabelText="Intelligence Source*" isCloneable={isCloneable} disabledClone={true} />
          </div>
          <div className="flex-2">
            <TomisSelect floatingLabelText="Other" isCloneable={isCloneable} disabledClone={true} />
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-1">
            <TomisSelect floatingLabelText="Intel Type*" isCloneable={isCloneable} disabledClone={true} />
          </div>
          <div className="flex-2">
            <TomisSelect floatingLabelText="Other" isCloneable={isCloneable} disabledClone={true} />
          </div>
        </div>
        <br />
        <div className="flex-row">
          <div className="flex-1">
            <ToggleButtonYesNo labelText="Is this an Investigative Mission?*" isCloneable={isCloneable} disabledClone={true} />
          </div>
          <div className="flex-1" />
          <div className="flex-1" />
        </div>
      </div>
    );
  }
}

export default CowAndActionableIntelligenceSectionRender;
