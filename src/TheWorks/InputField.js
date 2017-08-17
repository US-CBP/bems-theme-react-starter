import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisHeading from 'TomisApp/TomisHeading';
import TomisTextField from 'TomisApp/TomisTextField';

class InputField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Input Field</h2>
                <div style={{ backgroundColor: '#dcdcdc', padding: '5px 20px 5px 20px' }}>
                    <h4>Description</h4>
                    An Input Field also referred to as a Text Field allow users to enter text.
                    <br />
                    <br />
                    <h4>Common Framework Status</h4>
                    Approved
                    <br />
                    <br />
                    <h4>Rules</h4>
                    <ul>
                        <li>Should not exceed one line. Use text area for anything with two or more lines.</li>
                    </ul>
                </div>
                <br />
                <h4>Examples</h4>
                <TomisTextField floatingLabelText="Active Input Field With Default Value" hintText="Type Active Input Field With Default Value" value="Default Value" />
                <TomisTextField floatingLabelText="Active Input Field" hintText="Type Active Input Field" />
                <TomisTextField floatingLabelText="Active Input Field With Help Message" hintText="Type Active Input Field With Message" helperText="My Help Message" />
                <TomisTextField floatingLabelText="Disabled Input Field" hintText="Type Disabled Input Field" value="Cannot Modify" disabled={true} />
                <TomisTextField
                    floatingLabelText="Active Input Field With Error Message"
                    hintText="Type Active Input Field With Error Message"
                    error={true}
                    helperText="This field is required"
                />
            </div>
        );
    }
}

export default InputField;
