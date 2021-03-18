import React from "react";
import style from "./HorizontalCard.module.scss";

const HorizontalCard = (props) => {
  return (
    <div className={style["a-horizontal-card"]}>
      <img
        className={style["a-horizontal-card__image"]}
        src="https://picsum.photos/240"
        alt="banner"
      />
      <span className={style["a-horizontal-card__title"]}>{props.title}</span>
    </div>
  );
};

export default HorizontalCard;
