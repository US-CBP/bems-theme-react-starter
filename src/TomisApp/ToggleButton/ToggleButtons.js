// @flow weak

import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { toggleButtonGroupStyleSheet } from 'app/helpers/tomisMuiStylesheets';
import withStyles from 'material-ui/styles/withStyles';
import FormGroup from 'material-ui/Form/FormGroup';
import FormLabel from 'material-ui/Form/FormLabel';
import Typography from 'material-ui/Typography';
import Checkbox from 'material-ui/Checkbox';
import FlexRow from 'app/helpers/FlexRow';

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

class ToggleButtons extends Component {
    constructor(props) {
        super(props);
        this.state = initState(props);
    }

    handleToggleButtonClick = evt => {
        evt.stopPropagation();
        console.log('ToggleButtons handleToggleButtonsClick this.props=', this.props);
        if (this.props.onChange) {
            this.props.onChange(evt, evt.target.value);
        }
    };

    render() {
        const { handleToggleButtonClick, handleCloneCheckboxChange } = this;
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
            <FormGroup className={cx(clsRoot, classNameProp)} data-mui-test="TomisToggleButtons" role="radiogroup" {...other}>
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
        );
    }
}

ToggleButtons.propTypes = {
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

export default withStyles(toggleButtonGroupStyleSheet)(ToggleButtons);
