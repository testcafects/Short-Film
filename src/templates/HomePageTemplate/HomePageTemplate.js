import React from 'react';
import Watchlist from '../../molecules/Watchlist/Watchlist';
import TabPanleCustom from '../../organisms/TabPanleCustom/TabPanleCustom';
import VideosPromotingSection from '../../organisms/VideosPromotingSection/VideosPromotingSection';
import style from './HomePageTemplate.module.scss'

const HomePageTemplate = props => {
    const bestVideos = ['Best in Short Videos', 'Best in Comedy', 'Best in Animation', 'Best in Crime', 'Best in Horror']
    const videosTypesPromo = ['Trending', "New", 'Most Popular'];
    const watchListSection = ['Course', 'Learning Path']
    return (
        <div className={style['t-home-page-template']} data-test="">
            <div className={style['mainContentBody']}>
                <Watchlist videosTypes={watchListSection} />
                <TabPanleCustom videosTypes={videosTypesPromo} />
                {
                    bestVideos.map((bestVideo, index) => {
                        return <VideosPromotingSection key={index} type={bestVideo} />
                    })
                }
            </div>
        </div>
    );
};

export default HomePageTemplate;