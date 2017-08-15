import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisDrawerNavigation from 'common/TomisDrawerNavigation';
import Menu from 'material-ui/Menu';
import { MenuItem } from 'material-ui/Menu';
import TomisButtonFlat from 'TomisApp/TomisButtonFlat';
import TomisButtonRaised from 'TomisApp/TomisButtonRaised';
import Toolbar from 'material-ui/Toolbar';
import TomisLogged from 'common/TomisLogged';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import { headerNavActionStyleSheet } from '../app/helpers/styles';
import withStyles from 'material-ui/styles/withStyles';
import cx from 'classnames';

const APPLICATIONS = 'APPLICATIONS';
const BRANCH_UNIT = 'BRANCH_UNIT';

const anchorOrigin = { horizontal: 'left', vertical: 'bottom' };
const targetOrigin = { horizontal: 'left', vertical: 'top' };

const setStatePopoverOpen = (anchorEl, state, props) => {
    return {
        isOpen: true,
        anchorEl
    };
};
const setStatePopoverClose = (state, props) => {
    return {
        isOpen: false
    };
};

class ToolbarCbpHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            anchorEl: null
        };
    }

    handleTouchTapButton = evt => {
        evt.preventDefault();
        this.setState(setStatePopoverOpen.bind(this, evt.currentTarget));
    };

    handleRequestCloseButton = () => {
        this.setState(setStatePopoverClose.bind(this));
    };

    render() {
        const { handleTouchTapButton, handleRequestCloseButton } = this;
        const { isOpen, anchorEl } = this.state;
        const {
            classes: {
                toolbar: clsToolbar,
                headerBar: clsHeaderBar,
                firstGroup: clsFirstGroup,
                text: clsText,
                textHeader: clsTextHeader,
                textSubheader: clsTextSubheader,
                flatPrimary: clsFlatPrimary
            }
        } = this.props;
        return (
            <Toolbar className={cx(clsToolbar, clsHeaderBar)} disableGutters={true}>
                <div className={cx(clsFirstGroup)}>
                    <div className={cx(clsText, clsTextHeader)}>
                        <span>U.S. Customs and Border Protection</span>
                    </div>
                    <div className={cx(clsText, clsTextSubheader)}>Department of Homeland Security</div>
                </div>
                <TomisButtonFlat className={cx(clsFlatPrimary)} onClick={handleTouchTapButton} label="TOMIS">
                    <TomisFontIcon name="arrow_drop_down" />
                </TomisButtonFlat>
                <Menu id="logged-menu" anchorEl={anchorEl} open={isOpen} onRequestClose={handleRequestCloseButton}>
                    <MenuItem onClick={handleRequestCloseButton}>SEACATS</MenuItem>
                    <MenuItem onClick={handleRequestCloseButton}>FACTS</MenuItem>
                </Menu>
                <TomisLogged {...this.props} />
            </Toolbar>
        );
    }
}
export default withStyles(headerNavActionStyleSheet)(ToolbarCbpHeader);
