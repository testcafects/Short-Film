import Rating from "../../atoms/rating/rating.js";
import CardMetaData from "../../molecules/card-meta-data/card-meta-data.js";
import style from "./list-card.module.scss";

const ListCard = (props) => {
  const metaData = {
    views: "5M views",
    postedOn: "2 days ago",
  };
  return (
    <div className={style["o-list-card"]} onClick={props.navigate}>
      <img src="https://picsum.photos/128" alt="card" />
      <div className={style["o-list-card__content"]}>
        <h1 title="The complete Node.js Developer Course">
          The complete Node.js Developer Course
        </h1>
        <div
          title="e-commerce project with Asp Net Core,Angular 2,
                    bootstrap 4,Paypal,Identity Core,C#,"
          className={style["description"]}
        >
          e-commerce project with Asp Net Core,Angular 2, bootstrap
          4,Paypal,Identity Core,C#,
        </div>
        <div className={style["author"]}>Hari Hara kumar</div>
        <Rating />
        <CardMetaData {...metaData} />
      </div>
    </div>
  );
};

export default ListCard;
