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
import TomisTimeSpinner from 'TomisApp/TomisTimeSpinner';
import TomisDatePicker from 'TomisApp/TomisDatePicker';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import TomisDuration from 'common/TomisDuration';
import { getCellRowColmId } from 'globalJs/functions';

const MissionDatesTimesGridRender = props => {
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
            <TomisTable columnData={columnData} tableData={tableData}>
                {(row, idx, isView, isEdit) => {
                    return [
                        <TomisTextFieldReadOnly name="msnNbr" />,
                        <TomisTextField placeholder="Type Mission Description" name="msnDesc" reportToHoc={handleUpdateData.bind(null, idx, 'msnDesc')} />,
                        <TomisDatePicker placeholder="Select Date" required={true} label="Date" name="startDate" reportToHoc={handleUpdateDataDate.bind(null, idx, 'startDate')} />,
                        <TomisTimeSpinner placeholder="Type Start Time" required={true} name="startTime" reportToHoc={handleUpdateData.bind(null, idx, 'startTime')} />,
                        <TomisDuration placeholder="HH + MM" name="duration" reportToHoc={handleUpdateData.bind(null, idx, 'duration')} />,
                        <TomisTimeSpinner placeholder="Type End Time" required={true} name="endTime" reportToHoc={handleUpdateData.bind(null, idx, 'endTime')} />,
                        isView && idx > 0
                            ? <TomisButtonIcon tooltip="Delete Row" onClick={handleDeleteRow.bind(null, idx)}>
                                  <TomisFontIcon name="delete" />
                              </TomisButtonIcon>
                            : <TomisTextFieldReadOnly name="blank" />
                    ];
                }}
            </TomisTable>
        </div>
    );
};

export default MissionDatesTimesGridRender;
