import React from "react";
import style from "./AccountForm.module.scss";
import PasswordTextbox from "../../atoms/PasswordTextbox/PasswordTextbox.js";
import TextboxWithLabel from "../../atoms/TextboxWithLabel/TextboxWithLabel.js";
import ProfileButton from "../../atoms/ProfileButton/ProfileButton.js";
import { Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const AccountForm = (props) => {
  return (
    <div className={style["m-account-form"]}>
      <TextboxWithLabel
        labelName="Email"
        placeholder="Email"
        defaultValue="tanya@gmail.com"
      />
      <Space direction="vertical">
        <PasswordTextbox
          placeholder="Old Password"
          labelName="Reset Password"
        />
        <PasswordTextbox
          placeholder="New Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Space>

      <div className={style["m-account-form__buttons"]}>
        <ProfileButton type="primary" name="Save" />
        <ProfileButton type="secondary" name="Cancel" />
      </div>
    </div>
  );
};

export default AccountForm;
