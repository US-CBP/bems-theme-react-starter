'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _HeaderNavAction = require('../../TomisMui/HeaderNavAction');

var _HeaderNavAction2 = _interopRequireDefault(_HeaderNavAction);

var _Panel = require('../../TomisMui/Panel');

var _ToggleButtons = require('../../TomisMui/ToggleButtons');

var _ToggleButtons2 = _interopRequireDefault(_ToggleButtons);

var _TextFieldSimple = require('../../TomisMui/TextFieldSimple');

var _TextFieldSimple2 = _interopRequireDefault(_TextFieldSimple);

var _AutoComplete = require('../../TomisMui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _AutoCompleteInfo = require('../../TomisMui/AutoCompleteInfo');

var _AutoCompleteInfo2 = _interopRequireDefault(_AutoCompleteInfo);

var _ButtonRaisedSimplePrimary = require('../../TomisMui/ButtonRaisedSimplePrimary');

var _ButtonRaisedSimplePrimary2 = _interopRequireDefault(_ButtonRaisedSimplePrimary);

var _FileAttachment = require('../../TomisMui/FileAttachment');

var _FileAttachment2 = _interopRequireDefault(_FileAttachment);

var _DatePickerInlineLandscape = require('../../TomisMui/DatePickerInlineLandscape');

var _DatePickerInlineLandscape2 = _interopRequireDefault(_DatePickerInlineLandscape);

var _DialogSimple = require('../../TomisMui/DialogSimple');

var _DialogSimple2 = _interopRequireDefault(_DialogSimple);

var _Table = require('../../TomisMui/Table');

var _helper = require('./helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var numberOfMissionsLovValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];

var tableData = [{
  name: '< 25',
  status: '25 - 45',
  selected: '> 45'
}, {
  name: '< 35',
  status: '35 - 55',
  selected: '> 55'
}, {
  name: '< 45',
  status: '35 - 55',
  selected: '> 55'
}, {
  name: '< 55',
  status: '55 - 75',
  selected: '> 75'
}, {
  name: '< 65',
  status: '65 - 85',
  selected: '> 85'
}, {
  name: '< 75',
  status: '75 - 95',
  selected: '> 95'
}];

var riskAssessmentLovValues = ['LOW', 'MEDIUM', 'HIGH'];

var defaultProps = {
  flightStatus: ''
};

var propTypes = {
  flightStatus: _react.PropTypes.string.isRequired
};

var RiskDecisionCore = function (_Component) {
  _inherits(RiskDecisionCore, _Component);

  function RiskDecisionCore(props) {
    _classCallCheck(this, RiskDecisionCore);

    var _this = _possibleConstructorReturn(this, (RiskDecisionCore.__proto__ || Object.getPrototypeOf(RiskDecisionCore)).call(this, props));

    _this.state = {
      isPanelExpanded: true,
      isPending: true,
      isAccept: false,
      isReject: false,
      flightStatus: '',
      isInfoVisible: false,
      isConfirmVisible: false
    };

    _this.handleTouchTapInfo = function () {
      _this.setState(_helper.setStateIsInfoVisible.bind(_this, true));
    };

    _this.handleCloseInfo = function () {
      _this.setState(_helper.setStateIsInfoVisible.bind(_this, false));
    };

    _this.handleCloseConfirm = _this.handleCloseConfirm.bind(_this);
    _this.handleChangeFlightStatus = _this.handleChangeFlightStatus.bind(_this);
    _this.prevFlightStatus = 'PENDING';
    return _this;
  }

  _createClass(RiskDecisionCore, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var flightStatus = this.props.flightStatus;

      this.setState(_helper.setStateFlightStatus.bind(this, flightStatus));
    }
  }, {
    key: 'handleChangeFlightStatus',
    value: function handleChangeFlightStatus(event, value) {
      event.stopPropagation();
      event.preventDefault();
      var prevFlightStatus = this.prevFlightStatus;

      console.log('handleChangeFlightStatus, prevFlightStatus=', prevFlightStatus, ', value=', value);
      if (prevFlightStatus != 'PENDING' && value === 'PENDING') {
        this.setState(_helper.setStateIsConfirmVisible.bind(this, true));
      }
      this.prevFlightStatus = value;
    }
  }, {
    key: 'handleCloseConfirm',
    value: function handleCloseConfirm(buttonLabel, buttonIdx) {
      console.log('handleCloseConfirm, buttonLabel=', buttonLabel, ', buttonIdx=', buttonIdx);
      this.setState(_helper.setStateIsConfirmVisible.bind(this, false));
      if (buttonLabel === 'No') {
        this.setState(_helper.setStateFlightStatus.bind(this, this.prevFlightStatus));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var getBackgroundColorAccept = this.getBackgroundColorAccept,
          getLabelColorAccept = this.getLabelColorAccept,
          getBackgroundColorReject = this.getBackgroundColorReject,
          getLabelColorReject = this.getLabelColorReject,
          handleTouchTapInfo = this.handleTouchTapInfo,
          handleCloseInfo = this.handleCloseInfo,
          handleChangeFlightStatus = this.handleChangeFlightStatus,
          handleCloseConfirm = this.handleCloseConfirm;
      var _state = this.state,
          isPending = _state.isPending,
          isAccept = _state.isAccept,
          isReject = _state.isReject,
          flightStatus = _state.flightStatus,
          isInfoVisible = _state.isInfoVisible,
          isConfirmVisible = _state.isConfirmVisible,
          isPanelExpanded = _state.isPanelExpanded;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_HeaderNavAction2.default, { actionBarPageTitle: 'Flight Planning' }),
        isInfoVisible && _react2.default.createElement(
          _DialogSimple2.default,
          { title: '(17 Total Risk Assessment Range)', onRequestClose: handleCloseInfo, initOpen: isInfoVisible, buttonLabels: ['Ok'] },
          _react2.default.createElement(
            _Table.Table,
            { height: 300, fixedHeader: true, selectable: false, multiSelectable: false },
            _react2.default.createElement(
              _Table.TableHeader,
              { displaySelectAll: false, adjustForCheckbox: false, enableSelectAll: false },
              _react2.default.createElement(
                _Table.TableRow,
                { selectable: false },
                _react2.default.createElement(
                  _Table.TableHeaderColumn,
                  { tooltip: '# Crew Members' },
                  '# CREW MEMBERS'
                ),
                _react2.default.createElement(
                  _Table.TableHeaderColumn,
                  { tooltip: 'Low' },
                  'LOW'
                ),
                _react2.default.createElement(
                  _Table.TableHeaderColumn,
                  { tooltip: 'Medium' },
                  'MEDIUM'
                ),
                _react2.default.createElement(
                  _Table.TableHeaderColumn,
                  { tooltip: 'High' },
                  'HIGH'
                )
              )
            ),
            _react2.default.createElement(
              _Table.TableBody,
              { displayRowCheckbox: false, deselectOnClickaway: false, showRowHover: false, stripedRows: false },
              tableData.map(function (row, index) {
                return _react2.default.createElement(
                  _Table.TableRow,
                  { key: index, selected: row.selected },
                  _react2.default.createElement(
                    _Table.TableRowColumn,
                    null,
                    index + 1
                  ),
                  _react2.default.createElement(
                    _Table.TableRowColumn,
                    null,
                    row.name
                  ),
                  _react2.default.createElement(
                    _Table.TableRowColumn,
                    null,
                    row.status
                  ),
                  _react2.default.createElement(
                    _Table.TableRowColumn,
                    null,
                    row.selected
                  )
                );
              })
            )
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
        ),
        _react2.default.createElement(
          'div',
          { className: 'outer-card-margin' },
          _react2.default.createElement(
            _Panel.Panel,
            null,
            _react2.default.createElement(
              _Panel.PanelHeaderSection,
              { title: 'Risk Decision' },
              _react2.default.createElement(
                'a',
                {
                  href: 'https://uconnect.cbpnet.cbp.dhs.gov/sites/OIT/bems/BEI/tomis/OAM/Forms/AllItems.aspx?RootFolder=%2Fsites%2FOIT%2Fbems%2FBEI%2Ftomis%2FOAM%2FTest%20for%20PRD&FolderCTID=0x012000E16EFDC3EAB388448214D711CE710140&View=%7BE25102CE%2DEA12%2D4305%2D90B1%2DD0037623B83F%7D',
                  style: { marginLeft: '0px' },
                  className: 'panel-link'
                },
                'Risk Assessment Form'
              )
            ),
            _react2.default.createElement(
              _Panel.PanelBody,
              null,
              _react2.default.createElement(
                'div',
                { className: 'flex-row' },
                _react2.default.createElement(
                  'div',
                  { className: 'flex-1' },
                  _react2.default.createElement(_ToggleButtons2.default, {
                    labelText: 'Flight Status (RA)*',
                    valueSelected: flightStatus,
                    options: _helper.toggleButtonsOptions,
                    onChange: handleChangeFlightStatus
                  })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'flex-row' },
                _react2.default.createElement(
                  'div',
                  { className: 'flex-1' },
                  _react2.default.createElement(_AutoComplete2.default, {
                    dataSource: numberOfMissionsLovValues,
                    hintText: 'Number of Missions',
                    floatingLabelText: 'Number of Missions' + (isAccept || isReject ? '*' : '')
                  })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'flex-1' },
                  _react2.default.createElement(_TextFieldSimple2.default, { hintText: 'Risk Score', fullWidth: true, floatingLabelText: 'Risk Score' + (isAccept ? '*' : '') })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'flex-1' },
                  _react2.default.createElement(_AutoComplete2.default, {
                    dataSource: riskAssessmentLovValues,
                    hintText: 'Total Risk Assessment Range',
                    floatingLabelText: 'Total Risk Assessment Range' + (isAccept ? '*' : '')
                  })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'flex-row' },
                _react2.default.createElement(
                  'div',
                  { className: 'flex-1 flex-row' },
                  _react2.default.createElement(_AutoComplete2.default, { hintText: 'Choose Title', floatingLabelText: 'Title' + (isAccept || isReject ? '*' : '') })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'flex-1 flex-column-pad flex-row' },
                  _react2.default.createElement(_AutoComplete2.default, { hintText: 'Choose Name', floatingLabelText: 'Name' + (isAccept || isReject ? '*' : '') })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'flex-1 flex-column-pad flex-row' },
                  _react2.default.createElement(_DatePickerInlineLandscape2.default, { floatingLabelText: 'Date' + (isAccept || isReject ? '*' : '') })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row-spacer-24' },
                _react2.default.createElement(_FileAttachment2.default, null)
              ),
              this.props.children
            )
          )
        )
      );
    }
  }]);

  return RiskDecisionCore;
}(_react.Component);

RiskDecisionCore.defaultProps = defaultProps;
RiskDecisionCore.propTypes = propTypes;

exports.default = RiskDecisionCore;