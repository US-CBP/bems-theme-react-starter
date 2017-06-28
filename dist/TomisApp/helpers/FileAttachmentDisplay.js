'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Table = require('../../TomisMui/Table');

var _delete = require('material-ui/svg-icons/action/delete');

var _delete2 = _interopRequireDefault(_delete);

var _IconButton = require('../../TomisMui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _fileAttachmentUtils = require('./fileAttachmentUtils');

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _attachFile = require('material-ui/svg-icons/editor/attach-file');

var _attachFile2 = _interopRequireDefault(_attachFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initState = {
  fixedHeader: true,
  fixedFooter: false,
  stripedRows: false,
  showRowHover: true,
  selectable: false,
  multiSelectable: false,
  enableSelectAll: false,
  deselectOnClickaway: true,
  showCheckboxes: false,
  height: '300px'
};

var propTypes = {
  files: _propTypes2.default.array.isRequired,
  onDelete: _propTypes2.default.func.isRequired
};

var FileAttachmentDisplay = function (_Component) {
  _inherits(FileAttachmentDisplay, _Component);

  function FileAttachmentDisplay(props) {
    _classCallCheck(this, FileAttachmentDisplay);

    var _this = _possibleConstructorReturn(this, (FileAttachmentDisplay.__proto__ || Object.getPrototypeOf(FileAttachmentDisplay)).call(this, props));

    _this.state = initState;
    _this.delRow = _this.delRow.bind(_this);
    return _this;
  }

  _createClass(FileAttachmentDisplay, [{
    key: 'delRow',
    value: function delRow(idx, evt) {
      evt.stopPropagation();
      var onDelete = this.props.onDelete;

      onDelete(idx);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var delRow = this.delRow;
      var _state = this.state,
          height = _state.height,
          fixedHeader = _state.fixedHeader,
          fixedFooter = _state.fixedFooter,
          selectable = _state.selectable,
          multiSelectable = _state.multiSelectable,
          showCheckboxes = _state.showCheckboxes,
          deselectOnClickaway = _state.deselectOnClickaway,
          showRowHover = _state.showRowHover,
          stripedRows = _state.stripedRows;
      var _props = this.props,
          files = _props.files,
          onDrop = _props.onDrop;

      return _react2.default.createElement(
        'ul',
        { className: 'file-attachment-list' },
        _react2.default.createElement(
          'li',
          { className: 'file-attachment-block upload' },
          _react2.default.createElement(
            _reactDropzone2.default,
            { className: 'file-attachment-upload', onDrop: onDrop },
            _react2.default.createElement(
              'div',
              null,
              'Click to'
            ),
            _react2.default.createElement(
              'div',
              null,
              'Select File(s)'
            ),
            _react2.default.createElement(_attachFile2.default, { className: 'file-attachment-icon', style: { width: '36px', height: '36px' } })
          )
        ),
        files.map(function (file, idx) {
          return _react2.default.createElement(
            'li',
            { key: idx, className: 'file-attachment-block' },
            _react2.default.createElement(
              'div',
              { className: 'delete-icon' },
              _react2.default.createElement(
                _IconButton2.default,
                {
                  style: { padding: 0, width: '24px', height: '24px' },
                  tooltip: 'Delete',
                  tooltipPosition: 'bottom-left',
                  onTouchTap: delRow.bind(_this2, idx)
                },
                _react2.default.createElement(_delete2.default, null)
              )
            ),
            (0, _fileAttachmentUtils.getPreviewImage)(file),
            _react2.default.createElement(
              'div',
              { className: 'filename', title: file.name },
              file.name
            )
          );
        })
      );
    }
  }]);

  return FileAttachmentDisplay;
}(_react.Component);

exports.default = FileAttachmentDisplay;