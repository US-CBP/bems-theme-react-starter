import React, { Component } from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../../TomisMui/Table';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from '../../TomisMui/IconButton';

const initState = {
  fixedHeader: true,
  fixedFooter: false,
  stripedRows: false,
  showRowHover: true,
  selectable: false,
  multiSelectable: false,
  enableSelectAll: false,
  deselectOnClickaway: true,
  showCheckboxes: false,
  height: '300px'
};

const propTypes = {
  files: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

class FileAttachmentTable extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.delRow = this.delRow.bind(this);
  }

  delRow(idx, evt) {
    evt.stopPropagation();
    const { onDelete } = this.props;
    onDelete(idx);
  }

  render() {
    const { delRow } = this;
    const { height, fixedHeader, fixedFooter, selectable, multiSelectable, showCheckboxes, deselectOnClickaway, showRowHover, stripedRows } = this.state;
    const { tableData } = this.props;
    return (
      <div>
        <Table height={height} fixedHeader={fixedHeader} fixedFooter={fixedFooter} selectable={selectable} multiSelectable={multiSelectable}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
            <TableRow selectable={false} style={{ height: '16px' }}>
              <TableHeaderColumn style={{ height: '16px' }}>File Name</TableHeaderColumn>
              <TableHeaderColumn style={{ height: '16px' }}>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={showCheckboxes} deselectOnClickaway={deselectOnClickaway} showRowHover={showRowHover} stripedRows={stripedRows}>
            {tableData.map((row, idx) => (
              <TableRow key={idx}>
                <TableRowColumn>
                  <span>{row.name}</span>
                </TableRowColumn>
                <TableRowColumn>
                  <IconButton onTouchTap={delRow.bind(this, idx)}>
                    <DeleteIcon />
                  </IconButton>
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default muiThemeable()(FileAttachmentTable);
