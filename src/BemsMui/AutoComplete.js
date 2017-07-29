// @flow
/* eslint-disable react/no-array-index-key */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import FontIcon from './FontIcon';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import _get from 'lodash/get';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const styleSheet = createStyleSheet('AutoComplete', theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 200
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  textField: {
    width: '100%'
  }
}));

const options = [{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }];

class AutoComplete extends Component {
  state = {
    name: null,
    val: null
  };

  handleInputChange = val => {
    console.log('handleInputChange val=', val);
    this.setState({ name: _get(val, 'label', null), val: _get(val, 'value', null) });
  };

  render() {
    const { shouldRenderSuggestions, handleInputChange } = this;
    const { name, val } = this.state;
    const { classes } = this.props;

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
          id="nameField"
          label="Name Field"
          labelClassName="cloneable-floating-label"
          className={classes.textField}
          value={name}
          inputProps={{
            options,
            value: val,
            placeholder: 'Select Name Field'
          }}
          InputProps={{
            component: AutoCompleteSelect,
            onChange: handleInputChange,
            disableUnderline: true
          }}
          margin="dense"
          helperText="Select a number"
          disabled={false}
        />
      </div>
    );
  }
}

AutoComplete.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(AutoComplete);

class AutoCompleteSelect extends Component {
  render() {
    const { value, disabled, onChange: handleChangeLovVal, options, placeholder, readOnly } = this.props;
    const isDisabled = readOnly ? true : disabled ? true : false;
    const displayPlaceholder = isDisabled ? '' : placeholder;
    return (
      <div className="material-select" style={{ display: 'flex', alignItems: 'center' }}>
        <FontIcon name="arrow_drop_down" />
        <Select options={options} disabled={isDisabled} placeholder={displayPlaceholder} onChange={handleChangeLovVal} value={value} clearable={false} />
      </div>
    );
  }
}
