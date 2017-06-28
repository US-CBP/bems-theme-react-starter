'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _grade = require('material-ui/svg-icons/action/grade');

var _grade2 = _interopRequireDefault(_grade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconButtonExampleTouch = function IconButtonExampleTouch() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _IconButton2.default,
      { tooltip: 'bottom-right', touch: true, tooltipPosition: 'bottom-right' },
      _react2.default.createElement(_grade2.default, null)
    ),
    _react2.default.createElement(
      _IconButton2.default,
      { tooltip: 'bottom-center', touch: true, tooltipPosition: 'bottom-center' },
      _react2.default.createElement(_grade2.default, null)
    ),
    _react2.default.createElement(
      _IconButton2.default,
      { tooltip: 'bottom-left', touch: true, tooltipPosition: 'bottom-left' },
      _react2.default.createElement(_grade2.default, null)
    ),
    _react2.default.createElement(
      _IconButton2.default,
      { tooltip: 'top-right', touch: true, tooltipPosition: 'top-right' },
      _react2.default.createElement(_grade2.default, null)
    ),
    _react2.default.createElement(
      _IconButton2.default,
      { tooltip: 'top-center', touch: true, tooltipPosition: 'top-center' },
      _react2.default.createElement(_grade2.default, null)
    ),
    _react2.default.createElement(
      _IconButton2.default,
      { tooltip: 'top-left', touch: true, tooltipPosition: 'top-left' },
      _react2.default.createElement(_grade2.default, null)
    )
  );
};

exports.default = IconButtonExampleTouch;