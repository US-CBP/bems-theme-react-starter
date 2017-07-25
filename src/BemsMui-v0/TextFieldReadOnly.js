import React from 'react';
import TextField from '../BemsMui/TextField/TextField';

const TextFieldReadOnly = ({ ...props }) => {
    return (
        <TextField value="&nbsp;" floatingLabelText="Floating Label Text" fullWidth={true} {...props} underlineShow={false} inputStyle={{ cursor: 'default' }} readOnly={true} />
    );
};

export default TextFieldReadOnly;
