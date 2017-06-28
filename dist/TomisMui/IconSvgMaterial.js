'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ExampleContainer = require('./helpers/ExampleContainer');

var _ExampleContainer2 = _interopRequireDefault(_ExampleContainer);

var _home = require('material-ui/svg-icons/action/home');

var _home2 = _interopRequireDefault(_home);

var _flightTakeoff = require('material-ui/svg-icons/action/flight-takeoff');

var _flightTakeoff2 = _interopRequireDefault(_flightTakeoff);

var _cloudDownload = require('material-ui/svg-icons/file/cloud-download');

var _cloudDownload2 = _interopRequireDefault(_cloudDownload);

var _videogameAsset = require('material-ui/svg-icons/hardware/videogame-asset');

var _videogameAsset2 = _interopRequireDefault(_videogameAsset);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconStyles = {
  marginRight: 24
};

var IconSvgMaterial = function IconSvgMaterial() {
  return _react2.default.createElement(
    _ExampleContainer2.default,
    null,
    _react2.default.createElement(_home2.default, { style: iconStyles }),
    _react2.default.createElement(_flightTakeoff2.default, { style: iconStyles, color: _colors.red500 }),
    _react2.default.createElement(_cloudDownload2.default, { style: iconStyles, color: _colors.yellow500 }),
    _react2.default.createElement(_videogameAsset2.default, { style: iconStyles, color: _colors.blue500 })
  );
};

exports.default = IconSvgMaterial;