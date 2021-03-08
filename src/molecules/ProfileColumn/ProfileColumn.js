import React from "react";
import style from "./ProfileColumn.module.scss";
import ProfileAvatar from "../../atoms/ProfileAvatar/ProfileAvatar.js";
import ProfileName from "../../atoms/ProfileName/ProfileName.js";

const ProfileColumn = (props) => {
  return (
    <div className={style["m-profile-column"]}>
      <div className={style["m-profile-avatar"]}>
        <ProfileAvatar />
      </div>
      <ProfileName />
    </div>
  );
};

export default ProfileColumn;
