import React, { Component } from 'react';
import TextFieldSimple from '../../TomisMui/TextFieldSimple';
import { setStateReasonVal } from '../riskDecisionCommon/helper';

const initState = () => {
  return {
    reasonVal: ''
  };
};

class GroundCanceled extends Component {
  constructor(props) {
    super(props);
    this.state = initState();
    this.handleChangeReasonVal = this.handleChangeReasonVal.bind(this);
  }

  handleChangeReasonVal(evt) {
    const val = evt.target.value;
    this.setState(setStateReasonVal.bind(this, val));
  }

  render() {
    const { handleChangeReasonVal } = this;
    const { reasonVal } = this.state;
    return (
      <div className="flex-1">
        <TextFieldSimple hintText="Hint Text" floatingLabelText="Reason*" onChange={handleChangeReasonVal} value={reasonVal} />
      </div>
    );
  }
}
export default GroundCanceled;
