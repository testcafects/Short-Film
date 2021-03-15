import React from 'react';
import style from './SignupPage.module.scss';
import Signupform from "./../../molecules/Signupform/Signupform.js"

const SignupPage = props => {
    return (
        <div className={style['p-signup-page']}>
        <div className={style['signInLabel']}>Sign Up and Watch</div>
            <Signupform />
        </div>
    );
};

export default SignupPage;