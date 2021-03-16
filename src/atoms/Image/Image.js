import { Avatar } from "antd";
import React from "react";
import style from "./Image.module.scss";

const Image = (props) => {
  return (
    <div className={style[`a-image${props.navImage}`]}>
      <Avatar
        shape={props.shape}
        size={props.size}
        src={props.imgSrc}
        alt={props.alt}
      />
    </div>
  );
};

export default Image;
