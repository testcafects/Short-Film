import React from 'react';
import style from './director-list.module.scss';
import DirectorIcon from '../../atoms/director-icon/director-icon.js';

const DirectorsList = () =>{
    const directors = ['John Bevson', 'Sudha Kongara', 'Mani Ratnam','Shankar','John Bevson', 'Sudha Kongara', 'Mani Ratnam','Shankar'];
    return(
        <div className={style['m-director-list']}>
            {
            directors.map((director,index)=>{
                return(
                <div className={style['m-director-list__card']} key={index}> <DirectorIcon value={director}  /></div>
                )
            })
            }
        </div>
    )
}
export default DirectorsList