import { Button, Input } from "antd";
import React from "react";
import ProfileIcon from "../profile-icon/profile-icon";
import style from "./PostComment.module.scss";

const PostComment = (props) => {
  return (
    <div className={style["a-post-comment"]} data-test="post-comment">
      <ProfileIcon size={48} />
      <Input
        className={style["a-post-comment__comment-box"]}
        placeholder="Enter your comment"
      />
      <Button className={style["a-post-comment__btn"]} type="primary">
        Comment
      </Button>
    </div>
  );
};

export default PostComment;
