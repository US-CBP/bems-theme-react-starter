import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultProps = { label: 'Label Text' };
const propTypes = { label: PropTypes.oneOfType([(PropTypes.node, PropTypes.string)]) };

class TomisHeading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label } = this.props;
    return (
      <label style={{fontSize: '16px', fontWeight: 'bold', marginTop: '20px'}}>{label}</label>
    );
  }
}

TomisHeading.defaultProps = defaultProps;
TomisHeading.propTypes = propTypes;

export default TomisHeading;
