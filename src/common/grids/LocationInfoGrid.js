import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LocationInfoGridRender from './LocationInfoGridRender';
import moment from 'moment';
import _cloneDeep from 'lodash/cloneDeep';
import { subcategoryLovValues } from 'globalJs/testData';

let tableData = [];

let shadowTableData = _cloneDeep(tableData);

const columnData = [
    { id: 'locationName', numeric: false, disablePadding: false, label: 'Location Name*', cell: null },
    { id: 'city', numeric: false, disablePadding: false, label: 'City*', cell: null },
    { id: 'state', numeric: false, disablePadding: false, label: 'State*', cell: null },
    { id: 'delete', numeric: false, disablePadding: false, label: 'Delete', cell: null }
];

const setStateActiveCell = (activeCell, state, props) => {
    return { activeCell };
};

const initState = {
    tableRowCnt: tableData.length,
    activeCell: '',
    refresh: 0
};

class LocationInfoGrid extends Component {
    state = initState;

    handleAddRow = evt => {
        evt.stopPropagation();
        tableData.push({ locationName: '', city: '', state: '' });
        //force table refresh
        this.setState({ tableRowCnt: tableData.length });
    };

    handleDeleteRow = (idx, evt) => {
        evt.stopPropagation();
        tableData.splice(idx, 1);
        //force table refresh
        this.setState({ tableRowCnt: tableData.length });
    };

    handleClickTableCell = activeCell => {
        this.setState(setStateActiveCell.bind(null, activeCell));
    };

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

    handleRequestClose = action => {
        console.log('handleRequestClose action=', action);
        if (action === 'SAVE') {
            tableData = shadowTableData;
        }
        this.setState(setStateActiveCell.bind(null, ''));
    };

    render() {
        const { handleUpdateData, handleUpdateDataLov, handleUpdateDataDate, handleClickTableCell, handleRequestClose, handleAddRow, handleDeleteRow } = this;
        const { activeCell } = this.state;
        return (
            <div>
                <LocationInfoGridRender
                    columnData={columnData}
                    tableData={tableData}
                    activeCell={activeCell}
                    handleAddRow={handleAddRow}
                    handleDeleteRow={handleDeleteRow}
                    handleClickTableCell={handleClickTableCell}
                    handleUpdateData={handleUpdateData}
                    handleUpdateDataLov={handleUpdateDataLov}
                    handleUpdateDataDate={handleUpdateDataDate}
                    handleRequestClose={handleRequestClose}
                    subcategoryLovValues={subcategoryLovValues}
                />
            </div>
        );
    }
}
export default LocationInfoGrid;
