import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import ToolbarCbpHeader from '../Tomis/ToolbarCbpHeader';
import ToolbarActionBar from '../Tomis/ToolbarActionBar';
import TextFieldSimple from '../Tomis/TextFieldSimple';
import AutoComplete from '../Tomis/AutoComplete';
import FormRow from '../Tomis/helper/FormRow';
import { FormCol } from '../Tomis/helper/StyledComponents';

class FormWithAllComponents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
      </div>
    );
  }
}

export default muiThemeable()(FormWithAllComponents);
