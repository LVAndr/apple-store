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

/*Секция список категорий*/
export function getCategoriesSection(){
    const section = document.createElement('section');
    section.classList.add('product-categories', 'section', 'container');

    const categoriesTitle = getMainTitle('Категорії товарів');

    const productCategoriesList = document.createElement('ul');
    productCategoriesList.classList.add('list-reset', 'categories-list');


    productCategoriesList.append(
        getCategoriesCard(appleAll, 'All'),
        getCategoriesCard(macImg, 'Mac'),
        getCategoriesCard(iphoneImg, 'iPhone'),
        getCategoriesCard(IpadImg, 'iPad'),
        getCategoriesCard(appleWatchImg, 'AppleWatch'),
        getCategoriesCard(airPodsImg, 'AirPods'),
        getCategoriesCard(airTag, 'AirTag'),
        getCategoriesCard(appleTv, 'Apple TV 4k'),
        getCategoriesCard(homePod, 'HomePod'),
        getCategoriesCard(accessImg, 'Accessories'),
    )

    section.append(categoriesTitle, productCategoriesList)
    return section;
}