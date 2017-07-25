import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
    refresh: {
        display: 'inline-block',
        position: 'relative'
    }
};

const ProgressRefreshLoading = ({ size = 50, top = 0, left = 0 }) => <RefreshIndicator size={size} left={left} top={top} status="loading" style={style.refresh} />;

export default ProgressRefreshLoading;
