import React from 'react';
import style from './LoginPage.module.scss'
import Loginform from "./../../molecules/Loginform/Loginform.js"

const LoginPage = props => {
    return (
        <div className={style['p-login-page']}>
            <div className={style['signInLabel']}>Login and Watch</div>
            <Loginform />
        </div>
    );
};

export default LoginPage;