'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ToggleButtonConfirm = require('../TomisMui/ToggleButtonConfirm');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  options: [{ label: 'Btn 1 Value 1', value: 'V1' }, { label: 'Btn2', value: 'V2' }, { label: 'Btn4', value: 'V3' }],
  defaultSelected: -1
};

var propTypes = {
  options: _react.PropTypes.array.isRequired,
  labelText: _react.PropTypes.string,
  valueSelected: _react.PropTypes.string.isRequired
};

var ToggleButtonsConfirm = function ToggleButtonsConfirm(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var options = props.options,
      _props$labelText = props.labelText,
      labelText = _props$labelText === undefined ? 'Default Label' : _props$labelText,
      valueSelected = props.valueSelected;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'label',
      { className: 'labeled-item' },
      labelText
    ),
    _react2.default.createElement(
      _ToggleButtonConfirm.ToggleButtonGroupConfirm,
      _extends({ name: 'genericName', valueSelected: valueSelected }, props),
      options.map(function (option, idx) {
        var label = option.label,
            value = option.value;

        return _react2.default.createElement(_ToggleButtonConfirm.ToggleButtonConfirm, { key: 'TB' + idx, label: label, value: value });
      })
    )
  );
};

ToggleButtonsConfirm.defaultProps = defaultProps;
ToggleButtonsConfirm.propTypes = propTypes;

exports.default = ToggleButtonsConfirm;