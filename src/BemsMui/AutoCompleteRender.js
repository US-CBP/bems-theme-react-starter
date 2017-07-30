// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
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

const checkboxSize = 24;
const checkboxW = 48;
const checkboxMRFactor = 1.15;

const styleSheet = createStyleSheet('AutoCompleteRender', theme => ({
  formControl: {
    width: '100%',
    flex: 1
  },
  inputRenderRoot: {
    display: 'flex',
    alignItems: 'center'
  },
  lov: {
    marginLeft: '4px',
    width: '100%'
  },
  lovCloneable: {
    marginLeft: `${Number(checkboxSize * checkboxMRFactor).toFixed(0)}px`,
    width: '100%'
  },
  inputLabel: {
    marginLeft: '5px'
  },
  inputLabelCloneable: {
    marginLeft: `${Number(checkboxSize * checkboxMRFactor + 1).toFixed(0)}px`
  },
  checkbox: {
    color: theme.text.primary,
    width: `${checkboxW}px`,
    height: `${checkboxW}px`,
    position: 'absolute',
    zIndex: 1,
    left: `${-1 * (checkboxW - checkboxSize) * 0.5}px`,
    top: '-8px'
  },
  checkboxDisabled: {
    color: theme.text.disabled
  },
  selectArrow: {
    color: theme.text.primary,
    position: 'absolute',
    right: 0,
    top: `${0}px`,
    width: '36px',
    height: '36px'
  }
}));

const propTypes = {
  classes: PropTypes.object.isRequired
};

const AutoCompleteRender = props => {
  const {
    classes,
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
    <div>
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
          component={_InputRender}
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
            classes,
            isCloneChecked,
            onCloneCheckboxChange
          }}
        />
        <FormHelperText className={clsFormHelperText}>
          {helperText}
        </FormHelperText>
      </FormControl>
    </div>
  );
};

AutoCompleteRender.propTypes = propTypes;

export default withStyles(styleSheet)(AutoCompleteRender);

const arrowRenderer = (clsSelectArrow, isDisabled, readOnly, { onMouseDown, isOpen }) => {
  return (
    !readOnly &&
    <IconButton className={clsSelectArrow} disabled={isDisabled} aria-label="Toggle select options display">
      <FontIcon name={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'} />
    </IconButton>
  );
};

const getDisplayVals = ({ disabled, isCloneable, disabledClone, readOnly, placeholder }) => {
  const isDisabled = readOnly ? true : disabled ? true : false;
  const displayPlaceholder = readOnly ? '' : placeholder;
  const isDisplayCloneable = isCloneable && !readOnly;
  return { isDisabled, displayPlaceholder, isDisplayCloneable };
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
      classes: { checkbox: clsCheckbox, checkboxDisabled: clsCheckboxDisabled, selectArrow: clsSelectArrow, lov: clsLov, lovCloneable: clsLovCloneable },
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
