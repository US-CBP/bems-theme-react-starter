import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from './Panel';

const PanelExample = ({ ...props }) => {
  return (
    <div>
      <Panel title="My Panel Title">
        <div>Action 1</div>
        <div>Action 2</div>
        <div>Body 1</div>
      </Panel>
    </div>
  );
};

export default PanelExample;
