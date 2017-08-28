import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TomisPanel } from 'TomisApp/TomisPanel';
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

const TableExampleBody = props => {
    const { columnData, tableData, handleAddRow, handleDeleteRow, handleUpdateData, handleUpdateDataLov, handleUpdateDataDate, subcategoryLovValues } = props;
    return (
        <div className="flex-row row-spacer-24">
            <TomisPanel label="My Table Panel Example">
                <TomisButtonRaised label="Add Row" onClick={handleAddRow} />
                <TomisTable columnData={columnData} tableData={tableData}>
                    {(row, idx, isView, isEdit) => {
                        return [
                            isEdit ? false : <TomisCheckbox name="primary" />,
                            <TomisDatePicker
                                placeholder="Select Date"
                                required={true}
                                label="Date"
                                name={'departureDt'}
                                onModify={handleUpdateDataDate.bind(null, idx, 'departureDt')}
                            />,
                            <TomisAutocomplete
                                placeholder="Select Name"
                                required={true}
                                label="Name"
                                name="name"
                                onModify={handleUpdateDataLov.bind(null, idx, 'name')}
                                options={subcategoryLovValues}
                            />,
                            <TomisDuration placeholder="Sample Justification" required={true} name="status" onModify={handleUpdateData.bind(null, idx, 'status')} />,
                            isEdit
                                ? false
                                : <TomisButtonIcon onClick={handleDeleteRow.bind(null, idx)}>
                                      <TomisFontIcon name="delete" />
                                  </TomisButtonIcon>
                        ];
                    }}
                </TomisTable>
            </TomisPanel>
        </div>
    );
};

export default TableExampleBody;
