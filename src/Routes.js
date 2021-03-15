import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import LoginPage from "./pages/LoginPage/LoginPage.js";
import SignupPage from "./pages/SignupPage/SignupPage"

const Routes = ({ }) => {
    return (
        <Router path="/" onUpdate={() => window.scrollTo(0, 0)} history={browserHistory} component={LoginPage} >

            <Route path="/" component={LoginPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
        </Router>
    )
};


export default Routes;