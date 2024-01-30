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
/*Заголовки*/
function getMainTitle(text){
    const title = document.createElement('h1');
    title.classList.add('categories-title');
    title.textContent = text;
    return title;
}
function getCategoriesSectionTitle(text){
    const title = document.createElement('h2');
    title.classList.add('categories-title');
    title.textContent = text;
    return title;
}
/*Карточка категории*/
function getCategoriesCard(image, title){
    const itemCategories = document.createElement('li');
    itemCategories.classList.add('categories-list__item');

    const imgCategories = document.createElement('img');
    imgCategories.classList.add('categories-list__img');
    imgCategories.src = image;
    imgCategories.width = 120;
    imgCategories.height = 78;
    imgCategories.alt = title;

    const titleCategories = document.createElement('h3');
    titleCategories.classList.add('categories-list__title');
    titleCategories.textContent = title;

    itemCategories.append(imgCategories, titleCategories);
    return itemCategories;
}
/*Карточка товара*/
function getProductCard(image, title, price){
    const itemProduct = document.createElement('li');
    itemProduct.classList.add('product-list__item');

    const productImg = document.createElement('img');
    productImg.classList.add('product-list__img');
    productImg.src = image;
    productImg.width = 143;
    productImg.height = 205;
    productImg.alt = title;

    const productTitle = document.createElement('h3');
    productTitle.classList.add('product-list__title');
    productTitle.textContent = title;

    const productPrice = document.createElement('strong');
    productPrice.classList.add('product-list__price');
    productPrice.textContent = `${price} грн.`

    itemProduct.append(productImg, productTitle, productPrice);
    return itemProduct;
}
/*Секция список категорий*/
function getCategoriesSection(){
    const section = document.createElement('section');
    section.classList.add('product-categories', 'section', 'container');

    const categoriesTitle = getCategoriesSectionTitle('Категорії товарів');

    const productCategoriesList = document.createElement('ul');
    productCategoriesList.classList.add('list-reset', 'categories-list');

    const catImg = './img/mac.png';
    const iphImg = './img/iphone.png';
    const ipadImg = './img/ipad.png';
    const appleWatchImg = './img/apple-watch.png';
    const airPodsWatchImg = './img/air-pods.png';
    const accessImg = './img/accessories.png';
    productCategoriesList.append(
        getCategoriesCard(catImg, 'Mac'),
        getCategoriesCard(iphImg, 'iPhone'),
        getCategoriesCard(ipadImg, 'iPad'),
        getCategoriesCard(appleWatchImg, 'AppleWatch'),
        getCategoriesCard(airPodsWatchImg, 'AirPods'),
        getCategoriesCard(accessImg, 'Accessories'),
    )

    section.append(categoriesTitle, productCategoriesList)
    return section;
}
/*Секция список товаров*/
function getProductsSection() {
    const section = document.createElement('section');
    section.classList.add('products-section', 'section', 'container');

    const  productsTitle = getMainTitle('iPhone')

    const productsWrapper = document.createElement('div');
    productsWrapper.classList.add('products-wrapper');

    const productsList = document.createElement('ul');
    productsList.classList.add('list-reset', 'products-list');

    const prodImg = './img/iphone15pro.png'
    productsList.append(
        getProductCard(prodImg, 'Iphone 15 Pro', 49999))
    productsWrapper.append(productsList);

    section.append(productsTitle, productsWrapper)
    return section;
}
/*Головна сторінка*/
function getMainPage() {
    const mainPage = document.createElement('div');
    mainPage.classList.add('wrapper');

    mainPage.append(getCategoriesSection())
    return mainPage;
}

/*Каталог товарів*/
function getCatalogPage() {
    const mainPage = document.createElement('div');
    mainPage.classList.add('wrapper');


    const categoriesSection = getCategoriesSection();
    const productsList = getProductsSection();
    mainPage.append(categoriesSection, productsList);
    return mainPage;
}

const header = getHeader();
const pageContainer = getPageContainer();

// const mainPage = getMainPage();
// pageContainer.append(mainPage);

const catalogPage = getCatalogPage();
pageContainer.append(catalogPage);

app.append(header, pageContainer);