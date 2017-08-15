import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisPaper from 'TomisApp/TomisPaper';
import TomisHeaderNavAction from 'common/TomisHeaderNavAction';

class TomisContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title, children } = this.props;
        return (
            <TomisPaper elevation={0}>
                <TomisHeaderNavAction actionBarPageTitle={title} />
                <div>
                    {children}
                </div>
            </TomisPaper>
        );
    }
}

export default TomisContainer;
