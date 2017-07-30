// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { getDisplayVals, cloneableStyleSheet, autoCompleteStyleSheet } from 'globalJs/tomisMuiStylesheets';
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

const propTypes = {
  classes: PropTypes.object.isRequired
};

const AutoCompleteRender = props => {
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
    options,
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
        component={withStyles(autoCompleteStyleSheet)(_InputRender)}
        onChange={handleInputChange}
        disableUnderline={readOnly}
        disabled={disabled}
        value={val}
        placeholder={placeholder}
        inputProps={{
          options,
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
  );
};

AutoCompleteRender.propTypes = propTypes;
export default withStyles(cloneableStyleSheet)(AutoCompleteRender);

const arrowRenderer = (clsSelectArrow, isDisabled, readOnly, { onMouseDown, isOpen }) => {
  return (
    !readOnly &&
    <IconButton className={clsSelectArrow} disabled={isDisabled} aria-label="Toggle select options display">
      <FontIcon name={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'} />
    </IconButton>
  );
};

/**
 * Material-UI Input requires the use of ref.  Refs are not allowed in stateless functional components.
 * As such, we must, unfortunately, use a class for the Input component.
 */
class _InputRender extends Component {
  render() {
    const {
      value,
      onChange,
      options,
      readOnly,
      isCloneable,
      disabledClone,
      renderClasses: { checkbox: clsCheckbox, checkboxDisabled: clsCheckboxDisabled, selectArrow: clsSelectArrow, lov: clsLov, lovCloneable: clsLovCloneable },
      isCloneChecked,
      onCloneCheckboxChange
    } = this.props;
    const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals(this.props);
    return (
      <CloneableInputRender>
        {isDisplayCloneable &&
          <Checkbox
            className={cx(clsCheckbox, { [clsCheckboxDisabled]: isDisabled || disabledClone })}
            disabled={isDisabled || disabledClone}
            checked={isCloneChecked}
            onChange={onCloneCheckboxChange}
          />}
        <Select
          className={cx({ [clsLovCloneable]: isDisplayCloneable, [clsLov]: !isDisplayCloneable })}
          options={options}
          disabled={isDisabled}
          placeholder={displayPlaceholder}
          onChange={onChange}
          value={value}
          clearable={false}
          labelKey="description"
          valueKey="code"
          arrowRenderer={arrowRenderer.bind(this, clsSelectArrow, isDisabled, readOnly)}
        />
      </CloneableInputRender>
    );
  }
}
