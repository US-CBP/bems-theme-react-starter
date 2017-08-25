//@flow

import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import TomisFontIcon from './TomisFontIcon';

//See TomisTableRow for use of isRenderInTableRow.  Allows component to be rendered in a table row instead of displaying read-only value.
const defaultProps = {
    // icon: <TomisFontIcon name="delete" />,
    isRenderInTableRow: true
};

const propTypes = {
    // icon: PropTypes.node.isRequired,
    isRenderInTableRow: PropTypes.bool.isRequired
};

const TomisButtonIcon = ({ children, onClick, className = '' }) => {
    return (
        <IconButton tabIndex="-1" onClick={onClick} className={className}>
            {children}
        </IconButton>
    );
};

TomisButtonIcon.defaultProps = defaultProps;
TomisButtonIcon.propTypes = propTypes;
export default TomisButtonIcon;
