import React from "react";
import style from "./ProfileTemplate.module.scss";
import Header from "../../molecules/header/header.js";
import ProfileColumn from "../../molecules/ProfileColumn/ProfileColumn";
import ProfileLinks from "../../atoms/ProfileLinks/ProfileLinks";
import PersonalDetails from "../../templates/PersonalDetails/PersonalDetails.js";
import AccountDetails from "../../templates/AccountDetails/AccountDetails.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const ProfileTemplate = (props) => {
  const routes = [
    {
      path: "/profile",
      component: PersonalDetails,
      text: "Profile",
    },
    {
      path: "/account",
      component: AccountDetails,
      text: "Account Details",
    },
  ];
  return (
    <div className={style["t-profile-template"]}>
      <Header />
      <Router>
        <div className={style["t-profile-template__container"]}>
          <div className={style["t-profile-template__left-column"]}>
            <ProfileColumn />
            <div className={style["t-profile-template__links"]}>
              <ProfileLinks routes={routes} />
            </div>
          </div>
          <div className={style["t-profile-template__right-column"]}>
            <Switch>
              {routes.map((route, i) => (
                <Route key={i} path={route.path}>
                  <route.component />
                </Route>
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default ProfileTemplate;
