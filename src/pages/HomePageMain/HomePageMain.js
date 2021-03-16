import React from 'react';
import ActionBar from '../../organisms/ActionBar/ActionBar';
import HomePageTemplate from '../../templates/HomePageTemplate/HomePageTemplate';
import style from './HomePageMain.module.scss'


const HomePageMain = props => {
    const data = ['Short Videos', 'Story', 'Crime', 'Action', 'Animation', 'Horror']
    return (
        <div className={style['p-home-page-main']} data-test="homePageBody">
            <ActionBar listData={data} />
            <HomePageTemplate/>
        </div>
    )
}

export default HomePageMain;