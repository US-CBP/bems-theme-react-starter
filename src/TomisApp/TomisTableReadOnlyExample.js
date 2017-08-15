// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
<<<<<<< HEAD
import { TomisTableHeader } from './TomisTable';
=======
import TomisTableHeader from 'TomisApp/TomisTableHeader';
>>>>>>> b7008f2517e2aaccbd2442a02b2221c0e8392750
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

class TomisTableReadOnlyExample extends Component {
<<<<<<< HEAD
    state = {
        data: [
            createData('Frozen yogurt', 159, 6.0, 24, 4.0),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9)
        ]
    };

    handleRequestSort = (property, order) => {
        const orderBy = property;
        const data = this.state.data.sort((a, b) => (order === 'desc' ? b[orderBy] > a[orderBy] : a[orderBy] > b[orderBy]));
        this.setState({ data });
    };

    render() {
        const { handleRequestSort } = this;
        const { data } = this.state;
        const { classes } = this.props;
        return (
            <TomisPaper className={classes.paper}>
                <Table>
                    <TomisTableHeader columnData={columnData} onRequestSort={handleRequestSort} />
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
=======
  state = {
    data: [
      createData('Frozen yogurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9)
    ]
  };

  handleRequestSort = (property, order) => {
    const orderBy = property;
    const data = this.state.data.sort((a, b) => (order === 'desc' ? b[orderBy] > a[orderBy] : a[orderBy] > b[orderBy]));
    this.setState({ data });
  };

  render() {
    const { handleRequestSort } = this;
    const { data } = this.state;
    const { classes } = this.props;
    return (
      <TomisPaper className={classes.paper}>
        <Table>
          <TomisTableHeader columnData={columnData} onRequestSort={handleRequestSort} />
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
>>>>>>> b7008f2517e2aaccbd2442a02b2221c0e8392750
}

TomisTableReadOnlyExample.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(TomisTableReadOnlyExample);
