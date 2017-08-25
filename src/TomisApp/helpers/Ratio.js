import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisButtonIcon from 'TomisApp/TomisButtonIcon';
import { getPreviewImage } from './fileAttachmentUtils';
import Dropzone from 'react-dropzone';
import TomisFontIcon from 'TomisApp/TomisFontIcon';

class Ratio extends Component {
    constructor() {
        super(...arguments);
        this.handleResize = this.handleResize.bind(this);
        this.state = {
            hasComputed: false,
            width: 0,
            height: 0
        };
    }
    getComputedDimensions({ x, y }) {
        const { width } = this.container.getBoundingClientRect();
        return {
            width,
            height: width * (y / x)
        };
    }
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
    handleResize() {
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
    }
    render() {
        return (
            <div ref={ref => (this.container = ref)}>
                {this.props.children(this.state.width, this.state.height, this.state.hasComputed)}
            </div>
        );
    }
}
Ratio.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    children: PropTypes.func.isRequired
};
Ratio.defaultProps = {
    x: 3,
    y: 4
};

export default Ratio;
