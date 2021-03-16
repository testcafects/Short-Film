import React from "react";
import "antd/dist/antd.css";
import style from './CardCustom.module.scss';
const Carditem = ({carddata}) => {
  return (
    <div>
          <div className={style.card}>
              <div className={style.part2}>
              <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="Avatar" />
                  <ul className={style.li}>
                     <li> <h4>Title: {carddata}</h4></li>
                      <li>Genre: : {carddata}</li>
                       <li>Description : {carddata}</li>
                        <li>Ratings: {carddata}</li>
                      </ul>

                </div>
                </div>

                </div>
    
    
  );
}
export default Carditem;


