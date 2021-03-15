import React from 'react';
import style from './Button.module.scss'
import { Button } from 'antd';

const SubmitButton = props => {
    return (
        <div className={style['a-button']}>
            <Button type="primary" className={style[props.classProp]} data-test={props.dataTestId}>{props.name} </Button>
        </div>
    );
};

export default SubmitButton;