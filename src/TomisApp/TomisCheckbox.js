import React, { Component } from 'react';
import Checkbox from 'BemsMui/Checkbox';

class TomisCheckbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Checkbox className="flex-1" style={{ marginTop: '36px', width: '100%' }} {...this.props} />;
  }
}
export default TomisCheckbox;
