import React from "react";
import ListTemplate from "../../templates/list-template/list-template.js";
import style from "./list-page.module.scss";

const ListPage = () => {
  return (
    <div className={style["p-list"]}>
      <ListTemplate />
    </div>
  );
};

export default ListPage;
