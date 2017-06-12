import React, { Component } from 'react';
import ToggleButtons from 'TomisMui/ToggleButtons';

class TomisToggle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ToggleButtons {...this.props} />;
  }
}
export default TomisToggle;
