import React from 'react';
import Watchlist from '../../molecules/Watchlist/Watchlist';
import ActionBar from '../../organisms/ActionBar/ActionBar';
import TabPanleCustom from '../../organisms/TabPanleCustom/TabPanleCustom';
import VideosPromotingSection from '../../organisms/VideosPromotingSection/VideosPromotingSection';
import style from './HomePageMain.module.scss'


const HomePageMain = props => {
    const data = ['Short Videos', 'Story', 'Crime', 'Action', 'Animation', 'Horror']
    const bestVideos = ['Best in Short Videos', 'Best in Comedy', 'Best in Animation', 'Best in Crime', 'Best in Horror']
    const videosTypesPromo = ['Trending', "New", 'Most Popular'];
    const watchListSection = ['Course','Learning Path']
    return (
        <div className={style['p-home-page-main']} data-test="homePageBody">
            <ActionBar listData={data} />
            <div className={style['mainContentBody']}>
                <Watchlist videosTypes ={watchListSection}/>
                <TabPanleCustom videosTypes={videosTypesPromo} />
               
                {
                    bestVideos.map((bestVideo, index) => {
                        return <VideosPromotingSection key={index} type={bestVideo} />
                    })
                }
            </div>
        </div>
    )
}

export default HomePageMain;