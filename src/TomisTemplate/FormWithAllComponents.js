import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TomisPanel, TomisPanelBody } from 'TomisApp/TomisPanel';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisTextField from 'TomisApp/TomisTextField';
import TomisTextFieldMultiLine from 'TomisApp/TomisTextFieldMultiLine';

class FormWithAllComponents extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TomisPanel label="Panel Section Title">
                    <TomisPanelBody>
                        <div className="flex-row">
                            <div className="flex-2">
                                <TomisAutocomplete floatingLabelText="Any Select Label" />
                            </div>
                            <div className="flex-1">
                                <TomisCheckbox label="Checkbox Label" />
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisTextField floatingLabelText="My Text Label" />
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="flex-1">
                                <TomisTextFieldMultiLine floatingLabelText="My TextArea" />
                            </div>
                        </div>
                    </TomisPanelBody>
                </TomisPanel>
            </div>
        );
    }
}

export default FormWithAllComponents;
