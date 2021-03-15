import React from 'react';
import CardCustom from '../../atoms/CardCustom/CardCustom';
import style from './CardCollection.module.scss';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const CardCollection = (props) => {
    const cards = [1, 2, 3, 4, 5, 6, 7];
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className={style['m-card-collection']} data-test="">
            <Carousel responsive={responsive} className="carousel" infinite={true}>
                {
                    cards.map((card, index) => {
                        return <div key={index}><CardCustom key={index} {...props} /></div>
                    })
                }
            </Carousel>

        </div>
    );
};

export default CardCollection;