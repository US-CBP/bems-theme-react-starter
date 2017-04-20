import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RiskDecisionCore from './riskDecisionCommon/RiskDecisionCore';
import ButtonRaisedSimplePrimary from '../Tomis/ButtonRaisedSimplePrimary';
import ButtonRaisedComplexPrimary from '../Tomis/ButtonRaisedComplexPrimary';
import ButtonIconFurther from '../Tomis/ButtonIconFurther';
import DatePickerInlineLandscape from '../Tomis/DatePickerInlineLandscape';
import AutoComplete from '../Tomis/AutoComplete';
import TextFieldSimple from '../Tomis/TextFieldSimple';
import TextFieldSimpleDefaultValue from '../Tomis/TextFieldSimpleDefaultValue';
import ToggleButtons from '../TomisNew/ToggleButtons';
import FileAttachment from '../TomisNew/FileAttachment';
import HamburgerMenu from 'material-ui/svg-icons/navigation/menu';

const labels = ['Label 1', 'Label 2', 'Label 3'];

class RiskDecisionPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RiskDecisionCore />
        <ButtonRaisedSimplePrimary label="Primary - 4" />
        <ButtonRaisedComplexPrimary label="Complex Label" icon={<HamburgerMenu />} />
        <ButtonIconFurther>
          <HamburgerMenu />
        </ButtonIconFurther>
        <TextFieldSimple hintText="Do this and that" floatingLabelText="Field 1 FL" />
        <TextFieldSimpleDefaultValue hintText="Default hint text" defaultValue="My DEFAULT VAL" floatingLabelText="Field 2 FL" />
        <ToggleButtons defaultSelected={1} labels={labels} />
        <DatePickerInlineLandscape />
        <br />
        <AutoComplete />
        <FileAttachment label="My Attachments" />
      </div>
    );
  }
}

export default muiThemeable()(RiskDecisionPage);
