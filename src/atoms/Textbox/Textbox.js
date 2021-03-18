import { Input } from 'antd';
import React from 'react';
import style from './Textbox.module.scss';

const Textbox = props => {
    return (
        <div className={style['a-textbox']}>
            <Input placeholder={props.name} name={props.name} data-test={props.dataTestId} onChange={e => props.onchangeData(e)} />
        </div>
    );
};

export default Textbox;