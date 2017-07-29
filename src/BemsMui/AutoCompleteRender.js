// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import FontIcon from './FontIcon';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const AutoCompleteRender = props => {
  const { classes, handleInputChange, payload: { name, val }, options, textFieldProps } = props;
  const { id, label, placeholder, disabled, readOnly = false, helperText } = textFieldProps;
  return (
    <div>
      {/* <FormControl>
          <InputLabel htmlFor="name">Cloneable</InputLabel>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input id="name" component={AutoCompleteSelect} value="" />
          </div>
          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl> */}

      <TextField
        id={id}
        label={label}
        labelClassName="cloneable-floating-label"
        className={classes.textField}
        value={name}
        inputProps={{
          options,
          value: val,
          placeholder: placeholder,
          readOnly: readOnly
        }}
        InputProps={{
          component: _InputRender,
          onChange: handleInputChange,
          disableUnderline: readOnly
        }}
        margin="dense"
        helperText={helperText}
        disabled={disabled}
      />
    </div>
  );
};

AutoCompleteRender.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AutoCompleteRender;

/**
 * Material-UI Input requires the use of ref.  Refs do not exist in stateless functional components.
 * As such, we must, unfortunately, use a class for the Input component.
 */
class _InputRender extends Component {
  render() {
    const { value, disabled, onChange, options, placeholder, readOnly } = this.props;
    const isDisabled = readOnly ? true : disabled ? true : false;
    const displayPlaceholder = isDisabled ? '' : placeholder;
    return (
      <div className="material-select" style={{ display: 'flex', alignItems: 'center' }}>
        <FontIcon name="arrow_drop_down" />
        <Select options={options} disabled={isDisabled} placeholder={displayPlaceholder} onChange={onChange} value={value} clearable={false} />
      </div>
    );
  }
}
