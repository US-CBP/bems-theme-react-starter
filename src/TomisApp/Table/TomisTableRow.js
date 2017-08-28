// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';
import Popover from 'material-ui/internal/Popover';
import Typography from 'material-ui/Typography';
import TomisButtonFlat from 'TomisApp/TomisButtonFlat';
import Paper from 'material-ui/Paper';
import { getDisplayTableRowValue } from 'globalJs/functions';
import { TomisTableCell } from 'TomisApp/TomisTable';
import { TableRow } from 'material-ui/Table';
import TomisButtonIcon from 'TomisApp/TomisButtonIcon';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';

export const styles = theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.text.lightDivider}`,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'left'
    },
    numeric: {
        textAlign: 'right',
        flexDirection: 'row-reverse' // can be dynamically inherited at runtime by contents
    },
    head: {
        whiteSpace: 'pre'
    },
    padding: {
        padding: `0 ${theme.spacing.unit * 7}px 0 ${theme.spacing.unit * 3}px`,
        '&:last-child': {
            paddingRight: theme.spacing.unit * 3
        }
    },
    compact: {
        paddingRight: theme.spacing.unit * 3
    },
    checkbox: {
        paddingLeft: 12,
        paddingRight: 12
    },
    popover: {
        padding: '12px',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        marginLeft: '-16px',
        marginTop: '-16px'
    },
    popoverContent: {
        padding: '24px'
    },
    footer: {}
});

const anchorOrigin = { horizontal: 'left', vertical: 'top' };
const targetOrigin = { horizontal: 'left', vertical: 'top' };

let openCell = null;
let lovOptions = [];
const minHeightPopover = 180;
const heightLovOption = 48;

const handleClick = (rowIdx, onRequestOpen, onRequestClose, isOpen, evt) => {
    evt.stopPropagation();
    openCell = evt.currentTarget;
    if (isOpen) {
        onRequestClose();
    } else {
        onRequestOpen(rowIdx);
    }
};

const preventClickFromGoingToPopover = evt => {
    evt.preventDefault();
    evt.stopPropagation();
    return false;
};

const propTypes = {
    children: PropTypes.func.isRequired
};

function TomisTableRow(props, context) {
    const { classes, className: classNameProp, children, compact, checkbox, numeric, disablePadding, isOpen, onRequestOpen, onRequestClose, rowId, row, rowIdx, ...other } = props;
    const className = classNames(
        classes.root,
        {
            [classes.numeric]: numeric,
            [classes.compact]: compact,
            [classes.checkbox]: checkbox,
            [classes.padding]: !disablePadding
        },
        classNameProp
    );
    return (
        <TableRow hover={true} className={className} {...other}>
            {children(row, rowIdx, true, false).map((child, idx) => {
                if (child) {
                    const { props: { placeholder, name, value, options, isRenderInTableRow } } = child;
                    lovOptions = options || [];
                    return (
                        <TomisTableCell key={`view-${rowIdx}-${idx}`}>
                            {isRenderInTableRow
                                ? child
                                : <Typography noWrap={true}>
                                      {getDisplayTableRowValue(row, name) || placeholder}
                                  </Typography>}
                        </TomisTableCell>
                    );
                } else {
                    return false;
                }
            })}
            <TomisTableCell>
                <TomisButtonIcon onClick={handleClick.bind(null, rowId, onRequestOpen, onRequestClose, isOpen)}>
                    <TomisFontIcon name="mode_edit" />
                </TomisButtonIcon>
            </TomisTableCell>

            {isOpen &&
                <Dialog ignoreBackdropClick ignoreEscapeKeyUp maxWidth="xs" disableBackdrop open={isOpen}>
                    <DialogTitle>Edit Row</DialogTitle>
                    <DialogContent>
                        {children(row, rowIdx, false, true).map((child, idx) => {
                            return (
                                <div key={`edit-${rowIdx}-${idx}`}>
                                    {child}
                                </div>
                            );
                        })}
                    </DialogContent>
                    <DialogActions>
                        <TomisButtonFlat label="Cancel" onClick={onRequestClose.bind(null, 'CANCEL')} color="primary" />
                        <TomisButtonFlat label="Save" onClick={onRequestClose.bind(null, 'SAVE')} color="primary" />
                    </DialogActions>
                </Dialog>}
        </TableRow>
    );
    // }  ;
}

TomisTableRow.propTypes = propTypes;
export default withStyles(styles, { name: 'TomisTableRow' })(TomisTableRow);
