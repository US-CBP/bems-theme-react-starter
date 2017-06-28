'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleButtonsOptions = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _TextField = require('../TomisMui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _HeaderNavAction = require('../TomisMui/HeaderNavAction');

var _HeaderNavAction2 = _interopRequireDefault(_HeaderNavAction);

var _RaisedButton = require('../TomisMui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Panel = require('../TomisMui/Panel');

var _AutoComplete = require('../TomisMui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _Table = require('../TomisMui/Table');

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _delete = require('material-ui/svg-icons/action/delete');

var _delete2 = _interopRequireDefault(_delete);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _eventNote = require('material-ui/svg-icons/notification/event-note');

var _eventNote2 = _interopRequireDefault(_eventNote);

var _arrowDropDown = require('material-ui/svg-icons/navigation/arrow-drop-down');

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _ToggleButtons = require('../TomisMui/ToggleButtons');

var _ToggleButtons2 = _interopRequireDefault(_ToggleButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var toggleButtonsOptions = exports.toggleButtonsOptions = [{ label: 'Executed', value: 'EXECUTED' }, { label: 'Canceled', value: 'CANCELED' }];

var initState = {
  dataSource1: [],
  dataSource2: [],
  isExpanded: true,
  demoDate: new Date(),
  autoOk: false,
  disableYearSelection: false
};

var defaultProps = {
  isAccept: false,
  isReject: false
};

var propTypes = {
  isAccept: _react.PropTypes.bool,
  isReject: _react.PropTypes.bool
};

var selectedBackgroundColor = 'rgba(0,0,0,0.27)';
var unselectedBackgroundColor = '#ffffff';

var selectedLabelColor = 'rgba(0,0,0,0.87)';
var unselectedLabelColor = 'rgba(0,0,0,0.54)';

var GroundRiskDecision = function (_Component) {
  _inherits(GroundRiskDecision, _Component);

  function GroundRiskDecision(props) {
    _classCallCheck(this, GroundRiskDecision);

    var _this = _possibleConstructorReturn(this, (GroundRiskDecision.__proto__ || Object.getPrototypeOf(GroundRiskDecision)).call(this, props));

    _this.handleChangeDemoDate = function (event, date) {
      _this.setState({
        demoDate: date
      });
    };

    _this.getBackgroundColorAccept = function () {
      var isAccept = _this.props.isAccept;

      return isAccept ? selectedBackgroundColor : unselectedBackgroundColor;
    };

    _this.getLabelColorAccept = function () {
      var isAccept = _this.props.isAccept;

      return isAccept ? selectedLabelColor : unselectedLabelColor;
    };

    _this.getBackgroundColorReject = function () {
      var isReject = _this.props.isReject;

      return isReject ? selectedBackgroundColor : unselectedBackgroundColor;
    };

    _this.getLabelColorReject = function () {
      var isReject = _this.props.isReject;

      return isReject ? selectedLabelColor : unselectedLabelColor;
    };

    _this.state = initState;
    _this.handleUpdateInput = _this.handleUpdateInput.bind(_this);
    return _this;
  }

  _createClass(GroundRiskDecision, [{
    key: 'handleUpdateInput',
    value: function handleUpdateInput(value) {
      this.setState({
        dataSource1: [value, value + value, value + value + value],
        dataSource2: [value, value + value, value + value + value]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var getBackgroundColorAccept = this.getBackgroundColorAccept,
          getLabelColorAccept = this.getLabelColorAccept,
          getBackgroundColorReject = this.getBackgroundColorReject,
          getLabelColorReject = this.getLabelColorReject;
      var _props = this.props,
          isAccept = _props.isAccept,
          isReject = _props.isReject;
      var _state = this.state,
          dataSource1 = _state.dataSource1,
          dataSource2 = _state.dataSource2;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_HeaderNavAction2.default, { actionBarPageTitle: 'Ground Operation' }),
        _react2.default.createElement(
          'div',
          { className: 'outer-card-margin' },
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
                  null,
                  _react2.default.createElement(_ToggleButtons2.default, { labelText: 'Ground Operation Status*', valueSelected: 'EXECUTED', options: toggleButtonsOptions })
                )
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                null,
                'Execution May Begin'
              )
            )
          )
        )
      );
    }
  }]);

  return GroundRiskDecision;
}(_react.Component);

GroundRiskDecision.defaultProps = defaultProps;
GroundRiskDecision.propTypes = propTypes;

exports.default = GroundRiskDecision;