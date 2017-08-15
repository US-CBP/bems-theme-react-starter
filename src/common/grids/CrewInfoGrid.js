import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CrewInfoGridRender from './CrewInfoGridRender';
import moment from 'moment';
import _cloneDeep from 'lodash/cloneDeep';
import { subcategoryLovValues } from 'globalJs/testData';

const crewNameLov = ['crew1Alpha', 'crew1Beta', 'crew1Delta'];

let tableData = [
    {
        pic: '',
        name: '',
        role: ''
    }
];

let shadowTableData = _cloneDeep(tableData);

const columnData = [
    { id: 'pic', numeric: false, disablePadding: false, label: 'Pilot in Command<br/>(Risk Assessment)*', cell: null },
    { id: 'name', numeric: false, disablePadding: false, label: 'Name*', cell: null },
    { id: 'role', numeric: false, disablePadding: false, label: 'Role*', cell: null },
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

class CrewInfoGrid extends Component {
    state = initState;

    handleAddRow = evt => {
        evt.stopPropagation();
        tableData.push({ pic: '', name: '', role: '' });
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
                <CrewInfoGridRender
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
                    crewNameLov={crewNameLov}
                />
            </div>
        );
    }
}
export default CrewInfoGrid;
