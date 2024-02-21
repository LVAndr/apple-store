import './filterBtn.css';
import filterImg from 'bundle-text:/src/assets/img/filter.svg'

export function getFilterBtn(){
    const filterToggle = document.createElement('div');
    filterToggle.classList.add('filter__btn-content');

    const filterBtn = document.createElement('button');
    filterBtn.classList.add('btn-reset', 'filter__btn')
    filterBtn.textContent = 'Фільтри';

    filterBtn.addEventListener('click', function () {
        const filtersContent = document.querySelector('.filters__content');
        const filters = document.querySelector('.filters');
        const productsList = document.querySelector('.products-list');
        productsList.classList.toggle('active');
        filtersContent.classList.toggle('active');
        filters.classList.toggle('active');
    })

    const filterIcon = document.createElement('span');
    filterIcon.classList.add('filter-icon');
    filterIcon.innerHTML = filterImg;

    filterBtn.prepend(filterIcon);
    filterToggle.append(filterBtn);


    return filterToggle;
}