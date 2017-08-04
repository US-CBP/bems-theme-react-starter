// @flow weak

import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { bemsMuiToggleButtonGroupStyleSheet } from 'globalJs/tomisMuiStylesheets';
import withStyles from 'material-ui/styles/withStyles';
import FormGroup from 'material-ui/Form/FormGroup';

let toggleButtons = undefined;

class ToggleButtonGroup extends Component {
  handleToggleButtonClick = event => {
    const checked = event.target.checked;
    if (checked && this.props.onChange) {
      this.props.onChange(event, event.target.value);
    }
  };

  render() {
    const { handleToggleButtonClick } = this;
    const { children, classes, className: classNameProp, name, selectedValue, onChange, disabled, ...other } = this.props;
    toggleButtons = [];

    return (
      <FormGroup className={classNames(classes.root, classNameProp)} data-mui-test="ToggleButtonGroupRender" role="radiogroup" {...other}>
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

export default withStyles(bemsMuiToggleButtonGroupStyleSheet)(ToggleButtonGroup);
