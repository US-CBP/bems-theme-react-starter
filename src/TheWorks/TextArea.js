import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisTextFieldMultiLine from 'TomisApp/TomisTextFieldMultiLine';

class TextArea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Text Area</h2>
                <div style={{ backgroundColor: '#dcdcdc', padding: '5px 20px 5px 20px' }}>
                    <h4>Description</h4>
                    A Text Area also referred to as a Text Field allow users to enter text.
                    <br />
                    <br />
                    <h4>Common Framework Status</h4>
                    Approved
                    <br />
                    <br />
                    <h4>Rules</h4>
                    <ul>
                        <li>Use Text Area for large amount of text exceeding one line.</li>
                        <li>Only display character count if there is a character limit.</li>
                    </ul>
                </div>
                <br />
                <h4>Examples</h4>
                <TomisTextFieldMultiLine floatingLabelText="Active Text Area With Default Value" hintText="Type Active Text Area With Default Value" value="Default Value" />
                <TomisTextFieldMultiLine floatingLabelText="Active Text Area" hintText="Type Active Text Area" />
                <TomisTextFieldMultiLine floatingLabelText="Active Text Area With Help Message" hintText="Type Active Text Area With Message" helperText="My Help Message" />
                <TomisTextFieldMultiLine floatingLabelText="Disabled Text Area" hintText="Type Disabled Text Area" value="Cannot Modify" disabled={true} />
                <TomisTextFieldMultiLine
                    floatingLabelText="Active Text Area With Error Message"
                    hintText="Type Active Text Area With Error Message"
                    error={true}
                    helperText="This field is required"
                />
            </div>
        );
    }
}

export default TextArea;
