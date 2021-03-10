import style from './categoryBar.module.scss';
import CategoryButton from '../../atoms/categoryButton/categoryButton';

const CategoryBar = (props) =>{
    return(
        <div className={style['m-category-bar']}>
            <div className={style['m-category-bar__button']}><CategoryButton value={'Comedy'}/></div>
            <div className={style['m-category-bar__button']}><CategoryButton value={'English Comedy'}/></div>
            <div className={style['m-category-bar__button']}><CategoryButton value={'Hindi Comedy'}/></div>
            <div className={style['m-category-bar__button']}><CategoryButton value={'Tamil Comedy'}/></div>
            <div className={style['m-category-bar__button']}><CategoryButton value={'Telugu Comedy'}/></div>
            <div className={style['m-category-bar__button']}><CategoryButton value={'KannadaComedy'}/></div>
        </div>
    )
}

export default CategoryBar