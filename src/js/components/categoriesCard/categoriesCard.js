/*Карточка категории*/
import {router} from "../../main";

import './categoriesCard.css'
import {categoriesStore} from "../categoriesSection/categoriesSection";


export function getCategoriesCard(image, title, category){
    const itemCategories = document.createElement('li');
    itemCategories.classList.add('categories-list__item');

    const itemCategoriesLink = document.createElement('a');
    itemCategoriesLink.href = `/catalog/${title}`;
    itemCategoriesLink.classList.add('categories-link__item');

    if (decodeURI(itemCategoriesLink.href).endsWith(router.current[0].url )&& router.current[0].url){
        itemCategoriesLink.classList.add('active');
        categoriesStore.activeCategory = category;
    }
    itemCategoriesLink.addEventListener('click', function (event){
        event.preventDefault();
        categoriesStore.activeCategory = category;
        router.navigate(`/catalog/${title}`);
    })

    const imgWrapperCategories = document.createElement('div');
    imgWrapperCategories.classList.add('categories-wrapper__img');

    const imgCategories = document.createElement('img');
    imgCategories.classList.add('categories-list__img');
    imgCategories.src = image;
    imgCategories.width = 120;
    imgCategories.height = 78;
    imgCategories.alt = title;

    const titleCategories = document.createElement('h3');
    titleCategories.classList.add('categories-list__title');
    titleCategories.textContent = title;

    imgWrapperCategories.append(imgCategories);
    itemCategoriesLink.append(imgWrapperCategories, titleCategories);
    itemCategories.append(itemCategoriesLink);
    return itemCategories;
}