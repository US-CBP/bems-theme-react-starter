import React from 'react';
import Menu from 'material-ui/Menu';

const MenuSimpleExample = ({ children, open }) =>
  <Menu open={open}>
    {children}
  </Menu>;

export default MenuSimpleExample;
