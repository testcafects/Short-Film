
import React, { useState } from 'react';
import SubmitButton from "../../atoms/Button/Button.js";
import Dividersection from "../../atoms/Dividersection/Dividersection.js";
import Textbox from "./../../atoms/Textbox/Textbox.js";
import style from './Loginform.module.scss';

const Loginform = props => {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
   
    return (
        <div className={style['m-loginform']}>
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
                <SubmitButton name={"facebook"} dataTestId={"facebook"} classProp={"facebook"} />
            </div>
            <div className="form-group">
                <SubmitButton name={"logIn"} dataTestId={"logIn"} classProp={"logIn"} />
            </div>
        </div>
    );
};

export default Loginform;