// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createStyleSheet from 'material-ui/styles/createStyleSheet';
import withStyles from 'material-ui/styles/withStyles';
import Button from 'material-ui/Button';
import CheckBoxOutlineBlankIcon from 'material-ui/svg-icons/check-box-outline-blank';
import CheckBoxIcon from 'material-ui/svg-icons/check-box';

export const styleSheet = createStyleSheet('MuiSwitchButtonBase', {
    root: {
        display: 'inline-flex',
        alignItems: 'center',
        transition: 'none'
    },
    input: {
        cursor: 'inherit',
        position: 'absolute',
        opacity: 0,
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        margin: 0,
        padding: 0
    }
});

export default function createSwitchButton({ inputType = 'checkbox', styleSheet: switchButtonStyleSheet } = {}) {
    /**
   * @ignore - internal component.
   */
    class SwitchButtonBase extends Component {
        static defaultProps = {
            disableRipple: false
        };

        state = {};

        componentWillMount() {
            const { props } = this;

            this.isControlled = props.checked !== undefined;

            if (!this.isControlled) {
                // not controlled, use internal state
                this.setState({
                    checked: props.defaultChecked !== undefined ? props.defaultChecked : false
                });
            }
        }

        input = null;
        button = null;
        isControlled = null;

        handleInputChange = event => {
            let newChecked;

            if (this.isControlled) {
                newChecked = !this.props.checked;
            } else {
                newChecked = !this.state.checked;
                if (this.input && this.input.checked !== newChecked) {
                    this.input.checked = newChecked;
                }
                this.setState({ checked: !this.state.checked });
            }

            if (this.props.onChange) {
                this.props.onChange(event, newChecked);
            }
        };

        render() {
            const {
                checked: checkedProp,
                classes,
                className: classNameProp,
                checkedClassName,
                disabled,
                disabledClassName,
                checkedDisabledClassName,
                icon: iconProp,
                inputProps,
                inputRef,
                name,
                onChange,
                tabIndex,
                value,
                label,
                ...other
            } = this.props;

            const checked = this.isControlled ? checkedProp : this.state.checked;
            console.log('SwitchButtonBase, checked=', checked);
            const className = classNames(classes.root, {
                [classNames(classes.default, classNameProp)]: !checked,
                [classNames(classes.checked, checkedClassName)]: checked,
                [classNames(classes.disabled, disabledClassName)]: disabled
            });

            return (
                <Button data-mui-test="SwitchButtonBase" raised={true} component="span" className={className} disabled={disabled} tabIndex={null} role={undefined} {...other}>
                    {label}
                    <input
                        ref={node => {
                            this.input = node;
                            if (inputRef) {
                                inputRef(node);
                            }
                        }}
                        type={inputType}
                        name={name}
                        checked={this.isControlled ? checkedProp : undefined}
                        onChange={this.handleInputChange}
                        className={classes.input}
                        disabled={disabled}
                        tabIndex={tabIndex}
                        value={value}
                        {...inputProps}
                    />
                </Button>
            );
        }
    }

    // NB: If changed, please update Checkbox, Switch and Radio
    // so that the API documentation is updated.
    SwitchButtonBase.propTypes = {
        /**
     * If `true`, the component appears selected.
     */
        checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        /**
     * The CSS class name of the root element when checked.
     */
        checkedClassName: PropTypes.string,
        /**
     * Useful to extend the style applied to components.
     */
        classes: PropTypes.object.isRequired,
        /**
     * @ignore
     */
        className: PropTypes.string,
        /**
     * @ignore
     */
        defaultChecked: PropTypes.bool,
        /**
     * If `true`, the switch will be disabled.
     */
        disabled: PropTypes.bool,
        /**
     * The CSS class name of the root element when disabled.
     */
        disabledClassName: PropTypes.string,
        /**
     * If `true`, the ripple will be disabled.
     */
        disableRipple: PropTypes.bool,
        /**
     * Properties applied to the `input` element.
     */
        inputProps: PropTypes.object,
        /**
     * Use that property to pass a ref callback to the native input component.
     */
        inputRef: PropTypes.func,
        /*
     * @ignore
     */
        name: PropTypes.string,
        /**
     * Callback fired when the  is changed.
     *
     * @param {object} event The event source of the callback
     * @param {boolean} checked The `checked` value of the switch
     */
        onChange: PropTypes.func,
        /**
     * @ignore
     */
        tabIndex: PropTypes.string,
        /**
     * The value of the component.
     */
        value: PropTypes.string
    };

    return withStyles([switchButtonStyleSheet, styleSheet])(SwitchButtonBase);
}
