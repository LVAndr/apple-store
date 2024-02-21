import './filtersCheckboxInput.css';
import {getMainTitle} from "../mainTitle/mainTitle";

export function getFiltersCheckboxInput(){
    const accordionInputBox = document.createElement('div');
    accordionInputBox.classList.add('accordion-box');

    const accordionHeaderInputBtn = document.createElement('button');
    accordionHeaderInputBtn.classList.add('btn-reset', 'accordion__header-btn');
    const accordionHeaderTitle = getMainTitle('Модель', "h4");
    accordionHeaderTitle.classList.add('accordion__header-title');
    const accordionHeaderArrow = document.createElement('span');
    accordionHeaderArrow.classList.add('accordion__header-arrow');
    accordionHeaderArrow.textContent = '>';

    const accordionContentInput = document.createElement('div');
    accordionContentInput.classList.add('accordion__input-content');
    const accordionCheckboxList = document.createElement("ul");
    accordionCheckboxList.classList.add('filters__list');

    const accordionCheckboxItem = document.createElement('li');
    accordionCheckboxItem.classList.add('filters__item', 'list-reset');

    const accordionCheckboxInput = document.createElement('input');
    accordionCheckboxInput.classList.add('filters__input')
    accordionCheckboxInput.setAttribute('type', 'checkbox');
    accordionCheckboxInput.setAttribute('id', 'Iphone15');
    const accordionCheckboxLabel = document.createElement('label');
    accordionCheckboxLabel.classList.add('filters__label')
    accordionCheckboxLabel.htmlFor = 'Iphone15';
    accordionCheckboxLabel.textContent = 'Iphone 15';

    accordionHeaderInputBtn.addEventListener('click', function () {
        accordionContentInput.classList.toggle('active');
        accordionHeaderArrow.classList.toggle('active');
    })
    accordionCheckboxItem.append(accordionCheckboxInput, accordionCheckboxLabel);
    accordionCheckboxList.append(accordionCheckboxItem);

    accordionHeaderInputBtn.append(accordionHeaderTitle, accordionHeaderArrow);
    accordionContentInput.append(accordionCheckboxList);
    accordionInputBox.append(accordionHeaderInputBtn, accordionContentInput);
    return accordionInputBox;
}