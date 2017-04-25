import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import ToolbarCbpHeader from '../Tomis/ToolbarCbpHeader';
import ToolbarActionBar from '../Tomis/ToolbarActionBar';
import TextFieldSimple from '../Tomis/TextFieldSimple';
import AutoComplete from '../Tomis/AutoComplete';

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
        <div className="flex-1 flex-column-pad">
          <AutoComplete floatingLabelText="All Components LOV" />
        </div>
        </div>

      </div>
    );
  }
}

export default muiThemeable()(FormWithAllComponents);
