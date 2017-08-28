import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TomisPanel } from 'TomisApp/TomisPanel';
import { TomisTable } from 'TomisApp/TomisTable';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisButtonIcon from 'TomisApp/TomisButtonIcon';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import TomisButtonRaised from 'TomisApp/TomisButtonRaised';
import TomisTextField from 'TomisApp/TomisTextField';
import TomisTextFieldReadOnly from 'TomisApp/TomisTextFieldReadOnly';
import TomisDatePicker from 'TomisApp/TomisDatePicker';
import TomisTimeSpinner from 'TomisApp/TomisTimeSpinner';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import TomisDuration from 'common/TomisDuration';
import { getCellRowColmId } from 'globalJs/functions';

const MissionDatesTimesUasFedGridRender = props => {
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
            <TomisPanel label="Mission Dates and Times">
                <TomisButtonRaised label="Add Mission" onClick={handleAddRow} />
                <TomisTable columnData={columnData} tableData={tableData}>
                    {(row, idx, isView, isEdit) => {
                        return [
                            row.draggable
                                ? <TomisButtonIcon>
                                      <TomisFontIcon name="drag_handle" />
                                  </TomisButtonIcon>
                                : <TomisTextFieldReadOnly name="blank" />,
                            <TomisTextField placeholder="Site Type" name="siteType" reportToHoc={handleUpdateData.bind(null, idx, 'siteType')} />,
                            <TomisAutocomplete
                                placeholder="Site Name"
                                required={true}
                                label="Site Name"
                                name="siteName"
                                reportToHoc={handleUpdateDataLov.bind(this, idx, 'siteName')}
                                options={subcategoryLovValues}
                            />,
                            <TomisDatePicker
                                placeholder="Date (Zulu)"
                                required={true}
                                label="Date (Zulu)"
                                name="date"
                                reportToHoc={handleUpdateDataDate.bind(null, idx, 'date')}
                            />,
                            <TomisTimeSpinner placeholder="Time (Zulu)" required={true} name="time" reportToHoc={handleUpdateData.bind(null, idx, 'time')} />,
                            <TomisDuration placeholder="HH + MM" required={true} name="duration" reportToHoc={handleUpdateData.bind(null, idx, 'duration')} />,
                            isView && idx > 0
                                ? <TomisButtonIcon onClick={handleDeleteRow.bind(null, idx)}>
                                      <TomisFontIcon name="delete" />
                                  </TomisButtonIcon>
                                : <TomisTextFieldReadOnly name="blank" />
                        ];
                    }}
                </TomisTable>
            </TomisPanel>
        </div>
    );
};

export default MissionDatesTimesUasFedGridRender;
