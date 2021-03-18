import React from 'react';
import Loginform from "./../../molecules/Loginform/Loginform.js";
import style from './LoginPage.module.scss';

const LoginPage = props => {
    return (
        <div className={style['p-login-page']}>
            <div className={style['signInLabel']}>Login and Watch</div>
            <Loginform />
        </div>
    );
};

export default LoginPage;