import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderNavAction from '../TomisMui/HeaderNavAction';

class CloningPage extends Component {
  constructor(props) {
    super(props);
  }
render(){
  return(
    <div>
      <HeaderNavAction actionBarPageTitle="Ground Operation" />
      <div>
      </div>
    </div>
  )
}
}

export default CloningPage;
