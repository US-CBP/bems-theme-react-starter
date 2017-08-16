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
import ToggleButtons from './ToggleButtons';
import FlexRow from 'app/helpers/FlexRow';

let toggleButtons = undefined;

const initState = props => {
    const { value } = props;
    return {
        payload: {
            value: props.value || '',
            isCloneChecked: true
        }
    };
};

class ToggleButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = initState(props);
    }

    handleCloneCheckboxChange = (evt, isCloneChecked) => {
        evt.stopPropagation();
        this.state.payload.isCloneChecked = isCloneChecked;
        this.setState(this.state);
    };

    render() {
        const { handleCloneCheckboxChange } = this;
        const { payload: { value, isCloneChecked } } = this.state;
        const {
            children,
            classes,
            className: classNameProp,
            name,
            selectedValue,
            isCloneable = false,
            disabledClone,
            handleChange,
            property,
            label,
            disabled,
            classes: {
                buttons: clsButtons,
                buttonsCloneable: clsButtonsCloneable,
                checkbox: clsCheckbox,
                checkboxDisabled: clsCheckboxDisabled,
                inputLabel: clsInputLabel,
                inputLabelCloneable: clsInputLabelCloneable,
                root: clsRoot
            },
            ...other
        } = this.props;
        toggleButtons = [];

        return (
            <div>
                <FlexRow>
                    {isCloneable && <FormLabel>&nbsp;</FormLabel>}
                    <FormLabel className={cx({ [clsInputLabel]: !isCloneable, [clsInputLabelCloneable]: isCloneable })} disabled={disabled}>
                        {label}
                    </FormLabel>
                </FlexRow>
                <FlexRow>
                    {isCloneable &&
                        <Checkbox
                            className={cx(clsCheckbox, { [clsCheckboxDisabled]: disabled || disabledClone })}
                            onChange={handleCloneCheckboxChange}
                            disabled={disabled || disabledClone}
                            tabIndex="-1"
                            checked={isCloneChecked || disabledClone}
                        />}
                    <ToggleButtons
                        onChange={handleChange.bind(null, property)}
                        className={cx({ [clsButtons]: !isCloneable, [clsButtonsCloneable]: isCloneable })}
                        classes={classes}
                        children={children}
                        disabled={disabled}
                        selectedValue={selectedValue}
                    />
                </FlexRow>
            </div>
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
