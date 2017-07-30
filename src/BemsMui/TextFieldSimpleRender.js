import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { getDisplayVals, handleCloneCheckboxChange, textFieldSimpleStyleSheet, cloneableStyleSheet } from 'globalJs/tomisMuiStylesheets';
import IconButton from 'material-ui/IconButton';
import FontIcon from './FontIcon';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import CloneableInputRender from './CloneableInputRender';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Checkbox from 'material-ui/Checkbox';
import cx from 'classnames';

const propTypes = {
  classes: PropTypes.object.isRequired
};

const TextFieldSimpleRender = props => {
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
        component={withStyles(textFieldSimpleStyleSheet)(_InputRender)}
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
  );
};

TextFieldSimpleRender.propTypes = propTypes;
export default withStyles(cloneableStyleSheet)(TextFieldSimpleRender);

/**
 * Material-UI Input requires the use of ref.  Refs are not allowed in stateless functional components.
 * As such, we must, unfortunately, use a class for the Input component.
 */
class _InputRender extends Component {
  render() {
    const { handleClickIcon } = this;
    const {
      value,
      onChange,
      readOnly,
      isCloneable,
      disabledClone,
      renderClasses: { checkbox: clsCheckbox, checkboxDisabled: clsCheckboxDisabled },
      classes: { inpBase: clsInpBase, inpSpinner: clsInpSpinner, inpReadOnly: clsInpReadOnly, inpCloneable: clsInpCloneable },
      isCloneChecked,
      onCloneCheckboxChange
    } = this.props;
    const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals(this.props);

    return (
      <CloneableInputRender>
        {isDisplayCloneable &&
          <Checkbox
            className={cx(clsCheckbox, { [clsCheckboxDisabled]: isDisabled || disabledClone })}
            checked={isCloneChecked}
            onChange={handleCloneCheckboxChange.bind(this, onCloneCheckboxChange)}
            disabled={isDisabled || disabledClone}
          />}
        <input
          className={cx(clsInpBase, {
            [clsInpCloneable]: isDisplayCloneable,
            [clsCheckboxDisabled]: isDisabled || disabledClone,
            [clsInpReadOnly]: readOnly
          })}
          disabled={isDisabled}
          placeholder={displayPlaceholder}
        />
      </CloneableInputRender>
    );
  }
}
