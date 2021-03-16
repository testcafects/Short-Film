import React, { useState } from "react";
import style from "./ShoppingCart.module.scss";
import CartItem from "../../molecules/CartItem/CartItem";

const ShoppingCart = (props) => {
  var [cartItems, setCartItems] = useState([1, 2]);
  return (
    <div className={style["o-shopping-cart"]} data-test="shopping-cart">
      <div className={style["o-shopping-cart__title"]}> ShoppingCart</div>
      <div>
        {cartItems.map((el) => (
          <div className={style["o-shopping-cart__cartItems"]}>
            <CartItem key={el} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
