import style from './suggestionBar.module.scss';
import CategoryButton from '../../atoms/category-button/category-button';

const SuggestionBar = (props) =>{
    const suggestions = ['Action','Horror','Mystery','Adventure']
    return(
        <div className={style['m-suggestion-bar']}>
            {
                suggestions.map((suggestion,index)=>{
                    return(
                        <div className={style['m-suggestion-bar__button']}><CategoryButton value={suggestion}/></div>
                    )
                })
            }
        </div>
    )
}

export default SuggestionBar