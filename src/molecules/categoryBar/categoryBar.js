import style from './categoryBar.module.scss';
import CategoryButton from '../../atoms/category-button/category-button';

const CategoryBar = (props) =>{
    const categories = ['Comedy','English Comedy','Hindi Comedy','Tamil Comedy','Telugu Comedy','KannadaComedy'];
    return(
        <div className={style['m-category-bar']} data-test="category-bar" >
    {categories.map((category,index)=>{
    return(
       
             <div className={style['m-category-bar__button']} key={index}><CategoryButton value={category}/></div>
            
       
    )})
        }
    </div>
    )
}

export default CategoryBar