import React from 'react';
import style from './CardCustom.module.scss';
import { Card } from 'antd';
import VideoDescription from '../VideoDescription/VideoDescription';
import VideoContainer from '../VideoContainer/VideoContainer';
//import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


const CardCustom = (props) => {
    return (
        <div className={style['a-card-custom']} data-test="">
            <Card bodyStyle={{padding: "0",margin:0}} bordered hoverable>
                <div className={style["cardInner"]} >
                    <div className={style["cardImage"]}>
                        <VideoContainer />
                    </div>
                    <div className={style["cardDescription"]}>
                        <VideoDescription {...props} />
                    </div>
                </div>
            </Card>

        </div>
    );
};

export default CardCustom;