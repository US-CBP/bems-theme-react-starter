import React, { Component } from 'react';
import CbpHeaderToolbar from '../Tomis/CbpHeaderToolbar';
import ActionBarToolbar from '../Tomis/ActionBarToolbar';
class HeaderNavAction extends Component {
    render() {
        return (
            <div>
                <CbpHeaderToolbar />
                <ActionBarToolbar />
            </div>
        );
    }
}
export default HeaderNavAction;
