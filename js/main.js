const app = document.getElementById('app');
//Шапка
function getHeader(){
    const header = document.createElement('header');
    header.classList.add('header');


    const container = document.createElement('div');
    container.classList.add('container', 'header__container');

    const logo = document.createElement('a');
    logo.classList.add('logo');
    logo.href = '/';
    logo.textContent = 'Apple'


    const nav = document.createElement('div');
    nav.classList.add('navigation');

    let link1 = document.createElement('a');
    link1.href = ''
    link1.classList.add('btn');
    link1.textContent = 'Каталог';

    let link2 = document.createElement('a');
    link2.href = ''
    link2.classList.add('btn');
    link2.textContent = 'Корзина';

    nav.append(link1, link2);
    container.append(logo, nav);

    header.append(container);
    return header;
}

/*Контейнер для сторінок*/
function getPageContainer (){
    const main = document.createElement('main');
    main.classList.add('main', 'page-container')
    return main;
}

function getMainTitle(text){
    const title = document.createElement('h1');
    title.classList.add('main-title');
    title.textContent = text;
    return title;
}
/*Карточка категории*/
function getCategoriesCard(image, title){

}
/*Головна сторінка*/
function getMainPage(){
    const section = document.createElement('section');
    section.classList.add('product-categories', 'section', 'container');

    const mainTitle = getMainTitle('Категорії товарів');

    const productCategoriesList = document.createElement('ul');
    productCategoriesList.classList.add('list-reset', 'categories-list');

    section.append(mainTitle, productCategoriesList)
    return section;
}

const header = getHeader();
const pageContainer = getPageContainer();

const mainPage = getMainPage();
pageContainer.append(mainPage);

app.append(header, pageContainer);