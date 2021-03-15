import React from 'react';
import style from './Loginform.module.scss'
import Textbox from "./../../atoms/Textbox/Textbox.js";
import SubmitButton from "../../atoms/Button/Button.js";
import Dividersection from "../../atoms/Dividersection/Dividersection.js"

const Loginform = props => {
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
            {/* <div className="form-group">
                <Button name={"Continue with Google"} dataTestId={"logIn"} classProp={"logIn"} />
            </div>
            <div className="form-group">
                <Button name={"Facebook"} dataTestId={"logIn"} classProp={"logIn"} />
            </div> */}
            <div className="form-group">
                <SubmitButton name={"logIn"} dataTestId={"logIn"} classProp={"logIn"} />
            </div>
</div>
);
};

export default Loginform;