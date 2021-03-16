import { DownOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import FilterOption from "../../atoms/filter-option/filter-option.js";
import style from "./filter-item.module.scss";

const FilterItem = (props) => {
  const filters = props.filters;
  return (
    <div className={style["m-filter-item"]}>
      <nav>
        <div className="title">{props.name}</div>
        <Button type="text" icon={<DownOutlined />}></Button>
      </nav>
      <div>
        <FilterOption data={filters} />
      </div>
    </div>
  );
};

export default FilterItem;
