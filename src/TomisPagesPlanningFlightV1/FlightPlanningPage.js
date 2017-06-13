import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderNavAction from '../TomisMui/HeaderNavAction';

class FlightPlanningPage extends Component {
  constructor(props) {
    super(props);
  }
render(){
  return(
    <div>
      <HeaderNavAction actionBarPageTitle="Flight" />
      <div>
      </div>
    </div>
  )
}
}

export default FlightPlanningPage;
