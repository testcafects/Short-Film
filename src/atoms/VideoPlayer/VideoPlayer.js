import React from 'react';
import style from './VideoPlayer.module.scss'

const VideoPlayer = props => {
    return (
        <div className={style['a-video-player']} data-test="">
            <video height="500" controls >
                <source src="./Videos/video1.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoPlayer;