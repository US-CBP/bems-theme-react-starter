'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GroundRiskDecisionSectionRender = require('./riskDecisionCommon/GroundRiskDecisionSectionRender');

var _GroundRiskDecisionSectionRender2 = _interopRequireDefault(_GroundRiskDecisionSectionRender);

var _helper = require('./riskDecisionCommon/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initState = {
  operationStatusVal: 'PENDING'
};

var GroundRiskDecisionSection = function (_Component) {
  _inherits(GroundRiskDecisionSection, _Component);

  function GroundRiskDecisionSection(props) {
    _classCallCheck(this, GroundRiskDecisionSection);

    var _this = _possibleConstructorReturn(this, (GroundRiskDecisionSection.__proto__ || Object.getPrototypeOf(GroundRiskDecisionSection)).call(this, props));

    _this.state = initState;
    _this.handleOperationStatusOnChange = _this.handleOperationStatusOnChange.bind(_this);
    _this.getIsRenderExecuted = _this.getIsRenderExecuted.bind(_this);
    _this.getIsRenderCanceled = _this.getIsRenderCanceled.bind(_this);
    return _this;
  }

  _createClass(GroundRiskDecisionSection, [{
    key: 'handleOperationStatusOnChange',
    value: function handleOperationStatusOnChange(evt, val) {
      this.setState(_helper.setStateOperationStatus.bind(this, val));
    }
  }, {
    key: 'getIsRenderExecuted',
    value: function getIsRenderExecuted() {
      var operationStatusVal = this.state.operationStatusVal;

      return operationStatusVal === 'EXECUTED';
    }
  }, {
    key: 'getIsRenderCanceled',
    value: function getIsRenderCanceled() {
      var operationStatusVal = this.state.operationStatusVal;

      return operationStatusVal === 'CANCELED';
    }
  }, {
    key: 'render',
    value: function render() {
      var getIsRenderExecuted = this.getIsRenderExecuted,
          getIsRenderCanceled = this.getIsRenderCanceled,
          handleOperationStatusOnChange = this.handleOperationStatusOnChange;
      var operationStatusVal = this.state.operationStatusVal;

      return _react2.default.createElement(_GroundRiskDecisionSectionRender2.default, {
        isRenderExecuted: getIsRenderExecuted(),
        isRenderCanceled: getIsRenderCanceled(),
        handleOperationStatusOnChange: handleOperationStatusOnChange,
        operationStatusVal: operationStatusVal
      });
    }
  }]);

  return GroundRiskDecisionSection;
}(_react.Component);

exports.default = GroundRiskDecisionSection;