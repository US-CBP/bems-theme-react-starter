import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TomisPanelTable } from 'TomisApp/TomisPanel';
import { TomisTable } from 'TomisApp/TomisTable';
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
                <TomisTable columnData={columnData} tableData={tableData}>
                    {(row, idx, isView, isEdit) => {
                        return [
                            <TomisTextField placeholder="Type Case #" name="caseNbr" reportToHoc={handleUpdateData.bind(null, idx, 'caseNbr')} />,
                            <TomisTextField placeholder="Type Agent Full Name" name="agentFullName" reportToHoc={handleUpdateData.bind(null, idx, 'agentFullName')} />,
                            <TomisTextField placeholder="Type Agent Phone #" name="agentPhoneNbr" reportToHoc={handleUpdateData.bind(null, idx, 'agentPhoneNbr')} />,
                            <TomisTextField placeholder="Type Case Description" name="description" reportToHoc={handleUpdateData.bind(null, idx, 'description')} />,
                            isEdit
                                ? false
                                : <TomisButtonIcon onClick={handleDeleteRow.bind(null, idx)}>
                                      <TomisFontIcon name="delete" />
                                  </TomisButtonIcon>
                        ];
                    }}
                </TomisTable>
            </TomisPanelTable>
        </div>
    );
};

export default CaseInfoGridRender;
