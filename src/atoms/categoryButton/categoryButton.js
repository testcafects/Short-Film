import style from './categoryButton.module.scss';

const CategoryButton = (props) => {
    return(
        <div>
            <button className={style['a-categoryButton']}>{props.value}</button>
        </div>
    )
}

export default CategoryButton