import React, { Component } from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Panel, PanelHeaderSection, PanelBody } from 'TomisApp/TomisPanel';
import TomisSelect from 'TomisApp/TomisSelect';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisInput from 'TomisApp/TomisInput';
import TomisTextarea from 'TomisApp/TomisTextarea';

class FormWithAllComponents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Panel>
          <PanelHeaderSection title="Panel Section Title">
          </PanelHeaderSection>
          <PanelBody>
            <div className="flex-row">
              <div className="flex-2">
                <TomisSelect floatingLabelText="Any Select Label" />
              </div>
              <div className="flex-1">
                <TomisCheckbox label="Checkbox Label" />
              </div>
            </div>
            <div className="flex-row">
              <div className="flex-1">
                <TomisInput floatingLabelText="My Text Label" />
              </div>
            </div>
            <div className="flex-row">
              <div className="flex-1">
                <TomisTextarea floatingLabelText="My TextArea" />
              </div>
            </div>
          </PanelBody>
        </Panel>
      </div>
    );
  }
}

export default FormWithAllComponents;
