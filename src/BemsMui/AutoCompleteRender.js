// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme, createStyleSheet } from 'material-ui/styles';
import CloneableIcon from './CloneableIcon';
import FontIcon from './FontIcon';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const styleSheet = createStyleSheet('AutoCompleteRender', theme => ({
  formControl: {
    width: '100%',
    flex: 1
  },
  inputLabel: {
    marginLeft: '24px'
  },
  inputRenderRoot: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const propTypes = {
  classes: PropTypes.object.isRequired
};

const AutoCompleteRender = props => {
  const { classes, handleInputChange, payload: { name, val }, options, textFieldProps, isCloneable, disabledClone } = props;
  const { id, label, placeholder, disabled, readOnly, helperText } = textFieldProps;
  return (
    <div>
      <FormControl className={classes.formControl} margin="dense">
        <InputLabel className={classes.inputLabel} htmlFor={id}>
          {label}
        </InputLabel>
        <Input
          className={classes.input}
          id={id}
          component={withStyles(styleSheet)(_InputRender)}
          onChange={handleInputChange}
          disableUnderline={readOnly}
          disabled={disabled}
          value={val}
          placeholder={placeholder}
          inputProps={{
            options,
            readOnly,
            isCloneable,
            disabledClone
          }}
        />
        <FormHelperText className={classes.formHelperText}>
          {helperText}
        </FormHelperText>
      </FormControl>
    </div>
  );
};

AutoCompleteRender.propTypes = propTypes;

export default withStyles(styleSheet)(AutoCompleteRender);

/**
 * Material-UI Input requires the use of ref.  Refs do not exist in stateless functional components.
 * As such, we must, unfortunately, use a class for the Input component.
 */
const arrowRenderer = ({ onMouseDown, isOpen }) => {
  return <FontIcon name={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'} />;
};

class _InputRender extends Component {
  render() {
    const { value, disabled, onChange, options, placeholder, readOnly, isCloneable, disabledClone, classes } = this.props;
    const isDisabled = readOnly ? true : disabled ? true : false;
    const displayPlaceholder = isDisabled ? '' : placeholder;
    return (
      <div className={classes.inputRenderRoot}>
        <CloneableIcon isCloneable={isCloneable} disabledClone={disabledClone} disabled={disabled} readOnly={readOnly} />
        <Select
          options={options}
          disabled={isDisabled}
          placeholder={displayPlaceholder}
          onChange={onChange}
          value={value}
          clearable={false}
          arrowRenderer={arrowRenderer}
        />
      </div>
    );
  }
}
