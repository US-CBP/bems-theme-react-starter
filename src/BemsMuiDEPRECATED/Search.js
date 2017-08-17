import React from 'react';
import RaisedButton from '../BemsMui/RaisedButton';
import TextFieldSimple from '../BemsMui/TextFieldSimple';
import { getTextFieldAlternateTextStyle, getDrawerSearchTextFieldFocusStyle, getTextFieldDisabledTextStyle } from '../app/helpers/styles';

const Search = props => <TextFieldSimple hintText="Search" />;

Search.muiName = 'IconMenu';
export default Search;
