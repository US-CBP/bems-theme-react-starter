import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import { getDisplayVals, cloneableStyles } from 'app/helpers/tomisMuiStylesheets';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import cx from 'classnames';

const defaultProps = {
    id: `tfs-${new Date().getTime()}`,
    label: null,
    placeholder: null,
    helperText: null,
    disabled: false,
    isCloneable: false,
    disabledClone: false,
    required: false,
    multiline: false
};

const initState = props => {
    const { value } = props;
    return {
        payload: {
            value: props.value || '',
            isCloneChecked: true
        },
        currentCharCount: 0,
        isFocused: false
    };
};

const propTypes = {
    classes: PropTypes.object.isRequired
};

class TomisTextFieldSingleLine extends Component {
    constructor(props) {
        super(props);
        this.state = initState(props);
    }

    handleCloneCheckboxChange = (evt, isCloneChecked) => {
        this.state.payload.isCloneChecked = isCloneChecked;
        this.setState(this.state);
    };

    handleInputChange = evt => {
        evt.stopPropagation();
        const val = evt.target.value;
        this.state.payload.value = val;
        this.state.currentCharCount = val.length;
        this.setState(this.state);
    };

    handleInputFocus = evt => {
        evt.stopPropagation();
        evt.preventDefault();
        this.setState({ isFocused: true });
    };

    handleInputBlur = evt => {
        evt.stopPropagation();
        this.setState({ isFocused: false });
    };

    render() {
        const { handleInputChange, handleCloneCheckboxChange, handleInputBlur, handleInputFocus } = this;
        const { payload: { value, isCloneChecked }, currentCharCount, isFocused } = this.state;
        const {
            id,
            label,
            placeholder,
            disabled,
            helperText,
            classes: {
                formControl: clsFormControl,
                inputLabel: clsInputLabel,
                inputLabelCloneable: clsInputLabelCloneable,
                formHelperText: clsFormHelperText,
                checkbox: clsCheckbox,
                checkboxDisabled: clsCheckboxDisabled,
                inputBase: clsInputBase,
                inputBaseMultiLine: clsInputBaseMultiLine,
                inputCloneable: clsInputCloneable,
                inputDisabled: clsInputDisabled,
                readOnly: clsReadOnly
            },
            isCloneable,
            isReadOnly,
            disabledClone,
            required,
            maxLength,
            multiline = false,
            rows,
            rowsMax,
            floatingLabelText,
            hintText,
            error
        } = this.props;
        const usePlaceholder = placeholder || hintText;
        const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals({
            disabled,
            isCloneable,
            disabledClone,
            readOnly: false,
            placeholder: usePlaceholder,
            multiline
        });
        return (
            <FormControl className={cx(clsFormControl, { [clsReadOnly]: !!isReadOnly })} margin="dense" error={error}>
                {isDisplayCloneable &&
                    <Checkbox
                        className={cx(clsCheckbox, { [clsCheckboxDisabled]: isDisabled || disabledClone })}
                        onChange={handleCloneCheckboxChange}
                        disabled={isDisabled || disabledClone}
                        tabIndex="-1"
                        checked={isCloneChecked || disabledClone}
                    />}
                <TextField
                    id={id}
                    label={label || floatingLabelText}
                    labelClassName={cx({ [clsInputLabelCloneable]: isDisplayCloneable, [clsInputLabel]: !isDisplayCloneable })}
                    placeholder={displayPlaceholder}
                    value={value}
                    disabled={isDisabled}
                    margin="dense"
                    fullWidth={true}
                    required={required}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    multiline={multiline}
                    rows={rows}
                    rowsMax={rowsMax}
                    error={error}
                    inputClassName={cx({
                        [clsInputBase]: !multiline,
                        [clsInputCloneable]: isDisplayCloneable,
                        [clsInputDisabled]: isDisabled,
                        [clsInputBaseMultiLine]: multiline
                    })}
                    inputProps={{
                        maxLength,
                        readOnly: !!isReadOnly
                    }}
                    InputLabelProps={{ disabled: isDisabled }}
                    InputProps={{ disableUnderline: !!isReadOnly }}
                />
                <FormHelperText className={clsFormHelperText}>
                    <span>
                        {helperText}
                    </span>
                    {isFocused &&
                        !!maxLength &&
                        <span>
                            {`${currentCharCount}/${maxLength}`}
                        </span>}
                </FormHelperText>
            </FormControl>
        );
    }
}
TomisTextFieldSingleLine.defaultProps = defaultProps;
TomisTextFieldSingleLine.propTypes = propTypes;
export default withStyles(cloneableStyles, { name: 'TomisCloneable' })(TomisTextFieldSingleLine);
