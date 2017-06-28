'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconButtonExampleTooltip = function IconButtonExampleTooltip() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_IconButton2.default, { iconClassName: 'muidocs-icon-custom-github', tooltip: 'bottom-right', tooltipPosition: 'bottom-right' }),
    _react2.default.createElement(_IconButton2.default, { iconClassName: 'muidocs-icon-custom-github', tooltip: 'bottom-center', tooltipPosition: 'bottom-center' }),
    _react2.default.createElement(_IconButton2.default, { iconClassName: 'muidocs-icon-custom-github', tooltip: 'bottom-left', tooltipPosition: 'bottom-left' }),
    _react2.default.createElement(_IconButton2.default, { iconClassName: 'muidocs-icon-custom-github', tooltip: 'top-right', tooltipPosition: 'top-right' }),
    _react2.default.createElement(_IconButton2.default, { iconClassName: 'muidocs-icon-custom-github', tooltip: 'top-center', tooltipPosition: 'top-center' }),
    _react2.default.createElement(_IconButton2.default, { iconClassName: 'muidocs-icon-custom-github', tooltip: 'top-left', tooltipPosition: 'top-left' })
  );
};

exports.default = IconButtonExampleTooltip;