import {getProductCard} from "../productCard/productCard.js";
import {getMainTitle} from "../mainTitle/mainTitle.js";
import {getFilters} from "../filters/filters";
import {categoriesStore} from "../categoriesSection/categoriesSection";


import './productsSection.css'
import ass from '/src/assets/img/iphone15pro.png';


/*Секция список товаров*/
export function getProductsSection() {
    const section = document.createElement('section');
    section.classList.add('products-section__container', 'container', 'section');


    const  productsTitleEl = getMainTitle(categoriesStore.activeCategory?.title, 'h2')

    const productsWrapper = document.createElement('div');
    productsWrapper.classList.add('products-wrapper');

    const filters = document.createElement('div');
    filters.classList.add('filters__content');
    filters.append(getFilters())

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

    productsWrapper.append(filters, productsList);

    section.append(productsTitleEl, productsWrapper)
    return section;
}