import React from "react";
import style from "./Comment.module.scss";

const Comment = (props) => {
  return (
    <div className={style["m-comment"]} data-test="">
      <div className={style["m-comment__title"]}>
        <h5>{props.postedBy} </h5>
        <span>{props.postedOn}</span>
      </div>
      <div className={style["m-comment__message"]}>{props.comment}</div>
    </div>
  );
};

export default Comment;
