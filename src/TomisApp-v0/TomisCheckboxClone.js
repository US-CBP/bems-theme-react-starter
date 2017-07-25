import React, { Component } from 'react';
import Checkbox from 'BemsMui/Checkbox';

class TomisCheckboxClone extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Checkbox style={{ display: 'inline-block', marginRight: 0, width: '24px' }} defaultChecked={true} {...this.props} />;
  }
}
export default TomisCheckboxClone;
