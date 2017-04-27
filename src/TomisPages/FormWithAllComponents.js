import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import ToolbarCbpHeader from '../Tomis/ToolbarCbpHeader';
import ToolbarActionBar from '../Tomis/ToolbarActionBar';
import TextFieldSimple from '../Tomis/TextFieldSimple';
import AutoComplete from '../Tomis/AutoComplete';
import ToggleButtons from '../TomisNew/ToggleButtons';
import FormRow from '../Tomis/helper/FormRow';
import { FormCol } from '../Tomis/helper/StyledComponents';
import { toggleButtonsOptions, setStateFlightStatus, setStateIsConfirmVisible } from './helper';
import DialogSimple from '../Tomis/DialogSimple';

const defaultProps = {
  flightStatus: ''
};

const propTypes = {
  flightStatus: PropTypes.string.isRequired
};

class FormWithAllComponents extends Component {
  constructor(props) {
    super(props);
    this.prevFlightStatus = 'PENDING';
    this.requestedFlightStatus = '';
  }

  state = {
    isPending: true,
    isAccept: false,
    isReject: false,
    flightStatus: 'PENDING',
    isConfirmVisible: false
  };

  handleChangeFlightStatus = (event, value) => {
    event.stopPropagation();
    event.preventDefault();
    const { prevFlightStatus } = this;
    console.log('handleChangeFlightStatus, prevFlightStatus=', prevFlightStatus, ', value=', value);
    if (prevFlightStatus != 'PENDING' && value === 'PENDING') {
      this.setState(setStateIsConfirmVisible.bind(this, true));
    }
    this.prevFlightStatus = value;
  };

  handleCloseConfirm = (buttonLabel, buttonIdx) => {
    this.setState(setStateIsConfirmVisible.bind(this, false));
    if (buttonLabel === 'No') {
      this.setState(setStateFlightStatus.bind(this, this.prevFlightStatus));
    }
  };

  render() {
    const { handleChangeFlightStatus, handleCloseConfirm } = this;
    const { flightStatus, isConfirmVisible } = this.state;
    return (
      <div>
        <ToolbarCbpHeader />
        <ToolbarActionBar pageTitle="Form with All Components" isHideDeleteIcon={false} />
        <div className="flex-row">
          <div className="flex-1">
            <TextFieldSimple floatingLabelText="All Components TF" />
          </div>
          <div className="flex-1">
            <AutoComplete floatingLabelText="All Components LOV" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>FormRow / FormCol Component Example</div>
        <FormRow>
          <FormCol>
            <TextFieldSimple floatingLabelText="All Components TF" />
          </FormCol>
          <FormCol>
            <AutoComplete floatingLabelText="All Components LOV" />
          </FormCol>
        </FormRow>
        <br />
        <br />
        <br />
        <br />
        <ToggleButtons labelText="Flight Status (RA)*" valueSelected={flightStatus} options={toggleButtonsOptions} onChange={handleChangeFlightStatus} />
        <div><span>FlightStatus={flightStatus}</span></div>
        <DialogSimple title="Warning" onRequestClose={handleCloseConfirm} initOpen={isConfirmVisible} modal={true} buttonLabels={['Yes', 'No']}>
          <div>You will lose all of your changes.  Is this ok?</div>
        </DialogSimple>
      </div>
    );
  }
}

export default muiThemeable()(FormWithAllComponents);
