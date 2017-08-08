// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createStyleSheet from 'material-ui/styles/createStyleSheet';
import withStyles from 'material-ui/styles/withStyles';
import Popover from 'material-ui/internal/Popover';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

export const styleSheet = createStyleSheet('BemsMuiTableCellEdit', theme => ({
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
    footer: {}
}));

const anchorOrigin = { horizontal: 'left', vertical: 'top' };
const targetOrigin = { horizontal: 'left', vertical: 'top' };

let openCell = null;
const handleClick = (onRequestOpen, evt) => {
    evt.stopPropagation();
    openCell = evt.currentTarget;
    onRequestOpen();
};

function TableCellEdit(props, context) {
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

    // render() {
    return (
        <td className={className} onClick={handleClick.bind(null, onRequestOpen)} {...other} style={{ maxWidth: '256px' }}>
            {React.Children.map(children, (child, idx) => {
                // Obtain properties from first child to display as read-only text
                if (idx > 1) return;
                const { props: { placeholder, value } } = child;
                return (
                    <Typography noWrap={true}>
                        {value || placeholder}
                    </Typography>
                );
            })}
            {isOpen &&
                <Popover style={{ padding: '24px' }} open={true} anchorEl={openCell} anchorOrigin={anchorOrigin} transformOrigin={targetOrigin} onRequestClose={onRequestClose}>
                    {children}
                    <div>
                        <Button onClick={() => {}} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={() => {}} color="primary">
                            Save
                        </Button>
                    </div>
                </Popover>}
        </td>
    );
    // }  ;
}

TableCellEdit.propTypes = {
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

TableCellEdit.defaultProps = {
    checkbox: false,
    compact: false,
    numeric: false,
    disablePadding: false
};

TableCellEdit.contextTypes = {
    table: PropTypes.object
};

export default withStyles(styleSheet)(TableCellEdit);
