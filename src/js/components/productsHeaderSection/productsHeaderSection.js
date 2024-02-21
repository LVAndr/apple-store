import './productsHeaderSection.css';
import {getFilterBtn} from "../filterBtn/filterBtn";
import {getSearch} from "../search/search";
import {getSorting} from "../sorting/sorting";


export function getProductsHeader() {
    const productsHeader = document.createElement('section');
    productsHeader.classList.add('products__header-section');

    const productHeaderContent = document.createElement('div');
    productHeaderContent.classList.add('products__header-container', 'container');

    const sorting_searchWrapper = document.createElement('div');
    sorting_searchWrapper.classList.add('sort-search__wrapper');

    const filterBtn = getFilterBtn();
    const sortingSelect = getSorting();
    const searchForm = getSearch();

    sorting_searchWrapper.append(sortingSelect, searchForm);
    productHeaderContent.append(filterBtn, sorting_searchWrapper)
    productsHeader.append(productHeaderContent);
    return productsHeader;
}