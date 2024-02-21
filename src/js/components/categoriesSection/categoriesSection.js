import {getMainTitle} from "../mainTitle/mainTitle.js";
import {getCategoriesCard} from "../categoriesCard/categoriesCard.js";

import './categoriesSection.css'
/*--------------------------------*/
import appleAll from '/src/assets/img/apple-all4.png'
import macImg from '/src/assets/img/mac.png';
import iphoneImg from '/src/assets/img/iphone.png';
import IpadImg from '/src/assets/img/ipad.png';
import appleWatchImg from '/src/assets/img/apple-watch.png';
import airPodsImg from '/src/assets/img/air-pods.png';
import accessImg from '/src/assets/img/accessories.png';
import airTag from '/src/assets/img/air-tag.png'
import appleTv from '/src/assets/img/apple-tv.png'
import homePod from '/src/assets/img/home-pod.png'
/*--------------------------------*/

const categoriesList =  [
    {
        id: 0,
        image : appleAll,
        title: 'All'
    },
    {
        id: 1,
        image : macImg,
        title: 'Mac'
    },
    {
        id: 2,
        image : iphoneImg,
        title: 'iPhone'
    },
    {
        id: 3,
        image : IpadImg,
        title: 'iPad'
    },
    {
        id: 4,
        image : appleWatchImg,
        title: 'AppleWatch'
    },
    {
        id: 5,
        image : airPodsImg,
        title: 'AirPods'
    },
    {
        id: 6,
        image : airTag,
        title: 'AirTag'
    },
    {
        id: 7,
        image : appleTv,
        title: 'Apple TV 4k'
    },
    {
        id: 8,
        image : homePod,
        title: 'HomePod'
    },
    {
        id: 9,
        image : accessImg,
        title: 'Accessories'
    },
]


export const categoriesStore = {
    categoriesList,
    activeCategory: categoriesList[0],
}




/*Секция список категорий*/
export function getCategoriesSection(){
    const section = document.createElement('section');
    section.classList.add('product-categories', 'section', 'container');

    const categoriesTitle = getMainTitle('Категорії товарів');

    const productCategoriesList = document.createElement('ul');
    productCategoriesList.classList.add('list-reset', 'categories-list');


    productCategoriesList.append(
        ...categoriesStore.categoriesList.map(i =>
            getCategoriesCard(i.image, i.title, i))
    )

    section.append(categoriesTitle, productCategoriesList)
    return section;
}
