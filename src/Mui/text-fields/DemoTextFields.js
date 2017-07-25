import React from 'react';
import ComposedTextField from './ComposedTextField';
import Inputs from './Inputs';
import TextFieldMargins from './Inputs';
import TextFields from './TextFields';

const DemoTextFields = () => {
    return (
        <div>
            <br />
            <ComposedTextField />
            <br /> <br />
            <Inputs />
            <br /> <br />
            <TextFieldMargins />
            <br /> <br />
            <TextFields />
        </div>
    );
};

export default DemoTextFields;
