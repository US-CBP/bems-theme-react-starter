import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TomisPanelTable } from 'TomisApp/TomisPanel';
import { TomisTable, TomisTableHeader, TomisTableBody, TomisTableRow, TomisTableCell, TomisTableCellEdit } from 'TomisApp/TomisTable';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisButtonIcon from 'TomisApp/TomisButtonIcon';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import TomisButtonRaised from 'TomisApp/TomisButtonRaised';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import { getCellRowColmId } from 'globalJs/functions';

const propTypes = {
    tableData: PropTypes.array.isRequired,
    handleAddRow: PropTypes.func.isRequired,
    handleDeleteRow: PropTypes.func.isRequired,
    handleUpdateDataLov: PropTypes.func.isRequired
};

const AgentInfoGridRender = props => {
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
            <TomisPanelTable label="Agent Information">
                <TomisButtonRaised label="Add Agent" onClick={handleAddRow} />
                <TomisTable>
                    <TomisTableHeader columnData={columnData} />
                    <TomisTableBody>
                        {tableData.map((row, idx) =>
                            <TomisTableRow key={idx}>
                                <TomisTableCellEdit
                                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'name'))}
                                    isOpen={activeCell === getCellRowColmId(idx, 'name')}
                                    onRequestClose={handleRequestClose}
                                >
                                    <TomisAutocomplete
                                        placeholder="Select Name"
                                        label="Name"
                                        value={row['name']}
                                        reportToHoc={handleUpdateDataLov.bind(this, idx, 'name')}
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

AgentInfoGridRender.propTypes = propTypes;
export default AgentInfoGridRender;
