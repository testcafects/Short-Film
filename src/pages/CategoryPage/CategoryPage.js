import style from "./CategoryPage.module.scss";

import React from 'react'
import CategoryTemplate from "../../templates/category-template/category-template";

const CategoryPage = () => {
    return (
        <div className={style['p-category']}>
            <CategoryTemplate />
        </div>
    )
}

export default CategoryPage
