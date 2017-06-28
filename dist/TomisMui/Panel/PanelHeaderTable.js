'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PanelHeader2 = require('./PanelHeader');

var _PanelHeader3 = _interopRequireDefault(_PanelHeader2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanelHeaderTable = function (_PanelHeader) {
  _inherits(PanelHeaderTable, _PanelHeader);

  function PanelHeaderTable() {
    _classCallCheck(this, PanelHeaderTable);

    return _possibleConstructorReturn(this, (PanelHeaderTable.__proto__ || Object.getPrototypeOf(PanelHeaderTable)).apply(this, arguments));
  }

  _createClass(PanelHeaderTable, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_PanelHeader3.default, _extends({}, this.props.other, this.props, { style: { backgroundColor: '#e9e9e9' } }));
    }
  }]);

  return PanelHeaderTable;
}(_PanelHeader3.default);

PanelHeaderTable.muiName = 'PanelHeaderTable';
exports.default = PanelHeaderTable;