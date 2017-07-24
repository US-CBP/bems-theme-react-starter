import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeaderTable, PanelBody } from 'TomisApp/TomisPanel';
import LocationInfoGridRender from './LocationInfoGridRender';

const tableData = [];

const subcategoryLovValues = ['SubcategoryAlpha', 'SubcategoryBeta', 'SubcategoryDelta'];
let subCategoryEditValue = '';
let subCategoryEditIdx = 0;
let justificationEditValue = '';
let justificationEditIdx = 0;

const initState = {
    tableRowCnt: tableData.length
};

class LocationInfoGrid extends Component {
    constructor(props) {
        super(props);
        this.state = initState;
        this.addRow = this.addRow.bind(this);
        this.delRow = this.delRow.bind(this);
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
            <LocationInfoGridRender
                tableData={tableData}
                addRow={addRow}
                delRow={delRow}
                handleSaveTableRowColumnValue={handleSaveTableRowColumnValue}
                handleSaveTableRowColumnDate={handleSaveTableRowColumnDate}
                subcategoryLovValues={subcategoryLovValues}
            />
        );
    }
}

export default LocationInfoGrid;
