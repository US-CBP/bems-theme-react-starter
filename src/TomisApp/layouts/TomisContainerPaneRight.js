import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisPaper from 'TomisApp/TomisPaper';
import TomisHeaderNavAction from 'common/TomisHeaderNavAction';
import SplitPane from 'react-split-pane';
import ContainerDimensions from 'TomisApp/helpers/ContainerDimensions';
import { NAV_BAR_H } from 'globalJs/constants';

const rightPaneW = 320;

const paneLeftStyle = {
    overflowY: 'scroll'
};
const paneRightStyle = {
    overflowY: 'auto'
};

const initState = {};

const defaultProps = {};

const propTypes = {};

class TomisContainerPaneRight extends Component {
    state = initState;

    render() {
        const { title, children } = this.props;
        const childrenArr = React.Children.toArray(children);
        return (
            <TomisPaper elevation={0}>
                <SplitPane allowResize={false} split="horizontal" defaultSize={NAV_BAR_H}>
                    <TomisHeaderNavAction actionBarPageTitle={title} />
                    <SplitPane pane1Style={paneLeftStyle} allowResize={false} pane2Style={paneRightStyle} split="vertical" defaultSize={rightPaneW} primary="second">
                        <ContainerDimensions>
                            {(width, height, top, left, hasComputed) => {
                                return React.cloneElement(childrenArr[0], {
                                    dimensions: { top, left, width, navBarH: NAV_BAR_H }
                                });
                            }}
                        </ContainerDimensions>
                        <ContainerDimensions>
                            {(width, height, top, left, hasComputed) => {
                                return React.cloneElement(childrenArr[1], {
                                    dimensions: { top, left, width, navBarH: NAV_BAR_H }
                                });
                            }}
                        </ContainerDimensions>
                    </SplitPane>
                </SplitPane>
            </TomisPaper>
        );
    }
}

TomisContainerPaneRight.defaultProps = defaultProps;
TomisContainerPaneRight.propTypes = propTypes;
export default TomisContainerPaneRight;
