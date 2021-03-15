import React from "react";
import style from "./ProfileForm.module.scss";
import TextboxWithLabel from "../../atoms/TextboxWithLabel/TextboxWithLabel.js";
import ProfileButton from "../../atoms/ProfileButton/ProfileButton.js";

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
        <TextboxWithLabel
          labelName="Date of Birth"
          placeholder="Date of Birth"
        />
      </div>
      <TextboxWithLabel
        labelName="Genres"
        placeholder="Genres"
        defaultValue="Action"
      />
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
