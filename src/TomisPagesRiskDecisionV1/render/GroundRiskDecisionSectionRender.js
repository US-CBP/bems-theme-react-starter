import React from 'react';
import { Panel, PanelHeaderSection, PanelBody } from '../../TomisMui/Panel';
import ToggleButtons from '../../TomisMui/ToggleButtons';
import TextFieldSimple from '../../TomisMui/TextFieldSimple';
import GroundExecuted from './GroundExecuted';
import GroundCanceled from './GroundCanceled';
import { operationStatusGroundToggleButtonOptions } from '../riskDecisionCommon/helper';

const GroundRiskDecisionSectionRender = ({ handleOperationStatusOnChange, isRenderExecuted, isRenderCanceled, operationStatusVal }) => {
  return (
    <div>
      <Panel>
        <PanelHeaderSection title="Executed/Canceled" />
        <PanelBody>
          <div className="flex-row">
            <div className="flex-column-spacer">
              <ToggleButtons
                labelText="Ground Operation Status*"
                valueSelected={operationStatusVal}
                options={operationStatusGroundToggleButtonOptions}
                onChange={handleOperationStatusOnChange}
              />
            </div>
            {isRenderCanceled && <GroundCanceled />}
          </div>
          {isRenderExecuted && <GroundExecuted />}
        </PanelBody>
      </Panel>
    </div>
  );
};
export default GroundRiskDecisionSectionRender;
