import React from 'react';
import TextField from 'material-ui/TextField';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import FormControl from 'material-ui/Form/FormControl';

const styleSheet = createStyleSheet(theme => ({
    root: {
        pointerEvents: 'none'
    }
}));

const TomisTextFieldReadOnly = props => {
    const { classes: { root: clsRoot }, value, ...other } = props;
    return (
        <FormControl margin="dense">
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
