import {getMainTitle} from "../mainTitle/mainTitle";
import {getDesc} from "../desc/desc";

import './orderSection.css'


export function getOrderSection(title) {
    const section = document.createElement('section');
    section.classList.add('order-section__container', 'container', 'section');
    const mainTitle = getMainTitle(`Оформлення замовлення`);

    const desc = getDesc('Сторінка в розробці');

    section.append(mainTitle, desc);
    return section;
}