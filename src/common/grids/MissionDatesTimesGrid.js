import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MissionDatesTimesGridRender from './MissionDatesTimesGridRender';
import moment from 'moment';
import _cloneDeep from 'lodash/cloneDeep';
import { subcategoryLovValues } from 'globalJs/testData';

let tableData = [
    {
        msnNbr: 'M1',
        msnDesc: '',
        startDate: undefined,
        startTime: '0000',
        duration: '',
        endTime: '0100'
    }
];

let shadowTableData = _cloneDeep(tableData);

const columnData = [
    { id: 'msnNbr', numeric: false, disablePadding: false, label: 'MSN #', cell: null },
    { id: 'msnDesc', numeric: false, disablePadding: false, label: 'ission<br />Description', cell: null },
    { id: 'startDate', numeric: false, disablePadding: false, label: 'Date*<br />(Local)', cell: null },
    { id: 'startTime', numeric: false, disablePadding: false, label: 'Start Time*<br /> (Local)*', cell: null },
    { id: 'duration', numeric: false, disablePadding: false, label: 'Duration*<br />HH + MM', cell: null },
    { id: 'endTime', numeric: false, disablePadding: false, label: 'End Time*<br /> (Local)', cell: null },
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

class MissionDatesTimesGrid extends Component {
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
                <MissionDatesTimesGridRender
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
export default MissionDatesTimesGrid;
