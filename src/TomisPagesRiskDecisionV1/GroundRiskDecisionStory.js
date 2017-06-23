import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderNavAction from '../TomisMui/HeaderNavAction';
import GroundRiskDecisionSection from './GroundRiskDecisionSection';
import { setStateIsSaved } from './riskDecisionCommon/helper';

const initState = {
  isSaved: false
};

const propTypes = {
  actionBarPageTitle: PropTypes.string.isRequired
};

class GroundRiskDecisionStory extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.handleClickSave = this.handleClickSave.bind(this);
  }

  handleClickSave() {
    this.setState(setStateIsSaved.bind(this, true));
  }

  render() {
    const { handleClickSave } = this;
    const { isSaved } = this.state;
    const { actionBarPageTitle } = this.props;
    return (
      <div>
        <HeaderNavAction id="headerNavAction" actionBarPageTitle={actionBarPageTitle} handleStoryBookClick={handleClickSave} />
        <GroundRiskDecisionSection isSaved={isSaved} />
      </div>
    );
  }
}

GroundRiskDecisionStory.propTypes = propTypes;
export default GroundRiskDecisionStory;
