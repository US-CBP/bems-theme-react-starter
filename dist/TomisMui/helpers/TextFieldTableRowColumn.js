'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FlatButton = require('../../TomisMui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Popover = require('../../TomisMui/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _TextFieldSimple = require('../../TomisMui/TextFieldSimple');

var _TextFieldSimple2 = _interopRequireDefault(_TextFieldSimple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var setStateIsOpen = function setStateIsOpen(isOpen, props, state) {
  return { isOpen: isOpen };
};

var setStateValue = function setStateValue(value, props, state) {
  return { value: value };
};

var initState = { isOpen: false, value: null };

var defaultProps = { hintText: 'Enter a Value', floatingLabelText: 'Value' };
var propTypes = {
  rowData: _propTypes2.default.object.isRequired,
  rowPropertyName: _propTypes2.default.string.isRequired,
  rowIdx: _propTypes2.default.number.isRequired,
  onSave: _propTypes2.default.func.isRequired,
  hintText: _propTypes2.default.node,
  floatingLabelText: _propTypes2.default.node
};

var anchorOrigin = { horizontal: 'left', vertical: 'top' };
var targetOrigin = { horizontal: 'left', vertical: 'top' };

var TextFieldTableRowColumn = function (_Component) {
  _inherits(TextFieldTableRowColumn, _Component);

  function TextFieldTableRowColumn(props) {
    _classCallCheck(this, TextFieldTableRowColumn);

    var _this = _possibleConstructorReturn(this, (TextFieldTableRowColumn.__proto__ || Object.getPrototypeOf(TextFieldTableRowColumn)).call(this, props));

    var rowIdx = props.rowIdx;

    _this.state = initState;
    _this.popoverAnchor = null;
    _this.handleClickToOpen = _this.handleClickToOpen.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.handleOnChangeValue = _this.handleOnChangeValue.bind(_this);
    _this.handleRequestSave = _this.handleRequestSave.bind(_this);
    _this.renderCellValue = _this.renderCellValue.bind(_this);
    return _this;
  }

  _createClass(TextFieldTableRowColumn, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          rowData = _props.rowData,
          rowPropertyName = _props.rowPropertyName;

      this.setState(setStateValue.bind(this, rowData[rowPropertyName]));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var rowData = nextProps.rowData,
          rowPropertyName = nextProps.rowPropertyName;

      this.setState(setStateValue.bind(this, rowData[rowPropertyName]));
    }
  }, {
    key: 'handleClickToOpen',
    value: function handleClickToOpen() {
      this.setState(setStateIsOpen.bind(this, true));
      var _props2 = this.props,
          rowData = _props2.rowData,
          rowPropertyName = _props2.rowPropertyName;

      this.setState(setStateValue.bind(this, rowData[rowPropertyName]));
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState(setStateIsOpen.bind(this, false));
    }
  }, {
    key: 'handleRequestSave',
    value: function handleRequestSave() {
      var newValue = this.state.value;
      var _props3 = this.props,
          rowIdx = _props3.rowIdx,
          rowPropertyName = _props3.rowPropertyName,
          onSave = _props3.onSave;

      onSave(rowIdx, rowPropertyName, newValue);
      this.handleRequestClose();
    }
  }, {
    key: 'handleOnChangeValue',
    value: function handleOnChangeValue(event, newValue) {
      this.setState(setStateValue.bind(this, newValue));
    }
  }, {
    key: 'renderCellValue',
    value: function renderCellValue() {
      var _props4 = this.props,
          rowData = _props4.rowData,
          rowPropertyName = _props4.rowPropertyName,
          hintText = _props4.hintText;

      var displayVal = rowData[rowPropertyName];
      if (displayVal && displayVal.length > 0) {
        return _react2.default.createElement(
          'span',
          null,
          displayVal
        );
      } else {
        return _react2.default.createElement(
          'span',
          { style: { color: 'rgba(0, 0, 0, 0.54)' } },
          hintText
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var popoverAnchor = this.popoverAnchor,
          handleClickToOpen = this.handleClickToOpen,
          handleRequestClose = this.handleRequestClose,
          handleRequestSave = this.handleRequestSave,
          handleOnChangeValue = this.handleOnChangeValue,
          renderCellValue = this.renderCellValue;
      var _state = this.state,
          isOpen = _state.isOpen,
          value = _state.value;
      var _props5 = this.props,
          rowIdx = _props5.rowIdx,
          rowData = _props5.rowData,
          rowPropertyName = _props5.rowPropertyName,
          hintText = _props5.hintText,
          floatingLabelText = _props5.floatingLabelText;

      return _react2.default.createElement(
        'div',
        { ref: function ref(_ref) {
            return _this2.popoverAnchor = _ref;
          }, className: 'editable-cell', onClick: handleClickToOpen },
        renderCellValue(),
        _react2.default.createElement(
          _Popover2.default,
          {
            open: isOpen,
            anchorEl: popoverAnchor,
            anchorOrigin: anchorOrigin,
            targetOrigin: targetOrigin,
            onRequestClose: handleRequestClose,
            animated: false
          },
          _react2.default.createElement(
            'div',
            { className: 'editable-popover' },
            _react2.default.createElement(_TextFieldSimple2.default, { value: value, onChange: handleOnChangeValue, hintText: hintText, fullWidth: true, floatingLabelText: floatingLabelText }),
            _react2.default.createElement(
              'div',
              { className: 'flex-row' },
              _react2.default.createElement(_FlatButton2.default, { label: 'Cancel', primary: true, onClick: handleRequestClose }),
              _react2.default.createElement(_FlatButton2.default, { label: 'Save', primary: true, onClick: handleRequestSave })
            )
          )
        )
      );
    }
  }]);

  return TextFieldTableRowColumn;
}(_react.Component);

TextFieldTableRowColumn.defaultProps = defaultProps;
TextFieldTableRowColumn.propTypes = propTypes;
exports.default = TextFieldTableRowColumn;