import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisHeading from 'TomisApp/TomisHeading';
import TomisInput from 'TomisApp/TomisInput';

class InputField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Input Field</h2>
                <TomisHeading label="Description" />
                <br />
                An Input Field also referred to as a Text Field allow users to enter text.
                <h4>Rules</h4>
                <ul>
                    <li>Should not exceed one line. Use text area for anything with two or more lines.</li>
                </ul>
                <br />
                <h4>Examples</h4>
                <TomisInput floatingLabelText="Active Input Field With Default Value" hintText="Type Active Input Field With Default Value" />
                <TomisInput floatingLabelText="Active Input Field" hintText="Type Active Input Field" />
                <TomisInput floatingLabelText="Active Input Field With Help Message" hintText="Type Active Input Field With Message" />
                <TomisInput floatingLabelText="Disabled Input Field" hintText="Type Active Input Field" disabled={true} />
                <TomisInput floatingLabelText="Active Input Field With Error Message" hintText="Type Active Input Field With Error Message" errorText="This field is required" />
            </div>
        );
    }
}

export default InputField;
