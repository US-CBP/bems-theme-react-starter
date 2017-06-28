'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _RiskDecisionCore = require('./riskDecisionCommon/RiskDecisionCore');

var _RiskDecisionCore2 = _interopRequireDefault(_RiskDecisionCore);

var _RaisedButton = require('../TomisMui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RiskDecision_Consolidated_Accept = function (_Component) {
  _inherits(RiskDecision_Consolidated_Accept, _Component);

  function RiskDecision_Consolidated_Accept(props) {
    _classCallCheck(this, RiskDecision_Consolidated_Accept);

    return _possibleConstructorReturn(this, (RiskDecision_Consolidated_Accept.__proto__ || Object.getPrototypeOf(RiskDecision_Consolidated_Accept)).call(this, props));
  }

  _createClass(RiskDecision_Consolidated_Accept, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _RiskDecisionCore2.default,
          { flightStatus: 'ACCEPT' },
          _react2.default.createElement(
            'div',
            { className: 'flex-row row-spacer-24' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_RaisedButton2.default, { label: 'Proceed to Execution', primary: true })
            )
          )
        )
      );
    }
  }]);

  return RiskDecision_Consolidated_Accept;
}(_react.Component);

exports.default = (0, _muiThemeable2.default)()(RiskDecision_Consolidated_Accept);