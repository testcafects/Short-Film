import React from "react";
import style from "./ProfileTemplate.module.scss";
import Header from "../../molecules/header/header.js";
import ProfileColumn from "../../molecules/ProfileColumn/ProfileColumn";
import ProfileLinks from "../../atoms/ProfileLinks/ProfileLinks";
// import PersonalDetails from "../../templates/PersonalDetails/PersonalDetails.js";
// import AccountDetails from "../../templates/AccountDetails/AccountDetails.js";

const ProfileTemplate = (props) => {
  const routes = [
    {
      path: "/profile",
      component: "PersonalDetails",
      text: "Profile",
    },
    {
      path: "/account",
      component: "AccountDetails",
      text: "Account Details",
    },
  ];
  return (
    <div className={style["t-profile-template"]}>
      <Header />
      <div className={style["t-profile-template__container"]}>
        <div className={style["t-profile-template__left-column"]}>
          <ProfileColumn />
          <div className={style["t-profile-template__links"]}>
            <ProfileLinks routes={routes} />
          </div>
        </div>
        <div className={style["t-profile-template__right-column"]}></div>
      </div>
    </div>
  );
};

export default ProfileTemplate;
