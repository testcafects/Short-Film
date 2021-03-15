import React from 'react';
import style from './TabPanleCustom.module.scss';
import { Tabs } from 'antd';
import CardCollection from '../../molecules/CardCollection/CardCollection';

const { TabPane } = Tabs;


const TabPanleCustom = ({videosTypes,progress = false}) => {
    return (
        <div className={style['m-tab-panle-custom']} data-test="">
            <Tabs type="card">
                {
                   videosTypes.length && videosTypes.map((videoType, index) => {
                        return (<TabPane tab={videoType} key={index}>
                            <CardCollection type={videoType} progress={progress} />
                        </TabPane>)
                    })
                }
            </Tabs>
        </div >
    );
};

export default TabPanleCustom;