// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';
import Table from 'material-ui/Table';
import { TomisTableHeader, TomisTableBody } from 'TomisApp/TomisTable';

export const styles = theme => ({
    root: {
        borderCollapse: 'inherit'
    }
});

const TomisTable = ({ classes, children, columnData, ...other }) => {
    const { root: clsRoot } = classes;
    return (
        <Table className={classNames(clsRoot)} {...other}>
            <TomisTableHeader columnData={columnData} />
            <TomisTableBody>
                {children}
            </TomisTableBody>
        </Table>
    );
};

export default withStyles(styles, { name: 'TomisTable' })(TomisTable);
