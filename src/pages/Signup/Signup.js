import React from 'react';
import style from './Signup.module.scss'
import SignupForm from "../../molecules/SignupForm/SignupForm"

const Signup = props => {
    return (
        <div className={style['p-signup']} >
            <div className="signUpLabel">Sign Up and Watch</div>
            <SignupForm />
        </div>
    );
};

export default Signup;