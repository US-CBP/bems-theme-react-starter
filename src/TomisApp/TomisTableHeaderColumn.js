//@flow

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TableCell, TableSortLabel } from 'material-ui/Table';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const defaultProps = {
    label: 'Button Label'
};

const propTypes = {
    label: PropTypes.string.isRequired
};

const TomisTableHeaderColumn = ({ column, handleRequestSort, orderBy, order, cursor }) => {
    return (
        <TableCell numeric={column.numeric} disablePadding={column.disablePadding}>
            <Tooltip
                placement="bottom"
                mouseEnterDelay={0}
                mouseLeaveDelay={0.1}
                destroyTooltipOnHide={true}
                overlay={
                    <div>
                        {column.label}
                    </div>
                }
            >
                <TableSortLabel style={{ cursor }} active={orderBy === column.id} direction={order} onClick={handleRequestSort.bind(null, column.id)}>
                    {column.label}
                </TableSortLabel>
            </Tooltip>
        </TableCell>
    );
};

TomisTableHeaderColumn.defaultProps = defaultProps;
TomisTableHeaderColumn.propTypes = propTypes;
export default TomisTableHeaderColumn;
