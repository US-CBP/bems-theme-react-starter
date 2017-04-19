import React from 'react';
import ExampleContainer from './helper/ExampleContainer';
import Divider from 'material-ui/Divider';
import { Menu, MenuItem } from 'material-ui/Menu';

const style = {
  // Without this, the menu overflows the CodeExample container.
  // float: 'left'
};

const DividerMenu = () => (
  <ExampleContainer>
    <Menu desktop={true} style={style}>
      <MenuItem primaryText="Settings" />
      <MenuItem primaryText="Help & feedback" />
      <Divider />
      <MenuItem primaryText="Sign out" />
    </Menu>
  </ExampleContainer>
);

export default DividerMenu;
