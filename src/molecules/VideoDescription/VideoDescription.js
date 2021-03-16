import { ShareAltOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import CardMetaData from "../../molecules/card-meta-data/card-meta-data";
import style from "./VideoDescription.module.scss";

const VideoDescription = (props) => {
  const metaData = {
    views: props.views,
    postedOn: props.postedOn,
  };
  return (
    <div className={style["m-video-description"]} data-test="">
      <h1>{props.title}</h1>
      <span className={style["m-video-description__description"]}>
        {props.description}
      </span>
      <div className={style["m-video-description__meta-data"]}>
        <CardMetaData {...metaData} />
        <Button type="default" icon={<ShareAltOutlined />}>
          Share
        </Button>
      </div>
    </div>
  );
};

export default VideoDescription;
