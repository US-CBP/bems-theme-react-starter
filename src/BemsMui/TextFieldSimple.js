import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { getDisplayVals, handleCloneCheckboxClick, textFieldSimpleStyleSheet, cloneableStyleSheet } from 'app/helpers/tomisMuiStylesheets';
import IconButton from 'material-ui/IconButton';
import FontIcon from './FontIcon';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import CloneableInputRender from './CloneableInputRender';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Checkbox from 'material-ui/Checkbox';
import cx from 'classnames';

const defaultProps = {
    inputFieldProps: {
        id: `tfs-${new Date().getTime()}`,
        label: 'TFS Field',
        placeholder: 'TFS Placeholder',
        helperText: null,
        disabled: false,
        readOnly: false
    },
    isCloneable: false,
    disabledClone: false,
    required: true
};

const propTypes = {
    classes: PropTypes.object.isRequired
};

class TextFieldSimple extends Component {
    state = {
        payload: {
            val: null
        }
    };

    handleCloneCheckboxChange = (evt, value) => {
        console.log('handleCloneCheckboxChange called, this.state, evt, value=', this.state, evt, value);
        // this.setState({ isCloneChecked: !this.state.isCloneChecked });
    };

    handleInputChange = val => {
        console.log('handleInputChange val=', val);
        // this.setState({ payload: { name: _get(val, 'description', null), val: _get(val, 'code', null) } });
    };

    render() {
        const { handleInputChange, handleCloneCheckboxChange } = this;
        const { payload: { val } } = this.state;
        const {
            classes: renderClasses,
            classes: { formControl: clsFormControl, input: clsInput, inputLabel: clsInputLabel, inputLabelCloneable: clsInputLabelCloneable, formHelperText: clsFormHelperText },
            inputFieldProps,
            isCloneable,
            disabledClone,
            required
        } = this.props;
        const { id, label, placeholder, disabled, readOnly, helperText } = inputFieldProps;
        const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals({ disabled, isCloneable, disabledClone, readOnly, placeholder });
        return (
            <FormControl className={clsFormControl} margin="dense">
                <InputLabel className={cx({ [clsInputLabelCloneable]: isDisplayCloneable, [clsInputLabel]: !isDisplayCloneable })} htmlFor={id} required={required} shrink={true}>
                    {label}
                </InputLabel>
                <Input
                    className={clsInput}
                    id={id}
                    component={withStyles(textFieldSimpleStyleSheet)(_InputRender)}
                    onChange={handleInputChange}
                    disableUnderline={readOnly}
                    disabled={disabled}
                    value={val}
                    placeholder={placeholder}
                    inputProps={{
                        readOnly,
                        isCloneable,
                        disabledClone,
                        renderClasses,
                        onDelayCloneCheckboxChange: handleCloneCheckboxChange
                    }}
                />
                <FormHelperText className={clsFormHelperText}>
                    {helperText}
                </FormHelperText>
            </FormControl>
        );
    }
}
TextFieldSimple.defaultProps = defaultProps;
TextFieldSimple.propTypes = propTypes;
export default withStyles(cloneableStyleSheet)(TextFieldSimple);

/**
 * Material-UI Input requires the use of ref.  Refs are not allowed in stateless functional components.
 * As such, we must, unfortunately, use a class for the Input component.
 */
class _InputRender extends Component {
    render() {
        const { handleClickIcon } = this;
        const {
            value,
            onChange,
            readOnly,
            isCloneable,
            disabledClone,
            renderClasses: { checkbox: clsCheckbox, checkboxDisabled: clsCheckboxDisabled },
            classes: { inpBase: clsInpBase, inpSpinner: clsInpSpinner, inpReadOnly: clsInpReadOnly, inpCloneable: clsInpCloneable },
            onDelayCloneCheckboxChange
        } = this.props;
        const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals(this.props);

        return (
            <CloneableInputRender>
                {isDisplayCloneable &&
                    <Checkbox
                        className={cx(clsCheckbox, { [clsCheckboxDisabled]: isDisabled || disabledClone })}
                        onChange={handleCloneCheckboxClick.bind(null, onDelayCloneCheckboxChange)}
                        disabled={isDisabled || disabledClone}
                    />}
                <input
                    className={cx(clsInpBase, {
                        [clsInpCloneable]: isDisplayCloneable,
                        [clsCheckboxDisabled]: isDisabled || disabledClone,
                        [clsInpReadOnly]: readOnly
                    })}
                    disabled={isDisabled}
                    placeholder={displayPlaceholder}
                />
            </CloneableInputRender>
        );
    }
}
