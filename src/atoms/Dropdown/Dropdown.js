import React from "react";
import { Select } from "antd";

import style from "./Dropdown.module.scss";

const { Option } = Select;

const Dropdown = (props) => {
  //   const [value, setValue] = useState("");

  const handleChange = (value) => {
    // setValue(value);
  };

  return (
    <div className={style["a-dropdown"]}>
      <Select
        className={style["a-dropdown--region"]}
        defaultValue={props.defaultValue}
        onChange={handleChange}
        disabled={props.disable}
      >
        {props.options &&
          props.options.map((state, i) => (
            <Option key={i} value={state}>
              {state}
            </Option>
          ))}
      </Select>
    </div>
  );
};

export default Dropdown;
