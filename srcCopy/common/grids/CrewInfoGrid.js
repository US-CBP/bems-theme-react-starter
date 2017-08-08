import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CrewInfoGridRender from './CrewInfoGridRender';

const tableData = [
    {
        name: '',
        status: 'Sample Justification 1',
        departureDt: undefined,
        departureTime: 0,
        selected: true
    }
];

const subcategoryLovValues = ['SubcategoryAlpha', 'SubcategoryBeta', 'SubcategoryDelta'];
const crewNameLov = ['crew1Alpha', 'crew1Beta', 'crew1Delta'];
let subCategoryEditValue = '';
let subCategoryEditIdx = 0;
let justificationEditValue = '';
let justificationEditIdx = 0;

const initState = {
    tableRowCnt: tableData.length
};

class CrewInfoGrid extends Component {
    constructor(props) {
        super(props);
        this.state = initState;
        this.addRow = this.addRow.bind(this);
        this.handleSaveTableRowColumnValue = this.handleSaveTableRowColumnValue.bind(this);
        this.handleSaveTableRowColumnDate = this.handleSaveTableRowColumnDate.bind(this);
    }

    addRow(evt) {
        evt.stopPropagation();
        tableData.push({ name: '', status: '' });
        //force table refresh
        this.setState({ tableRowCnt: tableData.length });
    }

    delRow(idx, evt) {
        evt.stopPropagation();
        tableData.splice(idx, 1);
        //force table refresh
        this.setState({ tableRowCnt: tableData.length });
    }

    handleSaveTableRowColumnValue(rowIdx, propertyName, newValue) {
        tableData[rowIdx][propertyName] = newValue;
        //force table refresh
        this.setState({ tableRowCnt: tableData.length });
    }

    handleSaveTableRowColumnDate(rowIdx, propertyName, newValue) {
        tableData[rowIdx][propertyName] = newValue;
        //force table refresh
        this.setState({ tableRowCnt: tableData.length });
    }

    render() {
        const { addRow, delRow, handleSaveTableRowColumnValue, handleSaveTableRowColumnDate } = this;
        return (
            <CrewInfoGridRender
                tableData={tableData}
                addRow={addRow}
                delRow={delRow}
                handleSaveTableRowColumnValue={handleSaveTableRowColumnValue}
                handleSaveTableRowColumnDate={handleSaveTableRowColumnDate}
                crewNameLov={crewNameLov}
            />
        );
    }
}

export default CrewInfoGrid;
