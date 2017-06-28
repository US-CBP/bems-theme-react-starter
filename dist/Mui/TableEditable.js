'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('material-ui/Table');

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0'
  },
  propToggleHeader: {
    margin: '20px auto 10px'
  }
};

var tableData = [{
  name: 'John Smith',
  status: 'Employed',
  selected: true
}, {
  name: 'Randal White',
  status: 'Unemployed'
}, {
  name: 'Stephanie Sanders',
  status: 'Employed',
  selected: true
}, {
  name: 'Steve Brown',
  status: 'Employed'
}, {
  name: 'Joyce Whitten',
  status: 'Employed'
}, {
  name: 'Samuel Roberts',
  status: 'Employed'
}, {
  name: 'Adam Moore',
  status: 'Employed'
}];

var TableEditable = function (_React$Component) {
  _inherits(TableEditable, _React$Component);

  function TableEditable(props) {
    _classCallCheck(this, TableEditable);

    var _this = _possibleConstructorReturn(this, (TableEditable.__proto__ || Object.getPrototypeOf(TableEditable)).call(this, props));

    _this.handleToggle = function (event, toggled) {
      _this.setState(_defineProperty({}, event.target.name, toggled));
    };

    _this.handleChange = function (event) {
      _this.setState({ height: event.target.value });
    };

    _this.state = {
      fixedHeader: true,
      fixedFooter: false,
      stripedRows: true,
      showRowHover: true,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '500px'
    };
    return _this;
  }

  _createClass(TableEditable, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Table.Table,
          {
            height: this.state.height,
            fixedHeader: this.state.fixedHeader,
            fixedFooter: this.state.fixedFooter,
            selectable: this.state.selectable,
            multiSelectable: this.state.multiSelectable
          },
          _react2.default.createElement(
            _Table.TableHeader,
            {
              displaySelectAll: this.state.showCheckboxes,
              adjustForCheckbox: this.state.showCheckboxes,
              enableSelectAll: this.state.enableSelectAll
            },
            _react2.default.createElement(
              _Table.TableRow,
              null,
              _react2.default.createElement(
                _Table.TableHeaderColumn,
                { tooltip: 'The ID' },
                'ID'
              ),
              _react2.default.createElement(
                _Table.TableHeaderColumn,
                { tooltip: 'The Name' },
                'Name'
              ),
              _react2.default.createElement(
                _Table.TableHeaderColumn,
                { tooltip: 'The Status' },
                'Status'
              )
            )
          ),
          _react2.default.createElement(_Table.TableBody, {
            displayRowCheckbox: this.state.showCheckboxes,
            deselectOnClickaway: this.state.deselectOnClickaway,
            showRowHover: this.state.showRowHover,
            stripedRows: this.state.stripedRows
          })
        )
      );
    }
  }]);

  return TableEditable;
}(_react2.default.Component);

exports.default = TableEditable;