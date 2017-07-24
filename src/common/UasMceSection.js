import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UasMceSectionRender from 'common/UasMceSectionRender';

const propTypes = {
  isCloneable: PropTypes.bool
};

class UasMceSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { yesNoValue, handleChangeYesNo, isCloneable } = this.props;
    return <UasMceSectionRender {...this.props} />;
  }
}

export default UasMceSection;
