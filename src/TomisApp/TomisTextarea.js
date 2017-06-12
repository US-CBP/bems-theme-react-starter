import React, { Component } from 'react';
import TextArea from 'TomisMui/TextArea';
import { setStateInputVal } from 'TomisApp/common/helper';

const initState = () => {
  return {
    val: ''
  };
};

class TomisTextarea extends Component {
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
    const { hintText, floatingLabelText, rowsMax } = this.props;
    const { val } = this.state;
    return (
      <div className="flex-1">
        <TextArea rowsMax={rowsMax} hintText={hintText} floatingLabelText={floatingLabelText} onChange={handleChangeVal} value={val} />
      </div>
    );
  }
}
export default TomisTextarea;
