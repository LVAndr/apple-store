import {router} from "../../main";
import {getMainTitle} from "../mainTitle/mainTitle";

import './productCard.css'
import {buttonTypes, getButton} from "../button/button";
import {getProductColor} from "../productColors/productColors";
import {getProductStorage} from "../productStorage/productStorage";


/*Карточка товара*/
export function getProductCard(image, title, price){
    const itemProduct = document.createElement('li');
    itemProduct.classList.add('product-list__item');

    let itemProductLink = document.createElement('a');
    itemProductLink.classList.add('product-link__item');
    itemProductLink.href=''
    itemProductLink.addEventListener('click', function (event){
        event.preventDefault();
        router.navigate(`/product/${title}`);

    })


    const productTitle = getMainTitle('', 'h3');
    productTitle.classList.add('product-list__title');
    productTitle.textContent = title;

    const productImg = document.createElement('img');
    productImg.classList.add('product-list__img');
    productImg.src = image;
    productImg.width = 297;
    productImg.height = 231;
    productImg.alt = title;

    const productColors = getProductColor();

    const productStorage = getProductStorage();

    const productPrice = document.createElement('div');
    productPrice.classList.add('product-list__price');
    productPrice.textContent = `${price} грн.`;




    let addProductBtn = getButton(buttonTypes.primary, {
        text: 'Купити',
        href: '',
        listener: (event)=>{
            event.preventDefault();
            event.stopPropagation();
            console.log('add-basket')
        }
    });
    addProductBtn.classList.add('product-list__btn')

    itemProductLink.append(productTitle, productImg, productColors, productStorage, productPrice, addProductBtn);
    itemProduct.append(itemProductLink);
    return itemProduct;
}