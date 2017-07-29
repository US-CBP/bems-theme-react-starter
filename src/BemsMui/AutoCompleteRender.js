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
  leftPos: {
    marginLeft: '4px'
  },
  leftPosCloneable: {
    marginLeft: `${checkboxSize * checkboxMRFactor}px`
  },
  inputLabel: {
    marginLeft: '5px'
  },
  inputLabelCloneable: {
    marginLeft: `${checkboxSize * checkboxMRFactor + 1}px`
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
    payload: { name, val },
    options,
    inputFieldProps,
    isCloneable,
    disabledClone,
    required
  } = props;
  const { id, label, placeholder, disabled, readOnly, helperText } = inputFieldProps;
  return (
    <div>
      <FormControl className={clsFormControl} margin="dense">
        <InputLabel className={cx({ [clsInputLabelCloneable]: isCloneable, [clsInputLabel]: !isCloneable })} htmlFor={id} required={required} shrink={true}>
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
            classes
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

const arrowRenderer = (clsSelectArrow, isDisabled, { onMouseDown, isOpen }) => {
  return (
    <IconButton className={clsSelectArrow} disabled={isDisabled} aria-label="Toggle select options display">
      <FontIcon name={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'} />
    </IconButton>
  );
};

const getDisplayVals = ({ disabled, isCloneable, disabledClone, readOnly, placeholder }) => {
  const isDisabled = readOnly ? true : disabled ? true : false;
  const displayPlaceholder = isDisabled ? placeholder : placeholder;
  return { isDisabled, displayPlaceholder };
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
      classes: {
        checkbox: clsCheckbox,
        checkboxDisabled: clsCheckboxDisabled,
        leftPos: clsLeftPos,
        leftPosCloneable: clsLeftPosCloneable,
        selectArrow: clsSelectArrow
      }
    } = this.props;
    const { isDisabled, displayPlaceholder } = getDisplayVals(this.props);
    return (
      <CloneableInputRender>
        {isCloneable &&
          <Checkbox
            className={cx(clsCheckbox, { [clsCheckboxDisabled]: isDisabled || disabledClone })}
            disabled={isDisabled || disabledClone}
            checked={true}
          />}
        <Select
          className={cx({ [clsLeftPos]: !isCloneable, [clsLeftPosCloneable]: isCloneable })}
          options={options}
          disabled={isDisabled}
          placeholder={displayPlaceholder}
          onChange={onChange}
          value={value}
          clearable={false}
          arrowRenderer={arrowRenderer.bind(this, clsSelectArrow, isDisabled)}
        />
      </CloneableInputRender>
    );
  }
}
