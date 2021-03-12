import React from "react";
import { AutoComplete } from "antd";

import style from "./SearchBar.module.scss";

const options = [
  {
    value: "Burns Bay Road",
  },
  {
    value: "Downing Street",
  },
  {
    value: "Wall Street",
  },
];

const SearchBar = (props) => {
  return (
    <div className={style["a-search-bar"]}>
      <AutoComplete
        className={style["a-search-bar__autoComplete"]}
        options={options}
        placeholder="Search for anything"
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </div>
  );
};

export default SearchBar;
