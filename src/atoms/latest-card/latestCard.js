import { Card } from 'antd';
import style from './latestCard.module.scss'

const { Meta } = Card;

const LatestCard = (props) =>{
return(
    <div className={style['a-latest-card']}>
      <img  className={style['a-latest-card__image']} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"  />
    <div className={style['a-latest-card__text']}>
      <span>{props.title}</span><br/>
      <span>{props.description}</span>
    </div> 
    </div>
)
}

export default LatestCard