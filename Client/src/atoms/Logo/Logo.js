import React from "react";
import style from "./Logo.module.scss";

const Logo = (props) => {
  return (
    <div className={style["a-logo"]} data-test="">
      Video Doc
    </div>
  );
};

export default Logo;
