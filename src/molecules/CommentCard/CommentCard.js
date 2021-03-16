import React from "react";
import Comment from "../../atoms/Comment/Comment.js";
import ProfileIcon from "../../atoms/profile-icon/profile-icon.js";
import style from "./CommentCard.module.scss";

const CommentCard = (props) => {
  return (
    <div className={style["m-comment-card"]} data-test="">
      <ProfileIcon size={42} />
      <div className={style["m-comment-card__content"]}>
        <Comment {...props} />
        {props.reply.map((data, index) => (
          <div key={index} className={style["m-comment-card__reply"]}>
            <ProfileIcon size={40} />
            <Comment {...data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentCard;
