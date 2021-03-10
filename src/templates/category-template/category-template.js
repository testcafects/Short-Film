import React from 'react';
import Header from '../../molecules/header/header.js';
import style from './categoryTemplate.module.scss';
import CategoryBar from '../../molecules/categoryBar/categoryBar';
import CategoryCard from '../../organisms/category-card/categoryCard';
import SuggestionBar from '../../molecules/suggestionBar/suggestionBar.js';
import DirectorIcon from '../../atoms/director-icon/directorIcon.js';
import LatestCard from '../../atoms/latest-card/latestCard.js';

const CategoryTemplate = () =>{
    return(
        <div className={style['t-category-list']}>
            <Header />
            <CategoryBar/>
            <div className={style['t-category-list__title']}>
                Most Trending
            </div>
            <div className={style['t-category-list__cardlist']}>
               <div className={style['t-category-list__card']}> <CategoryCard/> </div>
               <div className={style['t-category-list__card']}> <CategoryCard/> </div>
               <div className={style['t-category-list__card']}> <CategoryCard/> </div>
            </div>

            <div className={style['t-category-list__title']}>
                Famous In This Category
            </div>
            <div className={style['t-category-list__cardlist']}>
               <div className={style['t-category-list__card']}> <CategoryCard/> </div>
               <div className={style['t-category-list__card']}> <CategoryCard/> </div>
               <div className={style['t-category-list__card']}> <CategoryCard/> </div>
            </div>

            <div className={style['t-category-list__title']}>
                Latest Releases
            </div>
            <div className={style['t-category-list__cardlist']}>
                {/* latest release list */}
                <div className={style['t-category-list__cardlist']}>
               <div className={style['t-category-list__card']}> <LatestCard title='Quiet Place' description='Netflix Originals'/> </div>
               <div className={style['t-category-list__card']}> <LatestCard title='Quiet Place' description='Netflix Originals'/> </div>
               <div className={style['t-category-list__card']}> <LatestCard title='Quiet Place' description='Netflix Originals'/> </div>
               <div className={style['t-category-list__card']}> <LatestCard title='Quiet Place' description='Netflix Originals'/> </div>
               <div className={style['t-category-list__card']}> <LatestCard title='Quiet Place' description='Netflix Originals'/> </div>
            </div>
            </div>

            <div className={style['t-category-list__title']}>
                Famous Directors In This Category
            </div>
            <div>
                {/* directors list */}
                <div className={style['t-category-list__cardlist']}>
               <div className={style['t-category-list__card']}> 
                    <DirectorIcon value={'John Bevson'}/>

                </div>
               <div className={style['t-category-list__card']}> <DirectorIcon value={'John Bevson'}/></div>
               <div className={style['t-category-list__card']}> <DirectorIcon value={'John Bevson'}/></div>
               <div className={style['t-category-list__card']}> <DirectorIcon value={'John Bevson'}/></div>
               <div className={style['t-category-list__card']}> <DirectorIcon value={'John Bevson'}/></div>
               <div className={style['t-category-list__card']}> <DirectorIcon value={'John Bevson'}/></div>
               <div className={style['t-category-list__card']}> <DirectorIcon value={'John Bevson'}/></div>
               <div className={style['t-category-list__card']}> <DirectorIcon value={'John Bevson'}/></div>
               
            </div>
            </div>
            <div className={style['t-category-list__title']}>
                People Also Search For
            </div>
            <div className={style['t-category-list__suggestion-bar']}><SuggestionBar/></div>

        </div>
    )
}
export default CategoryTemplate