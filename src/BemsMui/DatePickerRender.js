import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { getDisplayVals, datePickerStyleSheet, datePickerStyles, cloneableStyleSheet } from 'globalJs/tomisMuiStylesheets';
import IconButton from 'material-ui/IconButton';
import FontIcon from './FontIcon';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import CloneableInputRender from './CloneableInputRender';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Checkbox from 'material-ui/Checkbox';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import cx from 'classnames';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const propTypes = {
  classes: PropTypes.object.isRequired
};

const DatePickerRender = props => {
  const {
    classes: renderClasses,
    classes: {
      formControl: clsFormControl,
      input: clsInput,
      inputLabel: clsInputLabel,
      inputLabelCloneable: clsInputLabelCloneable,
      formHelperText: clsFormHelperText
    },
    handleInputChange,
    isCloneChecked,
    onCloneCheckboxChange,
    payload: { val },
    inputFieldProps,
    isCloneable,
    disabledClone,
    required
  } = props;
  const { id, label, placeholder, disabled, readOnly, helperText } = inputFieldProps;
  const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals({ disabled, isCloneable, disabledClone, readOnly, placeholder });
  return (
    <FormControl className={clsFormControl} margin="dense">
      <InputLabel
        className={cx({ [clsInputLabelCloneable]: isDisplayCloneable, [clsInputLabel]: !isDisplayCloneable })}
        htmlFor={id}
        required={required}
        shrink={true}
      >
        {label}
      </InputLabel>
      <Input
        className={clsInput}
        id={id}
        component={withStyles(datePickerStyleSheet)(_InputRender)}
        onChange={handleInputChange}
        disableUnderline={readOnly}
        disabled={disabled}
        value={val}
        placeholder={placeholder}
        inputProps={{
          readOnly,
          isCloneable,
          disabledClone,
          renderClasses,
          isCloneChecked,
          onCloneCheckboxChange
        }}
      />
      <FormHelperText className={clsFormHelperText}>
        {helperText}
      </FormHelperText>
    </FormControl>

    // <div>
    //   <div>Please type a day:</div>
    //   <DayPickerInput placeholder="MM/DD/YYYY" />
    // </div>
  );
};

DatePickerRender.propTypes = propTypes;
export default withStyles(cloneableStyleSheet)(DatePickerRender);

/**
 * Material-UI Input requires the use of ref.  Refs are not allowed in stateless functional components.
 * As such, we must, unfortunately, use a class for the Input component.
 */
class _InputRender extends Component {
  dpInput = null;

  state = {
    isFocused: false
  };

  handleClickIcon = evt => {
    evt.stopPropagation();
    console.log('this.dpInput=', this.dpInput);
    const { dpInput: { state: { showOverlay } } } = this;
    const { isFocused } = this.state;
    if (isFocused) {
      this.dpInput.input.blur();
      this.setState({ isFocused: false });
    } else {
      this.dpInput.input.focus();
      this.setState({ isFocused: true });
    }
  };

  render() {
    const { handleClickIcon } = this;
    const {
      value,
      onChange,
      readOnly,
      isCloneable,
      disabledClone,
      renderClasses: { checkbox: clsCheckbox, checkboxDisabled: clsCheckboxDisabled, dp: clsDp, dpCloneable: clsDpCloneable },
      classes: { selectCalendar: clsSelectCalendar, selectCalendarDisabled: clsSelectCalendarDisabled },
      isCloneChecked,
      onCloneCheckboxChange
    } = this.props;

    const { dp, dpCloneable } = datePickerStyles;
    const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals(this.props);
    console.log('render isDisabled, displayPlaceholder, isDisplayCloneable=', isDisabled, displayPlaceholder, isDisplayCloneable);
    return (
      <CloneableInputRender>
        {isDisplayCloneable &&
          <Checkbox
            className={cx(clsCheckbox, { [clsCheckboxDisabled]: isDisabled || disabledClone })}
            disabled={isDisabled || disabledClone}
            checked={isCloneChecked}
            onChange={onCloneCheckboxChange}
          />}
        <DayPickerInput
          ref={ref => (this.dpInput = ref)}
          style={isDisplayCloneable ? dpCloneable : dp}
          disabled={isDisabled}
          placeholder={displayPlaceholder}
        />
        {!readOnly &&
          <IconButton
            className={cx(clsSelectCalendar, { [clsSelectCalendarDisabled]: isDisabled || disabledClone })}
            disabled={isDisabled}
            aria-label="Toggle select date display"
            onClick={handleClickIcon}
          >
            <FontIcon name="event_note" />
          </IconButton>}
      </CloneableInputRender>
    );
  }
}
