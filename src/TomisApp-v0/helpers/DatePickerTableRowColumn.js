import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from '../../BemsMui/FlatButton';
import Popover from '../../BemsMui/Popover';
import DatePickerInlineLandscape from 'TomisApp/TomisDatePicker';
import moment from 'moment';
import TomisFontIcon from 'TomisApp/TomisFontIcon';

const MOMENT_FORMAT = 'MM/DD/YYYY';
const setStateIsOpen = (isOpen, props, state) => {
  return { isOpen };
};

const setStateValue = (value, props, state) => {
  return { value };
};

const styles = {
  root: {
    infoIconStyle: { position: 'inline-block', marginBottom: '-8px', cursor: 'pointer', zIndex: 2 },
    infoIconDisabledStyle: { position: 'inline-block', marginBottom: '-8px', cursor: 'pointer', zIndex: 2, color: '#dcdcdc' }
  }
};

const initState = { isOpen: false, value: null, isChecked: true };

const defaultProps = { hintText: 'Enter a Value', floatingLabelText: 'Value' };
const propTypes = {
  rowData: PropTypes.object.isRequired,
  rowPropertyName: PropTypes.string.isRequired,
  rowIdx: PropTypes.number.isRequired,
  onSave: PropTypes.func.isRequired,
  hintText: PropTypes.node,
  floatingLabelText: PropTypes.node,
  isCloneable: PropTypes.bool,
  disabledClone: PropTypes.bool
};

const anchorOrigin = { horizontal: 'left', vertical: 'top' };
const targetOrigin = { horizontal: 'left', vertical: 'top' };

class DatePickerTableRowColumn extends Component {
  constructor(props) {
    super(props);
    const { rowIdx } = props;
    this.state = initState;
    this.popoverAnchor = null;
    this.handleClickToOpen = this.handleClickToOpen.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleOnChangeValue = this.handleOnChangeValue.bind(this);
    this.handleRequestSave = this.handleRequestSave.bind(this);
    this.renderDateValue = this.renderDateValue.bind(this);
    this.handleClickCheckboxIcon = this.handleClickCheckboxIcon.bind(this);
  }

  componentDidMount() {
    const { rowData, rowPropertyName } = this.props;
    this.setState(setStateValue.bind(this, rowData[rowPropertyName]));
  }
  componentWillReceiveProps(nextProps) {
    const { rowData, rowPropertyName } = nextProps;
    this.setState(setStateValue.bind(this, rowData[rowPropertyName]));
  }

  handleClickToOpen() {
    this.setState(setStateIsOpen.bind(this, true));
    const { rowData, rowPropertyName } = this.props;
    this.setState(setStateValue.bind(this, rowData[rowPropertyName]));
  }

  handleRequestClose() {
    this.setState(setStateIsOpen.bind(this, false));
  }

  handleRequestSave() {
    const { value: newValue } = this.state;
    const { rowIdx, rowPropertyName, onSave } = this.props;
    onSave(rowIdx, rowPropertyName, newValue);
    this.handleRequestClose();
  }

  handleOnChangeValue(event, newValue) {
    this.setState(setStateValue.bind(this, newValue));
  }

  handleClickCheckboxIcon(evt) {
    this.setState({ isChecked: !this.state.isChecked });
  }

  doNothing() {
    return false;
  }

  renderDateValue(dt) {
    const { handleClickCheckboxIcon, doNothing } = this;
    const { isChecked } = this.state;
    const { hintText, isCloneable, disabledClone } = this.props;
    let cb = <span />;
    if (isCloneable) {
      if (isChecked) {
        cb = (
          <TomisFontIcon
            name="check_box"
            style={disabledClone ? styles.root.infoIconDisabledStyle : styles.root.infoIconStyle}
            onTouchTap={disabledClone ? doNothing : handleClickCheckboxIcon}
          />
        );
      } else {
        cb = (
          <TomisFontIcon
            name="check_box_outline_blank"
            style={disabledClone ? styles.root.infoIconDisabledStyle : styles.root.infoIconStyle}
            onTouchTap={disabledClone ? doNothing : handleClickCheckboxIcon}
          />
        );
      }
    }

    if (dt === undefined) {
      return (
        <span style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
          {cb}
          {hintText}
        </span>
      );
    } else {
      return (
        <span>
          {cb}
          {moment(dt).format(MOMENT_FORMAT)}
        </span>
      );
    }
  }

  render() {
    const { popoverAnchor, handleClickToOpen, handleRequestClose, handleRequestSave, handleOnChangeValue, renderDateValue } = this;
    const { isOpen, value } = this.state;
    const { rowIdx, rowData, rowPropertyName, hintText, floatingLabelText } = this.props;
    return (
      <div ref={ref => (this.popoverAnchor = ref)} className="editable-cell" onClick={handleClickToOpen}>
        <span>
          {renderDateValue(rowData[rowPropertyName])}
        </span>
        <Popover
          open={isOpen}
          anchorEl={popoverAnchor}
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          onRequestClose={handleRequestClose}
          animated={false}
        >
          <div className="editable-popover">
            <DatePickerInlineLandscape
              value={value}
              onChange={handleOnChangeValue}
              hintText={hintText}
              fullWidth={true}
              floatingLabelText={floatingLabelText}
            />
            <div className="flex-row">
              <FlatButton label="Cancel" primary={true} onClick={handleRequestClose} />
              <FlatButton label="Save" primary={true} onClick={handleRequestSave} />
            </div>
          </div>
        </Popover>
      </div>
    );
  }
}

DatePickerTableRowColumn.defaultProps = defaultProps;
DatePickerTableRowColumn.propTypes = propTypes;
export default DatePickerTableRowColumn;
