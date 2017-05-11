import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';

const MenuSimple = props => (
  <Paper>
    <Menu>
      {props.children}
    </Menu>
  </Paper>
);

export default MenuSimple;
