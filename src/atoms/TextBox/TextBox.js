import React from 'react';
import style from './TextBox.module.scss'
import { Input } from 'antd';

const TextBox = props => {
    console.log("name", props.name)
    return (
        <div className={style['a-text-box']}>
            <Input placeholder={props.name} name={props.name} />
        </div>
    );
};

export default TextBox;