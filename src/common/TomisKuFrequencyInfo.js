import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TomisKuFrequencyInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex-1 ku-frequency-container">
        <label className="ku_freq-label">KU Frequency</label>
        <div className="ku-frequency">
          <div className="" title="BLACK" style={{ background: 'rgb(118, 74, 29)' }} />
          <div className="" title="BLUE" style={{ background: 'rgb(0, 176, 240)' }} />
          <div className="" title="GREEN" style={{ background: 'rgb(0, 176, 80)' }} />
          <div className="" title="MAROON" style={{ background: 'rgb(153, 0, 51)' }} />
          <div className="" title="ORANGE" style={{ background: 'rgb(255, 192, 0)' }} />
          <div className="" title="PINK" style={{ background: 'rgb(255, 102, 255)' }} />
          <div className="" title="PURPLE" style={{ background: 'rgb(112, 48, 160)' }} />
          <div className="" title="TAN" style={{ background: 'rgb(204, 155, 0)' }} />
          <div className="active" title="YELLOW" style={{ background: 'rgb(255, 255, 0)' }} />
          <div className="none" title="None">
            <svg>
              <line x1="0" y1="0" x2="19" y2="19" strokeWidth="1" stroke="red" />
              <line x1="0" y1="19" x2="19" y2="0" strokeWidth="1" stroke="red" />
              <line x1="0" y1="1" x2="19" y2="1" strokeWidth="2" stroke="red" />
              <line x1="19" y1="1" x2="19" y2="19" strokeWidth="2" stroke="red" />
              <line x1="19" y1="19" x2="0" y2="19" strokeWidth="2" stroke="red" />
              <line x1="0" y1="19" x2="0" y2="0" strokeWidth="2" stroke="red" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default TomisKuFrequencyInfo;
