import {getCategoriesSection} from "../components/categoriesSection/categoriesSection.js";
import {getProductsSection} from "../components/productsSection/productsSection.js";
import {getProductsHeader} from "../components/productsHeaderSection/productsHeaderSection";
/*Каталог товарів сторінка*/
export function getCatalogPage() {
    const mainPage = document.createElement('div');
    mainPage.classList.add('wrapper');


    const categoriesSection = getCategoriesSection();
    const productsHeader = getProductsHeader();
    const productsList = getProductsSection();
    mainPage.append(categoriesSection, productsHeader, productsList);
    return mainPage;
}