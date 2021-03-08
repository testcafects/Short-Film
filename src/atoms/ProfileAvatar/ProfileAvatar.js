import React from "react";
import style from "./ProfileAvatar.module.scss";

import { Avatar } from "antd";

const ProfileIcon = () => {
  return (
    <div className={style["a-profile-avatar"]}>
      <Avatar size={128} src="https://picsum.photos/60" />
    </div>
  );
};

export default ProfileIcon;
