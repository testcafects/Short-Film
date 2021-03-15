import React from "react";
import style from "./CartItem.module.scss";
import HorizontalCard from "../../atoms/HorizontalCard/HorizontalCard";
import SaveForLater from "../../atoms/SaveForLater/SaveForLater";
import RemoveIcon from "../../atoms/RemoveIcon/RemoveIcon";

const CartItem = (props) => {
  return (
    <div className={style["m-cart-item"]}>
      <div className={style["m-cart-item__image"]}>
      <HorizontalCard  title="Complete NodeJS" />
      <div className={style["m-cart-item__remove"]}>
        <RemoveIcon price="1200" /> 
        <div className={style["m-cart-item__saveforlater"]}>
          <SaveForLater />
        </div> </div>
        </div>
    </div>
  );
};

export default CartItem;
