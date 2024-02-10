import {getCategoriesSection} from "../components/categoriesSection/categoriesSection.js";
import {getProductsSection} from "../components/productsSection/productsSection.js";
/*Каталог товарів сторінка*/
export function getCatalogPage() {
    const mainPage = document.createElement('div');
    mainPage.classList.add('wrapper');


    const categoriesSection = getCategoriesSection();
    const productsList = getProductsSection();
    mainPage.append(categoriesSection, productsList);
    return mainPage;
}