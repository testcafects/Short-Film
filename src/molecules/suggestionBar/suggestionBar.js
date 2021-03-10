import style from './suggestionBar.module.scss';
import CategoryButton from '../../atoms/categoryButton/categoryButton';

const SuggestionBar = (props) =>{
    return(
        <div className={style['m-suggestion-bar']}>
             <div className={style['m-suggestion-bar__button']}><CategoryButton value={'Action'}/></div>
            <div className={style['m-suggestion-bar__button']}><CategoryButton value={'Horror'}/></div>
            <div className={style['m-suggestion-bar__button']}><CategoryButton value={'Mystery'}/></div>
            <div className={style['m-suggestion-bar__button']}><CategoryButton value={'Adventure'}/></div>
        </div>
    )
}

export default SuggestionBar