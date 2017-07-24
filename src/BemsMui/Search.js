import React from 'react';
import RaisedButton from '../BemsMui/RaisedButton';
import TextFieldSimple from '../BemsMui/TextFieldSimple';
import SearchIcon from 'react-material-icons/icons/action/search';
import { getTextFieldAlternateTextStyle, getDrawerSearchTextFieldFocusStyle, getTextFieldDisabledTextStyle } from '../app/helpers/styles';

const Search = props => <TextFieldSimple hintText="Search" />;

Search.muiName = 'IconMenu';
export default Search;
/*<TextField
        inputStyle={getTextFieldAlternateTextStyle(props)}
        hintText="Search"
        hintStyle={getTextFieldAlternateTextStyle(props)}
        underlineFocusStyle={getTextFieldAlternateTextStyle(props)}
        underlineStyle={getTextFieldAlternateTextStyle(props)}
    />*/
