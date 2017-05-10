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
import { toggleButtonsOptions, setStateFlightStatus, setStateIsInfoVisible, setStateIsConfirmVisible } from './helper';

class NewRejectData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div className="flex-row flex-1">
        <TextFieldSimple floatingLabelText="All Components TF" />
        </div>

      <div className="flex-row">

        test data
        </div>
      </div>
    );
  }
}

export default NewRejectData;
