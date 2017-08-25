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
    const {
        columnData,
        tableData,
        activeCell,
        handleAddRow,
        handleDeleteRow,
        handleClickTableCell: onRequestOpen,
        handleUpdateData,
        handleUpdateDataLov,
        handleUpdateDataDate,
        handleRequestClose: onRequestClose,
        subcategoryLovValues
    } = props;
    return (
        <div className="flex-row row-spacer-24">
            <TomisPanel label="My Table Panel Example">
                <TomisButtonRaised label="Add Row" onClick={handleAddRow} />
                <TomisTable columnData={columnData}>
                    {tableData.map((row, idx) =>
                        <TomisTableRow key={`row-${idx}`} rowId={`row-${idx}`} onRequestOpen={onRequestOpen} isOpen={activeCell === `row-${idx}`} onRequestClose={onRequestClose}>
                            <TomisCheckbox />
                            <TomisDatePicker
                                placeholder="Select Date"
                                required={true}
                                label="Date"
                                value={row['departureDt']}
                                reportToHoc={handleUpdateDataDate.bind(null, idx, 'departureDt')}
                            />
                            <TomisAutocomplete
                                placeholder="Select Name"
                                required={true}
                                label="Name"
                                value={row['name']}
                                reportToHoc={handleUpdateDataLov.bind(this, idx, 'name')}
                                options={subcategoryLovValues}
                            />
                            <TomisDuration placeholder="Sample Justification" required={true} value={row['status']} reportToHoc={handleUpdateData.bind(null, idx, 'status')} />
                            <TomisButtonIcon onClick={handleDeleteRow.bind(null, idx)}>
                                <TomisFontIcon name="delete" />
                            </TomisButtonIcon>
                        </TomisTableRow>
                    )}
                </TomisTable>
            </TomisPanel>
        </div>
    );
};

export default TableExampleBody;
