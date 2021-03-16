import { Button } from "antd";
import React from "react";
import style from "./ProfileButton.module.scss";

const ProfileButton = (props) => {
  const saveInfo = () => {
    window.confirm("Are you sure you want to save info?");
  };

  //   const handleClick = () => {
  //     const alertMessage = (props.name === "Save") ? "Successfully updated your profile changes": null;
  //     alert(alertMessage);
  // }
  return (
    <div className={style["a-profile-button"]}>
      <Button type={props.type} onClick={saveInfo}>
        {props.name}{" "}
      </Button>
    </div>
  );
};

export default ProfileButton;
