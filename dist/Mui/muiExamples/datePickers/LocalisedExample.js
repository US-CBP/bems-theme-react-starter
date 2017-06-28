'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _intlLocalesSupported = require('intl-locales-supported');

var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);

var _materialUiPersianDatePickerUtils = require('material-ui-persian-date-picker-utils');

var _materialUiPersianDatePickerUtils2 = _interopRequireDefault(_materialUiPersianDatePickerUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateTimeFormat = void 0;

/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if ((0, _intlLocalesSupported2.default)(['fr', 'fa-IR'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  var IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/fr');
  require('intl/locale-data/jsonp/fa-IR');
}

/**
 *  `DatePicker` can be localised using the `locale` property. The first example is localised in French.
 *  Note that the buttons must be separately localised using the `cancelLabel` and `okLabel` properties.
 *
 *  The second example shows `firstDayOfWeek` set to `0`, (Sunday), and `locale` to `en-US` which matches the
 *  behavior of the Date Picker prior to 0.15.0. Note that the 'en-US' locale is built in, and so does not require
 *  `DateTimeFormat` to be supplied.
 *
 *  The final example displays the resulting date in a custom format using the `formatDate` property.
 */
var DatePickerExampleInternational = function DatePickerExampleInternational() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_DatePicker2.default, { hintText: 'fr locale', DateTimeFormat: DateTimeFormat, okLabel: 'OK', cancelLabel: 'Annuler', locale: 'fr' }),
    _react2.default.createElement(_DatePicker2.default, {
      hintText: 'fa-IR locale',
      DateTimeFormat: DateTimeFormat,
      okLabel: '\u062A\u0627\u06CC\u06CC\u062F',
      cancelLabel: '\u0644\u063A\u0648',
      locale: 'fa-IR',
      firstDayOfWeek: 6,
      utils: _materialUiPersianDatePickerUtils2.default
    }),
    _react2.default.createElement(_DatePicker2.default, { hintText: 'en-US locale', locale: 'en-US', firstDayOfWeek: 0 }),
    _react2.default.createElement(_DatePicker2.default, {
      hintText: 'Custom date format',
      firstDayOfWeek: 0,
      formatDate: new DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format
    })
  );
};

exports.default = DatePickerExampleInternational;