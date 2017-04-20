import React from 'react';
import DatePicker from 'material-ui/DatePicker';

/**
 * Inline Date Pickers are displayed below the input, rather than as a modal dialog.
 */
const DatePickerInlineLandscape = ({ ...props }) => <DatePicker hintText="Landscape Inline Dialog" {...props} container="inline" mode="landscape" />;

export default DatePickerInlineLandscape;
