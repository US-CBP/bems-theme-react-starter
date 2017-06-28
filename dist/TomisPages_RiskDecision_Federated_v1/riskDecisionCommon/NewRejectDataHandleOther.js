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

var setStateIntelSource = function setStateIntelSource(intelSource, state, props) {
  return { intelSource: intelSource };
};

var setStateIntelType = function setStateIntelType(intelType, state, props) {
  return { intelType: intelType };
};

var NewRejectDataHandleOther = function (_Component) {
  _inherits(NewRejectDataHandleOther, _Component);

  function NewRejectDataHandleOther(props) {
    _classCallCheck(this, NewRejectDataHandleOther);

    var _this = _possibleConstructorReturn(this, (NewRejectDataHandleOther.__proto__ || Object.getPrototypeOf(NewRejectDataHandleOther)).call(this, props));

    _this.handleChangeInitAmo = _this.handleChangeInitAmo.bind(_this);
    _this.handleChangeIntelSource = _this.handleChangeIntelSource.bind(_this);
    _this.handleChangeIntelType = _this.handleChangeIntelType.bind(_this);
    _this.renderField = _this.renderField.bind(_this);
    _this.renderFieldInCurrentRow = _this.renderFieldInCurrentRow.bind(_this);
    _this.renderFieldInNewRow = _this.renderFieldInNewRow.bind(_this);

    _this.state = {
      initUsbp: '',
      otherAgency: '',
      intelSource: '',
      intelType: ''
    };
    return _this;
  }

  _createClass(NewRejectDataHandleOther, [{
    key: 'handleChangeInitAmo',
    value: function handleChangeInitAmo(evt, value) {
      evt.stopPropagation();
      console.log('value=', value);
    }
  }, {
    key: 'handleChangeIntelSource',
    value: function handleChangeIntelSource(value, arr, parms) {
      this.setState(setStateIntelSource.bind(this, value));
    }
  }, {
    key: 'handleChangeIntelType',
    value: function handleChangeIntelType(value, arr, parms) {
      this.setState(setStateIntelType.bind(this, value));
    }
  }, {
    key: 'renderField',
    value: function renderField() {
      return _react2.default.createElement(
        'div',
        { className: 'flex-1' },
        _react2.default.createElement(_TextFieldSimple2.default, { floatingLabelText: 'Other*' })
      );
    }
  }, {
    key: 'renderFieldInCurrentRow',
    value: function renderFieldInCurrentRow() {
      var intelSource = this.state.intelSource;

      if (intelSource.length === 0) {
        return this.renderField();
      } else {
        return false;
      }
    }
  }, {
    key: 'renderFieldInNewRow',
    value: function renderFieldInNewRow() {
      var intelSource = this.state.intelSource;

      if (intelSource.length > 0) {
        return _react2.default.createElement(
          'div',
          { className: 'flex-row' },
          this.renderField()
        );
      } else {
        return false;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var handleChangeInitAmo = this.handleChangeInitAmo,
          handleChangeIntelType = this.handleChangeIntelType,
          handleChangeIntelSource = this.handleChangeIntelSource,
          renderFieldInCurrentRow = this.renderFieldInCurrentRow,
          renderFieldInNewRow = this.renderFieldInNewRow;
      var _state = this.state,
          initUsbp = _state.initUsbp,
          otherAgency = _state.otherAgency;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'flex-row flex-1' },
          _react2.default.createElement(_TextFieldSimple2.default, { floatingLabelText: 'Mission Description' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex-row' },
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_AutoComplete2.default, { hintText: 'Choose Category', floatingLabelText: 'Category*' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_AutoComplete2.default, { hintText: 'Choose Type', floatingLabelText: 'Type*' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_AutoComplete2.default, { hintText: 'Choose Sub-Type', floatingLabelText: 'Sub-Type*' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex-row' },
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_AutoComplete2.default, { hintText: 'Choose Named Operation', floatingLabelText: 'Named Operation' })
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'flex-row' },
          _react2.default.createElement(
            'h3',
            null,
            'Coordinated Operation With'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex-row' },
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_ToggleButtons2.default, { labelText: 'Mission Initiated By AMO?*', valueSelected: '', options: _helper.toggleButtonsYesNoOptions, onChange: handleChangeInitAmo })
          ),
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_ToggleButtons2.default, { labelText: 'Mission Initiated by USBP?*', valueSelected: '', options: _helper.toggleButtonsYesNoOptions })
          ),
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_ToggleButtons2.default, { labelText: 'Coordinated with Other Agency*', valueSelected: '', options: _helper.toggleButtonsYesNoOptions })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex-row' },
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_AutoComplete2.default, { hintText: 'Choose Agency Group', floatingLabelText: 'Agency Group*' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_AutoComplete2.default, { hintText: 'Choose Agency Name', floatingLabelText: 'Agency Name*' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_TextFieldSimple2.default, { floatingLabelText: 'Other Agency Name*' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex-row' },
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_TextFieldSimple2.default, { floatingLabelText: 'Other/Agency Description*' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_AutoComplete2.default, { hintText: 'Choose SAC Name', floatingLabelText: 'SAC Name*' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_AutoComplete2.default, { hintText: 'Choose Office Name', floatingLabelText: 'Office Name*' })
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'flex-row' },
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_ToggleButtons2.default, { labelText: 'Is this mission based on Actionable Intelligence?*', valueSelected: '', options: _helper.toggleButtonsYesNoOptions })
          ),
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_AutoComplete2.default, { hintText: 'Choose Intelligence Source', floatingLabelText: 'Intelligence Source*', onUpdateInput: handleChangeIntelSource })
          ),
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            renderFieldInCurrentRow()
          )
        ),
        renderFieldInNewRow(),
        _react2.default.createElement(
          'div',
          { className: 'flex-row' },
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_AutoComplete2.default, { hintText: 'Choose Intel Type', floatingLabelText: 'Intel Type*', onUpdateInput: handleChangeIntelType })
          ),
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_TextFieldSimple2.default, { floatingLabelText: 'Other*' })
          ),
          _react2.default.createElement('div', { className: 'flex-1' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'flex-row' },
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            _react2.default.createElement(_ToggleButtons2.default, { labelText: 'Is this an Investigation Mission?*', valueSelected: '', options: _helper.toggleButtonsYesNoOptions })
          )
        )
      );
    }
  }]);

  return NewRejectDataHandleOther;
}(_react.Component);

exports.default = NewRejectDataHandleOther;