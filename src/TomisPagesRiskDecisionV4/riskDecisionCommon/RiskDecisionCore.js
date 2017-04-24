import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { indigo100 } from 'material-ui/styles/colors';
import HeaderNavAction from '../../TomisInternal/HeaderNavAction';
import { Card, CardActions, CardHeader, CardText } from '../../TomisMui/Card';
import ToggleButtons from '../../TomisNew/ToggleButtons';
import TextFieldSimple from '../../Tomis/TextFieldSimple';
import AutoComplete from '../../Tomis/AutoComplete';
import AutoCompleteInfo from '../../Tomis/AutoCompleteInfo';
import FileAttachment from '../../TomisNew/FileAttachment';
import DatePickerInlineLandscape from '../../Tomis/DatePickerInlineLandscape';
import DialogModal from '../../Tomis/DialogModal';
import { toggleButtonsOptions, setStateFlightStatus, setStateIsInfoVisible } from './helper';

const defaultProps = {
  flightStatus: ''
};

const propTypes = {
  flightStatus: PropTypes.string.isRequired
};

class RiskDecisionCore extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isExpanded: true,
    isPending: true,
    isAccept: false,
    isReject: false,
    flightStatus: '',
    isInfoVisible: false
  };

  componentDidMount() {
    const { flightStatus } = this.props;
    this.setState(setStateFlightStatus.bind(this, flightStatus));
  }

  handleTouchTapInfo = () => {
    this.setState(setStateIsInfoVisible.bind(this, true));
  };

  handleCloseInfo = () => {
    this.setState(setStateIsInfoVisible.bind(this, false));
  };

  handleChangeFlightStatus = (event, value) => {
    event.stopPropagation();
    this.setState(setStateFlightStatus.bind(this, value));
  };

  render() {
    const {
      getBackgroundColorAccept,
      getLabelColorAccept,
      getBackgroundColorReject,
      getLabelColorReject,
      handleTouchTapInfo,
      handleCloseInfo,
      handleChangeFlightStatus
    } = this;
    const { isPending, isAccept, isReject, isInfoVisible } = this.state;
    const { flightStatus } = this.state;
    return (
      <div>
        <HeaderNavAction actionBarPageTitle="Flight Planning" />
        {isInfoVisible && <DialogModal onRequestClose={handleCloseInfo} initOpen={isInfoVisible}><div><ul><li>Risk Decision Table</li></ul></div></DialogModal>}
        <div className="outer-card-margin">
          <Card expanded={true}>
            <CardHeader title="Risk Decision" actAsExpander={true} showExpandableButton={true} style={{ backgroundColor: indigo100 }} />
            <CardText expandable={true}>
              <div className="flex-row">
                <div className="flex-1">
                  <ToggleButtons
                    labelText="Flight Status (RA)*"
                    valueSelected={flightStatus}
                    options={toggleButtonsOptions}
                    onChange={handleChangeFlightStatus}
                  />
                </div>
                <div className="flex-1 flex-column-pad flex-row">
                  <TextFieldSimple hintText="Risk Score" fullWidth={true} floatingLabelText={`Risk Score${isAccept ? '*' : ''}`} />
                </div>
                <div className="flex-1 flex-column-pad flex-row">
                  <AutoCompleteInfo
                    onTouchTapInfo={handleTouchTapInfo}
                    hintText="Select Risk Assessment"
                    floatingLabelText={`Risk Assessment${isAccept ? '*' : ''}`}
                  />
                </div>
              </div>
              <br />
              <div className="flex-row">
                <div className="flex-1 flex-row">
                  <AutoComplete hintText="Choose Title" floatingLabelText="Title*" />
                </div>
                <div className="flex-1 flex-column-pad flex-row">
                  <AutoComplete hintText="Choose Name" floatingLabelText="Name*" />
                </div>
                <div className="flex-1 flex-column-pad flex-row">
                  <DatePickerInlineLandscape floatingLabelText="Date*" />
                </div>
              </div>
              <div className="row-spacer-24">
                <FileAttachment />
              </div>
              {this.props.children}
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

RiskDecisionCore.defaultProps = defaultProps;
RiskDecisionCore.propTypes = propTypes;

export default RiskDecisionCore;
