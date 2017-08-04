//@flow

import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import FontIcon from './FontIcon';

const defaultProps = {
    icon: <FontIcon name="delete" />
};

const propTypes = {
    icon: PropTypes.node.isRequired
};

const ButtonIcon = ({ icon, onClick }) => {
    return (
        <IconButton onClick={onClick}>
            {icon}
        </IconButton>
    );
};

ButtonIcon.defaultProps = defaultProps;
ButtonIcon.propTypes = propTypes;
export default ButtonIcon;
