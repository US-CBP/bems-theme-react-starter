'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _RadioButton = require('material-ui/RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _Popover = require('material-ui/Popover/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _Menu = require('material-ui/Menu');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  h3: {
    marginTop: 20,
    fontWeight: 400
  },
  block: {
    display: 'flex'
  },
  block2: {
    margin: 10
  },
  pre: {
    overflow: 'hidden' // Fix a scrolling issue on iOS.
  }
};

var PopoverExampleConfigurable = function (_React$Component) {
  _inherits(PopoverExampleConfigurable, _React$Component);

  function PopoverExampleConfigurable(props) {
    _classCallCheck(this, PopoverExampleConfigurable);

    var _this = _possibleConstructorReturn(this, (PopoverExampleConfigurable.__proto__ || Object.getPrototypeOf(PopoverExampleConfigurable)).call(this, props));

    _this.handleTouchTap = function (event) {
      // This prevents ghost click.
      event.preventDefault();
      _this.setState({
        open: true,
        anchorEl: event.currentTarget
      });
    };

    _this.handleRequestClose = function () {
      _this.setState({
        open: false
      });
    };

    _this.setAnchor = function (positionElement, position) {
      var anchorOrigin = _this.state.anchorOrigin;

      anchorOrigin[positionElement] = position;

      _this.setState({
        anchorOrigin: anchorOrigin
      });
    };

    _this.setTarget = function (positionElement, position) {
      var targetOrigin = _this.state.targetOrigin;

      targetOrigin[positionElement] = position;

      _this.setState({
        targetOrigin: targetOrigin
      });
    };

    _this.state = {
      open: false,
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom'
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top'
      }
    };
    return _this;
  }

  _createClass(PopoverExampleConfigurable, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_RaisedButton2.default, { onTouchTap: this.handleTouchTap, label: 'Click me' }),
        _react2.default.createElement(
          'h3',
          { style: styles.h3 },
          'Current Settings'
        ),
        _react2.default.createElement(
          'pre',
          { style: styles.pre },
          'anchorOrigin: ',
          JSON.stringify(this.state.anchorOrigin),
          _react2.default.createElement('br', null),
          'targetOrigin: ',
          JSON.stringify(this.state.targetOrigin)
        ),
        _react2.default.createElement(
          'h3',
          { style: styles.h3 },
          'Position Options'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Use the settings below to toggle the positioning of the popovers above'
        ),
        _react2.default.createElement(
          'h3',
          { style: styles.h3 },
          'Anchor Origin'
        ),
        _react2.default.createElement(
          'div',
          { style: styles.block },
          _react2.default.createElement(
            'div',
            { style: styles.block2 },
            _react2.default.createElement(
              'span',
              null,
              'Vertical'
            ),
            _react2.default.createElement(_RadioButton2.default, { onClick: this.setAnchor.bind(this, 'vertical', 'top'), label: 'Top', checked: this.state.anchorOrigin.vertical === 'top' }),
            _react2.default.createElement(_RadioButton2.default, { onClick: this.setAnchor.bind(this, 'vertical', 'center'), label: 'Center', checked: this.state.anchorOrigin.vertical === 'center' }),
            _react2.default.createElement(_RadioButton2.default, { onClick: this.setAnchor.bind(this, 'vertical', 'bottom'), label: 'Bottom', checked: this.state.anchorOrigin.vertical === 'bottom' })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.block2 },
            _react2.default.createElement(
              'span',
              null,
              'Horizontal'
            ),
            _react2.default.createElement(_RadioButton2.default, { onClick: this.setAnchor.bind(this, 'horizontal', 'left'), label: 'Left', checked: this.state.anchorOrigin.horizontal === 'left' }),
            _react2.default.createElement(_RadioButton2.default, { onClick: this.setAnchor.bind(this, 'horizontal', 'middle'), label: 'Middle', checked: this.state.anchorOrigin.horizontal === 'middle' }),
            _react2.default.createElement(_RadioButton2.default, { onClick: this.setAnchor.bind(this, 'horizontal', 'right'), label: 'Right', checked: this.state.anchorOrigin.horizontal === 'right' })
          )
        ),
        _react2.default.createElement(
          'h3',
          { style: styles.h3 },
          'Target Origin'
        ),
        _react2.default.createElement(
          'div',
          { style: styles.block },
          _react2.default.createElement(
            'div',
            { style: styles.block2 },
            _react2.default.createElement(
              'span',
              null,
              'Vertical'
            ),
            _react2.default.createElement(_RadioButton2.default, { onClick: this.setTarget.bind(this, 'vertical', 'top'), label: 'Top', checked: this.state.targetOrigin.vertical === 'top' }),
            _react2.default.createElement(_RadioButton2.default, { onClick: this.setTarget.bind(this, 'vertical', 'center'), label: 'Center', checked: this.state.targetOrigin.vertical === 'center' }),
            _react2.default.createElement(_RadioButton2.default, { onClick: this.setTarget.bind(this, 'vertical', 'bottom'), label: 'Bottom', checked: this.state.targetOrigin.vertical === 'bottom' })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.block2 },
            _react2.default.createElement(
              'span',
              null,
              'Horizontal'
            ),
            _react2.default.createElement(_RadioButton2.default, { onClick: this.setTarget.bind(this, 'horizontal', 'left'), label: 'Left', checked: this.state.targetOrigin.horizontal === 'left' }),
            _react2.default.createElement(_RadioButton2.default, { onClick: this.setTarget.bind(this, 'horizontal', 'middle'), label: 'Middle', checked: this.state.targetOrigin.horizontal === 'middle' }),
            _react2.default.createElement(_RadioButton2.default, { onClick: this.setTarget.bind(this, 'horizontal', 'right'), label: 'Right', checked: this.state.targetOrigin.horizontal === 'right' })
          )
        ),
        _react2.default.createElement(
          _Popover2.default,
          {
            open: this.state.open,
            anchorEl: this.state.anchorEl,
            anchorOrigin: this.state.anchorOrigin,
            targetOrigin: this.state.targetOrigin,
            onRequestClose: this.handleRequestClose
          },
          _react2.default.createElement(
            _Menu.Menu,
            null,
            _react2.default.createElement(_Menu.MenuItem, { primaryText: 'Refresh' }),
            _react2.default.createElement(_Menu.MenuItem, { primaryText: 'Help & feedback' }),
            _react2.default.createElement(_Menu.MenuItem, { primaryText: 'Settings' }),
            _react2.default.createElement(_Menu.MenuItem, { primaryText: 'Sign out' })
          )
        )
      );
    }
  }]);

  return PopoverExampleConfigurable;
}(_react2.default.Component);

exports.default = PopoverExampleConfigurable;