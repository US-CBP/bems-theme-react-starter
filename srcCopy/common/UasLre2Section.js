import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UasLre2SectionRender from 'common/UasLre2SectionRender';

const propTypes = {
  isCloneable: PropTypes.bool
};

class UasLre2Section extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { yesNoValue, handleChangeYesNo, isCloneable } = this.props;
    return <UasLre2SectionRender {...this.props} />;
  }
}

export default UasLre2Section;
