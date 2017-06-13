import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderNavAction from '../TomisMui/HeaderNavAction';

class StarterPage extends Component {
  constructor(props) {
    super(props);
  }
render(){
  return(
    <div>
      <HeaderNavAction actionBarPageTitle="Ground Operation" />
      <div className="outer-card-margin">
        <Panel>
          <PanelHeaderSection title="Executed/Canceled" />
          <PanelBody>
            <div className="flex-row">
              <div className="flex-column-pad">
                <ToggleButtons labelText="Ground Operation Status*" valueSelected={'CANCELED'} options={toggleButtonsOptions} />
              </div>
            </div>
          </PanelBody>
        </Panel>
      </div>
    </div>
  )
}
}

export default StarterPage;
