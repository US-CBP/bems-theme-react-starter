// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import { withStyles } from 'material-ui/styles';
import { getDisplayVals, autoCompleteStyleSheet } from 'app/helpers/tomisMuiStylesheets';
import FormControl from 'material-ui/Form/FormControl';
import InputLabel from 'material-ui/Input/InputLabel';
import Input from 'material-ui/Input';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import TomisFontIcon from './TomisFontIcon';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import cx from 'classnames';
import { bigLov, smallLov } from 'globalJs/testData';

const defaultProps = {
  id: `ac-${new Date().getTime()}`,
  label: 'AC Field',
  placeholder: 'AC Placeholder',
  helperText: null,
  disabled: false,
  isCloneable: false,
  disabledClone: false,
  required: false,
  options
};

const propTypes = {
  classes: PropTypes.object.isRequired
};

const options = smallLov;

class TomisAutocomplete extends Component {
  state = {
    payload: {
      val: '',
      name: null,
      isCloneChecked: true
    },
    dummyVal: ''
  };

  handleCloneCheckboxChange = (evt, isCloneChecked) => {
    evt.stopPropagation();
    this.state.payload.isCloneChecked = isCloneChecked;
    this.setState(this.state);
  };

  handleLovChange = val => {
    this.state.payload = { name: _get(val, 'description', ''), val: _get(val, 'code', null), isCloneChecked: this.state.payload.isCloneChecked };
    this.state.dummyVal = this.state.payload.name;
    this.setState(this.state);
  };

  render() {
    const { handleCloneCheckboxChange, handleLovChange } = this;
    const { payload: { val, name, isCloneChecked }, dummyVal } = this.state;
    const {
      id,
      label,
      placeholder,
      disabled,
      helperText,
      classes: {
        formControl: clsFormControl,
        inputLabel: clsInputLabel,
        inputLabelCloneable: clsInputLabelCloneable,
        formHelperText: clsFormHelperText,
        checkbox: clsCheckbox,
        checkboxDisabled: clsCheckboxDisabled,
        inputBase: clsInputBase,
        input: clsInput,
        underlineCloneable: clsUnderlineCloneable,
        inputMultilineBase: clsInputMultilineBase,
        inputCloneable: clsInputCloneable,
        selectArrow: clsSelectArrow,
        lov: clsLov,
        lovCloneable: clsLovCloneable,
        inputLov: clsInputLov
      },
      isCloneable,
      disabledClone,
      required
    } = this.props;
    const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals({ disabled, isCloneable, disabledClone, readOnly: false, placeholder });
    return (
      <FormControl className={clsFormControl} margin="dense">
        {isDisplayCloneable &&
          <Checkbox
            className={cx(clsCheckbox, { [clsCheckboxDisabled]: isDisabled || disabledClone })}
            onChange={handleCloneCheckboxChange}
            disabled={isDisabled || disabledClone}
            tabIndex="-1"
            checked={isCloneChecked || disabledClone}
          />}
        <InputLabel className={cx({ [clsInputLabelCloneable]: isDisplayCloneable, [clsInputLabel]: !isDisplayCloneable })} htmlFor={id} required={required}>
          {label}
        </InputLabel>
        <Input
          className={cx(clsInput, { [clsInputLabelCloneable]: isDisplayCloneable, [clsUnderlineCloneable]: isDisplayCloneable })}
          id={id}
          disabled={isDisabled}
          margin="dense"
          placeholder={displayPlaceholder}
          fullWidth={true}
          onChange={() => {}}
          value={dummyVal}
        />
        <Select
          className={cx(clsInputLov, { [clsLovCloneable]: isDisplayCloneable, [clsLov]: !isDisplayCloneable })}
          options={options}
          disabled={isDisabled}
          onChange={handleLovChange}
          placeholder={''}
          value={val}
          clearable={false}
          labelKey="description"
          valueKey="code"
          arrowRenderer={arrowRenderer.bind(this, clsSelectArrow, isDisabled)}
        />
        <FormHelperText className={clsFormHelperText}>
          {helperText}
        </FormHelperText>
      </FormControl>
    );
  }
}

TomisAutocomplete.defaultProps = defaultProps;
TomisAutocomplete.propTypes = propTypes;
export default withStyles(autoCompleteStyleSheet)(TomisAutocomplete);

const arrowRenderer = (clsSelectArrow, isDisabled, { onMouseDown, isOpen }) => {
  return (
    <IconButton className={clsSelectArrow} disabled={isDisabled} aria-label="Toggle select options display">
      <TomisFontIcon name={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'} />
    </IconButton>
  );
};
