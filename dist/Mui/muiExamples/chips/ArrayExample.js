'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Chip = require('material-ui/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * Note that since no `onTouchTap` property is defined, the Chip can be focused, but does not gain depth
 * while clicked or touched.
 */
var ChipExampleArray = function (_React$Component) {
  _inherits(ChipExampleArray, _React$Component);

  function ChipExampleArray(props) {
    _classCallCheck(this, ChipExampleArray);

    var _this = _possibleConstructorReturn(this, (ChipExampleArray.__proto__ || Object.getPrototypeOf(ChipExampleArray)).call(this, props));

    _this.handleRequestDelete = function (key) {
      if (key === 3) {
        alert('Why would you want to delete React?! :)');
        return;
      }

      _this.chipData = _this.state.chipData;
      var chipToDelete = _this.chipData.map(function (chip) {
        return chip.key;
      }).indexOf(key);
      _this.chipData.splice(chipToDelete, 1);
      _this.setState({ chipData: _this.chipData });
    };

    _this.state = {
      chipData: [{ key: 0, label: 'Angular' }, { key: 1, label: 'JQuery' }, { key: 2, label: 'Polymer' }, { key: 3, label: 'ReactJS' }]
    };
    _this.styles = {
      chip: {
        margin: 4
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
      }
    };
    return _this;
  }

  _createClass(ChipExampleArray, [{
    key: 'renderChip',
    value: function renderChip(data) {
      var _this2 = this;

      return _react2.default.createElement(
        _Chip2.default,
        { key: data.key, onRequestDelete: function onRequestDelete() {
            return _this2.handleRequestDelete(data.key);
          }, style: this.styles.chip },
        data.label
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: this.styles.wrapper },
        this.state.chipData.map(this.renderChip, this)
      );
    }
  }]);

  return ChipExampleArray;
}(_react2.default.Component);

exports.default = ChipExampleArray;