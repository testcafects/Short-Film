import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LatestReleasesCard from '../../atoms/latest-releases-card/latestReleasesCard';
import style from './latestReleasesCarousel.module.scss';
const LatestReleasesCarousel=()=>{
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    }
  };
  
  return(
    <div>
      <Carousel
      className={style['t-latest-carousel-list']}
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
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((det)=>{
      return <div className={style['t-latest-carousel-list__card']} key={det}> <LatestReleasesCard title='Quiet Place' description='Netflix Originals'/> </div>
    }) 
  }
</Carousel>
    </div>
  )
}
export default LatestReleasesCarousel;