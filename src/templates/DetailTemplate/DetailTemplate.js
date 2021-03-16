import React from "react";
import Purchase from "../../atoms/Purchase/Purchase.js";
import VideoPlayer from "../../atoms/VideoPlayer/VideoPlayer.js";
import VideoDescription from "../../molecules/VideoDescription/VideoDescription.js";
import CommentConatiner from "../../organisms/CommentConatiner/CommentConatiner.js";
import ListCard from "../../organisms/list-card/list-card.js";
import style from "./DetailTemplate.module.scss";

const DetailTemplate = (props) => {
  const detail = {
    id: "1",
    title: "ASP NET CORE - ANGULAR 2 - Web API E-Commerce App.",
    description:
      "Create a e-commerce project with Asp Net Core,Angular 2,bootstrap 4,Paypal,Identity Core,Entity Framework Core,C#,WebAPI",
    views: "1.5 M views",
    postedOn: "2 months ago",
    price: 3000,
    comments: [
      {
        id: 1,
        postedBy: "Kinga Cichewicz",
        postedOn: "2 Months ago",
        comment:
          "The course teach how to use .Core in differents approaches and It could be useful, like using Razor to interect with .Core views and after using Angular 2,like using Razor to interect with .Core views and after using Angular 2",
        reply: [
          {
            id: 1,
            postedBy: "Kinga Cichewicz",
            postedOn: "2 Months ago",
            comment:
              "Thank you for your fine review, this is how we improve ourselves. ",
          },
        ],
      },
      {
        id: 2,
        postedBy: "Kevin King ",
        postedOn: "1 Months ago",
        comment:
          "The course teach how to use .Core in differents approaches and It could be useful, like using Razor to interect with .Core views and after using Angular 2,like using Razor to interect with .Core views and after using Angular 2",
        reply: [
          {
            id: 1,
            postedBy: "Kinga Cichewicz",
            postedOn: "3 days ago",
            comment:
              "Thank you for your fine review, this is how we improve ourselves. ",
          },
        ],
      },
    ],
  };

  return (
    <div className={style["t-detail"]} data-test="detail-template">
      <section className={style["t-detail__story"]}>
        <VideoPlayer />
        <VideoDescription {...detail} />
        <hr />
        <Purchase price={detail.price} />
        <hr />
        <CommentConatiner comments={detail.comments} />
      </section>
      <section
        className={style["t-detail__suggestion_list"]}
        data-test="suggestion-list"
      >
        {[1, 2, 3, 4, 1, 2, 3, 4, 4].map((el, index) => (
          <ListCard key={index} />
        ))}
      </section>
    </div>
  );
};

export default DetailTemplate;
