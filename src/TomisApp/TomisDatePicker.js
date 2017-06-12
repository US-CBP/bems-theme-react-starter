import React, { Component } from 'react';
import DatePickerInlineLandscape from 'TomisMui/DatePickerInlineLandscape';

class TomisDatePicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <DatePickerInlineLandscape {...this.props} />;
  }
}
export default TomisDatePicker;
