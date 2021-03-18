import React from 'react';
import Signupform from "./../../molecules/Signupform/Signupform.js";
import style from './SignupPage.module.scss';

const SignupPage = props => {
    return (
        <div className={style['p-signup-page']}>
        <div className={style['signInLabel']}>Sign Up and Watch</div>
            <Signupform />
        </div>
    );
};

export default SignupPage;