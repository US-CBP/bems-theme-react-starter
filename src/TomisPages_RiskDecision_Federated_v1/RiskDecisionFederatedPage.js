import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderNavAction from '../TomisMui/HeaderNavAction';
import RiskDecisionFederatedSection from './RiskDecisionFederatedSection';
import { setStateIsSaved } from './riskDecisionCommon/helper';

const initState = {
  isSaved: false
};

const propTypes = {
  actionBarPageTitle: PropTypes.string.isRequired
};

class RiskDecisionFederatedPage extends Component {
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
        <RiskDecisionFederatedSection isSaved={isSaved} />
      </div>
    );
  }
}

RiskDecisionFederatedPage.propTypes = propTypes;
export default RiskDecisionFederatedPage;
