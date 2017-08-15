import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisPaper from 'TomisApp/TomisPaper';
import TomisHeaderNavAction from 'common/TomisHeaderNavAction';
import Measure from 'react-measure';

const initState = {
    mainDimensions: {
        top: 0,
        left: 0,
        width: 0
    }
};

const defaultProps = {
    mainFlex: 3,
    paneFlex: 1
};

const propTypes = {
    mainFlex: PropTypes.number,
    paneFlex: PropTypes.number
};

class ContainerPaneRight extends Component {
    constructor(props) {
        super(props);
        this.state = initState;
    }
    render() {
        const { mainDimensions: { top, left, width }, mainDimensions } = this.state;
        const { title, mainFlex, paneFlex, children } = this.props;
        const childrenArr = React.Children.toArray(children);
        return (
            <TomisPaper elevation={0}>
                <TomisHeaderNavAction actionBarPageTitle={title} />
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: mainFlex, height: `${window.innerHeight - top}px`, overflowY: 'auto', overflowX: 'hidden', position: 'relative' }}>
                        <Measure
                            bounds={true}
                            onResize={contentRect => {
                                this.setState({ mainDimensions: contentRect.bounds });
                            }}
                        >
                            {({ measureRef }) => <div ref={measureRef} style={{ width: '100%', height: 0 }} />}
                        </Measure>
                        {React.cloneElement(childrenArr[0], {
                            dimensions: mainDimensions
                        })}
                    </div>
                    <div style={{ flex: paneFlex }}>
                        {childrenArr[1] || false}
                    </div>
                </div>
            </TomisPaper>
        );
    }
}

ContainerPaneRight.defaultProps = defaultProps;
ContainerPaneRight.propTypes = propTypes;
export default ContainerPaneRight;
