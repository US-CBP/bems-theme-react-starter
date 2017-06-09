import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GroundRiskDecisionSectionRender from './render/GroundRiskDecisionSection';
import { setStateOperationStatus } from './riskDecisionCommon/helper';

const initState = props => {
    const { operationStatusVal } = props;
    return {
        operationStatusVal
    };
};

const defaultProps = {
    operationStatusVal: 'PENDING'
};

const propTypes = {
    operationStatusVal: PropTypes.oneOf[('PENDING', 'EXECUTED', 'CANCELED')]
};

class GroundRiskDecisionSection extends Component {
    constructor(props) {
        super(props);
        this.state = initState(props);
        this.handleOperationStatusOnChange = this.handleOperationStatusOnChange.bind(this);
        // this.renderExecuted = this.renderExecuted.bind(this);
        // this.renderCanceled = this.renderCanceled.bind(this);
        this.getComponentInfo = this.getComponentInfo.bind(this);
    }

    handleOperationStatusOnChange(evt, val) {
        this.setState(setStateOperationStatus.bind(this, val));
    }

    /*renderExecuted() {
        const { operationStatusVal } = this.getComponentInfo();
        if (operationStatusVal === 'EXECUTED') {
            return (
                <div className="row-spacer-24">
                    Execution May Begin
                </div>
            );
        } else {
            return false;
        }
    }

    renderCanceled() {
        const { operationStatusVal } = this.getComponentInfo();
        if (operationStatusVal === 'CANCELED') {
            return (
                <div className="flex-1">
                    <TextFieldSimple hintText="Hint Text" floatingLabelText="Reason*" />
                </div>
            );
        } else {
            return false;
        }
    }*/

    getComponentInfo() {
        return this.state;
    }

    render() {
        const { getComponentInfo, handleOperationStatusOnChange } = this;
        const { operationStatusVal } = getComponentInfo();
        return <GroundRiskDecisionSectionRender handleOperationStatusOnChange={handleOperationStatusOnChange} operationStatusVal={operationStatusVal} />;
    }
}

GroundRiskDecisionSection.defaultProps = defaultProps;
GroundRiskDecisionSection.propTypes = propTypes;
export default GroundRiskDecisionSection;
