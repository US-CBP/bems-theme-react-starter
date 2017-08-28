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
                <TomisTable columnData={columnData} tableData={tableData}>
                    {(row, idx, isView, isEdit) => {
                        return [
                            <TomisTextField
                                placeholder="Enter an Airport Code,..."
                                name="locationName"
                                required={true}
                                reportToHoc={handleUpdateData.bind(null, idx, 'locationName')}
                            />,
                            <TomisAutocomplete
                                placeholder="Select City"
                                required={true}
                                label="City"
                                name="city"
                                reportToHoc={handleUpdateDataLov.bind(this, idx, 'city')}
                                options={subcategoryLovValues}
                            />,
                            <TomisAutocomplete
                                placeholder="Select State"
                                required={true}
                                label="State"
                                name="state"
                                reportToHoc={handleUpdateDataLov.bind(this, idx, 'state')}
                                options={subcategoryLovValues}
                            />,
                            isEdit
                                ? false
                                : <TomisButtonIcon onClick={handleDeleteRow.bind(null, 0)}>
                                      <TomisFontIcon name="delete" />
                                  </TomisButtonIcon>
                        ];
                    }}
                </TomisTable>
            </TomisPanelTable>
        </div>
    );
};

export default LocationInfoGridRender;
