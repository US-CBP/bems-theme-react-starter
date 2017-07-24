import React, { PropTypes } from 'react';
import { Panel, PanelHeaderSection, PanelHeaderTable, PanelBody } from '../BemsMui/Panel';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../BemsMui/Table';
import ButtonRaisedSimplePrimary from '../BemsMui/ButtonRaisedSimplePrimary';
import Checkbox from '../BemsMui/Checkbox';
import IconButton from '../BemsMui/IconButton';
import FontIcon from 'BemsMui/FontIcon';

const tableData = [
  {
    name: 'John Smith',
    status: 'Sample Justification 1',
    selected: true
  },
  {
    name: 'Randal White',
    status: 'Sample Justification 2'
  },
  {
    name: 'Stephanie Sanders',
    status: 'Sample Justification 3',
    selected: true
  },
  {
    name: 'Steve Brown',
    status: 'Sample Justification 4'
  },
  {
    name: 'Joyce Whitten',
    status: 'Sample Justification 5'
  },
  {
    name: 'Samuel Roberts',
    status: 'Sample Justification 6'
  },
  {
    name: 'Adam Moore',
    status: 'Sample Justification 7'
  }
];

const defaultProps = { label: 'Attachments' };

const PanelExample = ({ ...props }) => {
  return (
    <div>
      <h3>Panel Section</h3>
      <Panel>
        <PanelHeaderSection title="Panel Section Title">
          <a href="https://www.google.com" className="panel-link">
            Search Google
          </a>
        </PanelHeaderSection>
        <PanelBody>
          <div className="flex-row">
            <div className="flex-1">Panel Body can contain any and all components you desire.</div>
          </div>
          <div className="flex-row">
            <div className="flex-1">Panel Body can contain any and all components you desire.</div>
          </div>
          <div className="flex-row">
            <div className="flex-1">Panel Body can contain any and all components you desire.</div>
          </div>
          <div>
            <h3>Panel with Table</h3>
            <Panel>
              <PanelHeaderTable title="Example Panel with Table">
                <ButtonRaisedSimplePrimary label="Add A Row" />
              </PanelHeaderTable>
              <PanelBody>
                <div>
                  <Table height="400px" fixedHeader={false} fixedFooter={false} selectable={false} multiSelectable={false}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
                      <TableRow selectable={false}>
                        <TableHeaderColumn tooltip="Primary">Primary*</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Category">Category*</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Sub-Category">Sub-Category*</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Justification">Justification*</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Delete">Delete</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} deselectOnClickaway={false} showRowHover={true} stripedRows={false}>
                      {tableData.map((row, idx) =>
                        <TableRow key={idx}>
                          <TableRowColumn>
                            <Checkbox />
                          </TableRowColumn>
                          <TableRowColumn>
                            {idx + 1}
                          </TableRowColumn>
                          <TableRowColumn>
                            <div className="editable-cell">
                              {row.name}
                            </div>
                          </TableRowColumn>
                          <TableRowColumn>
                            <div className="editable-cell">
                              {row.status}
                            </div>
                          </TableRowColumn>
                          <TableRowColumn>
                            <IconButton>
                              <FontIcon name="delete" />
                            </IconButton>
                          </TableRowColumn>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </PanelBody>
            </Panel>
          </div>
        </PanelBody>
      </Panel>
      <br />
      <br />
    </div>
  );
};

export default PanelExample;
