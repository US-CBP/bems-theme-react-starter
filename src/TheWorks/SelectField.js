import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import { bigLov, smallLov } from 'globalJs/testData';

class SelectField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Select Field</h2>
                <div style={{ backgroundColor: '#dcdcdc', padding: '5px 20px 5px 20px' }}>
                    <h4>Description</h4>
                    A Select Field also referred to as an LOV or Dropdown represents a control that provides a list/menu of options a user can select from.
                    <br />
                    <br />
                    <h4>Common Framework Status</h4>
                    Approved
                    <br />
                    <br />
                    <h4>Rules</h4>
                    <ul>
                        <li>Only one value can be selected. Use the MultiSelect for multiple selection capability. </li>
                    </ul>
                </div>
                <br />
                <h4>Examples</h4>
                <TomisAutocomplete
                    floatingLabelText="Active Select Field With Default Value"
                    hintText="Select Active Select Field With Default Value"
                    value="two"
                    options={smallLov}
                />
                <TomisAutocomplete floatingLabelText="Active Select Field" hintText="Select Active Select Field" options={bigLov} />
                <TomisAutocomplete
                    floatingLabelText="Active Select Field With Help Message"
                    hintText="Type Active Select Field With Message"
                    helperText="My Help Message"
                    options={smallLov}
                />
                <TomisAutocomplete floatingLabelText="Disabled Select Field" hintText="Type Disabled Select Field" value="two" disabled={true} options={smallLov} />
                <TomisAutocomplete
                    floatingLabelText="Active Select Field With Error Message"
                    hintText="Type Active Select Field With Error Message"
                    error={true}
                    helperText="This field is required"
                    options={smallLov}
                />
            </div>
        );
    }
}

export default SelectField;
