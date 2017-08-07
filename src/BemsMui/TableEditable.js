// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Table, { TableBody, TableHead, TableCell, TableRow, TableSortLabel } from 'material-ui/Table';
import { TableCellEdit } from 'BemsMui/Table';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const styleSheet = createStyleSheet(theme => ({
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  }
}));

let counter = 0;
const createData = (name, calories, fat, carbs, protein) => {
  counter += 1;
  return {
    id: counter,
    name: { value: name, isOpen: false },
    calories: { value: calories, isOpen: false },
    fat: { value: fat, isOpen: false },
    carbs: { value: carbs, isOpen: false },
    protein: { value: protein, isOpen: false }
  };
};

const columnHeaderData = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)', cell: null },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories', cell: null },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)', cell: null },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)', cell: null },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)', cell: null }
];

const setStateActiveCell = (activeCell, state, props) => {
  return { activeCell };
};

const getCellRowColm = (idx, property) => {
  return `C${idx}-${property}`;
};

class TableEditable extends Component {
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
    ],
    activeCell: ''
  };

  openCell = null;

  updateData = (idx, property, evt) => {
    const data = this.state.data;
    data[idx][property]['value'] = evt.target.value;
    this.setState({ data });
  };

  handleRequestSort = (property, evt) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    const data = this.state.data.sort((a, b) => (order === 'desc' ? b[orderBy] > a[orderBy] : a[orderBy] > b[orderBy]));

    this.setState({ data, order, orderBy });
  };

  handleClickTableCell = activeCell => {
    this.setState(setStateActiveCell.bind(null, activeCell));
  };

  handleRequestClose = () => {
    this.setState(setStateActiveCell.bind(null, ''));
  };

  render() {
    const { handleRequestSort, updateData, handleRequestClose, handleClickTableCell, openCell } = this;
    const { classes } = this.props;
    const { data, order, orderBy, selected, activeCell } = this.state;
    return (
      <Paper className={classes.paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columnHeaderData.map(column => {
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
            {data.map((n, idx) => {
              const {
                id,
                name: { value: valueName },
                calories: { value: valueCalories },
                fat: { value: valueFat },
                carbs: { value: valueCarbs },
                protein: { value: valueProtein }
              } = n;
              return (
                <TableRow key={id}>
                  <TableCellEdit
                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColm(idx, 'name'))}
                    isOpen={activeCell === getCellRowColm(idx, 'name')}
                    onRequestClose={handleRequestClose}
                  >
                    <TextField
                      id={getCellRowColm(idx, 'name')}
                      placeholder="Type Name Type Name Type Name Type Name Type Name"
                      label="Name"
                      className={classes.textField}
                      value={''}
                      onChange={updateData.bind(null, idx, 'name')}
                      margin="dense"
                    />
                  </TableCellEdit>
                  <TableCell numeric>
                    {valueCalories}
                  </TableCell>
                  <TableCell numeric>
                    {valueFat}
                  </TableCell>
                  <TableCell numeric>
                    {valueCarbs}
                  </TableCell>
                  <TableCell numeric>
                    {valueProtein}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

TableEditable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(TableEditable);
