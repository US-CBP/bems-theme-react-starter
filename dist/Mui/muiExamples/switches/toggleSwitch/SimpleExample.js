'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  block: {
    maxWidth: 250
  },
  toggle: {
    marginBottom: 16
  },
  thumbOff: {
    backgroundColor: '#ffcccc'
  },
  trackOff: {
    backgroundColor: '#ff9d9d'
  },
  thumbSwitched: {
    backgroundColor: 'red'
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d'
  },
  labelStyle: {
    color: 'red'
  }
};

var ToggleExampleSimple = function ToggleExampleSimple() {
  return _react2.default.createElement(
    'div',
    { style: styles.block },
    _react2.default.createElement(_Toggle2.default, { label: 'Simple', style: styles.toggle }),
    _react2.default.createElement(_Toggle2.default, { label: 'Toggled by default', defaultToggled: true, style: styles.toggle }),
    _react2.default.createElement(_Toggle2.default, { label: 'Disabled', disabled: true, style: styles.toggle }),
    _react2.default.createElement(_Toggle2.default, { label: 'Label on the right', labelPosition: 'right', style: styles.toggle }),
    _react2.default.createElement(_Toggle2.default, {
      label: 'Styling',
      thumbStyle: styles.thumbOff,
      trackStyle: styles.trackOff,
      thumbSwitchedStyle: styles.thumbSwitched,
      trackSwitchedStyle: styles.trackSwitched,
      labelStyle: styles.labelStyle
    })
  );
};

exports.default = ToggleExampleSimple;