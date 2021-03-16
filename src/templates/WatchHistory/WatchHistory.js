import { Pagination } from "antd";
import React from "react";
import ListCard from "../../organisms/list-card/list-card.js";
import style from "./WatchHistory.module.scss";

const WatchHistory = (props) => {
  return (
    <div className={style["t-watch-history"]}>
      <div className={style["t-watch-history__bg-box"]}>
        <span className={style["t-watch-history__title"]}>Watched History</span>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {[1, 2, 3, 4].map((el) => (
            <ListCard key={el} />
          ))}
        </div>
        <div className={style["t-pagination"]}>
          <Pagination defaultCurrent={1} total={30} />
        </div>
      </div>
    </div>
  );
};

export default WatchHistory;
