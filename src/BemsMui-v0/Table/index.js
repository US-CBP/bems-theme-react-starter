import React from 'react';
import { Table as TableMui, TableHeader as TableHeaderMui, TableRow as TableRowMui, TableBody as TableBodyMui } from 'material-ui/Table';

export { TableFooter, TableHeaderColumn, TableRowColumn } from 'material-ui/Table';
export AutoCompleteTableRowColumn from '../helpers/AutoCompleteTableRowColumn';
export TextFieldTableRowColumn from '../helpers/TextFieldTableRowColumn';
export DatePickerTableRowColumn from '../helpers/DatePickerTableRowColumn';

export class Table extends TableMui {
  static defaultProps = {
    allRowsSelected: false,
    fixedFooter: false,
    fixedHeader: true,
    height: '100%',
    multiSelectable: false,
    selectable: false,
    bodyStyle: { minHeight: '30px' }
  };
}

export class TableHeader extends TableHeaderMui {
  static defaultProps = {
    adjustForCheckbox: false,
    displaySelectAll: false,
    enableSelectAll: false,
    selectAllSelected: false
  };
}

export class TableRow extends TableRowMui {
  static defaultProps = {
    displayBorder: true,
    hoverable: false,
    hovered: false,
    selectable: false,
    striped: false
  };
}

export class TableBody extends TableBodyMui {
  static defaultProps = {
    allRowsSelected: false,
    deselectOnClickaway: true,
    displayRowCheckbox: false,
    multiSelectable: false,
    preScanRows: true,
    selectable: true,
    style: {}
  };
}
