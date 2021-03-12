import React from 'react';
import style from './TabPanleCustom.module.scss';
import { Tabs } from 'antd';
import CardCollection from '../../molecules/CardCollection/CardCollection';

const { TabPane } = Tabs;


const TabPanleCustom = props => {
    const videosTypes = ['Trending', "New", 'Most Popular']
    return (
        <div className={style['m-tab-panle-custom']} data-test="">
            <Tabs type="card">
                {
                    videosTypes.map((videoType, index) => {
                        return <TabPane tab={videoType} key={index}>
                            <CardCollection />
                        </TabPane>
                    })
                }
            </Tabs>
        </div >
    );
};

export default TabPanleCustom;