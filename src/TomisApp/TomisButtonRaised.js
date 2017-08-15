//@flow

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import classNames from 'classnames';
import Button from 'material-ui/Button';

const styleSheet = createStyleSheet(theme => ({
    raisedPrimary: {
        color: theme.palette.getContrastText(theme.palette.primary[900]),
        backgroundColor: theme.palette.primary[900],
        '&:hover': {
            backgroundColor: theme.palette.primary[900]
        }
<<<<<<< HEAD
    },
    iconSpacing: {
        marginRight: '-8px',
        marginLeft: '16px'
=======
>>>>>>> b7008f2517e2aaccbd2442a02b2221c0e8392750
    }
}));

const defaultProps = {
    label: 'Button Label'
};

const propTypes = {
    label: PropTypes.string.isRequired
};

<<<<<<< HEAD
const TomisButtonRaised = ({ children, classes, className, label, ...other }) => {
    return (
        <Button raised={true} className={classNames(classes.raisedPrimary, className)} {...other}>
=======
const TomisButtonRaised = ({ classes, label }) => {
    return (
        <Button raised={true} className={classNames(classes.raisedPrimary)}>
>>>>>>> b7008f2517e2aaccbd2442a02b2221c0e8392750
            {label}
            <div className={classes.iconSpacing}>
                {children}
            </div>
        </Button>
    );
};

TomisButtonRaised.defaultProps = defaultProps;
TomisButtonRaised.propTypes = propTypes;
export default withStyles(styleSheet)(TomisButtonRaised);
