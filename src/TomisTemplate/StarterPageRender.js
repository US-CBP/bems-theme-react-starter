import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarterSection from './StarterSection';

class StarterPageRender extends Component {
  constructor(props) {
    super(props);
  }
render(){
  return(
    <div>
      <StarterSection />
    </div>
  )
}
}

export default StarterPageRender;
