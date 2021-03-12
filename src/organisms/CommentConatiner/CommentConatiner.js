import React from "react";
import style from "./CommentConatiner.module.scss";
import PostComment from "../../atoms/PostComment/PostComment.js";
import CommentCard from "../../molecules/CommentCard/CommentCard.js";

const CommentConatiner = (props) => {
  return (
    <div className={style["o-comment-conatiner"]} data-test="">
      <PostComment />
      {props.comments.map((data, index) => (
        <CommentCard key={index} {...data}></CommentCard>
      ))}
    </div>
  );
};

export default CommentConatiner;
