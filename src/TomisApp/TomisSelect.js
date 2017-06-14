import React, { Component } from 'react';
import AutoComplete from 'TomisMui/AutoComplete';

class TomisSelect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AutoComplete {...this.props} />;
  }
}
export default TomisSelect;
