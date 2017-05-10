import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import HeaderNavAction from '../../TomisInternal/HeaderNavAction';
import { Panel, PanelHeaderSection, PanelBody } from '../../TomisMui/Panel';
import ToggleButtons from '../../TomisNew/ToggleButtons';
import TextFieldSimple from '../../Tomis/TextFieldSimple';
import AutoComplete from '../../Tomis/AutoComplete';
import AutoCompleteInfo from '../../Tomis/AutoCompleteInfo';
import ButtonRaisedSimplePrimary from '../../Tomis/ButtonRaisedSimplePrimary';
import FileAttachment from '../../TomisNew/FileAttachment';
import DatePickerInlineLandscape from '../../Tomis/DatePickerInlineLandscape';
import DialogSimple from '../../Tomis/DialogSimple';

import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../../TomisMui/Table';
import { toggleButtonsYesNoOptions, setStateFlightStatus, setStateIsInfoVisible, setStateIsConfirmVisible } from './helper';

const setStateInitAmo = (initAmo, state, props) => {
    return {initAmo}
}

const setStateInitUsbp = (initUsbp, state, props) => {
    return {initUsbp}
}

const setStateOtherAgency = (otherAgency, state, props) => {
    return {otherAgency}
}

class NewRejectData extends Component {
  constructor(props) {
    super(props);
    this.handleChangeInitAmo = this.handleChangeInitAmo.bind(this);
    this.handleChangeInitUsbp = this.handleChangeInitUsbp.bind(this);
    this.handleChangeOtherAgency = this.handleChangeOtherAgency.bind(this);

    this.state = {
      initAmo: '',
      initUsbp: '',
      otherAgency: ''
    }
  }

  handleChangeInitAmo(event, value) {
    event.stopPropagation();
    event.preventDefault();
    this.setState(setStateInitAmo.bind(this, value));
  }

  handleChangeInitUsbp(event, value) {
    event.stopPropagation();
    event.preventDefault();
    this.setState(setStateInitUsbp.bind(this, value));
  }

  handleChangeOtherAgency(event, value) {
    event.stopPropagation();
    event.preventDefault();
    this.setState(setStateOtherAgency.bind(this, value));
  }

  render() {
    const {handleChangeInitAmo, handleChangeInitUsbp, handleChangeOtherAgency} = this.state;
    const {initAmo, initUsbp, otherAgency} = this.state;
    return (
      <div>
      <div className="flex-row flex-1">
        <TextFieldSimple floatingLabelText="Mission Description" />
        </div>
        <div className="flex-row">
          <div className="flex-1">
            <AutoComplete hintText="Choose Category" floatingLabelText="Category*" />
          </div>
          <div className="flex-1 flex-column-pad">
            <AutoComplete hintText="Choose Type" floatingLabelText="Type*" />
          </div>
          <div className="flex-1 flex-column-pad">
            <AutoComplete hintText="Choose Sub-Type" floatingLabelText="Sub-Type*" />
          </div>
        </div>
        <div className="flex-row">
          <h3>Coordinated Operation With</h3>
        </div>
        <div className="flex-row">
            <div className="flex-1">
              <ToggleButtons
                labelText="Mission Initiated By AMO?*"
                valueSelected={initAmo}
                options={toggleButtonsYesNoOptions}
                onChange={handleChangeInitAmo}
              />
            </div>
            <div className="flex-1 flex-column-pad">
              <ToggleButtons
                labelText="Mission Initiated by USBP?*"
                valueSelected={initUsbp}
                options={toggleButtonsYesNoOptions}
                onChange={handleChangeInitUsbp}
              />
            </div>
            <div className="flex-1 flex-column-pad">
              <ToggleButtons
                labelText="Coordinated with Other Agency*"
                valueSelected={otherAgency}
                options={toggleButtonsYesNoOptions}
                onChange={handleChangeOtherAgency}
              />
            </div>
        </div>
        <div className="flex-row">
            <div className="flex-1">
              <AutoComplete hintText="Choose Agency Group" floatingLabelText="Agency Group*" />
            </div>
            <div className="flex-1 flex-column-pad">
              <AutoComplete hintText="Choose Agency Name" floatingLabelText="Agency Name*" />
            </div>
            <div className="flex-1 flex-column-pad">
              <TextFieldSimple floatingLabelText="Other Agency Name*" />
            </div>
        </div>
        <div className="flex-row">
            <div className="flex-1">
                <TextFieldSimple floatingLabelText="Other/Agency Description*" />
            </div>
            <div className="flex-1 flex-column-pad">
              <AutoComplete hintText="Choose SAC Name" floatingLabelText="SAC Name*" />
            </div>
            <div className="flex-1 flex-column-pad">
              <AutoComplete hintText="Choose Office Name" floatingLabelText="Office Name*" />
            </div>
        </div>
        <br />
        <div className="flex-row">
            <div className="flex-1">
                <TextFieldSimple floatingLabelText="Is this mission based on Actionable Intelligence?*" />
            </div>
        </div>
        <div className="flex-row">
            <div className="flex-1">
                <TextFieldSimple floatingLabelText="Other*" />
            </div>
            <div className="flex-1 flex-column-pad">
              <AutoComplete hintText="Choose Intel Type" floatingLabelText="Intel Type*" />
            </div>
            <div className="flex-1 flex-column-pad">
              <TextFieldSimple floatingLabelText="Other*" />
            </div>
        </div>
        <br />
        <div className="flex-row">
            <div className="flex-1">
                <TextFieldSimple floatingLabelText="Is this an Investigation Mission?*" />
            </div>
        </div>
      </div>
    );
  }
}

export default NewRejectData;
