import React from "react";
import style from "./profile-icon.module.scss";

import { Avatar } from "antd";

const ProfileIcon = (props) => {
  return (
    <div className={style["a-profile-icon"]}>
      <Avatar
        size={props.size ? props.size : 45}
        src="https://picsum.photos/60"
      />
    </div>
  );
};

export default ProfileIcon;
