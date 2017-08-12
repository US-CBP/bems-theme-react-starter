//@flow

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import classNames from 'classnames';
import Button from 'material-ui/Button';

const styleSheet = createStyleSheet(theme => ({
    flatPrimary: {
        color: theme.palette.primary[900]
    }
}));

const defaultProps = {
    label: 'Button Label'
};

const propTypes = {
    label: PropTypes.string.isRequired
};

const TomisButtonFlat = ({ classes, label }) => {
    return (
        <Button className={classNames(classes.flatPrimary)}>
            {label}
        </Button>
    );
};

TomisButtonFlat.defaultProps = defaultProps;
TomisButtonFlat.propTypes = propTypes;
export default withStyles(styleSheet)(TomisButtonFlat);
