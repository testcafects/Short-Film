// import { Carousel } from 'antd';
// import style from './CarouselBar.module.scss';
// import {LeftOutlined} from '@ant-design/icons';
// import {RightOutlined} from '@ant-design/icons';
// import CategoryCard from '../../organisms/category-card/categoryCard';

// function onChange(a, b, c) {
//   console.log(a, b, c);
// }

// // const contentStyle = {
// //   height: '160px',
// //   color: '#fff',
// //   lineHeight: '160px',
// //   textAlign: 'center',
// //   background: '#364d79',
// // };
// const CarouselBar=()=>{
//     return(
//         <div>
//             <Carousel afterChange={onChange}
//             // slidesToShow='2'
//             // slidesToScroll='2'
//             >
//     <div>
//       <h3 >1</h3>
//       <div className={style['t-category-list__left-arrow']}>
//             <LeftOutlined />
//             </div>
//                <div className={style['t-category-list__card']}> <CategoryCard/> </div>
//                <div className={style['t-category-list__card']}> <CategoryCard/> </div>
//                <div className={style['t-category-list__card']}> <CategoryCard/> </div>
//                <div  className={style['t-category-list__left-arrow']}>
//                <RightOutlined />
//                </div>
//     </div>
//     <div>
//       <h3 >2</h3>
//       <div className={style['t-category-list__left-arrow']}>
//             <LeftOutlined />
//             </div>
//                <div className={style['t-category-list__card']}> <CategoryCard/> </div>
//                <div className={style['t-category-list__card']}> <CategoryCard/> </div>
//                <div className={style['t-category-list__card']}> <CategoryCard/> </div>
//                <div  className={style['t-category-list__left-arrow']}>
//                <RightOutlined />
//                </div>
//     </div>
//     <div>
//       <h3 >3</h3>
//       <div className={style['t-category-list__left-arrow']}>
//             <LeftOutlined />
//             </div>
//                <div className={style['t-category-list__card']}> <CategoryCard/> </div>
//                <div className={style['t-category-list__card']}> <CategoryCard/> </div>
//                <div className={style['t-category-list__card']}> <CategoryCard/> </div>
//                <div  className={style['t-category-list__left-arrow']}>
//                <RightOutlined />
//                </div>
//     </div>
//     <div>
//       <h3 >4</h3>
//     </div>
//     <div>
//       <h3 >5</h3>
//     </div>
//     <div>
//       <h3 >6</h3>
//     </div>
//     <div>
//       <h3 >7</h3>
//     </div>
//     <div>
//       <h3 >8</h3>
//     </div>
//     <div>
//       <h3 >9</h3>
//     </div>
//   </Carousel>
//         </div>
//     )
// }
//  export default CarouselBar;


/////////////////////////////////////////////////////////////////////////
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CategoryCard from '../../molecules/category-card/categoryCard';
import style from './mostTrendingCarousel.module.scss';
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1 // optional, default to 1.
//   }
// };

const MostTrendingCarousel=()=>{
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
  return(
    <div>
      <Carousel
      className={style['t-carousel-list']}
  swipeable={false}
  draggable={false}
  // showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={false}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  // autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="transform 0.3s ease-in-out"
  transitionDuration={500}
  // containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  arrows={true}
>

{
    [1,2,3,4,5,6,7,8].map((det)=>{
      return <CategoryCard key={det}/>
    }) 
  }
</Carousel>
    </div>
  )
}
export default MostTrendingCarousel;