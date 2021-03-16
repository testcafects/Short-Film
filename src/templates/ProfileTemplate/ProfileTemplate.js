import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfileLinks from "../../atoms/ProfileLinks/ProfileLinks";
import Header from "../../molecules/header/header.js";
import ProfileColumn from "../../molecules/ProfileColumn/ProfileColumn";
import AccountDetails from "../../templates/AccountDetails/AccountDetails.js";
import PersonalDetails from "../../templates/PersonalDetails/PersonalDetails.js";
import WatchHistory from "../WatchHistory/WatchHistory";
import style from "./ProfileTemplate.module.scss";

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
    {
      path: "/watched-history",
      component: WatchHistory,
      text: "Watched History",
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
