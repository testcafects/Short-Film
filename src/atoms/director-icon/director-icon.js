import { Avatar } from 'antd';
import style from './director-icon.module.scss'
const DirectorIcon = (props) => {
    return (
        <div className={style['a-director-icon']}>
            <Avatar size={100} src="https://picsum.photos/60" className={style['a-director-icon__image']}  />
            <div className={style['a-director-icon__name']}>{props.value}</div>
        </div>
    )
}

export default DirectorIcon