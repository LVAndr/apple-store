import './pageContainer.css'
/*Контейнер для сторінок*/
export function getPageContainer (){
    const main = document.createElement('main');
    main.classList.add('main', 'page-container')
    return main;
}