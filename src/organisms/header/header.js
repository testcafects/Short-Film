import React from 'react';
import style from './header.module.scss';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import ProfileIcon from '../../atoms/profile-icon/profile-icon';
import SearchBar from '../../atoms/search-bar/search-bar.js';
import Logo from '../../atoms/Logo/Logo';

const Header = () => {
    return (
        <header className={style['m-header']}>
            <section>
                <Logo />
                <Button type="text">Explore</Button>
            </section>
            <SearchBar />
            <section>
                <Button type="text" icon={<ShoppingCartOutlined />}>Cart</Button>
                <ProfileIcon />
            </section>
        </header>
    )
}

export default Header
