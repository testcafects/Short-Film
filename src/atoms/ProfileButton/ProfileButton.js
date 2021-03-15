import React from "react";
import style from "./ProfileButton.module.scss";
import { Button } from "antd";

const ProfileButton = (props) => {
  const saveInfo = () => {
    window.confirm("Are you sure you want to save info?");
  };
  return (
    <div className={style["a-profile-button"]}>
      <Button type={props.type} onClick={saveInfo}>
        {props.name}{" "}
      </Button>
    </div>
  );
};

export default ProfileButton;
