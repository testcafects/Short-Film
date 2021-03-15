import React from 'react';
import style from './WatchListHeading.module.scss'

const WatchListHeading = ({mainHeading,subHeading}) => {
    return (
        <div className={style['a-watch-list-heading']} data-test="watchListHeading">
            <div>
                <h1 className={style['_textStyle']}>Let's start learning </h1>
            </div>
            <div>
                <h3  className={style['_textStyle']}>My Learning</h3>
            </div>
        </div>
    );
};

export default WatchListHeading;