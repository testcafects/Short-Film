import React from "react";
import style from "./AccountForm.module.scss";
import TextboxWithLabel from "../../atoms/TextboxWithLabel/TextboxWithLabel.js";
import ProfileButton from "../../atoms/ProfileButton/ProfileButton.js";

const AccountForm = (props) => {
  return (
    <div className={style["m-account-form"]}>
      <TextboxWithLabel labelName="Email" placeholder="Email" />
      <TextboxWithLabel labelName="Reset Password" placeholder="Old password" />
      <div className={style["m-account-form__buttons"]}>
        <ProfileButton type="primary" name="Save" />
        <ProfileButton type="secondary" name="Cancel" />
      </div>
    </div>
  );
};

export default AccountForm;
