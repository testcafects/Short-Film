import React from "react";
import style from "./CartItem.module.scss";
import SaveForLater from "../../atoms/SaveForLater/SaveForLater";
import RemoveIcon from "../../atoms/RemoveIcon/RemoveIcon";

const CartItem = (props) => {
  return (
    <div className={style["m-cart-item"]}>
      <img
        className={style["m-cart-item__image"]}
        src="https://picsum.photos/240"
        alt="banner"
      />
      <div className={style["m-cart-item__title"]}>
        {props.value.Post.title}
      </div>
      <div className={style["m-cart-item__action"]}>
        <RemoveIcon price={props.value.Post.price} id={props.value.id}/>
        <SaveForLater />
      </div>
    </div>
  );
};

export default CartItem;
