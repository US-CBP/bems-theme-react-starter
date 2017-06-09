import React from 'react';
import HeaderNavAction from '../../TomisMui/HeaderNavAction';
import { Panel, PanelHeaderSection, PanelBody } from '../../TomisMui/Panel';
import ToggleButtons from '../../TomisMui/ToggleButtons';
import TextFieldSimple from '../../TomisMui/TextFieldSimple';
import GroundExecuted from './GroundExecuted';
import GroundCanceled from './GroundCanceled';
import { operationStatusGroundToggleButtonOptions } from '../riskDecisionCommon/helper';

const GroundRiskDecisionSectionRender = ({ handleOperationStatusOnChange, renderExecuted, renderCanceled, operationStatusVal }) => {
    return (
        <div>
            <HeaderNavAction actionBarPageTitle="Ground Operation" />
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
                        <GroundCanceled operationStatusVal={operationStatusVal} />
                    </div>
                    <GroundExecuted operationStatusVal={operationStatusVal} />
                </PanelBody>
            </Panel>
        </div>
    );
};
export default GroundRiskDecisionSectionRender;
