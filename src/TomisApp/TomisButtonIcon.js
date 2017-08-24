//@flow

import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import TomisFontIcon from './TomisFontIcon';

const defaultProps = {
  icon: <TomisFontIcon name="delete" />
};

const propTypes = {
  icon: PropTypes.node.isRequired
};

const TomisButtonIcon = ({ icon, onClick, className = '' }) => {
  return (
    <IconButton tabIndex="-1" onClick={onClick} className={className}>
      {icon}
    </IconButton>
  );
};

TomisButtonIcon.defaultProps = defaultProps;
TomisButtonIcon.propTypes = propTypes;
export default TomisButtonIcon;
