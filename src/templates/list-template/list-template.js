import React from 'react';
import style from './list-template.module.scss';
import Header from '../../molecules/header/header.js';
import FilterItem from '../../molecules/filter-item/filter-item.js';
import ListMenuBar from '../../molecules/list-menu-bar/list-menu-bar.js';
import ListCard from '../../organisms/list-card/list-card.js';
import ReferalBanner from '../../atoms/referal-banner/referal-banner.js';


const ListTemplate = () => {
    return (
        <div className={style['t-list']}>
            <Header />
            <div className={style['t-list__container']}>
                <ListMenuBar />
                <main className={style['t-list__content']}>
                    <aside>
                        <FilterItem />
                        <FilterItem />
                    </aside>
                    <section>
                        {
                            [1, 2, 3, 4].map((el) => <ListCard key={el} />)
                        }
                    </section>
                    <section >
                        <ReferalBanner />
                    </section>
                </main>
            </div>
        </div>
    )
}

export default ListTemplate