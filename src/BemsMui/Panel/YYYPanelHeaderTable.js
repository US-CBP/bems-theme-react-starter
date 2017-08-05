import React from 'react';
import PanelHeader from './PanelHeader';

class PanelHeaderTable extends PanelHeader {
  static muiName = 'PanelHeaderTable';
  render() {
    return <PanelHeader {...this.props.other} {...this.props} style={{ backgroundColor: '#e9e9e9' }} />;
  }
}

export default PanelHeaderTable;
