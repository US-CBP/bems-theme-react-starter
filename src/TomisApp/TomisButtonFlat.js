//@flow

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import classNames from 'classnames';
import Button from 'material-ui/Button';

const styleSheet = createStyleSheet(theme => ({
    flatPrimary: {
        color: theme.palette.primary[900]
    },
    iconSpacing: {
        marginRight: '-8px',
        marginLeft: '16px'
    }
}));

const defaultProps = {
    label: 'Button Label'
};

const propTypes = {
    label: PropTypes.string.isRequired
};

const TomisButtonFlat = ({ children, classes, className, label, ...other }) => {
    return (
        <Button className={classNames(classes.flatPrimary, className)} {...other}>
            {label}
            <div className={classes.iconSpacing}>
                {children}
            </div>
        </Button>
    );
};

TomisButtonFlat.defaultProps = defaultProps;
TomisButtonFlat.propTypes = propTypes;
export default withStyles(styleSheet)(TomisButtonFlat);
