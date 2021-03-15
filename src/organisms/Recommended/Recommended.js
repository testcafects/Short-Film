import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './Recommended.module.scss'
import Cards from '../../molecules/Cards/Cards.js'
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
const Recommended = props => {
return (
<div className={style['o-recommended']} data-test="recommended_cards">
<div className={style['o-recommended__title']} data-test="recommended_label">Recommended For You</div>
    
    <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={ false }
  autoPlaySpeed={1000}
  keyBoardControl={true}
  //customTransition="all .5"
  //transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-10-px"
  data-test="carousel"
>
  {
    [1,2,3,4,5,6,7,8,9].map((det)=>{
      return <Cards key={det}/>
    }) 
  }

</Carousel>
</div>
);
};

export default Recommended;