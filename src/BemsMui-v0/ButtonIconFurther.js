import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'BemsMui/FontIcon';

const ButtonIconFurther = ({ ...props }) => {
  const { children } = props;
  return (
    <IconButton tooltip="SVG Icon" tooltipPosition="bottom-center" {...props} style={{ zIndex: 'auto' }}>
      {children ? children : <FontIcon name="home" />}
    </IconButton>
  );
};

export default ButtonIconFurther;
