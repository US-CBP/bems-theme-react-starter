import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlightFloatPageRender from './FlightFloatPageRender';

const setStateLocalZuluValue = (localZuluValue, state, props) => {
    return { localZuluValue };
};

const setStateYesNo = (yesNoValue, state, props) => {
    return { yesNoValue };
};

const initState = {
    localZuluValue: 'LOCAL',
    yesNoValue: ''
};

class FlightFloatPage extends Component {
    constructor(props) {
        super(props);
        this.state = initState;
        this.handleChangeLocalZulu = this.handleChangeLocalZulu.bind(this);
    }

    handleChangeLocalZulu = value => {
        console.log('changed local/zulu, value=', value);
        this.setState(setStateLocalZuluValue.bind(this, value));
    };
    handleChangeYesNo = (evt, value) => {
        console.log('changed yes/no value=', value);
        this.setState(setStateYesNo.bind(this, value));
    };
    render() {
        const { handleChangeLocalZulu, handleChangeYesNo } = this;
        const { localZuluValue, yesNoValue } = this.state;
        //Note, dimensions are passed as prop from Container Pane Component.
        return (
            <FlightFloatPageRender
                isCloneable={true}
                handleChangeLocalZulu={handleChangeLocalZulu}
                localZuluValue={localZuluValue}
                handleChangeYesNo={handleChangeYesNo}
                yesNoValue={yesNoValue}
                {...this.props}
            />
        );
    }
}

export default FlightFloatPage;
