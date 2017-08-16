import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { getDisplayVals, tomisDurationStyleSheet } from 'app/helpers/tomisMuiStylesheets';
import FormControl from 'material-ui/Form/FormControl';
import FormLabel from 'material-ui/Form/FormLabel';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Typography from 'material-ui/Typography';
import FlexRow from 'app/helpers/FlexRow';
import cx from 'classnames';

const initState = props => {
    const { value } = props;
    return {
        payload: {
            val: props.value,
            isCloneChecked: true
        }
    };
};

const defaultProps = {
    id: `tduration-${new Date().getTime()}`,
    label: 'Duration',
    placeholder: ' ',
    helperText: null,
    disabled: false,
    isCloneable: false,
    disabledClone: false,
    required: false
};

const propTypes = {};

class TomisDuration extends Component {
    constructor(props) {
        super(props);
        this.state = initState(props);
    }

    render() {
        const { handleInputChange, handleCloneCheckboxChange, handleInputBlur, handleInputFocus } = this;
        const { payload: { val, isCloneChecked }, currentCharCount, isFocused } = this.state;
        const {
            id,
            label,
            placeholder,
            disabled,
            helperText,
            classes: {
                formControl: clsFormControl,
                inputLabel: clsInputLabel,
                formHelperTextCloneable: clsFormHelperTextCloneable,
                checkbox: clsCheckbox,
                checkboxDisabled: clsCheckboxDisabled,
                header: clsHeader,
                headerCloneable: clsHeaderCloneable,
                inputBase: clsInputBase,
                inputCloneable: clsInputCloneable,
                inputDisabled: clsInputDisabled,
                plusSign: clsPlusSign,
                readOnly: clsReadOnly,
                textFieldRoot: clsTextFieldRoot
            },
            isCloneable,
            isReadOnly,
            disabledClone,
            required
        } = this.props;
        const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals({
            disabled,
            isCloneable,
            disabledClone,
            readOnly: isReadOnly,
            placeholder
        });
        return (
            <FormControl className={cx(clsFormControl, { [clsReadOnly]: !!isReadOnly })} margin="dense">
                <FormLabel disabled={isDisabled}>
                    <Typography className={cx({ [clsHeader]: !isDisplayCloneable, [clsHeaderCloneable]: isDisplayCloneable })} align="center">
                        Duration{required && <span>*</span>}
                    </Typography>
                </FormLabel>
                <FlexRow>
                    {isDisplayCloneable &&
                        <Checkbox
                            className={cx(clsCheckbox, { [clsCheckboxDisabled]: isDisabled || disabledClone })}
                            onChange={handleCloneCheckboxChange}
                            disabled={isDisabled || disabledClone}
                            tabIndex="-1"
                            checked={isCloneChecked || disabledClone}
                        />}
                    <TextField
                        className={clsTextFieldRoot}
                        label="HH"
                        labelClassName={clsInputLabel}
                        placeholder="HH"
                        value="00"
                        margin="dense"
                        disabled={disabled}
                        inputClassName={cx({
                            [clsInputBase]: true,
                            [clsInputDisabled]: isDisabled
                        })}
                        InputProps={{ disableUnderline: !!isReadOnly }}
                    />
                    <div className={cx(clsPlusSign)}>+</div>
                    <TextField
                        className={clsTextFieldRoot}
                        label="MM"
                        labelClassName={clsInputLabel}
                        placeholder="MM"
                        value="00"
                        margin="dense"
                        disabled={disabled}
                        inputClassName={cx({
                            [clsInputBase]: true,
                            [clsInputDisabled]: isDisabled
                        })}
                        InputProps={{ disableUnderline: !!isReadOnly }}
                    />
                </FlexRow>
                <FormHelperText className={cx({ [clsFormHelperTextCloneable]: isDisplayCloneable })}>
                    <span>
                        {helperText}
                    </span>
                </FormHelperText>
            </FormControl>
        );
    }
}

TomisDuration.defaultProps = defaultProps;
TomisDuration.propTypes = propTypes;
export default withStyles(tomisDurationStyleSheet)(TomisDuration);
