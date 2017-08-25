// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import withStyles from 'material-ui/styles/withStyles';
import { getDisplayVals, autoCompleteStyles } from 'app/helpers/tomisMuiStylesheets';
import FormControl from 'material-ui/Form/FormControl';
import InputLabel from 'material-ui/Input/InputLabel';
import Input from 'material-ui/Input';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import TomisFontIcon from './TomisFontIcon';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import cx from 'classnames';
import autocompleteMenuRenderer from 'TomisApp/helpers/autocompleteMenuRenderer';
import { bigLov, smallLov } from 'globalJs/testData';

const defaultProps = {
    id: `ac-${new Date().getTime()}`,
    label: null,
    placeholder: null,
    helperText: null,
    disabled: false,
    isCloneable: false,
    disabledClone: false,
    required: false,
    options: []
};

const initState = props => {
    const { value } = props;
    return {
        payload: {
            value: props.value || '',
            name: null,
            isCloneChecked: true
        },
        shadowVal: props.value
    };
};

const propTypes = {
    classes: PropTypes.object.isRequired
};

class TomisAutocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = initState(props);
    }
    anchorEl = null;

    handleCloneCheckboxChange = (evt, isCloneChecked) => {
        evt.stopPropagation();
        this.state.payload.isCloneChecked = isCloneChecked;
        this.setState(this.state);
    };

    handleLovChange = value => {
        this.state.payload = { name: _get(value, 'description', ''), value: _get(value, 'code', null), isCloneChecked: this.state.payload.isCloneChecked };
        this.state.shadowVal = this.state.payload.name;
        this.setState(this.state, () => {
            const { reportToHoc } = this.props;
            if (reportToHoc) {
                reportToHoc(this.state.payload);
            }
        });
    };

    render() {
        const { handleCloneCheckboxChange, handleLovChange, anchorEl } = this;
        const { payload: { value, name, isCloneChecked }, shadowVal } = this.state;
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
                input: clsInput,
                underlineCloneable: clsUnderlineCloneable,
                inputMultilineBase: clsInputMultilineBase,
                inputCloneable: clsInputCloneable,
                selectArrow: clsSelectArrow,
                lov: clsLov,
                lovCloneable: clsLovCloneable,
                inputLov: clsInputLov
            },
            isCloneable,
            disabledClone,
            required,
            floatingLabelText,
            hintText,
            error,
            options
        } = this.props;
        const usePlaceholder = placeholder || hintText;
        const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals({
            disabled,
            isCloneable,
            disabledClone,
            readOnly: false,
            placeholder: usePlaceholder
        });
        return (
            <FormControl className={clsFormControl} margin="dense" error={error}>
                {isDisplayCloneable &&
                    <Checkbox
                        className={cx(clsCheckbox, { [clsCheckboxDisabled]: isDisabled || disabledClone })}
                        onChange={handleCloneCheckboxChange}
                        disabled={isDisabled || disabledClone}
                        tabIndex="-1"
                        checked={isCloneChecked || disabledClone}
                    />}
                <InputLabel
                    className={cx({ [clsInputLabelCloneable]: isDisplayCloneable, [clsInputLabel]: !isDisplayCloneable })}
                    htmlFor={id}
                    required={required}
                    disabled={isDisabled}
                >
                    {label || floatingLabelText}
                </InputLabel>
                <Input
                    inputRef={ref => (this.anchorEl = ref)}
                    className={cx(clsInput, {
                        [clsInputCloneable]: isDisplayCloneable,
                        [clsInputLabelCloneable]: isDisplayCloneable,
                        [clsUnderlineCloneable]: isDisplayCloneable
                    })}
                    id={id}
                    disabled={isDisabled}
                    margin="dense"
                    placeholder={displayPlaceholder}
                    fullWidth={true}
                    onChange={() => {}}
                    value={shadowVal}
                    error={error}
                    inputProps={{
                        style: { height: '36px', paddingBottom: 0 }
                    }}
                />
                <Select
                    className={cx(clsInputLov, { [clsLovCloneable]: isDisplayCloneable, [clsLov]: !isDisplayCloneable })}
                    options={options}
                    disabled={isDisabled}
                    onChange={handleLovChange}
                    placeholder={''}
                    value={value}
                    clearable={false}
                    labelKey="description"
                    valueKey="code"
                    arrowRenderer={arrowRenderer.bind(null, clsSelectArrow, isDisabled)}
                    menuRenderer={autocompleteMenuRenderer.bind(null, this)}
                />

                <FormHelperText className={clsFormHelperText}>
                    {helperText}
                </FormHelperText>
            </FormControl>
        );
    }
}

TomisAutocomplete.defaultProps = defaultProps;
TomisAutocomplete.propTypes = propTypes;
export default withStyles(autoCompleteStyles, { name: 'TomisAutocomplete' })(TomisAutocomplete);

const arrowRenderer = (clsSelectArrow, isDisabled, { onMouseDown, isOpen }) => {
    return (
        <IconButton tabIndex="-1" className={clsSelectArrow} disabled={isDisabled} aria-label="Toggle select options display">
            <TomisFontIcon name={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'} />
        </IconButton>
    );
};
