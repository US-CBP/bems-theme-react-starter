import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContainerDimensions extends Component {
    container = null;

    state = {
        hasComputed: false,
        width: 0,
        height: 0,
        top: 0,
        left: 0
    };

    componentWillReceiveProps(next) {
        this.setState(this.getComputedDimensions(next));
    }

    componentDidMount() {
        this.setState({
            ...this.getComputedDimensions(this.props),
            hasComputed: true
        });
        window.addEventListener('resize', this.handleResize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize, false);
    }

    getComputedDimensions = () => {
        //Note, height is always 0 for elements with position: fixed and position: absolute
        const { top, left, width, height } = this.container.getBoundingClientRect();
        return {
            width,
            height,
            top,
            left
        };
    };
    handleResize = () => {
        this.setState(
            {
                hasComputed: false
            },
            () => {
                this.setState({
                    hasComputed: true,
                    ...this.getComputedDimensions(this.props)
                });
            }
        );
    };
    render() {
        const { width, height, top, left, hasComputed } = this.state;
        const { children } = this.props;
        return (
            <div ref={ref => (this.container = ref)}>
                {children(width, height, top, left, hasComputed)}
            </div>
        );
    }
}
ContainerDimensions.propTypes = {
    children: PropTypes.func.isRequired
};

export default ContainerDimensions;
