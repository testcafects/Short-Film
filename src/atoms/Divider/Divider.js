import React from 'react';
import style from './Divider.module.scss'
import { Divider } from 'antd';

const DividerClass = props => {
    return (
        <div className={style['a-divider']} data-test="">
            <Divider >Or</Divider>
        </div>
    );
};

export default DividerClass;