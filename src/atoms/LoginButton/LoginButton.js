import React from 'react';
import style from './LoginButton.module.scss'
import { Button } from 'antd';
import { Selector } from 'testcafe';

const LoginButton = props => {
    const loginButton = Selector("#" + props.dataTestId);
    const [submitButton, dispatchInput] = useState(loginButton);

    return (
        <div className={style['a-login-button']} data-test="">
            <Button type="primary" className={props.classProp} data-test={props.dataTestId}>{props.name} </Button>
        </div>
    );
};

export default LoginButton;