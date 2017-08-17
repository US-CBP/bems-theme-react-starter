import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import classNames from 'classnames';
import { CircularProgress } from 'material-ui/Progress';

export const styles = theme => ({
    progress: {
        margin: `0 ${theme.spacing.unit * 2}px`
    },
    primaryColor: {
        color: theme.palette.primary[900]
    }
});

function TomisProgressIndeterminateCircular({ classes }) {
    return (
        <div>
            <CircularProgress color="primary" className={classNames(classes.progress, classes.primaryColor)} size={48} />
        </div>
    );
}

TomisProgressIndeterminateCircular.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { name: 'TomisProgressIndeterminateCircular' })(TomisProgressIndeterminateCircular);
