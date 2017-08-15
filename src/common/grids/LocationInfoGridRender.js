import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TomisPanelTable } from 'TomisApp/TomisPanel';
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

const LocationInfoGridRender = props => {
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
            <TomisPanelTable label="Location Information">
                <TomisButtonRaised label="Add Location" onClick={handleAddRow} />
                <TomisTable>
                    <TomisTableHeader columnData={columnData} />
                    <TomisTableBody>
                        {tableData.map((row, idx) =>
                            <TomisTableRow key={idx}>
                                <TomisTableCellEdit
                                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'locationName'))}
                                    isOpen={activeCell === getCellRowColmId(idx, 'locationName')}
                                    onRequestClose={handleRequestClose}
                                >
                                    <TomisTextFieldSingleLine
                                        placeholder="Enter an Airport Code,..."
                                        value={row['locationName']}
                                        required={true}
                                        reportToHoc={handleUpdateData.bind(null, idx, 'locationName')}
                                    />
                                </TomisTableCellEdit>

                                <TomisTableCellEdit
                                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'city'))}
                                    isOpen={activeCell === getCellRowColmId(idx, 'city')}
                                    onRequestClose={handleRequestClose}
                                >
                                    <TomisAutocomplete
                                        placeholder="Select City"
                                        required={true}
                                        label="City"
                                        value={row['city']}
                                        reportToHoc={handleUpdateDataLov.bind(this, idx, 'city')}
                                        options={subcategoryLovValues}
                                    />
                                </TomisTableCellEdit>
                                <TomisTableCellEdit
                                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'state'))}
                                    isOpen={activeCell === getCellRowColmId(idx, 'state')}
                                    onRequestClose={handleRequestClose}
                                >
                                    <TomisAutocomplete
                                        placeholder="Select State"
                                        required={true}
                                        label="State"
                                        value={row['state']}
                                        reportToHoc={handleUpdateDataLov.bind(this, idx, 'state')}
                                        options={subcategoryLovValues}
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
            </TomisPanelTable>
        </div>
    );
};

export default LocationInfoGridRender;
