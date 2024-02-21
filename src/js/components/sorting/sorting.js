import './sorting.css';

export function getSorting(){
    const sortComponent = document.createElement('div');
    sortComponent.classList.add('sorting__wrapper');

    const sortingLabel = document.createElement('label');
    sortingLabel.classList.add('sorting__label');
    sortingLabel.setAttribute('for', 'sort-by');
    sortingLabel.textContent = 'Сортувати за:'

    const selectArrow = document.createElement('span');
    selectArrow.classList.add('select-arrow')

    const sortingSelect = document.createElement('select');
    sortingSelect.classList.add('sorting__select');
    sortingSelect.id = 'sort-by';

    const sortingOption = document.createElement('option');
    sortingOption.classList.add('sorting__option');
    sortingOption.value = 'name';
    sortingOption.textContent = 'Назвою';

    const sortingOption2 = document.createElement('option');
    sortingOption2.classList.add('sorting__option');
    sortingOption2.value = 'зкшсу';
    sortingOption2.textContent = 'Ціною';

    sortingSelect.append(sortingOption, sortingOption2);
    selectArrow.append(sortingLabel, sortingSelect);
    sortComponent.append(selectArrow);
    return sortComponent;
}