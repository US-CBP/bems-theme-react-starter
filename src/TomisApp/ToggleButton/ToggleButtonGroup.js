// @flow weak

import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import cx from 'classnames';
=======
import classNames from 'classnames';
>>>>>>> b7008f2517e2aaccbd2442a02b2221c0e8392750
import { toggleButtonGroupStyleSheet } from 'app/helpers/tomisMuiStylesheets';
import withStyles from 'material-ui/styles/withStyles';
import FormGroup from 'material-ui/Form/FormGroup';
import FormLabel from 'material-ui/Form/FormLabel';
import Typography from 'material-ui/Typography';
import Checkbox from 'material-ui/Checkbox';

let toggleButtons = undefined;

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

class ToggleButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = initState(props);
    }

    handleToggleButtonClick = event => {
        if (this.props.onChange) {
            this.props.onChange(event, event.target.value);
        }
    };

    handleCloneCheckboxChange = (evt, isCloneChecked) => {
        this.state.payload.isCloneChecked = isCloneChecked;
        this.setState(this.state);
    };

    render() {
<<<<<<< HEAD
        const { handleToggleButtonClick, doNothing, handleCloneCheckboxChange } = this;
        const { payload: { value, isCloneChecked } } = this.state;
        const {
            children,
            classes,
            className: classNameProp,
            name,
            selectedValue,
            isCloneable = false,
            disabledClone,
            onChange,
            label,
            disabled,
            classes: { checkbox: clsCheckbox, checkboxDisabled: clsCheckboxDisabled, inputLabel: clsInputLabel, inputLabelCloneable: clsInputLabelCloneable, root: clsRoot },
            ...other
        } = this.props;
        toggleButtons = [];

        return (
            <div>
                <FormLabel className={cx({ [clsInputLabel]: !isCloneable, [clsInputLabelCloneable]: isCloneable })} disabled={disabled}>
                    {label}
                </FormLabel>
                <FormGroup className={cx(clsRoot, classNameProp)} data-mui-test="TomisToggleButtonGroup" role="radiogroup" {...other}>
                    {isCloneable &&
                        <Checkbox
                            className={cx(clsCheckbox, { [clsCheckboxDisabled]: disabled || disabledClone })}
                            onChange={handleCloneCheckboxChange}
                            disabled={disabled || disabledClone}
                            tabIndex="-1"
                            checked={isCloneChecked || disabledClone}
                        />}

                    {Children.map(children, (child, index) => {
                        const selected = selectedValue === child.props.value;
                        return cloneElement(child, {
                            key: index,
                            name,
                            inputRef: node => {
                                toggleButtons.push(node);
                            },
                            checked: selected,
                            onClick: handleToggleButtonClick,
                            disabled: disabled || child.props.disabled
                        });
                    })}
                </FormGroup>
            </div>
=======
        const { handleToggleButtonClick, doNothing } = this;
        const { children, classes, className: classNameProp, name, selectedValue, onChange, disabled, ...other } = this.props;
        toggleButtons = [];

        return (
            <FormGroup className={classNames(classes.root, classNameProp)} data-mui-test="TomisToggleButtonGroup" role="radiogroup" {...other}>
                {Children.map(children, (child, index) => {
                    const selected = selectedValue === child.props.value;
                    return cloneElement(child, {
                        key: index,
                        name,
                        inputRef: node => {
                            toggleButtons.push(node);
                        },
                        checked: selected,
                        onClick: handleToggleButtonClick,
                        disabled: disabled || child.props.disabled
                    });
                })}
            </FormGroup>
>>>>>>> b7008f2517e2aaccbd2442a02b2221c0e8392750
        );
    }
}

ToggleButtonGroup.propTypes = {
    /**
   * The content of the component.
   */
    children: PropTypes.node,
    /**
   * Useful to extend the style applied to components.
   */
    classes: PropTypes.object.isRequired,
    /**
   * @ignore
   */
    className: PropTypes.string,
    /**
   * The name used to reference the value of the control.
   */
    name: PropTypes.string,
    /**
   * @ignore
   */
    onBlur: PropTypes.func,
    /**
   * Callback fired when a radio button is selected.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} checked The `checked` value of the switch
   */
    onChange: PropTypes.func,
    /**
   * @ignore
   */
    onKeyDown: PropTypes.func,
    /**
   * Value of the selected radio button
   */
    selectedValue: PropTypes.string
};

export default withStyles(toggleButtonGroupStyleSheet)(ToggleButtonGroup);
