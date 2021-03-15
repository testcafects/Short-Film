import React from 'react';
import style from './SignupForm.module.scss'
import TextBox from "./../../atoms/TextBox/TextBox"
import Button from "../../atoms/LoginButton/LoginButton"
import DividerClass from "../../atoms/Divider/Divider"

const SignupForm = props => {
    return (
        <div className={style['m-signup-form']} data-test="">
            <div className="form-group">
                <TextBox name={"username"} dataTestId={"username"} />
            </div>
            <div className="form-group">
                <TextBox name={"password"} dataTestId={"password"} />
            </div>
            <div className="form-group">
                <DividerClass name={"divider"} dataTestId={"divider"} />
            </div>
            {/* <div className="form-group">
                <Button name={"Continue with Google"} dataTestId={"logIn"} classProp={"logIn"} />
            </div>
            <div className="form-group">
                <Button name={"Facebook"} dataTestId={"logIn"} classProp={"logIn"} />
            </div> */}
            <div className="form-group">
                <Button name={"Sign Up"} dataTestId={"signUp"} classProp={"signup"} />
            </div>
        </div>
    );
};

export default SignupForm;