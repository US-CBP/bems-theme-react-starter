import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TomisPanelTable } from 'TomisApp/TomisPanel';
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

const CaseInfoGridRender = props => {
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
            <TomisPanelTable label="Case Information">
                <TomisButtonRaised label="Add Case" onClick={handleAddRow} />
                <TomisTable>
                    <TomisTableHeader columnData={columnData} />
                    <TomisTableBody>
                        {tableData.map((row, idx) =>
                            <TomisTableRow key={idx}>
                                <TomisTableCellEdit
                                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'caseNbr'))}
                                    isOpen={activeCell === getCellRowColmId(idx, 'caseNbr')}
                                    onRequestClose={handleRequestClose}
                                >
                                    <TomisTextField placeholder="Type Case #" value={row['caseNbr']} reportToHoc={handleUpdateData.bind(null, idx, 'caseNbr')} />
                                </TomisTableCellEdit>
                                <TomisTableCellEdit
                                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'agentFullName'))}
                                    isOpen={activeCell === getCellRowColmId(idx, 'agentFullName')}
                                    onRequestClose={handleRequestClose}
                                >
                                    <TomisTextField
                                        placeholder="Type Agent Full Name"
                                        value={row['agentFullName']}
                                        reportToHoc={handleUpdateData.bind(null, idx, 'agentFullName')}
                                    />
                                </TomisTableCellEdit>

                                <TomisTableCellEdit
                                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'agentPhoneNbr'))}
                                    isOpen={activeCell === getCellRowColmId(idx, 'agentPhoneNbr')}
                                    onRequestClose={handleRequestClose}
                                >
                                    <TomisTextField placeholder="Type Agent Phone #" value={row['agentPhoneNbr']} reportToHoc={handleUpdateData.bind(null, idx, 'agentPhoneNbr')} />
                                </TomisTableCellEdit>
                                <TomisTableCellEdit
                                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'description'))}
                                    isOpen={activeCell === getCellRowColmId(idx, 'description')}
                                    onRequestClose={handleRequestClose}
                                >
                                    <TomisTextField placeholder="Type Case Description" value={row['description']} reportToHoc={handleUpdateData.bind(null, idx, 'description')} />
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

export default CaseInfoGridRender;
