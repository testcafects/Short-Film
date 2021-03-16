import { FilterFilled } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import ResultCount from "../../atoms/result-count/result-count.js";
import style from "./list-menu-bar.module.scss";

function ListMenuBar() {
  return (
    <div className={style["m-list-menu-bar"]}>
      <Button type="text" icon={<FilterFilled />}>
        <b>Filter</b>
      </Button>
      <ResultCount />
    </div>
  );
}

export default ListMenuBar;
