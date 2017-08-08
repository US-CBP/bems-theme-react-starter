// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow, TableSortLabel } from 'material-ui/Table';
import TomisPaper from 'TomisApp/TomisPaper';

const styleSheet = createStyleSheet(theme => ({
    paper: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    }
}));

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
    counter += 1;
    return { id: counter, name, calories, fat, carbs, protein };
}

const columnData = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
    { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
    { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' }
];

const createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
};

class TomisTableReadOnlyExample extends Component {
    state = {
        order: 'asc',
        orderBy: 'calories',
        selected: [],
        data: [
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9)
        ]
    };

    handleRequestSort = (property, event) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }

        const data = this.state.data.sort((a, b) => (order === 'desc' ? b[orderBy] > a[orderBy] : a[orderBy] > b[orderBy]));

        this.setState({ data, order, orderBy });
    };

    render() {
        const { handleRequestSort } = this;
        const { classes } = this.props;
        const { data, order, orderBy, selected } = this.state;
        return (
            <TomisPaper className={classes.paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columnData.map(column => {
                                return (
                                    <TableCell key={column.id} numeric={column.numeric} disablePadding={column.disablePadding}>
                                        <TableSortLabel active={orderBy === column.id} direction={order} onClick={handleRequestSort.bind(null, column.id)}>
                                            {column.label}
                                        </TableSortLabel>
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(n => {
                            return (
                                <TableRow key={n.id}>
                                    <TableCell>
                                        {n.name}
                                    </TableCell>
                                    <TableCell numeric>
                                        {n.calories}
                                    </TableCell>
                                    <TableCell numeric>
                                        {n.fat}
                                    </TableCell>
                                    <TableCell numeric>
                                        {n.carbs}
                                    </TableCell>
                                    <TableCell numeric>
                                        {n.protein}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TomisPaper>
        );
    }
}

TomisTableReadOnlyExample.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(TomisTableReadOnlyExample);
