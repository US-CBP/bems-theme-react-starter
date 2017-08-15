import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisDatePicker from 'TomisApp/TomisDatePicker';

class DatePicker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Date Picker</h2>
                <div style={{ backgroundColor: '#dcdcdc', padding: '5px 20px 5px 20px' }}>
                    <h4>Description</h4>
                    An Date Picker also referred to as a Text Field allow users to enter text.
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
                <TomisDatePicker floatingLabelText="Active Date Picker With Default Value" hintText="Type Active Date Picker With Default Value" value="08/14/2017" />
                <TomisDatePicker floatingLabelText="Active Date Picker" hintText="Type Active Date Picker" />
                <TomisDatePicker floatingLabelText="Active Date Picker With Help Message" hintText="Type Active Date Picker With Message" helperText="My Help Message" />
                <TomisDatePicker floatingLabelText="Disabled Date Picker" hintText="Type Disabled Date Picker" disabled={true} />
                <TomisDatePicker
                    floatingLabelText="Active Date Picker With Error Message"
                    hintText="Type Active Date Picker With Error Message"
                    error={true}
                    helperText="This field is required"
                />
            </div>
        );
    }
}

export default DatePicker;
