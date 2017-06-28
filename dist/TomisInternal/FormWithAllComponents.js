'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _ToolbarCbpHeader = require('../TomisMui/ToolbarCbpHeader');

var _ToolbarCbpHeader2 = _interopRequireDefault(_ToolbarCbpHeader);

var _ToolbarActionBar = require('../TomisMui/ToolbarActionBar');

var _ToolbarActionBar2 = _interopRequireDefault(_ToolbarActionBar);

var _TextFieldSimple = require('../TomisMui/TextFieldSimple');

var _TextFieldSimple2 = _interopRequireDefault(_TextFieldSimple);

var _AutoComplete = require('../TomisMui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _ToggleButtons = require('../TomisMui/ToggleButtons');

var _ToggleButtons2 = _interopRequireDefault(_ToggleButtons);

var _FormRow = require('../TomisMui/helper/FormRow');

var _FormRow2 = _interopRequireDefault(_FormRow);

var _StyledComponents = require('../TomisMui/helper/StyledComponents');

var _helper = require('./helper');

var _DialogSimple = require('../TomisMui/DialogSimple');

var _DialogSimple2 = _interopRequireDefault(_DialogSimple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  flightStatus: ''
};

var propTypes = {
  flightStatus: _react.PropTypes.string.isRequired
};

var FormWithAllComponents = function (_Component) {
  _inherits(FormWithAllComponents, _Component);

  function FormWithAllComponents(props) {
    _classCallCheck(this, FormWithAllComponents);

    var _this = _possibleConstructorReturn(this, (FormWithAllComponents.__proto__ || Object.getPrototypeOf(FormWithAllComponents)).call(this, props));

    _this.state = {
      isPending: true,
      isAccept: false,
      isReject: false,
      flightStatus: 'PENDING',
      isConfirmVisible: false
    };

    _this.handleChangeFlightStatus = function (event, value) {
      event.stopPropagation();
      event.preventDefault();
      var prevFlightStatus = _this.prevFlightStatus;

      console.log('handleChangeFlightStatus, prevFlightStatus=', prevFlightStatus, ', value=', value);
      if (prevFlightStatus != 'PENDING' && value === 'PENDING') {
        _this.setState(_helper.setStateIsConfirmVisible.bind(_this, true));
      }
      _this.prevFlightStatus = value;
    };

    _this.handleCloseConfirm = function (buttonLabel, buttonIdx) {
      _this.setState(_helper.setStateIsConfirmVisible.bind(_this, false));
      if (buttonLabel === 'No') {
        _this.setState(_helper.setStateFlightStatus.bind(_this, _this.prevFlightStatus));
      }
    };

    _this.prevFlightStatus = 'PENDING';
    _this.requestedFlightStatus = '';
    return _this;
  }

  _createClass(FormWithAllComponents, [{
    key: 'render',
    value: function render() {
      var handleChangeFlightStatus = this.handleChangeFlightStatus,
          handleCloseConfirm = this.handleCloseConfirm;
      var _state = this.state,
          flightStatus = _state.flightStatus,
          isConfirmVisible = _state.isConfirmVisible;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_ToolbarCbpHeader2.default, null),
        _react2.default.createElement(_ToolbarActionBar2.default, { pageTitle: 'Form with All Components', isHideDeleteIcon: false }),
        _react2.default.createElement(
          'div',
          { className: 'flex-row' },
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_TextFieldSimple2.default, { floatingLabelText: 'All Components TF' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_AutoComplete2.default, { floatingLabelText: 'All Components LOV' })
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          'FormRow / FormCol Component Example'
        ),
        _react2.default.createElement(
          _FormRow2.default,
          null,
          _react2.default.createElement(
            _StyledComponents.FormCol,
            null,
            _react2.default.createElement(_TextFieldSimple2.default, { floatingLabelText: 'All Components TF' })
          ),
          _react2.default.createElement(
            _StyledComponents.FormCol,
            null,
            _react2.default.createElement(_AutoComplete2.default, { floatingLabelText: 'All Components LOV' })
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_ToggleButtons2.default, { labelText: 'Flight Status (RA)*', valueSelected: flightStatus, options: _helper.toggleButtonsOptions, onChange: handleChangeFlightStatus }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            null,
            'FlightStatus=',
            flightStatus
          )
        ),
        _react2.default.createElement(
          _DialogSimple2.default,
          { title: 'Warning', onRequestClose: handleCloseConfirm, initOpen: isConfirmVisible, modal: true, buttonLabels: ['Yes', 'No'] },
          _react2.default.createElement(
            'div',
            null,
            'You will lose all of your changes.  Is this ok?'
          )
        )
      );
    }
  }]);

  return FormWithAllComponents;
}(_react.Component);

exports.default = (0, _muiThemeable2.default)()(FormWithAllComponents);