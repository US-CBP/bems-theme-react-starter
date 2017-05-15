import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { dateTimeFormat, formatIso, isEqualDate } from 'material-ui/DatePicker/dateUtils';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import MonthlyCalendarIcon from 'material-ui/svg-icons/notification/event-note';
import moment from 'moment';
import _trim from 'lodash/trim';

const MOMENT_FORMAT = 'MM/DD/YYYY';

class DatePicker extends Component {
  static propTypes = {
    /**
     * Constructor for date formatting for the specified `locale`.
     * The constructor must follow this specification: ECMAScript Internationalization API 1.0 (ECMA-402).
     * `Intl.DateTimeFormat` is supported by most modern browsers, see http://caniuse.com/#search=intl,
     * otherwise https://github.com/andyearnshaw/Intl.js is a good polyfill.
     *
     * By default, a built-in `DateTimeFormat` is used which supports the 'en-US' `locale`.
     */
    DateTimeFormat: PropTypes.func,
    /**
     * If true, automatically accept and close the picker on select a date.
     */
    autoOk: PropTypes.bool,
    /**
     * Override the default text of the 'Cancel' button.
     */
    cancelLabel: PropTypes.node,
    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * Used to control how the Date Picker will be displayed when the input field is focused.
     * `dialog` (default) displays the DatePicker as a dialog with a modal.
     * `inline` displays the DatePicker below the input field (similar to auto complete).
     */
    container: PropTypes.oneOf(['dialog', 'inline']),
    /**
     * This is the initial date value of the component.
     * If either `value` or `valueLink` is provided they will override this
     * prop with `value` taking precedence.
     */
    defaultDate: PropTypes.object,
    /**
     * Override the inline-styles of DatePickerDialog's Container element.
     */
    dialogContainerStyle: PropTypes.object,
    /**
     * Disables the year selection in the date picker.
     */
    disableYearSelection: PropTypes.bool,
    /**
     * Disables the DatePicker.
     */
    disabled: PropTypes.bool,
    /**
     * Used to change the first day of week. It varies from
     * Saturday to Monday between different locales.
     * The allowed range is 0 (Sunday) to 6 (Saturday).
     * The default is `1`, Monday, as per ISO 8601.
     */
    firstDayOfWeek: PropTypes.number,
    /**
     * This function is called to format the date displayed in the input field, and should return a string.
     * By default if no `locale` and `DateTimeFormat` is provided date objects are formatted to ISO 8601 YYYY-MM-DD.
     *
     * @param {object} date Date object to be formatted.
     * @returns {any} The formatted date.
     */
    formatDate: PropTypes.func,
    /**
     * Hide date display
     */
    hideCalendarDate: PropTypes.bool,
    /**
     * Locale used for formatting the `DatePicker` date strings. Other than for 'en-US', you
     * must provide a `DateTimeFormat` that supports the chosen `locale`.
     */
    locale: PropTypes.string,
    /**
     * The ending of a range of valid dates. The range includes the endDate.
     * The default value is current date + 100 years.
     */
    maxDate: PropTypes.object,
    /**
     * The beginning of a range of valid dates. The range includes the startDate.
     * The default value is current date - 100 years.
     */
    minDate: PropTypes.object,
    /**
     * Tells the component to display the picker in portrait or landscape mode.
     */
    mode: PropTypes.oneOf(['portrait', 'landscape']),
    /**
     * Override the default text of the 'OK' button.
     */
    okLabel: PropTypes.node,
    /**
     * Callback function that is fired when the date value changes.
     *
     * @param {null} null Since there is no particular event associated with the change,
     * the first argument will always be null.
     * @param {object} date The new date.
     */
    onChange: PropTypes.func,
    /**
     * Callback function that is fired when the Date Picker's dialog is dismissed.
     */
    onDismiss: PropTypes.func,
    /**
     * Callback function that is fired when the Date Picker's `TextField` gains focus.
     */
    onFocus: PropTypes.func,
    /**
     * Callback function that is fired when the Date Picker's dialog is shown.
     */
    onShow: PropTypes.func,
    /**
     * Callback function that is fired when a touch tap event occurs on the Date Picker's `TextField`.
     *
     * @param {object} event TouchTap event targeting the `TextField`.
     */
    onTouchTap: PropTypes.func,
    /**
     * Callback function used to determine if a day's entry should be disabled on the calendar.
     *
     * @param {object} day Date object of a day.
     * @returns {boolean} Indicates whether the day should be disabled.
     */
    shouldDisableDate: PropTypes.func,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * Override the inline-styles of DatePicker's TextField element.
     */
    textFieldStyle: PropTypes.object,
    /**
     * This object should contain methods needed to build the calendar system.
     *
     * Useful for building a custom calendar system. Refer to the
     * [source code](https://github.com/callemall/material-ui/blob/master/src/DatePicker/dateUtils.js)
     * and an [example implementation](https://github.com/alitaheri/material-ui-persian-date-picker-utils)
     * for more information.
     */
    utils: PropTypes.object,
    /**
     * Sets the date for the Date Picker programmatically.
     */
    value: PropTypes.object
  };

  static defaultProps = {
    autoOk: false,
    container: 'dialog',
    disabled: false,
    disableYearSelection: false,
    firstDayOfWeek: 1,
    hideCalendarDate: false,
    style: {}
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  };

  state = {
    date: undefined,
    formattedDate: '',
    errorText: ''
  };

