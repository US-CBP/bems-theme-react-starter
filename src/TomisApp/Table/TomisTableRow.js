// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';
import Popover from 'material-ui/internal/Popover';
import Typography from 'material-ui/Typography';
import TomisButtonFlat from 'TomisApp/TomisButtonFlat';
import Paper from 'material-ui/Paper';
import { getDisplayValue } from 'globalJs/functions';
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

function TomisTableRow(props, context) {
    const { classes, className: classNameProp, children, compact, checkbox, numeric, disablePadding, isOpen, onRequestOpen, onRequestClose, rowId, ...other } = props;
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
            {React.Children.map(children, (child, idx) => {
                const { props: { placeholder, value, options, isRenderInTableRow } } = child;
                lovOptions = options || [];
                return (
                    <TomisTableCell>
                        {isRenderInTableRow
                            ? child
                            : <Typography noWrap={true}>
                                  {getDisplayValue(value) || placeholder}
                              </Typography>}
                    </TomisTableCell>
                );
            })}
            <TomisTableCell>
                <TomisButtonIcon onClick={handleClick.bind(null, rowId, onRequestOpen, onRequestClose, isOpen)}>
                    <TomisFontIcon name="mode_edit" />
                </TomisButtonIcon>
            </TomisTableCell>

            {isOpen &&
                <Dialog ignoreBackdropClick ignoreEscapeKeyUp maxWidth="xs" open={isOpen}>
                    <DialogTitle>Edit Row</DialogTitle>
                    <DialogContent>
                        {React.Children.map(children, (child, idx) => {
                            const { props: { isRenderInTableRow } } = child;
                            return (
                                <div>
                                    {isRenderInTableRow ? false : child}
                                </div>
                            );
                        })}
                    </DialogContent>
                    <DialogActions>
                        <TomisButtonFlat label="Cancel" onClick={onRequestClose.bind(null, 'CANCEL')} color="primary" />
                        <TomisButtonFlat label="Save" onClick={onRequestClose.bind(null, 'SAVE')} color="primary" />
                    </DialogActions>
                </Dialog>}

            {isOpen &&
                false &&
                <Popover
                    className={classNames(classes.popover)}
                    open={true}
                    anchorEl={openCell}
                    anchorOrigin={anchorOrigin}
                    transformOrigin={targetOrigin}
                    onRequestClose={onRequestClose}
                    onClick={onRequestClose}
                >
                    <Paper elevation={8} className={classNames(classes.popoverContent)} onClick={preventClickFromGoingToPopover}>
                        {React.Children.map(children, (child, idx) => {
                            const { props: { isRenderInTableRow } } = child;
                            return (
                                <div>
                                    {isRenderInTableRow ? false : child}
                                </div>
                            );
                        })}
                        <div>
                            <TomisButtonFlat label="Cancel" onClick={onRequestClose.bind(null, 'CANCEL')} color="primary" />
                            <TomisButtonFlat label="Save" onClick={onRequestClose.bind(null, 'SAVE')} color="primary" />
                        </div>
                    </Paper>
                </Popover>}
        </TableRow>
    );
    // }  ;
}

export default withStyles(styles, { name: 'TomisTableRow' })(TomisTableRow);
