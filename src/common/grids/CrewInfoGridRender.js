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

const CrewInfoGridRender = props => {
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
        subcategoryLovValues,
        crewNameLov
    } = props;
    return (
        <div className="flex-row row-spacer-24">
            <TomisPanelTable label="Crew Information">
                <TomisButtonRaised label="Add Crew" onClick={handleAddRow} />
                <TomisTable>
                    <TomisTableHeader columnData={columnData} />
                    <TomisTableBody>
                        {tableData.map((row, idx) =>
                            <TomisTableRow key={idx}>
                                {!idx &&
                                    <TomisTableCell>
                                        <TomisFontIcon name="check" />
                                    </TomisTableCell>}
                                {!!idx &&
                                    <TomisTableCellEdit
                                        onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'pic'))}
                                        isOpen={activeCell === getCellRowColmId(idx, 'pic')}
                                        onRequestClose={handleRequestClose}
                                    >
                                        <TomisAutocomplete
                                            placeholder="Select Role"
                                            required={true}
                                            label="Role"
                                            value={row['pic']}
                                            reportToHoc={handleUpdateDataLov.bind(this, idx, 'pic')}
                                            options={subcategoryLovValues}
                                        />
                                    </TomisTableCellEdit>}
                                {!idx &&
                                    <TomisTableCell>
                                        {crewNameLov[0]}
                                    </TomisTableCell>}
                                {!!idx &&
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
                                    </TomisTableCellEdit>}
                                <TomisTableCellEdit
                                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'role'))}
                                    isOpen={activeCell === getCellRowColmId(idx, 'role')}
                                    onRequestClose={handleRequestClose}
                                >
                                    <TomisTextFieldSingleLine placeholder="Type role" required={true} value={row['role']} reportToHoc={handleUpdateData.bind(null, idx, 'role')} />
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

export default CrewInfoGridRender;
