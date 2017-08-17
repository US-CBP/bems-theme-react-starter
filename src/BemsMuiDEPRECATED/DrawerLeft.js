//@flow

import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';

const defaultProps = {
    isOpen: false,
    onRequestClose: () => {}
};

const propTypes = {
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.func.isRequired
};

const DrawerLeft = ({ children, isOpen, onRequestClose }) => {
    return (
        <Drawer open={isOpen} onRequestClose={onRequestClose} onClick={onRequestClose}>
            {children}
        </Drawer>
    );
};

DrawerLeft.defaultProps = defaultProps;
DrawerLeft.propTypes = propTypes;
export default DrawerLeft;
