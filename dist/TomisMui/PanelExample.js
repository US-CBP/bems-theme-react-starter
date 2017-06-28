'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Panel = require('../TomisMui/Panel');

var _Table = require('../TomisMui/Table');

var _ButtonRaisedSimplePrimary = require('../TomisMui/ButtonRaisedSimplePrimary');

var _ButtonRaisedSimplePrimary2 = _interopRequireDefault(_ButtonRaisedSimplePrimary);

var _delete = require('material-ui/svg-icons/action/delete');

var _delete2 = _interopRequireDefault(_delete);

var _Checkbox = require('../TomisMui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _IconButton = require('../TomisMui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var tableData = [{
  name: 'John Smith',
  status: 'Sample Justification 1',
  selected: true
}, {
  name: 'Randal White',
  status: 'Sample Justification 2'
}, {
  name: 'Stephanie Sanders',
  status: 'Sample Justification 3',
  selected: true
}, {
  name: 'Steve Brown',
  status: 'Sample Justification 4'
}, {
  name: 'Joyce Whitten',
  status: 'Sample Justification 5'
}, {
  name: 'Samuel Roberts',
  status: 'Sample Justification 6'
}, {
  name: 'Adam Moore',
  status: 'Sample Justification 7'
}];

var defaultProps = { label: 'Attachments' };

var PanelExample = function PanelExample(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'Panel Section'
    ),
    _react2.default.createElement(
      _Panel.Panel,
      null,
      _react2.default.createElement(
        _Panel.PanelHeaderSection,
        { title: 'Panel Section Title' },
        _react2.default.createElement(
          'a',
          { href: 'https://www.google.com', className: 'panel-link' },
          'Search Google'
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
            'Panel Body can contain any and all components you desire.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex-row' },
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            'Panel Body can contain any and all components you desire.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex-row' },
          _react2.default.createElement(
            'div',
            { className: 'flex-1' },
            'Panel Body can contain any and all components you desire.'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Panel with Table'
          ),
          _react2.default.createElement(
            _Panel.Panel,
            null,
            _react2.default.createElement(
              _Panel.PanelHeaderTable,
              { title: 'Example Panel with Table' },
              _react2.default.createElement(_ButtonRaisedSimplePrimary2.default, { label: 'Add A Row' })
            ),
            _react2.default.createElement(
              _Panel.PanelBody,
              null,
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  _Table.Table,
                  { height: '400px', fixedHeader: false, fixedFooter: false, selectable: false, multiSelectable: false },
                  _react2.default.createElement(
                    _Table.TableHeader,
                    { displaySelectAll: false, adjustForCheckbox: false, enableSelectAll: false },
                    _react2.default.createElement(
                      _Table.TableRow,
                      { selectable: false },
                      _react2.default.createElement(
                        _Table.TableHeaderColumn,
                        { tooltip: 'Primary' },
                        'Primary*'
                      ),
                      _react2.default.createElement(
                        _Table.TableHeaderColumn,
                        { tooltip: 'Category' },
                        'Category*'
                      ),
                      _react2.default.createElement(
                        _Table.TableHeaderColumn,
                        { tooltip: 'Sub-Category' },
                        'Sub-Category*'
                      ),
                      _react2.default.createElement(
                        _Table.TableHeaderColumn,
                        { tooltip: 'Justification' },
                        'Justification*'
                      ),
                      _react2.default.createElement(
                        _Table.TableHeaderColumn,
                        { tooltip: 'Delete' },
                        'Delete'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _Table.TableBody,
                    { displayRowCheckbox: false, deselectOnClickaway: false, showRowHover: true, stripedRows: false },
                    tableData.map(function (row, idx) {
                      return _react2.default.createElement(
                        _Table.TableRow,
                        { key: idx },
                        _react2.default.createElement(
                          _Table.TableRowColumn,
                          null,
                          _react2.default.createElement(_Checkbox2.default, null)
                        ),
                        _react2.default.createElement(
                          _Table.TableRowColumn,
                          null,
                          idx + 1
                        ),
                        _react2.default.createElement(
                          _Table.TableRowColumn,
                          null,
                          _react2.default.createElement(
                            'div',
                            { className: 'editable-cell' },
                            row.name
                          )
                        ),
                        _react2.default.createElement(
                          _Table.TableRowColumn,
                          null,
                          _react2.default.createElement(
                            'div',
                            { className: 'editable-cell' },
                            row.status
                          )
                        ),
                        _react2.default.createElement(
                          _Table.TableRowColumn,
                          null,
                          _react2.default.createElement(
                            _IconButton2.default,
                            { tooltip: 'Delete Row' },
                            _react2.default.createElement(_delete2.default, null)
                          )
                        )
                      );
                    })
                  )
                )
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null)
  );
};

exports.default = PanelExample;