import React from 'react';
import TextField from 'material-ui/TextField';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet(theme => ({
    root: {
        pointerEvents: 'none'
    }
}));

const TomisTextFieldReadOnly = props => {
    const { classes: { root: clsRoot }, value, ...other } = props;
    return (
        <TextField
            className={clsRoot}
            fullWidth={true}
            defaultValue={value}
            onChange={() => {}}
            {...other}
            inputProps={{ readOnly: true }}
            InputProps={{ disableUnderline: true }}
        />
    );
};

export default withStyles(styleSheet)(TomisTextFieldReadOnly);
