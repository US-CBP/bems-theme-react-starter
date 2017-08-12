import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createStyleSheet from 'material-ui/styles/createStyleSheet';
import withStyles from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Collapse from 'material-ui/transitions/Collapse';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import TomisButtonIcon from 'TomisApp/TomisButtonIcon';
import Paper from 'material-ui/Paper';

export const styleSheet = createStyleSheet('TomisPanel', theme => ({
    root: {
        boxShadow: 'none'
    },
    colorPrimary: {
        backgroundColor: theme.palette.primary[100],
        color: theme.palette.getContrastText(theme.palette.primary[100])
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
    }
}));

const defaultProps = {};

const propTypes = {
    /**
     * Final child is considered the Panel body.  All other children are actions that are placed in the header area.
     */
    children: PropTypes.node,
    /**
     * Text that appears in header on left-hand side.
     */
    title: PropTypes.string.isRequired
};

class TomisPanel extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        expanded: true
    };

    handleClickExpand = evt => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const { handleClickExpand } = this;
        const { expanded } = this.state;
        const { title, children: childrenProp, classes, className: classNameProp, disableGutters, ...other } = this.props;
        const children = React.Children.toArray(childrenProp);
        //All children except for final child are considered to be "actions" placed in header.
        //Final child is the only component that is expanded/collapsed - considered the panel body
        let panelBody = false;
        if (children.length > 0) {
            panelBody = children.pop();
        }
        return (
            <Paper>
                <AppBar position="static" className={classNames(classes.root, classes.colorPrimary)}>
                    <Toolbar>
                        <Typography type="title" color="inherit" className={classes.flex}>
                            {title}
                        </Typography>
                        {children}
                        <TomisButtonIcon
                            className={classNames(classes.expand, {
                                [classes.expandOpen]: expanded
                            })}
                            icon={<TomisFontIcon name="keyboard_arrow_up" />}
                            onClick={handleClickExpand}
                            aria-expanded={expanded}
                            aria-label="Open/Close"
                        />
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
export default withStyles(styleSheet)(TomisPanel);
