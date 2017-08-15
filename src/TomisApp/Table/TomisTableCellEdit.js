// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createStyleSheet from 'material-ui/styles/createStyleSheet';
import withStyles from 'material-ui/styles/withStyles';
import Popover from 'material-ui/internal/Popover';
import Typography from 'material-ui/Typography';
import TomisButtonFlat from 'TomisApp/TomisButtonFlat';
import Paper from 'material-ui/Paper';
import { getDisplayValue } from 'globalJs/functions';

export const styleSheet = createStyleSheet('TomisTableCellEdit', theme => ({
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
<<<<<<< HEAD:src/TomisApp/Table/TomisTableCellEdit.js
    popover: {
        padding: '12px',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        marginLeft: '-16px',
        marginTop: '-16px'
    },
    popoverContent: {
=======
    popoverPadding: {
>>>>>>> b7008f2517e2aaccbd2442a02b2221c0e8392750:src/TomisApp/Table/TableCellEdit.js
        padding: '24px'
    },
    footer: {}
}));

const anchorOrigin = { horizontal: 'left', vertical: 'top' };
const targetOrigin = { horizontal: 'left', vertical: 'top' };

let openCell = null;
let lovOptions = [];
const minHeightPopover = 180;
const heightLovOption = 48;

const handleClick = (onRequestOpen, onRequestClose, isOpen, evt) => {
    evt.stopPropagation();
    openCell = evt.currentTarget;
    if (isOpen) {
        onRequestClose();
    } else {
        onRequestOpen();
    }
};

const preventClickFromGoingToPopover = evt => {
    evt.preventDefault();
    evt.stopPropagation();
    return false;
};

function TomisTableCellEdit(props, context) {
    const { classes, className: classNameProp, children, compact, checkbox, numeric, disablePadding, isOpen, onRequestOpen, onRequestClose, ...other } = props;
    const { table } = context;
    const className = classNames(
        classes.root,
        {
            [classes.numeric]: numeric,
            [classes.compact]: compact,
            [classes.checkbox]: checkbox,
            [classes.padding]: !disablePadding,
            [classes.head]: table && table.head,
            [classes.footer]: table && table.footer
        },
        classNameProp
    );
    return (
        <td className={className} {...other} style={{ maxWidth: '256px' }}>
            <div onClick={handleClick.bind(null, onRequestOpen, onRequestClose, isOpen)}>
                {React.Children.map(children, (child, idx) => {
                    // Obtain properties from first child to display as read-only text
                    if (idx > 1) return;
                    const { props: { placeholder, value, options } } = child;
                    lovOptions = options || [];
                    return (
                        <Typography noWrap={true}>
                            {getDisplayValue(value) || placeholder}
                        </Typography>
                    );
                })}
            </div>
            {isOpen &&
                <Popover
<<<<<<< HEAD:src/TomisApp/Table/TomisTableCellEdit.js
                    className={classNames(classes.popover)}
                    style={{ height: `${Math.max(minHeightPopover, heightLovOption * Math.min(lovOptions.length, 6))}px` }}
=======
                    className={classNames(classes.popoverPadding)}
>>>>>>> b7008f2517e2aaccbd2442a02b2221c0e8392750:src/TomisApp/Table/TableCellEdit.js
                    open={true}
                    anchorEl={openCell}
                    anchorOrigin={anchorOrigin}
                    transformOrigin={targetOrigin}
                    onRequestClose={onRequestClose}
<<<<<<< HEAD:src/TomisApp/Table/TomisTableCellEdit.js
                    onClick={onRequestClose}
                >
                    <Paper elevation={8} className={classNames(classes.popoverContent)} onClick={preventClickFromGoingToPopover}>
                        {children}
                        <div>
                            <TomisButtonFlat label="Cancel" onClick={onRequestClose.bind(null, 'CANCEL')} color="primary" />
                            <TomisButtonFlat label="Save" onClick={onRequestClose.bind(null, 'SAVE')} color="primary" />
                        </div>
                    </Paper>
=======
                >
                    {children}
                    <div>
                        <Button onClick={onRequestClose.bind(null, 'CANCEL')} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={onRequestClose.bind(null, 'SAVE')} color="primary">
                            Save
                        </Button>
                    </div>
>>>>>>> b7008f2517e2aaccbd2442a02b2221c0e8392750:src/TomisApp/Table/TableCellEdit.js
                </Popover>}
        </td>
    );
    // }  ;
}

TomisTableCellEdit.propTypes = {
    /**
   * If `true`, the cell padding will be adjusted to accommodate a checkbox.
   */
    checkbox: PropTypes.bool,
    /**
   * The table cell contents.
   */
    children: PropTypes.node,
    /**
   * Useful to extend the style applied to components.
   */
    classes: PropTypes.object.isRequired,
    /**
   * @ignore
   */
    className: PropTypes.string,
    /**
   * If `true`, compact cell padding will be used to accommodate more content.
   */
    compact: PropTypes.bool,
    /**
   * If `true`, left/right cell padding will be disabled.
   */
    disablePadding: PropTypes.bool,
    /**
   * If `true`, content will align to the right.
   */
    numeric: PropTypes.bool
};

TomisTableCellEdit.defaultProps = {
    checkbox: false,
    compact: false,
    numeric: false,
    disablePadding: false
};

TomisTableCellEdit.contextTypes = {
    table: PropTypes.object
};

export default withStyles(styleSheet)(TomisTableCellEdit);
