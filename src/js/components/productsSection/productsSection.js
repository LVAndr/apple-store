import {getProductCard} from "../productCard/productCard.js";
import {getMainTitle} from "../mainTitle/mainTitle.js";

import './productsSection.css'


import ass from '/src/assets/img/iphone15pro.png';
/*Секция список товаров*/
export function getProductsSection() {
    const section = document.createElement('section');
    section.classList.add('products-section__container', 'container', 'section');

    const  productsTitle = getMainTitle('iPhone', 'h2')

    const productsWrapper = document.createElement('div');
    productsWrapper.classList.add('products-wrapper');

    const productsList = document.createElement('ul');
    productsList.classList.add('list-reset', 'products-list');

    const prodImg = ass;
    productsList.append(
        getProductCard(prodImg, 'Iphone 15 Pro 128Гб Red', 49999),
        getProductCard(prodImg, 'Iphone15Pro', 49999),
        getProductCard(prodImg, 'Iphone 15 Pro', 49999),
        getProductCard(prodImg, 'Iphone 15 Pro', 49999),
        getProductCard(prodImg, 'Iphone 15 Pro', 49999),
        getProductCard(prodImg, 'Iphone 15 Pro', 49999)
    );

    productsWrapper.append(productsList);

    section.append(productsTitle, productsWrapper)
    return section;
}