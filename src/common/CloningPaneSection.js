import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloningPaneSectionRender from 'common/CloningPaneSectionRender';

const initState = {};

class CloningPaneSection extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  render() {
    return (
      <div>
        <CloningPaneSectionRender {...this.props} />
      </div>
    );
  }
}

export default CloningPaneSection;
