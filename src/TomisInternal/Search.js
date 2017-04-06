import React from 'react';
import TextField from '../TomisMui/TextField';
import RaisedButton from '../TomisMui/RaisedButton';
import SearchIcon from 'react-material-icons/icons/action/search';
import { getTextFieldAlternateTextStyle, getDrawerSearchTextFieldFocusStyle, getTextFieldDisabledTextStyle } from '../app/helpers/styles';

const Search = props => <TextField hintText="Search" />;

Search.muiName = 'IconMenu';
export default Search;
/*<TextField
        inputStyle={getTextFieldAlternateTextStyle(props)}
        hintText="Search"
        hintStyle={getTextFieldAlternateTextStyle(props)}
        underlineFocusStyle={getTextFieldAlternateTextStyle(props)}
        underlineStyle={getTextFieldAlternateTextStyle(props)}
    />*/
