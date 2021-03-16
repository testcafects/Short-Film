import React from 'react'
import Feeder from '../../organisms/Feeder/Feeder'
import style from './FeedsPage.module.scss'
const FeedsPage = () => {
    const inpt = ['Title','Genre','Director','Password','Description']
    
    return(
        <div className={style['feed-page']}>
            <h2 data-test="VideoUpload">Upload video</h2>
            <Feeder inputData={inpt}/>
        </div>
    )
}

export default FeedsPage;