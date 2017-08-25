import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableExampleBody from 'TheWorks/TableExampleBody';
import moment from 'moment';
import _cloneDeep from 'lodash/cloneDeep';
import { subcategoryLovValues } from 'globalJs/testData';

let tableData = [
    {
        name: 'John Smith',
        status: 'Sample Justification 1',
        departureDt: undefined,
        departureTime: 0,
        selected: true
    },
    {
        name: 'Randal White',
        status: 'Sample Justification 2',
        departureDt: moment().format('MM/DD/YYYY'),
        departureTime: 0,
        selected: true
    },
    {
        name: 'Stephanie Sanders',
        status: 'Sample Justification 3',
        departureDt: undefined,
        departureTime: 0,
        selected: true
    },
    {
        name: 'Steve Brown',
        status: 'Sample Justification 4',
        departureDt: moment().format('MM/DD/YYYY'),
        departureTime: 0,
        selected: true
    },
    {
        name: 'Joyce Whitten',
        status: 'Sample Justification 5',
        departureDt: moment().subtract(2, 'months').format('MM/DD/YYYY'),
        departureTime: 0,
        selected: true
    },
    {
        name: 'Samuel Roberts',
        status: 'Sample Justification 6',
        departureDt: undefined,
        departureTime: 0,
        selected: true
    },
    {
        name: 'Adam Moore',
        status: 'Sample Justification 7',
        departureDt: moment().subtract(3, 'years').format('MM/DD/YYYY'),
        departureTime: 0,
        selected: true
    }
];

let shadowTableData = _cloneDeep(tableData);

const columnData = [
    { id: 'primary', numeric: false, disablePadding: false, label: 'Primary*', cell: null },
    { id: 'departureDt', numeric: false, disablePadding: false, label: 'Departure Date*', cell: null },
    { id: 'name', numeric: false, disablePadding: false, label: 'Sub-Category*', cell: null },
    { id: 'status', numeric: false, disablePadding: false, label: 'Justification*', cell: null },
    { id: 'delete', numeric: false, disablePadding: false, label: 'Delete', cell: null }
];

const initState = {
    tableRowCnt: tableData.length,
    refresh: 0
};

class TableExample extends Component {
    state = initState;

    handleAddRow = evt => {
        evt.stopPropagation();
        tableData.push({ name: '', status: '', departureDt: undefined, name: '' });
        //force table refresh
        this.setState({ tableRowCnt: tableData.length });
    };

    handleDeleteRow = (idx, evt) => {
        evt.stopPropagation();
        tableData.splice(idx, 1);
        //force table refresh
        this.setState({ tableRowCnt: tableData.length });
    };

    // handleClickTableCell = activeCell => {
    //     this.setState(setStateActiveCell.bind(null, activeCell));
    // };

    handleUpdateData = (idx, property, payload) => {
        shadowTableData = _cloneDeep(tableData);
        shadowTableData[idx][property] = payload.value;
    };

    handleUpdateDataLov = (idx, property, payload) => {
        console.log('handleUpdateDataLov payload=', payload);
        shadowTableData = _cloneDeep(tableData);
        shadowTableData[idx][property] = payload.value;
    };

    handleUpdateDataDate = (idx, property, payload) => {
        shadowTableData = _cloneDeep(tableData);
        shadowTableData[idx][property] = payload.value;
    };

    // handleRequestClose = action => {
    //     console.log('handleRequestClose action=', action);
    //     if (action === 'SAVE') {
    //         tableData = shadowTableData;
    //     }
    //     this.setState(setStateActiveCell.bind(null, ''));
    // };

    render() {
        const { handleUpdateData, handleUpdateDataLov, handleUpdateDataDate, handleAddRow, handleDeleteRow } = this;
        const { activeCell } = this.state;
        return (
            <div>
                <TableExampleBody
                    columnData={columnData}
                    tableData={tableData}
                    handleAddRow={handleAddRow}
                    handleDeleteRow={handleDeleteRow}
                    handleUpdateData={handleUpdateData}
                    handleUpdateDataLov={handleUpdateDataLov}
                    handleUpdateDataDate={handleUpdateDataDate}
                    subcategoryLovValues={subcategoryLovValues}
                />
            </div>
        );
    }
}
export default TableExample;
