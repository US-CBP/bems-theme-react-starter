import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderNavAction from '../TomisMui/HeaderNavAction';
import RiskDecisionConsolidatedSection from './RiskDecisionConsolidatedSection';
import { setStateIsSaved } from './riskDecisionCommon/helper';

const initState = {
  isSaved: false
};

const propTypes = {
  actionBarPageTitle: PropTypes.string.isRequired
};

class RiskDecisionConsolidatedPage extends Component {
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
        <RiskDecisionConsolidatedSection isSaved={isSaved} />
      </div>
    );
  }
}

RiskDecisionConsolidatedPage.propTypes = propTypes;
export default RiskDecisionConsolidatedPage;
