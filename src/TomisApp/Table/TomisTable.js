// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';
import Table from 'material-ui/Table';
import { TomisTableHeader, TomisTableBody, TomisTableRow } from 'TomisApp/TomisTable';

const setStateActiveCell = (activeCell, state, props) => {
    return { activeCell };
};

export const styles = theme => ({
    root: {
        borderCollapse: 'inherit'
    }
});

const propTypes = {
    children: PropTypes.func.isRequired
};

class TomisTable extends Component {
    state = {
        activeCell: ''
    };

    handleClickTableCell = activeCell => {
        this.setState(setStateActiveCell.bind(null, activeCell));
    };

    handleRequestClose = action => {
        console.log('handleRequestClose action=', action);
        if (action === 'SAVE') {
            // tableData = shadowTableData;
        }
        this.setState(setStateActiveCell.bind(null, ''));
    };

    render() {
        const { handleClickTableCell: onRequestOpen, handleRequestClose: onRequestClose } = this;
        const { activeCell } = this.state;
        const { classes, children, columnData, tableData, ...other } = this.props;
        const { root: clsRoot } = classes;
        return (
            <Table className={classNames(clsRoot)} {...other}>
                <TomisTableHeader columnData={columnData} />
                <TomisTableBody>
                    {tableData.map((row, idx) =>
                        <TomisTableRow
                            key={`row-${idx}`}
                            rowId={`row-${idx}`}
                            row={row}
                            rowIdx={idx}
                            onRequestOpen={onRequestOpen}
                            isOpen={activeCell === `row-${idx}`}
                            onRequestClose={onRequestClose}
                        >
                            {children}
                        </TomisTableRow>
                    )}
                </TomisTableBody>
            </Table>
        );
    }
}

TomisTable.propTypes = propTypes;
export default withStyles(styles, { name: 'TomisTable' })(TomisTable);
