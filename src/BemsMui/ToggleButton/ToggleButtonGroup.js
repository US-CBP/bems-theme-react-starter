// @flow weak

import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import ToggleButtonGroupRender from './ToggleButtonGroupRender';

class ToggleButtonGroup extends Component {
  handleToggleButtonClick = event => {
    const checked = event.target.checked;
    if (checked && this.props.onChange) {
      this.props.onChange(event, event.target.value);
    }
  };

  render() {
    const { handleToggleButtonClick } = this;
    return <ToggleButtonGroupRender onClick={handleToggleButtonClick} {...this.state} {...this.props} />;
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

export default ToggleButtonGroup;
