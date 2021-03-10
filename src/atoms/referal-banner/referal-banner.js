import style from "./referal-banner.module.scss";




const ReferalBanner = () => {
    return (
        <div className={style['a-referal-banner']}>
            <img src="https://picsum.photos/240" alt="banner" />

            <div className="a-referal-banner__banner-content">
                <button>SUMMER2021</button>
                <div className={style['a-referal-banner__banner-content--description']}>Summer Offer  up to 30%</div>
                <div className={style['a-referal-banner__banner-content--terms']}>Terms and condition applied</div>
            </div>

        </div>
    )
}

export default ReferalBanner;
