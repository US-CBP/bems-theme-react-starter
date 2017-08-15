// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createStyleSheet from 'material-ui/styles/createStyleSheet';
import withStyles from 'material-ui/styles/withStyles';
import Table from 'material-ui/Table';

export const styleSheet = createStyleSheet('TomisTable', theme => ({
    root: {
        borderCollapse: 'inherit'
    }
}));

const TomisTable = ({ classes, children, ...other }) => {
    const { root: clsRoot } = classes;
    return (
        <Table className={classNames(clsRoot)} {...other}>
            {children}
        </Table>
    );
};

export default withStyles(styleSheet)(TomisTable);
