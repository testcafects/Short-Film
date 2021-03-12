import React from "react";

import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Avatar from "../../atoms/Image/Image";
import SearchBar from "../../atoms/SearchBar/SearchBar.js";
import Logo from "../../atoms/Logo/Logo";
import style from "./Header.module.scss";

const Header = (props) => {
  return (
    <div className={style["m-header"]}>
      <section>
        <Logo />
        <Button type="text">Explore</Button>
      </section>
      <SearchBar />
      <section>
        <Button type="text" icon={<ShoppingCartOutlined />}>
          Cart
        </Button>
        <Avatar
          size={45}
          imgSrc={"https://picsum.photos/60"}
          alt={"User Profile pic"}
          navImage={"--user-pic"}
        />
      </section>
    </div>
  );
};

export default Header;
