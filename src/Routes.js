import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

const Routes = ({ }) => {
    return (
        <Router path="/" onUpdate={() => window.scrollTo(0, 0)} history={browserHistory} component={Login} >

            <Route path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />

        </Router>
    )
};


export default Routes;