  componentWillMount() {
    this.setState({
      date: this.isControlled() ? this.getControlledDate() : this.props.defaultDate,
      formattedDate: this.getControlledDate() ? moment(this.getControlledDate()).format(MOMENT_FORMAT) : ''
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.isControlled()) {
      const newDate = this.getControlledDate(nextProps);
      if (!isEqualDate(this.state.date, newDate)) {
        this.setState({
          date: newDate,
          formattedDate: newDate ? moment(newDate).format(MOMENT_FORMAT) : ''
        });
      }
    }
  }

  getDate() {
    return this.state.date;
  }

  /**
   * Open the date-picker dialog programmatically from a parent.
   */
  openDialog() {
    /**
     * if the date is not selected then set it to new date
     * (get the current system date while doing so)
     * else set it to the currently selected date
     */
    if (this.state.date !== undefined) {
      this.setState(
        {
          dialogDate: this.getDate()
        },
        this.refs.dialogWindow.show
      );
    } else {
      this.setState(
        {
          dialogDate: new Date()
        },
        this.refs.dialogWindow.show
      );
    }
  }

  handleAccept = date => {
    if (!this.isControlled()) {
      this.setState({
        date: date
      });
    }
    if (this.props.onChange) {
      this.props.onChange(null, date);
    } else {
      this.handleChangeFromDialog(date);
    }
  };

  handleTouchTap = event => {
    if (this.props.onTouchTap) {
      this.props.onTouchTap(event);
    }

    if (!this.props.disabled) {
      setTimeout(() => {
        this.openDialog();
      }, 0);
    }
  };

  isControlled() {
    // return this.props.hasOwnProperty('value');
    return true;
  }

  getControlledDate(props = this.props) {
    if (props.value instanceof Date) {
      return props.value;
    } else {
      const { date } = this.state;
      return date;
    }
  }

  formatDate = date => {
    if (this.props.locale) {
      const DateTimeFormat = this.props.DateTimeFormat || dateTimeFormat;
      return new DateTimeFormat(this.props.locale, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      }).format(date);
    } else {
      return formatIso(date);
    }
  };

  handleChangeTextField = (event, value) => {
    this.setState({ formattedDate: event.target.value });
  };

  handleChangeFromDialog = value => {
    const momentDate = moment(value, MOMENT_FORMAT);
    const jsDate = momentDate.toDate();
    if (momentDate.isValid()) {
      const formattedDate = momentDate.format(MOMENT_FORMAT);
      this.setState({ date: jsDate, formattedDate, errorText: '' });
    }
  };

  handleBlur = () => {
    const { formattedDate } = this.state;
    if (_trim(formattedDate).length === 0) {
      this.setState({ errorText: '' });
    } else {
      const momentDate = moment(formattedDate, MOMENT_FORMAT);
      if (momentDate.isValid()) {
        this.handleChangeFromDialog(formattedDate);
      } else {
        this.setState({ errorText: 'Invalid Date' });
      }
    }
  };

  render() {
    const { handleChangeTextField, handleBlur, handleAccept, handleTouchTap } = this;
    const { formattedDate, dialogDate, errorText } = this.state;
    const {
      DateTimeFormat,
      autoOk,
      cancelLabel,
      className,
      container,
      defaultDate, // eslint-disable-line no-unused-vars
      dialogContainerStyle,
      disableYearSelection,
      firstDayOfWeek,
      formatDate: formatDateProp,
      locale,
      maxDate,
      minDate,
      mode,
      okLabel,
      onDismiss,
      onFocus, // eslint-disable-line no-unused-vars
      onShow,
      onTouchTap, // eslint-disable-line no-unused-vars
      shouldDisableDate,
      hideCalendarDate,
      style,
      textFieldStyle,
      utils,
      fullWidth,
      ...other
    } = this.props;

    const { prepareStyles } = this.context.muiTheme;
    const formatDate = formatDateProp || this.formatDate;
    const styleWidth = fullWidth ? '100%' : 'inherit';
    const iconStyleBottom = _trim(errorText).length > 0 ? '30px' : '0';

    return (
      <div className={className} style={prepareStyles(Object.assign({}, style, { position: 'relative', width: styleWidth }))}>
        <TextField
          fullWidth={fullWidth}
          {...other}
          value={formattedDate}
          onChange={handleChangeTextField}
          onBlur={handleBlur}
          style={textFieldStyle}
          errorText={errorText}
        />
        <DatePickerDialog
          DateTimeFormat={DateTimeFormat}
          autoOk={autoOk}
          cancelLabel={cancelLabel}
          container={container}
          containerStyle={dialogContainerStyle}
          disableYearSelection={disableYearSelection}
          firstDayOfWeek={firstDayOfWeek}
          initialDate={dialogDate}
          locale={locale}
          maxDate={maxDate}
          minDate={minDate}
          mode={mode}
          okLabel={okLabel}
          onAccept={handleAccept}
          onShow={onShow}
          onDismiss={onDismiss}
          ref="dialogWindow"
          shouldDisableDate={shouldDisableDate}
          hideCalendarDate={hideCalendarDate}
          utils={utils}
        />
        <IconButton onTouchTap={handleTouchTap} className="inline-icon" style={{ position: 'absolute', right: 0, bottom: iconStyleBottom }}>
          <MonthlyCalendarIcon />
        </IconButton>
      </div>
    );
  }
}

export default DatePicker;
