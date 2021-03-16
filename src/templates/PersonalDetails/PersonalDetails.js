import React from "react";
import ProfileForm from "../../molecules/ProfileForm/ProfileForm.js";
import style from "./PersonalDetails.module.scss";

const PersonalDetails = (props) => {
  return (
    <div className={style["t-personal-details"]}>
      <div className={style["t-personal-details__bg-box"]}>
        <span className={style["t-personal-details__title"]}>
          Personal Details
        </span>
        <ProfileForm />
      </div>
    </div>
  );
};

export default PersonalDetails;
