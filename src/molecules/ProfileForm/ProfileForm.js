import React from "react";
import DatePickers from "../../atoms/DatePicker/DatePickers.js";
import Genres from "../../atoms/Genres/Genres.js";
import ProfileButton from "../../atoms/ProfileButton/ProfileButton.js";
import TextboxWithLabel from "../../atoms/TextboxWithLabel/TextboxWithLabel.js";
import style from "./ProfileForm.module.scss";

const ProfileForm = (props) => {
  return (
    <div className={style["m-profile-form"]}>
      <TextboxWithLabel
        labelName="First Name"
        placeholder="First Name"
        defaultValue="Tanya"
      />
      <TextboxWithLabel
        labelName="Last Name"
        placeholder="Last Name"
        defaultValue="Yadav"
      />
      <div className={style["m-profile-form__email-dob"]}>
        <TextboxWithLabel
          labelName="Email"
          placeholder="Email"
          defaultValue="tanya@gmail.com"
        />
        <DatePickers labelName="Date of Birth" placeholder="Date of Birth" />
      </div>
      <Genres labelName="Genres" placeholder="Genres" />
      <TextboxWithLabel
        labelName="Social Media Link"
        placeholder="Facebook Link"
      />
      <TextboxWithLabel placeholder="Twitter Link" />
      <div className={style["m-profile-form__buttons"]}>
        <ProfileButton type="primary" name="Save" />
        <ProfileButton type="secondary" name="Cancel" />
      </div>
    </div>
  );
};

export default ProfileForm;
