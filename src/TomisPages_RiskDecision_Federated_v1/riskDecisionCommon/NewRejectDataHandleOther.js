import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import HeaderNavAction from '../../TomisMui/HeaderNavAction';
import { Panel, PanelHeaderSection, PanelBody } from '../../TomisMui/Panel';
import ToggleButtons from '../../TomisMui/ToggleButtons';
import TextFieldSimple from '../../TomisMui/TextFieldSimple';
import AutoComplete from '../../TomisMui/AutoComplete';
import AutoCompleteInfo from '../../TomisMui/AutoCompleteInfo';
import ButtonRaisedSimplePrimary from '../../TomisMui/ButtonRaisedSimplePrimary';
import FileAttachment from '../../TomisMui/FileAttachment';
import DatePickerInlineLandscape from '../../TomisMui/DatePickerInlineLandscape';
import DialogSimple from '../../TomisMui/DialogSimple';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../../TomisMui/Table';
import { toggleButtonsYesNoOptions, setStateFlightStatus, setStateIsInfoVisible, setStateIsConfirmVisible } from './helper';

const setStateIntelSource = (intelSource, state, props) => {
  return { intelSource };
};

const setStateIntelType = (intelType, state, props) => {
  return { intelType };
};

class NewRejectDataHandleOther extends Component {
  constructor(props) {
    super(props);
    this.handleChangeInitAmo = this.handleChangeInitAmo.bind(this);
    this.handleChangeIntelSource = this.handleChangeIntelSource.bind(this);
    this.handleChangeIntelType = this.handleChangeIntelType.bind(this);
    this.renderField = this.renderField.bind(this);
    this.renderFieldInCurrentRow = this.renderFieldInCurrentRow.bind(this);
    this.renderFieldInNewRow = this.renderFieldInNewRow.bind(this);

    this.state = {
      initUsbp: '',
      otherAgency: '',
      intelSource: '',
      intelType: ''
    };
  }

  handleChangeInitAmo(evt, value) {
    evt.stopPropagation();
    console.log('value=', value);
  }

  handleChangeIntelSource(value, arr, parms) {
    this.setState(setStateIntelSource.bind(this, value));
  }

  handleChangeIntelType(value, arr, parms) {
    this.setState(setStateIntelType.bind(this, value));
  }

  renderField() {
    return (
      <div className="flex-1">
        <TextFieldSimple floatingLabelText="Other*" />
      </div>
    );
  }

  renderFieldInCurrentRow() {
    const { intelSource } = this.state;
    if (intelSource.length === 0) {
      return this.renderField();
    } else {
      return false;
    }
  }

  renderFieldInNewRow() {
    const { intelSource } = this.state;
    if (intelSource.length > 0) {
      return (
        <div className="flex-row">
          {this.renderField()}
        </div>
      );
    } else {
      return false;
    }
  }

  render() {
    const { handleChangeInitAmo, handleChangeIntelType, handleChangeIntelSource, renderFieldInCurrentRow, renderFieldInNewRow } = this;
    const { initUsbp, otherAgency } = this.state;
    return (
      <div>
        <div className="flex-row flex-1">
          <TextFieldSimple floatingLabelText="Mission Description" />
        </div>
        <div className="flex-row">
          <div className="flex-1">
            <AutoComplete hintText="Choose Category" floatingLabelText="Category*" />
          </div>
          <div className="flex-1">
            <AutoComplete hintText="Choose Type" floatingLabelText="Type*" />
          </div>
          <div className="flex-1">
            <AutoComplete hintText="Choose Sub-Type" floatingLabelText="Sub-Type*" />
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-1">
            <AutoComplete hintText="Choose Named Operation" floatingLabelText="Named Operation" />
          </div>
        </div>
        <br />
        <div className="flex-row">
          <h3>Coordinated Operation With</h3>
        </div>
        <div className="flex-row">
          <div className="flex-1">
            <ToggleButtons labelText="Mission Initiated By AMO?*" valueSelected="" options={toggleButtonsYesNoOptions} onChange={handleChangeInitAmo} />
          </div>
          <div className="flex-1">
            <ToggleButtons labelText="Mission Initiated by USBP?*" valueSelected="" options={toggleButtonsYesNoOptions} />
          </div>
          <div className="flex-1">
            <ToggleButtons labelText="Coordinated with Other Agency*" valueSelected="" options={toggleButtonsYesNoOptions} />
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-1">
            <AutoComplete hintText="Choose Agency Group" floatingLabelText="Agency Group*" />
          </div>
          <div className="flex-1">
            <AutoComplete hintText="Choose Agency Name" floatingLabelText="Agency Name*" />
          </div>
          <div className="flex-1">
            <TextFieldSimple floatingLabelText="Other Agency Name*" />
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-1">
            <TextFieldSimple floatingLabelText="Other/Agency Description*" />
          </div>
          <div className="flex-1">
            <AutoComplete hintText="Choose SAC Name" floatingLabelText="SAC Name*" />
          </div>
          <div className="flex-1">
            <AutoComplete hintText="Choose Office Name" floatingLabelText="Office Name*" />
          </div>
        </div>
        <br />
        <div className="flex-row">
          <div className="flex-1">
            <ToggleButtons labelText="Is this mission based on Actionable Intelligence?*" valueSelected="" options={toggleButtonsYesNoOptions} />
          </div>
          <div className="flex-1">
            <AutoComplete hintText="Choose Intelligence Source" floatingLabelText="Intelligence Source*" onUpdateInput={handleChangeIntelSource} />
          </div>
          <div className="flex-1">
            {renderFieldInCurrentRow()}
          </div>
        </div>
        {renderFieldInNewRow()}
        <div className="flex-row">
          <div className="flex-1">
            <AutoComplete hintText="Choose Intel Type" floatingLabelText="Intel Type*" onUpdateInput={handleChangeIntelType} />
          </div>
          <div className="flex-1">
            <TextFieldSimple floatingLabelText="Other*" />
          </div>
          <div className="flex-1" />
        </div>
        <br />
        <div className="flex-row">
          <div className="flex-1">
            <ToggleButtons labelText="Is this an Investigation Mission?*" valueSelected="" options={toggleButtonsYesNoOptions} />
          </div>
        </div>
      </div>
    );
  }
}

export default NewRejectDataHandleOther;
