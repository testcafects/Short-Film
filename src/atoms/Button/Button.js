import { Button } from 'antd';
import React from 'react';
import style from './Button.module.scss';

const SubmitButton = props => {
    return (
        <div className={style['a-button']}>
            <Button type="primary" className={style[props.classProp]} data-test={props.dataTestId} onClick={e=>props.onClickSubmit(e)}>{props.name} </Button>
        </div>
    );
};

export default SubmitButton;