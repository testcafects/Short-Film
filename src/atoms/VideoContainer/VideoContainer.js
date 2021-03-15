import React from 'react';
import style from './VideoContainer.module.scss'

const VideoContainer = props => {
    return (
        <div className={style['a-video-container']} data-test="">
            <img
                alt="example"
                // src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                src="https://source.unsplash.com/random"
                className={style['imageWidth']}
            />
        </div>
    );
};

export default VideoContainer;