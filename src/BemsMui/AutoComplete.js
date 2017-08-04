// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import { withStyles } from 'material-ui/styles';
import { getDisplayVals, handleCloneCheckboxClick, cloneableStyleSheet, autoCompleteStyleSheet } from 'globalJs/tomisMuiStylesheets';
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
import { RIPPLE_TIME_MS } from 'globalJs/constants';
import { bigLov, smallLov } from 'globalJs/testData';

const options = smallLov;

const defaultProps = {
  inputFieldProps: {
    id: `ac-${new Date().getTime()}`,
    label: 'AC Field',
    placeholder: 'AC Placeholder',
    helperText: null,
    disabled: false,
    readOnly: false
  },
  options,
  isCloneable: true,
  disabledClone: false,
  required: true
};

const propTypes = {
  classes: PropTypes.object.isRequired
};

class AutoComplete extends Component {
  state = {
    payload: {
      val: null,
      name: null
    }
  };

  handleCloneCheckboxChange = (evt, value) => {
    console.log('handleCloneCheckboxChange called, this.state, evt, value=', this.state, evt, value);
    // this.setState({ isCloneChecked: !this.state.isCloneChecked });
  };

  handleInputChange = val => {
    this.setState({ payload: { name: _get(val, 'description', null), val: _get(val, 'code', null) } });
  };

  render() {
    const { handleInputChange, handleCloneCheckboxChange } = this;
    const { payload: { val } } = this.state;
    const {
      classes: renderClasses,
      classes: {
        formControl: clsFormControl,
        input: clsInput,
        inputLabel: clsInputLabel,
        inputLabelCloneable: clsInputLabelCloneable,
        formHelperText: clsFormHelperText
      },
      options,
      inputFieldProps,
      isCloneable,
      disabledClone,
      required
    } = this.props;
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
            onDelayCloneCheckboxChange: handleCloneCheckboxChange
          }}
        />
        <FormHelperText className={clsFormHelperText}>
          {helperText}
        </FormHelperText>
      </FormControl>
    );
  }
}

AutoComplete.defaultProps = defaultProps;
AutoComplete.propTypes = propTypes;
export default withStyles(cloneableStyleSheet)(AutoComplete);

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
      onDelayCloneCheckboxChange
    } = this.props;
    //isMyCloneChecked must be assigned *after* it is set to a new value
    const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals(this.props);

    return (
      <CloneableInputRender>
        {isDisplayCloneable &&
          <Checkbox
            className={cx(clsCheckbox, { [clsCheckboxDisabled]: isDisabled || disabledClone })}
            onChange={handleCloneCheckboxClick.bind(null, onDelayCloneCheckboxChange)}
            disabled={isDisabled || disabledClone}
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
