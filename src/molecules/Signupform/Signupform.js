import { useMutation } from "@apollo/client";
import React, { useState } from 'react';
import SubmitButton from "../../atoms/Button/Button.js";
import Dividersection from "../../atoms/Dividersection/Dividersection.js";
import Textbox from "./../../atoms/Textbox/Textbox.js";
import { CREATE_USER_MUTATION } from "./../../GraphQL/Mutations";
import style from './Signupform.module.scss';

const Signupform = props => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);
    const addUser = () => {
        console.log("values", name, email, password)
        createUser({
            variables: {
                name: name,
                email: email,
                password: password,
                token: "adsasdfasdf"
            },
        });

        if (error) {
            console.log(error);
        }
    }
    const onchangeData = (e) => {
        let value = e.target.value;
        switch (e.target.name) {
            case "name":
                setName(value)
                break;
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value)
                break;

            default:
                break;
        }
    }
    return (
        <div className={style['m-signupform']}>
            <div className="form-group">
                <Textbox name={"name"} dataTestId={"name"} onchangeData={onchangeData} />
            </div>
            <div className="form-group">
                <Textbox name={"email"} dataTestId={"email"} onchangeData={onchangeData} />
            </div>
            <div className="form-group">
                <Textbox name={"password"} dataTestId={"password"} onchangeData={onchangeData} />
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
                <SubmitButton name={"Sign Up"} dataTestId={"signup"} classProp={"signup"} onClickSubmit={addUser} />
            </div>
        </div>
    );
};

export default Signupform;