import React from 'react';
import Menu from 'material-ui/Menu';

const TomisMenuSimpleExample = ({ children, open }) =>
    <Menu open={open}>
        {children}
    </Menu>;

export default TomisMenuSimpleExample;
