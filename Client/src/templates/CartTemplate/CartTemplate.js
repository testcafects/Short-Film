import React from "react";
import style from "./CartTemplate.module.scss";
import ShoppingCart from "../../organisms/ShoppingCart/ShoppingCart.js";
import Recommended from "../../organisms/Recommended/Recommended";
import CheckoutBox from "../../molecules/CheckoutBox/CheckoutBox";
import Header from "../../molecules/header/header.js";

const CartTemplate = (props) => {
  return (
    <div className={style["t-cart-template"]}>
      <Header />
      <div className={style["t-cart-template__container"]}>
        <div className={style["t-cart-template__cart"]}>
          <ShoppingCart />
        </div>
        <div className={style["t-cart-template__checkoutbox"]}>
          <CheckoutBox />
        </div>
      </div>

      <Recommended />
    </div>
  );
};

export default CartTemplate;
