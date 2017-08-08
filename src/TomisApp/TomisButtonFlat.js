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

const TomisButtonFlat = ({ label }) => {
    return (
        <Button color="primary">
            {label}
        </Button>
    );
};

TomisButtonFlat.defaultProps = defaultProps;
TomisButtonFlat.propTypes = propTypes;
export default TomisButtonFlat;
