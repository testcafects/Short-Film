import React from "react";
import { useHistory } from "react-router-dom";
import ReferalBanner from "../../atoms/referal-banner/referal-banner.js";
import FilterItem from "../../molecules/filter-item/filter-item.js";
import ListMenuBar from "../../molecules/list-menu-bar/list-menu-bar.js";
import ListCard from "../../organisms/list-card/list-card.js";
import style from "./list-template.module.scss";

const ListTemplate = () => {
  const history = useHistory();

  const List = [
    {
      name: "Price",
      filters: [
        { name: "Free", totalItems: 20 },
        { name: "Paid", totalItems: 112 },
      ],
    },
    {
      name: "Sub Title",
      filters: [
        { name: "English", totalItems: 20 },
        { name: "Korean", totalItems: 90 },
        { name: "Japanese", totalItems: 16 },
      ],
    },
    {
      name: "Languages",
      filters: [
        { name: "English", totalItems: 20 },
        { name: "Korean", totalItems: 90 },
        { name: "Japanese", totalItems: 16 },
      ],
    },
  ];
  const navigate = (el) => {
    history.push(`/detail/${el}`);
  };

  return (
    <div className={style["t-list"]}>
      <div className={style["t-list__container"]}>
        <ListMenuBar />
        <main className={style["t-list__content"]}>
          <aside>
            {List.map((el, index) => (
              <FilterItem key={index} {...el} />
            ))}
          </aside>
          <section>
            {[1, 2, 3, 4, 5, 6].map((el) => (
              <ListCard key={el} navigate={() => navigate(el)} />
            ))}
          </section>
          <section>
            <ReferalBanner />
            <ReferalBanner />
          </section>
        </main>
      </div>
    </div>
  );
};

export default ListTemplate;
