import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TomisPanelTable } from 'TomisApp/TomisPanel';
import { TomisTable } from 'TomisApp/TomisTable';
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
                <TomisTable columnData={columnData} tableData={tableData}>
                    {(row, idx, isView, isEdit) => {
                        return [
                            <TomisAutocomplete
                                placeholder="Select Name"
                                label="Name"
                                name="name"
                                reportToHoc={handleUpdateDataLov.bind(this, idx, 'name')}
                                options={subcategoryLovValues}
                            />,
                            isEdit
                                ? false
                                : <TomisButtonIcon tooltip="Delete Row" onClick={handleDeleteRow.bind(null, idx)}>
                                      <TomisFontIcon name="delete" />
                                  </TomisButtonIcon>
                        ];
                    }}
                </TomisTable>
            </TomisPanelTable>
        </div>
    );
};

AgentInfoGridRender.propTypes = propTypes;
export default AgentInfoGridRender;
