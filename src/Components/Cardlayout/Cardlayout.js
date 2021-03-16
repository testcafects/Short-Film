import React from 'react'
import CardGrid from '../../molecules/CardsGrid/CardGrid'
import style from './Cardlayout.module.scss'

const Cardlayout = () => {
    const details = ['Friends','Harry']

    return (
        <div className={style['card-layout']}>
            <CardGrid inputcarddata={details}/>
        </div>
    )
}

export default Cardlayout;