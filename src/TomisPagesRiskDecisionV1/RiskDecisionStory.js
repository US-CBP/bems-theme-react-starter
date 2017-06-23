import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderNavAction from '../TomisMui/HeaderNavAction';
import RiskDecisionSection from './RiskDecisionSection';
import { setStateIsSaved } from './riskDecisionCommon/helper';

const initState = {
  isSaved: false
};

const propTypes = {
  actionBarPageTitle: PropTypes.string.isRequired
};

class RiskDecisionStory extends Component {
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
        <RiskDecisionSection isSaved={isSaved} />
      </div>
    );
  }
}

RiskDecisionStory.propTypes = propTypes;
export default RiskDecisionStory;
