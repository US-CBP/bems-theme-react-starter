import React from 'react';
import { Panel, PanelHeaderSection, PanelBody } from '../../TomisMui/Panel';
import ToggleButtons from '../../TomisMui/ToggleButtons';
import GroundExecuted from './GroundExecuted';
import TomisInput from 'TomisApp/TomisInput';
import TomisToggle from 'TomisApp/TomisToggle';
import { operationStatusGroundToggleButtonOptions } from '../riskDecisionCommon/helper';

const GroundRiskDecisionSectionRender = ({ handleOperationStatusOnChange, isRenderExecuted, isRenderCanceled, operationStatusVal }) => {
  return (
    <div>
      <Panel>
        <PanelHeaderSection title="Executed/Canceled" />
        <PanelBody>
          <div className="flex-row">
            <div className="flex-column-spacer">
              <div className="flex-1">
                <TomisToggle
                  labelText="Ground Operation Status*"
                  valueSelected={operationStatusVal}
                  options={operationStatusGroundToggleButtonOptions}
                  onChange={handleOperationStatusOnChange}
                />
              </div>
            </div>
            {isRenderCanceled && <TomisInput hintText="Canceled Reason" floatingLabelText="Reason*" />}
          </div>
          {isRenderExecuted && <GroundExecuted />}
        </PanelBody>
      </Panel>
    </div>
  );
};
export default GroundRiskDecisionSectionRender;
