import React from 'react';
import style from './Login.module.scss'
import Loginform from "../../molecules/Loginform/Loginform"

const Login = props => {
    return (
        <div className={style['p-login']}>
            <div className="signInLabel">Login and Watch</div>
            <Loginform />
        </div>
    );
};

export default Login;