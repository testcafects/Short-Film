import React from 'react';
import style from './CardCustom.module.scss';
import { Card, Avatar } from 'antd';
//import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const CardCustom =(props) => {
    return (
        <div className={style['a-card-custom']} data-test="">
            <Card
                style={{ width: 250 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }

            >
                <Meta 
                className="cardMeta"
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        </div>
    );
};

export default CardCustom;