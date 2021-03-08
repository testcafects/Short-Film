import React from "react";
import style from "./ProfileLinks.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ProfileLinks = (props) => {
  return (
    <div className={style["a-profile-links"]}>
      <Router>
        <div>
          <ul>
            {props.routes.map((link, i) => {
              return (
                <li>
                  <Link key={i} to={link.path}>
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Switch>
            {props.routes.map((route, i) => (
              <Route key={i} path={route.path}>
                <route.component />
              </Route>
            ))}
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default ProfileLinks;
