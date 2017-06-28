'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Chip = require('material-ui/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _face = require('material-ui/svg-icons/action/face');

var _face2 = _interopRequireDefault(_face);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

function handleRequestDelete() {
  alert('You clicked the delete button.');
}

function handleTouchTap() {
  alert('You clicked the Chip.');
}

/**
 * Examples of Chips, using an image [Avatar](/#/components/font-icon), [Font Icon](/#/components/font-icon) Avatar,
 * [SVG Icon](/#/components/svg-icon) Avatar, "Letter" (string) Avatar, and with custom colors.
 *
 * Chips with the `onRequestDelete` property defined will display a delete icon.
 */

var ChipExampleSimple = function (_React$Component) {
  _inherits(ChipExampleSimple, _React$Component);

  function ChipExampleSimple() {
    _classCallCheck(this, ChipExampleSimple);

    return _possibleConstructorReturn(this, (ChipExampleSimple.__proto__ || Object.getPrototypeOf(ChipExampleSimple)).apply(this, arguments));
  }

  _createClass(ChipExampleSimple, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: styles.wrapper },
        _react2.default.createElement(
          _Chip2.default,
          { style: styles.chip },
          'Text Chip'
        ),
        _react2.default.createElement(
          _Chip2.default,
          { onRequestDelete: handleRequestDelete, onTouchTap: handleTouchTap, style: styles.chip },
          'Deletable Text Chip'
        ),
        _react2.default.createElement(
          _Chip2.default,
          { onTouchTap: handleTouchTap, style: styles.chip },
          _react2.default.createElement(_Avatar2.default, { src: 'images/uxceo-128.jpg' }),
          'Image Avatar Chip'
        ),
        _react2.default.createElement(
          _Chip2.default,
          { onRequestDelete: handleRequestDelete, onTouchTap: handleTouchTap, style: styles.chip },
          _react2.default.createElement(_Avatar2.default, { src: 'images/ok-128.jpg' }),
          'Deletable Avatar Chip'
        ),
        _react2.default.createElement(
          _Chip2.default,
          { onTouchTap: handleTouchTap, style: styles.chip },
          _react2.default.createElement(_Avatar2.default, { icon: _react2.default.createElement(
              _FontIcon2.default,
              { className: 'material-icons' },
              'perm_identity'
            ) }),
          'FontIcon Avatar Chip'
        ),
        _react2.default.createElement(
          _Chip2.default,
          { onRequestDelete: handleRequestDelete, onTouchTap: handleTouchTap, style: styles.chip },
          _react2.default.createElement(_Avatar2.default, { color: '#444', icon: _react2.default.createElement(_face2.default, null) }),
          'SvgIcon Avatar Chip'
        ),
        _react2.default.createElement(
          _Chip2.default,
          { onTouchTap: handleTouchTap, style: styles.chip },
          _react2.default.createElement(
            _Avatar2.default,
            { size: 32 },
            'A'
          ),
          'Text Avatar Chip'
        ),
        _react2.default.createElement(
          _Chip2.default,
          { backgroundColor: _colors.blue300, onRequestDelete: handleRequestDelete, onTouchTap: handleTouchTap, style: styles.chip },
          _react2.default.createElement(
            _Avatar2.default,
            { size: 32, color: _colors.blue300, backgroundColor: _colors.indigo900 },
            'MB'
          ),
          'Colored Chip'
        )
      );
    }
  }]);

  return ChipExampleSimple;
}(_react2.default.Component);

exports.default = ChipExampleSimple;