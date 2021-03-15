import React from 'react';
import WatchListHeading from '../../atoms/WatchListHeading/WatchListHeading';
import TabPanleCustom from '../../organisms/TabPanleCustom/TabPanleCustom';
import style from './Watchlist.module.scss'

const Watchlist = props => {
    return (
        <div className={style['o-watchlist']} data-test="watchListContainer">
            <WatchListHeading />
            <TabPanleCustom videosTypes={props.videosTypes} progress={true}/>
        </div>
    );
};

export default Watchlist;