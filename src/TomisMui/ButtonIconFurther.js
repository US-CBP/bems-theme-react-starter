import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const ButtonIconFurther = ({ ...props }) => {
  const { children } = props;
  return (
    <IconButton tooltip="SVG Icon" tooltipPosition="bottom-center" {...props} style={{ zIndex: 'auto' }}>
      {children ? children : <ActionHome />}
    </IconButton>
  );
};

export default ButtonIconFurther;
