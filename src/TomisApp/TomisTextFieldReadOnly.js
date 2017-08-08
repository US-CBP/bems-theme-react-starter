import React from 'react';
import TextField from 'material-ui/TextField';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import FormControl from 'material-ui/Form/FormControl';

const styleSheet = createStyleSheet(theme => ({
    root: {
        pointerEvents: 'none'
    },
    formControl: {
        width: '100%',
        flex: 1
    }
}));

const TomisTextFieldReadOnly = props => {
    const { classes: { root: clsRoot, formControl: clsFormControl }, value, ...other } = props;
    return (
        <FormControl className={clsFormControl} margin="dense">
            <TextField
                className={clsRoot}
                fullWidth={true}
                defaultValue={value}
                onChange={() => {}}
                margin="dense"
                {...other}
                inputProps={{ readOnly: true }}
                InputProps={{ disableUnderline: true }}
            />
        </FormControl>
    );
};

export default withStyles(styleSheet)(TomisTextFieldReadOnly);
