'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Panel = require('../../TomisMui/Panel');

var _ToggleButtons = require('../../TomisMui/ToggleButtons');

var _ToggleButtons2 = _interopRequireDefault(_ToggleButtons);

var _GroundExecuted = require('./GroundExecuted');

var _GroundExecuted2 = _interopRequireDefault(_GroundExecuted);

var _TomisInput = require('TomisApp/TomisInput');

var _TomisInput2 = _interopRequireDefault(_TomisInput);

var _TomisToggle = require('TomisApp/TomisToggle');

var _TomisToggle2 = _interopRequireDefault(_TomisToggle);

var _helper = require('../riskDecisionCommon/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroundRiskDecisionSectionRender = function GroundRiskDecisionSectionRender(_ref) {
  var handleOperationStatusOnChange = _ref.handleOperationStatusOnChange,
      isRenderExecuted = _ref.isRenderExecuted,
      isRenderCanceled = _ref.isRenderCanceled,
      operationStatusVal = _ref.operationStatusVal;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Panel.Panel,
      null,
      _react2.default.createElement(_Panel.PanelHeaderSection, { title: 'Executed/Canceled' }),
      _react2.default.createElement(
        _Panel.PanelBody,
        null,
        _react2.default.createElement(
          'div',
          { className: 'flex-row' },
          _react2.default.createElement(
            'div',
            { className: 'flex-column-spacer' },
            _react2.default.createElement(
              'div',
              { className: 'flex-1' },
              _react2.default.createElement(_TomisToggle2.default, {
                labelText: 'Ground Operation Status*',
                valueSelected: operationStatusVal,
                options: _helper.operationStatusGroundToggleButtonOptions,
                onChange: handleOperationStatusOnChange
              })
            )
          ),
          isRenderCanceled && _react2.default.createElement(_TomisInput2.default, { hintText: 'Canceled Reason', floatingLabelText: 'Reason*' })
        ),
        isRenderExecuted && _react2.default.createElement(_GroundExecuted2.default, null)
      )
    )
  );
};
exports.default = GroundRiskDecisionSectionRender;