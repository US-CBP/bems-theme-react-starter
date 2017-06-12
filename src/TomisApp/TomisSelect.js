import React, { Component } from 'react';
import TextFieldSimple from 'TomisMui/TextFieldSimple';
import { setStateInputVal } from 'TomisApp/common/helper';

const initState = () => {
  return {
    val: ''
  };
};

//TODO:  implement correct functionality
class TomisSelect extends Component {
  constructor(props) {
    super(props);
    this.state = initState();
    this.handleChangeVal = this.handleChangeVal.bind(this);
  }

  handleChangeVal(evt) {
    const val = evt.target.value;
    this.setState(setStateInputVal.bind(this, val));
  }

  render() {
    const { handleChangeVal } = this;
    const { hintText, floatingLabelText } = this.props;
    const { val } = this.state;
    return (
      <div className="flex-1">
        <TextFieldSimple hintText={hintText} floatingLabelText={floatingLabelText} onChange={handleChangeVal} value={val} />
      </div>
    );
  }
}
export default TomisSelect;
