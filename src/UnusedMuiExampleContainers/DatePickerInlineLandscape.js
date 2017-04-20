import React from 'react';
import ExampleContainer from './helper/ExampleContainer';
import DatePicker from 'material-ui/DatePicker';

/**
 * Inline Date Pickers are displayed below the input, rather than as a modal dialog.
 */
const DatePickerInlineLandscape = () => (
  <ExampleContainer>
    <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
  </ExampleContainer>
);

export default DatePickerInlineLandscape;
