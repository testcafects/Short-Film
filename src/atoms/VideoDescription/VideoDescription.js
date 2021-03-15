import React from 'react';
import style from './VideoDescription.module.scss'
import { Rate } from 'antd';

const VideoDescription = props => {
    const descripData = {
        "title": "Video Title",
        "director": "Director Name",
        "genre": "Genre Type",
        "rating": "4",
        'description': "This movie is oscar wining movie which based on true story"
    }
    return (
        <div className={style['a-video-description']} data-test="">
            <div>
                <strong> Title </strong> : {props.type}
            </div>
            <div>
                <strong> Director </strong> : {descripData.director}
            </div>
            <div>
                <strong> Genre </strong> : {descripData.genre}
            </div>
            <div>
                <strong> Description </strong> : {descripData.description}
            </div>
            <div>
                <strong>4.5</strong> <Rate allowHalf defaultValue={4.5} disabled />
            </div>
           
        </div>
    );
};

export default VideoDescription;