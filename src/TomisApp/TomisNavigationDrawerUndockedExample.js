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

const TomisNavigationDrawerUndockedExample = ({ children, isOpen, onRequestClose }) => {
    return (
        <Drawer open={isOpen} onRequestClose={onRequestClose} onClick={onRequestClose}>
            {children}
        </Drawer>
    );
};

TomisNavigationDrawerUndockedExample.defaultProps = defaultProps;
TomisNavigationDrawerUndockedExample.propTypes = propTypes;
export default TomisNavigationDrawerUndockedExample;
