'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

var _filterList = require('material-ui/svg-icons/content/filter-list');

var _filterList2 = _interopRequireDefault(_filterList);

var _fileDownload = require('material-ui/svg-icons/file/file-download');

var _fileDownload2 = _interopRequireDefault(_fileDownload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Three controlled examples, the first allowing a single selection, the second multiple selections,
 * the third using internal state.
 */
var IconMenuExampleControlled = function (_Component) {
  _inherits(IconMenuExampleControlled, _Component);

  function IconMenuExampleControlled() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IconMenuExampleControlled);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IconMenuExampleControlled.__proto__ || Object.getPrototypeOf(IconMenuExampleControlled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      valueSingle: '3',
      valueMultiple: ['3', '5']
    }, _this.handleChangeSingle = function (event, value) {
      _this.setState({
        valueSingle: value
      });
    }, _this.handleChangeMultiple = function (event, value) {
      _this.setState({
        valueMultiple: value
      });
    }, _this.handleOpenMenu = function () {
      _this.setState({
        openMenu: true
      });
    }, _this.handleOnRequestChange = function (value) {
      _this.setState({
        openMenu: value
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IconMenuExampleControlled, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _IconMenu2.default,
          { iconButtonElement: _react2.default.createElement(
              _IconButton2.default,
              null,
              _react2.default.createElement(_moreVert2.default, null)
            ), onChange: this.handleChangeSingle, value: this.state.valueSingle },
          _react2.default.createElement(_MenuItem2.default, { value: '1', primaryText: 'Refresh' }),
          _react2.default.createElement(_MenuItem2.default, { value: '2', primaryText: 'Send feedback' }),
          _react2.default.createElement(_MenuItem2.default, { value: '3', primaryText: 'Settings' }),
          _react2.default.createElement(_MenuItem2.default, { value: '4', primaryText: 'Help' }),
          _react2.default.createElement(_MenuItem2.default, { value: '5', primaryText: 'Sign out' })
        ),
        _react2.default.createElement(
          _IconMenu2.default,
          {
            iconButtonElement: _react2.default.createElement(
              _IconButton2.default,
              null,
              _react2.default.createElement(_filterList2.default, null)
            ),
            onChange: this.handleChangeMultiple,
            value: this.state.valueMultiple,
            multiple: true
          },
          _react2.default.createElement(_MenuItem2.default, { value: '1', primaryText: 'Blu-ray' }),
          _react2.default.createElement(_MenuItem2.default, { value: '2', primaryText: 'Cassette' }),
          _react2.default.createElement(_MenuItem2.default, { value: '3', primaryText: 'CD' }),
          _react2.default.createElement(_MenuItem2.default, { value: '4', primaryText: 'DVD Audio' }),
          _react2.default.createElement(_MenuItem2.default, { value: '5', primaryText: 'Hybrid SACD' }),
          _react2.default.createElement(_MenuItem2.default, { value: '6', primaryText: 'Vinyl' })
        ),
        _react2.default.createElement(
          _IconMenu2.default,
          { iconButtonElement: _react2.default.createElement(
              _IconButton2.default,
              null,
              _react2.default.createElement(_fileDownload2.default, null)
            ), open: this.state.openMenu, onRequestChange: this.handleOnRequestChange },
          _react2.default.createElement(_MenuItem2.default, { value: '1', primaryText: 'Windows App' }),
          _react2.default.createElement(_MenuItem2.default, { value: '2', primaryText: 'Mac App' }),
          _react2.default.createElement(_MenuItem2.default, { value: '3', primaryText: 'Android App' }),
          _react2.default.createElement(_MenuItem2.default, { value: '4', primaryText: 'iOS App' })
        ),
        _react2.default.createElement(_RaisedButton2.default, { onTouchTap: this.handleOpenMenu, label: 'Downloads' })
      );
    }
  }]);

  return IconMenuExampleControlled;
}(_react.Component);

exports.default = IconMenuExampleControlled;