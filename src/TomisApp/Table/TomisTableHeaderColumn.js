//@flow

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import classNames from 'classnames';
import { TableCell, TableSortLabel } from 'material-ui/Table';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

export const styles = theme => ({
    sortLabelRoot: {
        color: theme.palette.common.lightBlack,
        '&:hover': {
            color: theme.palette.common.lightBlack
        }
    }
});

const defaultProps = {
    label: 'Button Label'
};

const propTypes = {
    label: PropTypes.string.isRequired
};

const TomisTableHeaderColumn = ({ column, handleRequestSort = () => {}, orderBy, order, cursor, classes }) => {
    const { sortLabelRoot: clsSortLabelRoot } = classes;
    return (
        <TableCell numeric={column.numeric} disablePadding={column.disablePadding}>
            <Tooltip
                placement="bottom"
                mouseEnterDelay={0.5}
                mouseLeaveDelay={0.1}
                destroyTooltipOnHide={true}
                align={{
                    offset: [-10, 0]
                }}
                overlay={<div dangerouslySetInnerHTML={{ __html: column.label }} />}
            >
                <TableSortLabel
                    className={classNames(clsSortLabelRoot)}
                    style={{ cursor }}
                    active={orderBy === column.id}
                    direction={order}
                    onClick={handleRequestSort.bind(null, column.id)}
                >
                    <span dangerouslySetInnerHTML={{ __html: column.label }} />
                </TableSortLabel>
            </Tooltip>
        </TableCell>
    );
};

TomisTableHeaderColumn.defaultProps = defaultProps;
TomisTableHeaderColumn.propTypes = propTypes;
export default withStyles(styles, { name: 'TomisTableHeaderColumn' })(TomisTableHeaderColumn);
