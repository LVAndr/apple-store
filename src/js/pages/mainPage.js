import {getCategoriesSection} from "../components/categoriesSection/categoriesSection.js";
/*Головна сторінка*/
export function getMainPage() {
    const mainPage = document.createElement('div');
    mainPage.classList.add('wrapper');

    mainPage.append(getCategoriesSection())
    return mainPage;
}
