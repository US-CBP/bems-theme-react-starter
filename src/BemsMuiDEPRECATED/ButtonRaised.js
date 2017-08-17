//@flow

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

const defaultProps = {
    label: 'Button Label'
};

const propTypes = {
    label: PropTypes.string.isRequired
};

const ButtonRaised = ({ label }) => {
    return (
        <Button raised={true} color="primary">
            {label}
        </Button>
    );
};

ButtonRaised.defaultProps = defaultProps;
ButtonRaised.propTypes = propTypes;
export default ButtonRaised;
