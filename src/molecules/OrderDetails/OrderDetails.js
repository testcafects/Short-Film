import React from "react";
import Image from "../../atoms/Image/Image";
import style from "./OrderDetails.module.scss";

const OrderDetails = (props) => {
  return (
    <div className={style["m-order-details"]}>
      <h1 className={style["m-order-details__header"]}>Order Details</h1>
      <div className={style["m-order-details__content"]}>
        <div className={style["m-order-details__content__avatar"]}>
          <Image
            shape={"square"}
            size={48}
            alt={"Name of the video"}
            imgSrc={
              "https://img-a.udemycdn.com/course/100x100/926512_6fdf_6.jpg?ek3oLBVHhFzSmNtFD2lyS-uwJMcRsq9soAvEONcKGlQ53-l5AcUNB13-XvyWmtiMaLMVhkLhqLbpo00ulAM8SgTXxblFvHYczY8ODbauMxQpMcat83BwJAlAuZ0DQ4w"
            }
          />
        </div>
        <h3 className={style["m-order-details__content__name"]}>
          Premiere Pro CC for Beginners: Video Editing in Premiere
        </h3>
        <h3 className={style["m-order-details__content__price"]}>₹6,400</h3>
      </div>
    </div>
  );
};

export default OrderDetails;
