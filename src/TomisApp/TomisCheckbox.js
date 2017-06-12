import React, { Component } from 'react';
import Checkbox from 'TomisMui/Checkbox';

class TomisCheckbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Checkbox {...this.props} />;
  }
}
export default TomisCheckbox;
