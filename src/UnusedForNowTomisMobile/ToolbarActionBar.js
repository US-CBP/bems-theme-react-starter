import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
//import DropDownMenu from 'material-ui/DropDownMenu';
import Popover from 'material-ui/Popover';
// import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';

export default class ToolbarActionBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      open: false
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
     this.setState({
       open: false,
     });
   };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
        <FlatButton
          onTouchTap={this.handleTouchTap}
          label="Today"
        />
        <ToolbarSeparator />
        <FlatButton
          onTouchTap={this.handleTouchTap}
          label="Monthly"
        />
        <ToolbarSeparator />
        <FlatButton
          onTouchTap={this.handleTouchTap}
          label="Weekly"
        />
        <ToolbarSeparator />
        </ToolbarGroup>
        <ToolbarGroup>
        <FlatButton
          onTouchTap={this.handleTouchTap}
          label="Save"
        />
        <ToolbarSeparator />
        <FlatButton
          onTouchTap={this.handleTouchTap}
          label="Cancel"
        />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
