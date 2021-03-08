import style from "./referal-banner.module.scss";

const ReferalBanner = () => {
    const customStyle = { backgroundImage: `url('https://picsum.photos/240')` }
    return (
        <div className={style['a-referal-banner']} style={customStyle}>
            <button>SUMMER2021</button>
            <section className={style['a-referal-banner__banner-content']}>
                <div className={style['a-referal-banner__banner-content--description']}>Summer Offer  up to 30%</div>
                <div className={style['a-referal-banner__banner-content--terms']}>Terms and condition applied</div>
            </section>
        </div>
    )
}

export default ReferalBanner;
