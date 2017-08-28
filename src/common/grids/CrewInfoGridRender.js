import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TomisPanelTable } from 'TomisApp/TomisPanel';
import { TomisTable } from 'TomisApp/TomisTable';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisButtonIcon from 'TomisApp/TomisButtonIcon';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import TomisButtonRaised from 'TomisApp/TomisButtonRaised';
import TomisTextField from 'TomisApp/TomisTextField';
import TomisTextFieldReadOnly from 'TomisApp/TomisTextFieldReadOnly';
import TomisDatePicker from 'TomisApp/TomisDatePicker';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import TomisDuration from 'common/TomisDuration';
import { getCellRowColmId } from 'globalJs/functions';

const CrewInfoGridRender = props => {
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
        subcategoryLovValues,
        crewNameLov
    } = props;
    return (
        <div className="flex-row row-spacer-24">
            <TomisPanelTable label="Crew Information">
                <TomisButtonRaised label="Add Crew" onClick={handleAddRow} />
                <TomisTable columnData={columnData} tableData={tableData}>
                    {(row, idx, isView, isEdit) => {
                        return [
                            idx === 0
                                ? isView
                                  ? <TomisButtonIcon>
                                        <TomisFontIcon name="check" />
                                    </TomisButtonIcon>
                                  : false
                                : <TomisAutocomplete
                                      placeholder="Select Role"
                                      required={true}
                                      label="Role"
                                      name="pic"
                                      reportToHoc={handleUpdateDataLov.bind(this, idx, 'pic')}
                                      options={subcategoryLovValues}
                                  />,
                            idx === 0
                                ? isView ? <TomisTextFieldReadOnly name="name" /> : false
                                : <TomisAutocomplete
                                      placeholder="Select Name"
                                      required={true}
                                      label="Name"
                                      name="name"
                                      reportToHoc={handleUpdateDataLov.bind(this, idx, 'name')}
                                      options={subcategoryLovValues}
                                  />,
                            <TomisTextField placeholder="Type role" required={true} name="role" reportToHoc={handleUpdateData.bind(null, idx, 'role')} />,
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

export default CrewInfoGridRender;
