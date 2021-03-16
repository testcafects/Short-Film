import React from 'react';
import Header from '../../molecules/header/header.js';
import style from './categoryTemplate.module.scss';
import CategoryBar from '../../molecules/categoryBar/categoryBar';
import SuggestionBar from '../../molecules/suggestionBar/suggestionBar.js';
// import DirectorIcon from '../../atoms/director-icon/director-icon.js';
import MostTrendingCarousel from '../../organisms/most-trending-carousel/mostTrendingCarousel';
import LatestReleasesCarousel from '../../organisms/latest-releases-carousel/latestReleasesCarousel.js';
import DirectorsList from '../../molecules/director-list/director-list.js';

const CategoryTemplate = () =>{
    return(
        <div className={style['t-category-list']} data-test="header" >
            <Header/>
            <CategoryBar/>
            <div className={style['t-category-list__title']} >
                Most Trending
            </div>
        
            <div className={style['t-category-list__most-trending-carousel']} data-test="carousel-bars">
                <MostTrendingCarousel />
            </div>

            <div className={style['t-category-list__title']}>
                Famous In This Category
            </div>
            <div className={style['t-category-list__most-trending-carousel']} data-test="carousel-bars">
                <MostTrendingCarousel />
            </div>

            <div className={style['t-category-list__title']}>
                Latest Releases
            </div>
            
            
                <div className={style['t-category-list__most-trending-carousel']} data-test="carousel-bars">
                    <LatestReleasesCarousel />
                </div>

            <div className={style['t-category-list__title']}>
                Famous Directors In This Category
            </div>
            <div data-test="director-list" >
                <DirectorsList/>               
            </div>
            <div className={style['t-category-list__title']}>
                People Also Search For
            </div>
            <div className={style['t-category-list__suggestion-bar']} datat-test="suggestion-bar" ><SuggestionBar /></div>

        </div>
    )
}
export default CategoryTemplate