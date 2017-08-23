import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UasLre1SectionRender from 'common/UasLre1SectionRender';

const propTypes = {
  isCloneable: PropTypes.bool
};

class UasLre1Section extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { yesNoValue, handleModifyYesNoToggle, isCloneable } = this.props;
    return <UasLre1SectionRender {...this.props} />;
  }
}

export default UasLre1Section;
