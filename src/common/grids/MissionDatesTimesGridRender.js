import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TomisPanel } from 'TomisApp/TomisPanel';
import { TomisTable, TomisTableHeader, TomisTableBody, TomisTableRow, TomisTableCell, TomisTableCellEdit } from 'TomisApp/TomisTable';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisButtonIcon from 'TomisApp/TomisButtonIcon';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import TomisButtonRaised from 'TomisApp/TomisButtonRaised';
import TomisTextFieldSingleLine from 'TomisApp/TomisTextFieldSingleLine';
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
            <TomisTable>
                <TomisTableHeader columnData={columnData} />
                <TomisTableBody>
                    {tableData.map((row, idx) =>
                        <TomisTableRow key={idx}>
                            <TomisTableCell>
                                {row.msnNbr}
                            </TomisTableCell>
                            <TomisTableCellEdit
                                onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'msnDesc'))}
                                isOpen={activeCell === getCellRowColmId(idx, 'msnDesc')}
                                onRequestClose={handleRequestClose}
                            >
                                <TomisTextFieldSingleLine placeholder="Type Mission Description" value={row['msnDesc']} reportToHoc={handleUpdateData.bind(null, idx, 'msnDesc')} />
                            </TomisTableCellEdit>
                            <TomisTableCellEdit
                                onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'startDate'))}
                                isOpen={activeCell === getCellRowColmId(idx, 'startDate')}
                                onRequestClose={handleRequestClose}
                            >
                                <TomisDatePicker
                                    placeholder="Select Date"
                                    required={true}
                                    label="Date"
                                    value={row['startDate']}
                                    reportToHoc={handleUpdateDataDate.bind(null, idx, 'startDate')}
                                />
                            </TomisTableCellEdit>

                            <TomisTableCellEdit
                                onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'startTime'))}
                                isOpen={activeCell === getCellRowColmId(idx, 'startTime')}
                                onRequestClose={handleRequestClose}
                            >
                                <TomisTimeSpinner
                                    placeholder="Type Start Time"
                                    required={true}
                                    value={row['startTime']}
                                    reportToHoc={handleUpdateData.bind(null, idx, 'startTime')}
                                />
                            </TomisTableCellEdit>
                            <TomisTableCellEdit
                                onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'duration'))}
                                isOpen={activeCell === getCellRowColmId(idx, 'duration')}
                                onRequestClose={handleRequestClose}
                            >
                                <TomisDuration placeholder="HH + MM" value={row['duration']} reportToHoc={handleUpdateData.bind(null, idx, 'duration')} />
                            </TomisTableCellEdit>
                            <TomisTableCellEdit
                                onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'endTime'))}
                                isOpen={activeCell === getCellRowColmId(idx, 'endTime')}
                                onRequestClose={handleRequestClose}
                            >
                                <TomisTimeSpinner placeholder="Type End Time" required={true} value={row['endTime']} reportToHoc={handleUpdateData.bind(null, idx, 'endTime')} />
                            </TomisTableCellEdit>
                            <TomisTableCell>
                                <TomisButtonIcon tooltip="Delete Row" onClick={handleDeleteRow.bind(null, idx)}>
                                    {(idx > 0 ? true : false) && <TomisFontIcon name="delete" />}
                                </TomisButtonIcon>
                            </TomisTableCell>
                        </TomisTableRow>
                    )}
                </TomisTableBody>
            </TomisTable>
        </div>
    );
};

export default MissionDatesTimesGridRender;
