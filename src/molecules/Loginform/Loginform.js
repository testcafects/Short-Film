import React from 'react';
import style from './Loginform.module.scss';
import TextBox from "./../../atoms/TextBox/TextBox"
import Button from "../../atoms/LoginButton/LoginButton"
import DividerClass from "../../atoms/Divider/Divider"

const Loginform = props => {
    return (
        <div className={style['m-loginform']} data-test="">

            <div className="form-group">
                <TextBox name={"username"} dataTestId={"username"} />
            </div>
            <div className="form-group">
                <TextBox name={"password"} dataTestId={"password"} />
            </div>
            <div className="form-group">
                <DividerClass name={"password"} dataTestId={"password"} />
            </div>
            <div className="form-group">
                <Button name={"Continue with Google"} dataTestId={"logIn"} classProp={"logIn"} />
            </div>
            <div className="form-group">
                <Button name={"Facebook"} dataTestId={"logIn"} classProp={"logIn"} />
            </div>
            <div className="form-group">
                <Button name={"Log In"} dataTestId={"logIn"} classProp={"logIn"} />
            </div>
        </div>
    );
};

export default Loginform;