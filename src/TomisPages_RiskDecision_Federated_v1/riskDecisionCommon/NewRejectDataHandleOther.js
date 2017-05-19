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

class NewRejectData extends Component {
  constructor(props) {
    super(props);
    this.handleChangeInitAmo = this.handleChangeInitAmo.bind(this);
    this.handleChangeIntelType = this.handleChangeIntelType.bind(this);

    this.state = {
      initUsbp: '',
      otherAgency: '',
      intelType: ''
    };
  }

  handleChangeInitAmo(evt, value) {
    evt.stopPropagation();
    console.log('value=', value);
  }

  handleChangeIntelType(value, arr, parms) {
    console.log('value, arr, parms=', value, arr, parms);
    this.setState({ intelType: value });
  }

  render() {
    const { handleChangeInitAmo, handleChangeIntelType } = this;
    const { initUsbp, otherAgency, intelType } = this.state;
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
            <AutoComplete hintText="Choose Intelligence Source" floatingLabelText="Intelligence Source*" />
          </div>
          <div className="flex-1">
            <TextFieldSimple floatingLabelText="Other*" />
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-1">
            <AutoComplete hintText="Choose Intel Type" floatingLabelText="Intel Type*" onUpdateInput={handleChangeIntelType} />
          </div>
          {!intelType.length &&
            <div className="flex-1">
              <TextFieldSimple floatingLabelText="Other*" />
            </div>}
          <div className="flex-1" />
        </div>
        {intelType &&
          <div className="flex-row">
            <div className="flex-1">
              <TextFieldSimple floatingLabelText="Other*" />
            </div>
          </div>}
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

export default NewRejectData;
