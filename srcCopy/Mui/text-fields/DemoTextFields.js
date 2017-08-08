import React from 'react';
import ComposedTextField from './ComposedTextField';
import Inputs from './Inputs';
import TextFieldMargins from './Inputs';
import TextFields from './TextFields';

const DemoTextFields = () => {
    return (
        <div>
            <br />
            <h6>Composed Text Field</h6>
            <ComposedTextField />
            <br /> <br />
            <h6>Inputs</h6>
            <Inputs />
            <br /> <br />
            <h6>Field Margins</h6>
            <TextFieldMargins />
            <br /> <br />
            <h6>Text Fields</h6>
            <TextFields />
        </div>
    );
};

export default DemoTextFields;
