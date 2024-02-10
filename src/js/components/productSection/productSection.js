import {getMainTitle} from "../mainTitle/mainTitle";
import {getDesc} from "../desc/desc";

import './productSection.css'

export function getProductSection(title) {
    const section = document.createElement('section');
    section.classList.add('product-section__container', 'container', 'section');
    const mainTitle = getMainTitle(`${title}`);

    const desc = getDesc('Сторінка в розробці');

    section.append(mainTitle, desc);
    return section;
}