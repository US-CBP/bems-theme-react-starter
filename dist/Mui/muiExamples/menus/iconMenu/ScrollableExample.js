'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _place = require('material-ui/svg-icons/maps/place');

var _place2 = _interopRequireDefault(_place);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `maxHeight` property limits the height of the menu, above which it will be scrollable.
 */
var IconMenuExampleScrollable = function IconMenuExampleScrollable() {
  return _react2.default.createElement(
    _IconMenu2.default,
    {
      iconButtonElement: _react2.default.createElement(
        _IconButton2.default,
        null,
        _react2.default.createElement(_place2.default, null)
      ),
      anchorOrigin: { horizontal: 'left', vertical: 'top' },
      targetOrigin: { horizontal: 'left', vertical: 'top' },
      maxHeight: 272
    },
    _react2.default.createElement(_MenuItem2.default, { value: 'AL', primaryText: 'Alabama' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'AK', primaryText: 'Alaska' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'AZ', primaryText: 'Arizona' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'AR', primaryText: 'Arkansas' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'CA', primaryText: 'California' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'CO', primaryText: 'Colorado' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'CT', primaryText: 'Connecticut' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'DE', primaryText: 'Delaware' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'DC', primaryText: 'District Of Columbia' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'FL', primaryText: 'Florida' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'GA', primaryText: 'Georgia' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'HI', primaryText: 'Hawaii' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'ID', primaryText: 'Idaho' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'IL', primaryText: 'Illinois' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'IN', primaryText: 'Indiana' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'IA', primaryText: 'Iowa' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'KS', primaryText: 'Kansas' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'KY', primaryText: 'Kentucky' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'LA', primaryText: 'Louisiana' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'ME', primaryText: 'Maine' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'MD', primaryText: 'Maryland' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'MA', primaryText: 'Massachusetts' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'MI', primaryText: 'Michigan' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'MN', primaryText: 'Minnesota' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'MS', primaryText: 'Mississippi' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'MO', primaryText: 'Missouri' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'MT', primaryText: 'Montana' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'NE', primaryText: 'Nebraska' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'NV', primaryText: 'Nevada' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'NH', primaryText: 'New Hampshire' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'NJ', primaryText: 'New Jersey' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'NM', primaryText: 'New Mexico' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'NY', primaryText: 'New York' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'NC', primaryText: 'North Carolina' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'ND', primaryText: 'North Dakota' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'OH', primaryText: 'Ohio' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'OK', primaryText: 'Oklahoma' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'OR', primaryText: 'Oregon' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'PA', primaryText: 'Pennsylvania' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'RI', primaryText: 'Rhode Island' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'SC', primaryText: 'South Carolina' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'SD', primaryText: 'South Dakota' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'TN', primaryText: 'Tennessee' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'TX', primaryText: 'Texas' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'UT', primaryText: 'Utah' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'VT', primaryText: 'Vermont' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'VA', primaryText: 'Virginia' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'WA', primaryText: 'Washington' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'WV', primaryText: 'West Virginia' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'WI', primaryText: 'Wisconsin' }),
    _react2.default.createElement(_MenuItem2.default, { value: 'WY', primaryText: 'Wyoming' })
  );
};

exports.default = IconMenuExampleScrollable;