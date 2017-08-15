import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MissionDatesTimesUasFedGridRender from './MissionDatesTimesUasFedGridRender';
import moment from 'moment';
import _cloneDeep from 'lodash/cloneDeep';
import { subcategoryLovValues } from 'globalJs/testData';

let tableData = (tableData = [
    {
        draggable: false,
        siteType: 'LRE',
        siteName: '',
        startDate: undefined,
        startTime: '0000',
        duration: '00 + 00',
        endTime: '0100'
    },
    {
        draggable: true,
        siteType: 'MCE-1',
        siteName: '',
        startDate: undefined,
        startTime: '0000',
        duration: '00 + 00',
        endTime: '0100'
    },
    {
        draggable: true,
        siteType: 'MCE-2',
        siteName: '',
        startDate: undefined,
        startTime: '0000',
        duration: '00 + 00',
        endTime: '0100'
    },
    {
        draggable: false,
        siteType: 'LRE',
        siteName: '',
        startDate: undefined,
        startTime: '0000',
        duration: '00 + 00',
        endTime: '0100'
    }
]);

let shadowTableData = _cloneDeep(tableData);

const columnData = [
    { id: 'draggable', numeric: false, disablePadding: false, label: '', cell: null },
    { id: 'siteType', numeric: false, disablePadding: false, label: 'Site Type', cell: null },
    { id: 'siteName', numeric: false, disablePadding: false, label: 'Site Name*', cell: null },
    { id: 'date', numeric: false, disablePadding: false, label: 'Date (Zulu)*', cell: null },
    { id: 'time', numeric: false, disablePadding: false, label: 'Time (Zulu)*', cell: null },
    { id: 'duration', numeric: false, disablePadding: false, label: 'Duration*<br />HH + MM', cell: null },
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

class MissionDatesTimesUasFedGrid extends Component {
    state = initState;

    handleAddRow = evt => {
        evt.stopPropagation();
        tableData.push({ siteType: '', siteName: '', date: undefined, time: '', duration: '' });
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
                <MissionDatesTimesUasFedGridRender
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
export default MissionDatesTimesUasFedGrid;
