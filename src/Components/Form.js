import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";

function Form() {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

    const addUser = () => {
        createUser({
            variables: {
                name: name,
                email: email,
                password: password
            },
        });

        if (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                    setname(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            {/* <input
                type="number"
                placeholder="Age"
                onChange={(e) => {
                    setAge(e.target.value);
                }}
            /> */}
            <button onClick={addUser}> Create User</button>
        </div>
    );
}

export default Form;