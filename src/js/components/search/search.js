import './search.css';
import SearchImg from 'bundle-text:/src/assets/img/search.svg';
import ClearImg from 'bundle-text:/src/assets/img/search-close.svg';

export function getSearch(){
    const searchForm = document.createElement('form');
    searchForm.classList.add('search__form');

    const searchContent = document.createElement('div');
    searchContent.classList.add('search__content')

    const searchIcon = document.createElement('button');
    searchIcon.classList.add('search__icon', 'btn-reset');
    searchIcon.innerHTML = SearchImg;
    searchIcon.addEventListener('click', function (event) {
        event.preventDefault();
    })

    const searchInput = document.createElement('input');
    searchInput.classList.add('search__input');
    searchInput.type = 'text';

    const clearInputBTn = document.createElement('button');
    clearInputBTn.classList.add('search-clear__icon', 'btn-reset');
    clearInputBTn.innerHTML = ClearImg;
    clearInputBTn.addEventListener('click', function (event) {
        event.preventDefault();
    })

    searchInput.append(searchIcon)
    searchContent.append(searchIcon, searchInput, clearInputBTn)
    searchForm.append(searchContent);
    return searchForm;
}