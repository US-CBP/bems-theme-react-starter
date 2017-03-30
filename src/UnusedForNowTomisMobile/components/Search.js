import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SearchIcon from 'react-material-icons/icons/action/search';

const Search = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><SearchIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
        <TextField hintText="Search" style={{marginLeft: '18px'}} />
        <RaisedButton primary={true} icon={<SearchIcon />} style={{marginLeft: '8px'}} />
  </IconMenu>
);

Search.muiName = 'IconMenu';
export default Search;
