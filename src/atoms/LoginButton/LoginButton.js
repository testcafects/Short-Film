import React from 'react';
import style from './LoginButton.module.scss'
import { Button } from 'antd';

const LoginButton = props => {

    return (
        <div className={style['a-login-button']} data-test="">
            <Button type="primary" className={props.classProp}>{props.name} </Button>
        </div>
    );
};

export default LoginButton;