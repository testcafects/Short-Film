import style from './category-button.module.scss';

const CategoryButton = (props) => {
    return(
        <div>
            <button className={style['a-categoryButton']} id="category-button">{props.value}</button>
        </div>
    )
}

export default CategoryButton