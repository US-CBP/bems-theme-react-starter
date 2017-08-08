import React, { Component } from 'react';
import Checkbox from 'BemsMui/Checkbox';

class TomisCheckboxInline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Checkbox style={{ marginRight: '32px', width: 'inherit' }} {...this.props} />;
  }
}
export default TomisCheckboxInline;
