import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TomisPanel } from 'TomisApp/TomisPanel';
import { TomisTable, TomisTableHeader, TomisTableBody, TomisTableRow, TomisTableCell, TomisTableCellEdit } from 'TomisApp/TomisTable';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisButtonIcon from 'TomisApp/TomisButtonIcon';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import TomisButtonRaised from 'TomisApp/TomisButtonRaised';
import TomisTextFieldSingleLine from 'TomisApp/TomisTextFieldSingleLine';
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
        handleClickTableCell,
        handleUpdateData,
        handleUpdateDataLov,
        handleUpdateDataDate,
        handleRequestClose,
        subcategoryLovValues
    } = props;
    return (
        <div className="flex-row row-spacer-24">
            <TomisPanel label="My Table Panel Title">
                <TomisButtonRaised label="Add Row" onClick={handleAddRow} />
                <TomisTable>
                    <TomisTableHeader columnData={columnData} />
                    <TomisTableBody>
                        {tableData.map((row, idx) =>
                            <TomisTableRow key={idx}>
                                <TomisTableCell>
                                    <TomisCheckbox />
                                </TomisTableCell>
                                <TomisTableCellEdit
                                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'departureDt'))}
                                    isOpen={activeCell === getCellRowColmId(idx, 'departureDt')}
                                    onRequestClose={handleRequestClose}
                                >
                                    <TomisDatePicker
                                        placeholder="Select Date"
                                        required={true}
                                        label="Date"
                                        value={row['departureDt']}
                                        reportToHoc={handleUpdateDataDate.bind(null, idx, 'departureDt')}
                                    />
                                </TomisTableCellEdit>
                                <TomisTableCellEdit
                                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'name'))}
                                    isOpen={activeCell === getCellRowColmId(idx, 'name')}
                                    onRequestClose={handleRequestClose}
                                >
                                    <TomisAutocomplete
                                        placeholder="Select Name"
                                        required={true}
                                        label="Name"
                                        value={row['name']}
                                        reportToHoc={handleUpdateDataLov.bind(this, idx, 'name')}
                                        options={subcategoryLovValues}
                                    />
                                </TomisTableCellEdit>
                                <TomisTableCellEdit
                                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'status'))}
                                    isOpen={activeCell === getCellRowColmId(idx, 'status')}
                                    onRequestClose={handleRequestClose}
                                >
                                    <TomisDuration
                                        placeholder="Sample Justification"
                                        required={true}
                                        value={row['status']}
                                        reportToHoc={handleUpdateData.bind(null, idx, 'status')}
                                    />
                                </TomisTableCellEdit>
                                <TomisTableCell>
                                    <TomisButtonIcon tooltip="Delete Row" onClick={handleDeleteRow.bind(null, idx)}>
                                        <TomisFontIcon name="delete" />
                                    </TomisButtonIcon>
                                </TomisTableCell>
                            </TomisTableRow>
                        )}
                    </TomisTableBody>
                </TomisTable>
            </TomisPanel>
        </div>
    );
};

export default TableExampleBody;
