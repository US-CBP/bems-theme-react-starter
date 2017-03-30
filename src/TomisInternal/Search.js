import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SearchIcon from 'react-material-icons/icons/action/search';
import { getTextFieldAlternateTextStyle, getDrawerSearchTextFieldFocusStyle, getTextFieldDisabledTextStyle } from '../app/helpers/styles';

const Search = props => (
    <TextField
        inputStyle={getTextFieldAlternateTextStyle(props)}
        hintText="Search"
        hintStyle={getTextFieldAlternateTextStyle(props)}
        underlineFocusStyle={getTextFieldAlternateTextStyle(props)}
        underlineStyle={getTextFieldAlternateTextStyle(props)}
    />
);

Search.muiName = 'IconMenu';
export default Search;
