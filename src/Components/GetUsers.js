import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetUsers() {
    const { error, loading, data } = useQuery(LOAD_USERS);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (data) {
            console.log("data", data.users);
            setUsers(data.users);
        }
    }, [data]);

    return (
        <div>
            {" "}
            {/* {users.map((val) => {
                return <h1> {val.name}</h1>;
            })} */}
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.length > 0 && users.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    );
}

export default GetUsers;