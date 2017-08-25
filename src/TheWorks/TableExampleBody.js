import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TomisPanel } from 'TomisApp/TomisPanel';
import { TomisTable, TomisTableHeader, TomisTableBody, TomisTableRow, TomisTableCell, TomisTableCellEdit } from 'TomisApp/TomisTable';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisButtonIcon from 'TomisApp/TomisButtonIcon';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import TomisButtonRaised from 'TomisApp/TomisButtonRaised';
import TomisTextField from 'TomisApp/TomisTextField';
import TomisDatePicker from 'TomisApp/TomisDatePicker';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import TomisDuration from 'common/TomisDuration';
import { getCellRowColmId } from 'globalJs/functions';

const TableExampleBody = props => {
    const { columnData, tableData, handleAddRow, handleDeleteRow, handleUpdateData, handleUpdateDataLov, handleUpdateDataDate, subcategoryLovValues } = props;
    return (
        <div className="flex-row row-spacer-24">
            <TomisPanel label="My Table Panel Example">
                <TomisButtonRaised label="Add Row" onClick={handleAddRow} />
                <TomisTable columnData={columnData} tableData={tableData}>
                    <TomisCheckbox name="primary" />
                    <TomisDatePicker placeholder="Select Date" required={true} label="Date" name={'departureDt'} onModify={handleUpdateDataDate.bind(null, 0, 'departureDt')} />
                    <TomisAutocomplete
                        placeholder="Select Name"
                        required={true}
                        label="Name"
                        name="name"
                        onModify={handleUpdateDataLov.bind(null, 0, 'name')}
                        options={subcategoryLovValues}
                    />
                    <TomisDuration placeholder="Sample Justification" required={true} name="status" onModify={handleUpdateData.bind(null, 0, 'status')} />
                    <TomisButtonIcon onClick={handleDeleteRow.bind(null, 0)}>
                        <TomisFontIcon name="delete" />
                    </TomisButtonIcon>
                </TomisTable>
            </TomisPanel>
        </div>
    );
};

export default TableExampleBody;
