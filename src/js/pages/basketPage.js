/*Корзина сторінка*/
import {getMainTitle} from "../components/mainTitle/mainTitle.js";
import {getDesc} from "../components/desc/desc.js";
import {router} from "../main";
import {buttonTypes, getButton} from "../components/button/button";

export function getBasketPage() {
    const basketPage = document.createElement('div');
    basketPage.classList.add('wrapper');

    const mainTitle = getMainTitle('Корзина');

    const desc = getDesc('Страница в разработке');

    const linkOrder = getButton(buttonTypes.primaryLarge, {
        text: 'Оформити замовлення',
        href: '/order',
        listener: function (event){
            event.preventDefault();
            router.navigate('/order')
        }

    });
    linkOrder.classList.add('order-btn');

    basketPage.append(mainTitle, desc, linkOrder)
    return basketPage;
}