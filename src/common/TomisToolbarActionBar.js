import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisIconButton from 'TomisApp/TomisIconButton';
import Menu from 'material-ui/Menu';
import { MenuItem } from 'material-ui/Menu';
import TomisButtonFlat from 'TomisApp/TomisButtonFlat';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import TomisDrawerNavigation from './TomisDrawerNavigation';
import TomisLogged from 'common/TomisLogged';
import { getActionBarIconColor } from '../app/helpers/styles';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import TomisCustomIcon from 'TomisApp/TomisCustomIcon';
import { headerNavActionStyles } from '../app/helpers/styles';
import withStyles from 'material-ui/styles/withStyles';
import cx from 'classnames';

const APPLICATIONS = 'APPLICATIONS';
const BRANCH_UNIT = 'BRANCH_UNIT';

const anchorOrigin = { horizontal: 'left', vertical: 'bottom' };
const targetOrigin = { horizontal: 'left', vertical: 'top' };
const iconColor = getActionBarIconColor();

const setStatePopoverOpen = (keyVal, anchorEl, state, props) => {
    state.isOpen[keyVal] = true;
    state.anchorEl[keyVal] = anchorEl;
};
const setStatePopoverClose = (keyVal, state, props) => {
    state.isOpen[keyVal] = false;
};

const setStateIsDrawerNavigationOpen = (isOpen, state, props) => {
    return { isDrawerNavigationOpen: isOpen };
};

const statusBarStyle = {
    height: '20px',
    backgroundColor: 'red'
};

const defaultProps = {
    pageTitle: 'Sample Page Title',
    isHideKuFrequencyIcon: false,
    isHideDeleteIcon: false
};

const propTypes = {
    pageTitle: PropTypes.string.isRequired,
    isHideKuFrequencyIcon: PropTypes.bool.isRequired,
    isHideDeleteIcon: PropTypes.bool.isRequired
};

class TomisToolbarActionBar extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        value: 3,
        open: false,
        isDrawerNavigationOpen: false,
        isOpen: {},
        anchorEl: {}
    };

    handleTouchTap = event => {
        // This prevents ghost click.
        event.preventDefault();
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
            isDrawerNavigationOpen: false
        });
    };

    handleSave = event => {
        // This prevents ghost click.
        event.preventDefault();
    };

    handleRequestDrawerNavigationClose = () => {
        this.setState({
            isDrawerNavigationOpen: false
        });
    };

    handleClickToggleDrawer = event => this.setState(setStateIsDrawerNavigationOpen.bind(this, !this.state.isDrawerNavigationOpen));
    handleTouchTapButton = (keyVal, event) => {
        event.preventDefault();
        this.setState(setStatePopoverOpen.bind(this, keyVal, event.currentTarget));
    };

    handleRequestCloseButton = keyVal => {
        this.setState(setStatePopoverClose.bind(this, keyVal));
    };

    render() {
        const { handleClickToggleDrawer, handleTouchTapButton, handleRequestCloseButton, handleRequestDrawerNavigationClose } = this;
        const { isDrawerNavigationOpen, isOpen, anchorEl } = this.state;
        const {
            pageTitle,
            isHideDeleteIcon,
            isHideKuFrequencyIcon,
            classes: { toolbar: clsToolbar, actionBar: clsActionBar, text: clsText, pageTitle: clsPageTitle, textHeader: clsTextHeader, flatPrimary: clsFlatPrimary }
        } = this.props;
        return (
            <div>
                <Toolbar className={cx(clsToolbar, clsActionBar)} disableGutters={true}>
                    <div className={cx(clsPageTitle)}>
                        <TomisIconButton onClick={handleClickToggleDrawer} tooltip="Open Menu">
                            <TomisFontIcon name="menu" color={iconColor} />
                        </TomisIconButton>
                        <div className={cx(clsText, clsTextHeader)}>
                            {pageTitle}
                        </div>
                    </div>
                    <div className={cx(clsPageTitle)}>
                        <TomisFontIcon name="public" color={iconColor} />
                        <TomisButtonFlat className={cx(clsFlatPrimary)} onClick={handleTouchTapButton.bind(this, BRANCH_UNIT)} label="CBP Air and Marine Headq...">
                            <TomisFontIcon name="arrow_drop_down" />
                        </TomisButtonFlat>
                        <TomisIconButton onClick={this.handleTouchTap} tooltip="Today">
                            <TomisFontIcon name="today" color={iconColor} />
                        </TomisIconButton>
                        <TomisIconButton onClick={this.handleTouchTap} tooltip="Weekly View">
                            <TomisFontIcon name="date_range" color={iconColor} />
                        </TomisIconButton>
                        <TomisIconButton onClick={this.handleTouchTap} tooltip="Monthly View">
                            <TomisFontIcon name="event_note" color={iconColor} />
                        </TomisIconButton>
                        {!isHideKuFrequencyIcon &&
                            <TomisIconButton onClick={this.handleTouchTap} tooltip="KU NOC Coverage">
                                <TomisCustomIcon name="!" color={iconColor} style={{ marginBottom: '12px' }} />
                            </TomisIconButton>}
                    </div>
                    <div className={cx(clsPageTitle)}>
                        <TomisIconButton onClick={this.handleSave} tooltip="Save">
                            <TomisFontIcon name="save" color={iconColor} />
                        </TomisIconButton>
                        <TomisIconButton onClick={this.handleTouchTap} tooltip="Clone">
                            <TomisFontIcon name="content_copy" color={iconColor} />
                        </TomisIconButton>
                        <TomisIconButton onClick={this.handleTouchTap} tooltip="Cancel">
                            <TomisFontIcon name="restore_page" color={iconColor} />
                        </TomisIconButton>
                        {!isHideDeleteIcon &&
                            <TomisIconButton onClick={this.handleTouchTap} tooltip="Delete">
                                <TomisFontIcon name="delete" color={iconColor} />
                            </TomisIconButton>}
                    </div>
                </Toolbar>
                <TomisDrawerNavigation isOpen={isDrawerNavigationOpen} onRequestClose={handleRequestDrawerNavigationClose} {...this.props} />
            </div>
        );
    }
}

TomisToolbarActionBar.defaultProps = defaultProps;
TomisToolbarActionBar.propTypes = propTypes;

export default withStyles(headerNavActionStyles, { name: 'HeaderNavAction' })(TomisToolbarActionBar);
