// @flow weak

import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { bemsMuiToggleButtonGroupRenderStyleSheet } from 'globalJs/tomisMuiStylesheets';
import withStyles from 'material-ui/styles/withStyles';
import FormGroup from 'material-ui/Form/FormGroup';

let toggleButtons = undefined;
// class ToggleButtonGroupRender extends Component {
const ToggleButtonGroupRender = props => {
  // render() {
  const { onClick, children, classes, className: classNameProp, name, selectedValue, onChange, disabled, ...other } = props;
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
          onClick: onClick,
          disabled: disabled || child.props.disabled
        });
      })}
    </FormGroup>
  );
  // }
};

export default withStyles(bemsMuiToggleButtonGroupRenderStyleSheet)(ToggleButtonGroupRender);
