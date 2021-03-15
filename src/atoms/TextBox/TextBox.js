import React, { useState } from 'react';
import { Selector } from 'testcafe';
import style from './TextBox.module.scss'
import { Input } from 'antd';

const TextBox = props => {
    console.log("name", props.name);
    const nameInput = Selector("#" + props.dataTestId);
    const [input, dispatchInput] = useState(nameInput);
    return (
        <div className={style['a-text-box']}>
            <Input placeholder={props.name} name={props.name} data-test={props.dataTestId} />
        </div>
    );
};

export default TextBox;