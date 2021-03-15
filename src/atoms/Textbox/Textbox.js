import React, {useState} from 'react';
import style from './Textbox.module.scss'
import { Input } from 'antd';

const Textbox = props => {
    return (
        <div className={style['a-textbox']}>
            <Input placeholder={props.name} name={props.name} data-test={props.dataTestId} />
        </div>
    );
};

export default Textbox;