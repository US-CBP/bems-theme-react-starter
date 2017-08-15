import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TomisPanel } from 'TomisApp/TomisPanel';
import { TomisTable, TomisTableHeader, TomisTableBody, TomisTableRow, TomisTableCell, TomisTableCellEdit } from 'TomisApp/TomisTable';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisButtonIcon from 'TomisApp/TomisButtonIcon';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import TomisButtonRaised from 'TomisApp/TomisButtonRaised';
import TomisTextFieldSingleLine from 'TomisApp/TomisTextFieldSingleLine';
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
            <TomisPanel label="Crew Information">
                <TomisButtonRaised label="Add Crew" onClick={handleAddRow} />
                <TomisTable>
                    <TomisTableHeader columnData={columnData} />
                    <TomisTableBody>
                        {tableData.map((row, idx) =>
                            <TomisTableRow key={idx}>
                                <TomisTableCell>
                                    {row.draggable && <TomisFontIcon name="drag_handle" />}
                                </TomisTableCell>
                                <TomisTableCellEdit
                                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'siteType'))}
                                    isOpen={activeCell === getCellRowColmId(idx, 'siteType')}
                                    onRequestClose={handleRequestClose}
                                >
                                    <TomisTextFieldSingleLine placeholder="Site Type" value={row['siteType']} reportToHoc={handleUpdateData.bind(null, idx, 'siteType')} />
                                </TomisTableCellEdit>
                                <TomisTableCellEdit
                                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'siteName'))}
                                    isOpen={activeCell === getCellRowColmId(idx, 'siteName')}
                                    onRequestClose={handleRequestClose}
                                >
                                    <TomisAutocomplete
                                        placeholder="Site Name"
                                        required={true}
                                        label="Site Name"
                                        value={row['siteName']}
                                        reportToHoc={handleUpdateDataLov.bind(this, idx, 'siteName')}
                                        options={subcategoryLovValues}
                                    />
                                </TomisTableCellEdit>
                                <TomisTableCellEdit
                                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'date'))}
                                    isOpen={activeCell === getCellRowColmId(idx, 'date')}
                                    onRequestClose={handleRequestClose}
                                >
                                    <TomisDatePicker
                                        placeholder="Date (Zulu)"
                                        required={true}
                                        label="Date (Zulu)"
                                        value={row['date']}
                                        reportToHoc={handleUpdateDataDate.bind(null, idx, 'date')}
                                    />
                                </TomisTableCellEdit>
                                <TomisTableCellEdit
                                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'time'))}
                                    isOpen={activeCell === getCellRowColmId(idx, 'time')}
                                    onRequestClose={handleRequestClose}
                                >
                                    <TomisTimeSpinner placeholder="Time (Zulu)" required={true} value={row['time']} reportToHoc={handleUpdateData.bind(null, idx, 'time')} />
                                </TomisTableCellEdit>
                                <TomisTableCellEdit
                                    onRequestOpen={handleClickTableCell.bind(null, getCellRowColmId(idx, 'status'))}
                                    isOpen={activeCell === getCellRowColmId(idx, 'status')}
                                    onRequestClose={handleRequestClose}
                                >
                                    <TomisDuration placeholder="HH + MM" required={true} value={row['duration']} reportToHoc={handleUpdateData.bind(null, idx, 'duration')} />
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
            </TomisPanel>
        </div>
    );
};

export default MissionDatesTimesUasFedGridRender;
