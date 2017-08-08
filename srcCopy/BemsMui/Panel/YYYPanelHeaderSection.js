import React from 'react';
import PanelHeader from './PanelHeader';
import { indigo100 } from 'material-ui/styles/colors';

class PanelHeaderSection extends PanelHeader {
  static muiName = 'PanelHeaderSection';
  render() {
    return <PanelHeader {...this.props.other} {...this.props} style={{ backgroundColor: indigo100 }} />;
  }
}

export default PanelHeaderSection;
