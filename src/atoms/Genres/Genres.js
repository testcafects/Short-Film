import React from "react";
import { Select } from "antd";
import style from "./Genres.module.scss";

const { Option } = Select;

const Genres = (props) => {
  return (
    <div className={style["a-genres"]}>
      <label>{props.labelName}</label>
      <Select
        dropdownStyle={'borderRadius:"0.5rem"'}
        mode="multiple"
        className={style["a-genres__text"]}
        placeholder={props.placeholder}
        optionLabelProp="label"
      >
        <Option value="action" label="Action">
          <div>Action</div>
        </Option>
        <Option value="comedy" label="Comedy">
          <div>Comedy</div>
        </Option>
        <Option value="thriler" label="Thriler">
          <div>Thriler</div>
        </Option>
        <Option value="drama" label="Drama">
          <div>Drama</div>
        </Option>
      </Select>
    </div>
  );
};

export default Genres;
