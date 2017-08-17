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

const ButtonFlat = ({ label }) => {
    return (
        <Button color="primary">
            {label}
        </Button>
    );
};

ButtonFlat.defaultProps = defaultProps;
ButtonFlat.propTypes = propTypes;
export default ButtonFlat;
