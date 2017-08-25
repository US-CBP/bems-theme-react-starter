import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Collapse from 'material-ui/transitions/Collapse';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import TomisButtonIcon from 'TomisApp/TomisButtonIcon';
import Paper from 'material-ui/Paper';

export const styles = theme => ({
    root: {
        padding: '8px',
        width: '100%'
    },
    appBar: {
        boxShadow: 'none'
    },
    colorPrimary: {
        backgroundColor: theme.palette.primary[100],
        color: theme.palette.getContrastText(theme.palette.primary[100])
    },
    colorPrimaryTable: {
        backgroundColor: theme.palette.grey['300'],
        color: theme.palette.getContrastText(theme.palette.grey['300'])
    },
    title: {
        fontSize: '15px',
        fontWeight: 'normal',
        marginTop: '4px'
    },
    flex: {
        flex: 1
    },
    expand: {
        transform: 'rotate(-180deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(0deg)'
    },
    toolBar: {
        minHeight: '56px',
        paddingRight: '4px'
    }
});

const defaultProps = {};

const propTypes = {
    /**
     * Final child is considered the Panel body.  All other children are actions that are placed in the header area.
     */
    children: PropTypes.node,
    /**
     * Text that appears in header on left-hand side.
     */
    label: PropTypes.string.isRequired,

    /**
     * If true, display using panel table background color.
    */
    isTable: PropTypes.bool
};

class TomisPanel extends Component {
    state = {
        expanded: true
    };

    handleClickExpand = evt => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const { handleClickExpand } = this;
        const { expanded } = this.state;
        const { label, children: childrenProp, classes, className: classNameProp, disableGutters, isTable = false, ...other } = this.props;
        const children = React.Children.toArray(childrenProp);
        //All children except for final child are considered to be "actions" placed in header.
        //Final child is the only component that is expanded/collapsed - considered the panel body
        let panelBody = false;
        if (children.length > 0) {
            panelBody = children.pop();
        }
        return (
            <Paper className={classNames(classes.root)}>
                <AppBar position="static" className={classNames(classes.appBar, { [classes.colorPrimary]: !isTable }, { [classes.colorPrimaryTable]: isTable })}>
                    <Toolbar className={classNames(classes.toolBar)}>
                        <Typography type="title" color="inherit" className={classNames(classes.flex, classes.title)}>
                            {label}
                        </Typography>
                        {children}
                        <TomisButtonIcon
                            className={classNames(classes.expand, {
                                [classes.expandOpen]: expanded
                            })}
                            onClick={handleClickExpand}
                            aria-expanded={expanded}
                            aria-label="Open/Close"
                        >
                            <TomisFontIcon name="keyboard_arrow_up" />
                        </TomisButtonIcon>
                    </Toolbar>
                </AppBar>
                <Collapse in={expanded} transitionDuration="auto" unmountOnExit={false}>
                    {panelBody}
                </Collapse>
            </Paper>
        );
    }
}

TomisPanel.defaultProps = defaultProps;
TomisPanel.propTypes = propTypes;
export default withStyles(styles, { name: 'TomisPanel' })(TomisPanel);
