import React from 'react';
import style from './Login.module.scss'
import LoginForm from "../../molecules/LoginForm/LoginForm"

const Login = props => {
    return (
        <div className={style['p-login']}>
            <div className="signInLabel">Login and Watch</div>
            <LoginForm />
        </div>
    );
};

export default Login;