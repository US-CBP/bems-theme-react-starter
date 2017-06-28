'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

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

var _TomisDatePicker = require('TomisApp/TomisDatePicker');

var _TomisDatePicker2 = _interopRequireDefault(_TomisDatePicker);

var _DialogSimple = require('../../TomisMui/DialogSimple');

var _DialogSimple2 = _interopRequireDefault(_DialogSimple);

var _NewRejectData = require('../riskDecisionCommon/NewRejectData');

var _NewRejectData2 = _interopRequireDefault(_NewRejectData);

var _Table = require('../../TomisMui/Table');

var _helper = require('./helper');

var _ConsolidatedReject = require('../riskDecisionCommon/ConsolidatedReject');

var _ConsolidatedReject2 = _interopRequireDefault(_ConsolidatedReject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initState = {
  isPending: true,
  isAccept: false,
  isReject: false,
  flightStatus: 'PENDING',
  isInfoVisible: false,
  isConfirmVisible: false
};

var defaultProps = {
  isDisplayNewRejectData: false
};

var propTypes = {
  isDisplayNewRejectData: _react.PropTypes.bool.isRequired
};

var RiskDecisionCore = function (_Component) {
  _inherits(RiskDecisionCore, _Component);

  function RiskDecisionCore(props) {
    _classCallCheck(this, RiskDecisionCore);

    var _this = _possibleConstructorReturn(this, (RiskDecisionCore.__proto__ || Object.getPrototypeOf(RiskDecisionCore)).call(this, props));

    _this.handleTouchTapInfo = function () {
      _this.setState(_helper.setStateIsInfoVisible.bind(_this, true));
    };

    _this.handleCloseInfo = function () {
      _this.setState(_helper.setStateIsInfoVisible.bind(_this, false));
    };

    _this.state = initState;
    _this.handleCloseConfirm = _this.handleCloseConfirm.bind(_this);
    _this.handleChangeFlightStatus = _this.handleChangeFlightStatus.bind(_this);
    var flightStatus = initState.flightStatus;

    _this.prevFlightStatus = flightStatus;
    return _this;
  }

  _createClass(RiskDecisionCore, [{
    key: 'handleChangeFlightStatus',
    value: function handleChangeFlightStatus(evt, val) {
      evt.stopPropagation();
      evt.preventDefault();
      var prevFlightStatus = this.prevFlightStatus;

      if (prevFlightStatus != 'PENDING' && val === 'PENDING') {
        this.setState(_helper.setStateIsConfirmVisible.bind(this, true));
      } else {
        this.prevFlightStatus = val;
        this.setState(_helper.setStateUasStatus.bind(this, this.prevFlightStatus));
      }
    }
  }, {
    key: 'handleCloseConfirm',
    value: function handleCloseConfirm(buttonLabel, buttonIdx) {
      console.log('handleCloseConfirm, buttonLabel=', buttonLabel, ', buttonIdx=', buttonIdx);
      this.setState(_helper.setStateIsConfirmVisible.bind(this, false));
      if (buttonLabel === 'No') {} else {
        this.prevFlightStatus = 'PENDING';
        this.setState(_helper.setStateUasStatus.bind(this, this.prevFlightStatus));
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
          isConfirmVisible = _state.isConfirmVisible;
      var _props = this.props,
          isDisplayNewRejectData = _props.isDisplayNewRejectData,
          isSaved = _props.isSaved;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _DialogSimple2.default,
          { title: 'Warning', onRequestClose: handleCloseConfirm, initOpen: isConfirmVisible, modal: true, buttonLabels: ['Yes', 'No'] },
          _react2.default.createElement(
            'div',
            null,
            'You will lose all of your changes. Is this ok?'
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
                    options: _helper.operationStatusUasToggleButtonOptions,
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
                    dataSource: _helper.numberOfMissionsLovValues,
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
                    dataSource: _helper.riskAssessmentLovValues,
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
                  { className: 'flex-1' },
                  _react2.default.createElement(_AutoComplete2.default, { hintText: 'Choose Title', floatingLabelText: 'Title' + (isAccept || isReject ? '*' : '') })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'flex-1' },
                  _react2.default.createElement(_AutoComplete2.default, { hintText: 'Choose Name', floatingLabelText: 'Name' + (isAccept || isReject ? '*' : '') })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'flex-1' },
                  _react2.default.createElement(_TomisDatePicker2.default, { floatingLabelText: 'Date' + (isAccept || isReject ? '*' : '') })
                )
              ),
              isDisplayNewRejectData && _react2.default.createElement(_NewRejectData2.default, null),
              _react2.default.createElement(
                'div',
                { className: 'row-spacer-24' },
                _react2.default.createElement(
                  'h3',
                  null,
                  'Attachments'
                ),
                _react2.default.createElement(_FileAttachment2.default, { label: 'Upload TSS Risk Assessment' })
              ),
              isReject && _react2.default.createElement(_ConsolidatedReject2.default, null),
              isAccept && isSaved && _react2.default.createElement(
                'div',
                { className: 'flex-row row-spacer-24' },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_ButtonRaisedSimplePrimary2.default, { label: 'Proceed to Execution' })
                )
              )
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