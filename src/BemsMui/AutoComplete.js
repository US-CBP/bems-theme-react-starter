// @flow
/* eslint-disable react/no-array-index-key */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import TextField from 'material-ui/TextField';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import FontIcon from './FontIcon';
import AutoCompleteInput from './AutoCompleteInput';
import AutoCompleteSelect from './AutoCompleteSelect';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';

const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' },
    { label: 'Australia' },
    { label: 'Austria' },
    { label: 'Azerbaijan' },
    { label: 'Bahamas' },
    { label: 'Bahrain' },
    { label: 'Bangladesh' },
    { label: 'Barbados' },
    { label: 'Belarus' },
    { label: 'Belgium' },
    { label: 'Belize' },
    { label: 'Benin' },
    { label: 'Bermuda' },
    { label: 'Bhutan' },
    { label: 'Bolivia, Plurinational State of' },
    { label: 'Bonaire, Sint Eustatius and Saba' },
    { label: 'Bosnia and Herzegovina' },
    { label: 'Botswana' },
    { label: 'Bouvet Island' },
    { label: 'Brazil' },
    { label: 'British Indian Ocean Territory' },
    { label: 'Brunei Darussalam' }
];

function renderInputORIGINAL(inputProps) {
    const { classes, home, value, ref, ...other } = inputProps;
    return (
        <TextField
            autoFocus={home}
            className={classes.textField}
            value={value}
            inputRef={ref}
            InputProps={{
                classes: {
                    input: classes.input
                },
                ...other
            }}
        />
    );
}

function renderInput(lov, allInputProps) {
    const { classes, home, value, ref, ...other } = allInputProps;
    const inputProps = { classes: { input: classes.input }, lov: lov, ...other };
    return (
        <Input disabled={false} component={AutoCompleteInput} fullWidth={true} autoFocus={home} classes={classes.input} value={value} inputRef={ref} inputProps={{ inputProps }} />
    );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (
        <MenuItem selected={isHighlighted} component="div">
            <div>
                {parts.map((part, index) => {
                    return part.highlight
                        ? <span key={index} style={{ fontWeight: 300 }}>
                              {part.text}
                          </span>
                        : <strong key={index} style={{ fontWeight: 500 }}>
                              {part.text}
                          </strong>;
                })}
            </div>
        </MenuItem>
    );
}

function renderSuggestionsContainer(options) {
    const { containerProps, children } = options;

    return (
        <Paper {...containerProps} square>
            {children}
        </Paper>
    );
}

function getSuggestionValue(suggestion) {
    return suggestion.label;
}

function getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0
        ? suggestions
        : suggestions.filter(suggestion => {
              const keep = count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

              if (keep) {
                  count += 1;
              }

              return keep;
          });
}

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

class AutoComplete extends Component {
    state = {
        value: '',
        suggestions: [suggestions]
    };

    lov = null;

    handleSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    handleSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    handleChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    shouldRenderSuggestions = val => {
        return true;
    };

    render() {
        const { shouldRenderSuggestions } = this;
        const { classes } = this.props;

        return (
            <div>
                <FormControl>
                    <InputLabel htmlFor="name">Cloneable</InputLabel>
                    <Input id="name" component={AutoCompleteSelect} value="" />
                    <FormHelperText>Some important helper text</FormHelperText>
                </FormControl>
                <Autosuggest
                    ref={ref => {
                        this.lov = ref;
                    }}
                    theme={{
                        container: classes.container,
                        suggestionsContainerOpen: classes.suggestionsContainerOpen,
                        suggestionsList: classes.suggestionsList,
                        suggestion: classes.suggestion
                    }}
                    renderInputComponent={renderInput.bind(this, this.lov)}
                    suggestions={this.state.suggestions}
                    onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
                    renderSuggestionsContainer={renderSuggestionsContainer}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    shouldRenderSuggestions={shouldRenderSuggestions}
                    inputProps={{
                        autoFocus: false,
                        classes,
                        placeholder: 'Search a country (start with a)',
                        value: this.state.value,
                        onChange: this.handleChange
                    }}
                />
            </div>
        );
    }
}

AutoComplete.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(AutoComplete);
