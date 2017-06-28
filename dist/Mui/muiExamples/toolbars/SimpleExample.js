'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _expandMore = require('material-ui/svg-icons/navigation/expand-more');

var _expandMore2 = _interopRequireDefault(_expandMore);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _DropDownMenu = require('material-ui/DropDownMenu');

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Toolbar = require('material-ui/Toolbar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolbarExamplesSimple = function (_React$Component) {
  _inherits(ToolbarExamplesSimple, _React$Component);

  function ToolbarExamplesSimple(props) {
    _classCallCheck(this, ToolbarExamplesSimple);

    var _this = _possibleConstructorReturn(this, (ToolbarExamplesSimple.__proto__ || Object.getPrototypeOf(ToolbarExamplesSimple)).call(this, props));

    _this.handleChange = function (event, index, value) {
      return _this.setState({ value: value });
    };

    _this.state = {
      value: 3
    };
    return _this;
  }

  _createClass(ToolbarExamplesSimple, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Toolbar.Toolbar,
        null,
        _react2.default.createElement(
          _Toolbar.ToolbarGroup,
          { firstChild: true },
          _react2.default.createElement(
            _DropDownMenu2.default,
            { value: this.state.value, onChange: this.handleChange },
            _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'All Broadcasts' }),
            _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: 'All Voice' }),
            _react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: 'All Text' }),
            _react2.default.createElement(_MenuItem2.default, { value: 4, primaryText: 'Complete Voice' }),
            _react2.default.createElement(_MenuItem2.default, { value: 5, primaryText: 'Complete Text' }),
            _react2.default.createElement(_MenuItem2.default, { value: 6, primaryText: 'Active Voice' }),
            _react2.default.createElement(_MenuItem2.default, { value: 7, primaryText: 'Active Text' })
          )
        ),
        _react2.default.createElement(
          _Toolbar.ToolbarGroup,
          null,
          _react2.default.createElement(_Toolbar.ToolbarTitle, { text: 'Options' }),
          _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-custom-sort' }),
          _react2.default.createElement(_Toolbar.ToolbarSeparator, null),
          _react2.default.createElement(_RaisedButton2.default, { label: 'Create Broadcast', primary: true }),
          _react2.default.createElement(
            _IconMenu2.default,
            {
              iconButtonElement: _react2.default.createElement(
                _IconButton2.default,
                { touch: true },
                _react2.default.createElement(_expandMore2.default, null)
              )
            },
            _react2.default.createElement(_MenuItem2.default, { primaryText: 'Download' }),
            _react2.default.createElement(_MenuItem2.default, { primaryText: 'More Info' })
          )
        )
      );
    }
  }]);

  return ToolbarExamplesSimple;
}(_react2.default.Component);

exports.default = ToolbarExamplesSimple;