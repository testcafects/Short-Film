import React from "react";
import style from "./Cards.module.scss";
import { Card } from "antd";
import "antd/dist/antd.css";
import Rating from "../../atoms/rating/rating.js";
import Buttons from "../../atoms/Buttons/Buttons.js";
const { Meta } = Card;

const Cards = (props) => {
  const addToCart = () => {
    console.log();
  };
  return (
    <div className={style["m-cards"]} data-test="individual_card">
      <Card
        hoverable
        style={{ width: 175 }}
        cover={
          <img alt="example" src="https://source.unsplash.com/random/150x125" />
        }
      >
      
        <Meta
          title={props.value.title}
          description={`Director: ${props.value.Director.name}`}
          data-test="meta_info"
        />
        <Rating value={props.value.rating}/>
        
        <Buttons
          id="btn"
          name="Add to Cart"
          width="112px"
          height="32px"
          onClick={addToCart}
        />
      </Card>
    </div>
  );
};

export default Cards;
