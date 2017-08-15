import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AgentInfoGridRender from './AgentInfoGridRender';
import moment from 'moment';
import _cloneDeep from 'lodash/cloneDeep';
import { subcategoryLovValues } from 'globalJs/testData';

let tableData = [];

let shadowTableData = _cloneDeep(tableData);

const columnData = [
    { id: 'name', numeric: false, disablePadding: false, label: 'Agent Name', cell: null },
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

class AgentInfoGrid extends Component {
    state = initState;

    handleAddRow = evt => {
        evt.stopPropagation();
        tableData.push({ name: '' });
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
        shadowTableData = _cloneDeep(tableData);
        shadowTableData[idx][property] = payload.value;
    };

    handleUpdateDataDate = (idx, property, payload) => {
        shadowTableData = _cloneDeep(tableData);
        shadowTableData[idx][property] = payload.value;
    };

    handleRequestClose = action => {
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
                <AgentInfoGridRender
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
export default AgentInfoGrid;
