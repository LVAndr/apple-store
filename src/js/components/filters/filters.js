import './filters.css';
import {getFiltersCheckboxInput} from "../filtersCheckboxInput/filtersCheckboxInput";


export function getFilters() {
    const filters = document.createElement('aside');
    filters.classList.add('filters');

    const filtersCheckboxInput = getFiltersCheckboxInput();
    filters.append(filtersCheckboxInput);
    return filters;
}