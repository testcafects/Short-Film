import React from 'react';
import style from './Signupform.module.scss'
import Textbox from "./../../atoms/Textbox/Textbox.js";
import SubmitButton from "../../atoms/Button/Button.js";
import Dividersection from "../../atoms/Dividersection/Dividersection.js"

const Signupform = props => {
    return (
        <div className={style['m-signupform']}>
            <div className="form-group">
                <Textbox name={"firstname"} dataTestId={"firstname"} />
            </div>
            <div className="form-group">
                <Textbox name={"username"} dataTestId={"username"} />
            </div>
            <div className="form-group">
                <Textbox name={"password"} dataTestId={"password"} />
            </div>
            <div className="form-group">
                <Dividersection name={"divider"} dataTestId={"divider"} />
            </div>
            <div className="form-group">
                <SubmitButton name={"Continue with Google"} dataTestId={"google"} classProp={"google"} />
            </div>
            <div className="form-group">
                <SubmitButton name={"Facebook"} dataTestId={"facebook"} classProp={"facebook"} />
            </div>
            <div className="form-group">
                <SubmitButton name={"Sign Up"} dataTestId={"signup"} classProp={"signup"} />
            </div>
        </div>
    );
};

export default Signupform;