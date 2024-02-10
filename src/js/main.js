import Navigo from "navigo";
import {getHeader} from "./components/header/header.js";
import {getPageContainer} from "./components/pageContainer/pageContainer.js";
// import {getProductPage} from "./pages/productPage";
// import {getProductSection} from "./components/productSection";


const app = document.getElementById('app');


// export async function navigation(page) {
//     pageContainer.innerHTML = '';
//     switch (page){
//         case 'catalog':
//             const moduleCatalog = await import("./pages/catalogPage.js");
//             const catalogPage = moduleCatalog.getCatalogPage();
//             pageContainer.append(catalogPage);
//             break;
//         case 'basket':
//             const moduleBasket = await import("./pages/basketPage.js");
//             const basketPage = moduleBasket.getBasketPage();
//             pageContainer.append(basketPage);
//             break;
//         // default:
//         //     const moduleMain = await import("./pages/mainPage.js");
//         //     const mainPage = moduleMain.getMainPage();
//         //     pageContainer.append(mainPage);
//         //     break;
//     }
// }



export const router = new Navigo('/');


const header = getHeader();
const pageContainer = getPageContainer();

router.on('/', async () => {
    pageContainer.innerHTML = '';
    const moduleMain = await import("./pages/mainPage.js");
    const mainPage = moduleMain.getMainPage();
    pageContainer.append(mainPage);
    history.pushState({}, "", "/");
});

router.on('/catalog', async () => {
    pageContainer.innerHTML = '';
    const moduleCatalog = await import("./pages/catalogPage.js");
    const catalogPage = moduleCatalog.getCatalogPage();
    pageContainer.append(catalogPage);
    history.pushState({}, "", "/catalog");
});
/*Фильтр каталога*/
router.on(`/catalog/:title`, async ({data}) => {
    pageContainer.innerHTML = '';
    const moduleCategories = await import("./components/categoriesSection/categoriesSection");
    const categoriesSection = moduleCategories.getCategoriesSection(data.title);
    categoriesSection.innerHTML = '';
    const moduleCatalogPage = await import('./pages/catalogPage');
    const catalogPage = moduleCatalogPage.getCatalogPage()
    catalogPage.append(categoriesSection)
    pageContainer.append(catalogPage);
    //history.pushState({}, "", `/product/:title`);
});
/*Фильтр каталога конец*/
router.on(`/product/:title`, async ({data}) => {
    pageContainer.innerHTML = '';
    const moduleProduct = await import("./components/productSection/productSection");
    const productSection = moduleProduct.getProductSection(data.title);
    const moduleProductPage = await import('./pages/productPage');
    const productPage = moduleProductPage.getProductPage()
    productPage.append(productSection)
    pageContainer.append(productPage);
    header.setActiveLink()
    //history.pushState({}, "", `/product/:title`);
});

router.on('/basket', async () => {
    pageContainer.innerHTML = '';
    const moduleBasket = await import("./pages/basketPage.js");
    const basketPage = moduleBasket.getBasketPage();
    pageContainer.append(basketPage);
    history.pushState({}, "", "/basket");
    header.setActiveLink('basket')
});

router.on('/order', async () => {

    if (true){
        router.navigate('/');
        return
    }

    pageContainer.innerHTML = '';
    const moduleOrder = await import("./components/orderSection/orderSection.js");
    const moduleSection = moduleOrder.getOrderSection();
    const moduleOrderPage = await import('./pages/orderPage');
    const orderPage = moduleOrderPage.getOrderPage();
    orderPage.append(moduleSection);
    pageContainer.append(orderPage);
    history.pushState({}, "", "/order");
    header.setActiveLink('')
});


router.notFound(async () => {
    pageContainer.innerHTML = '';
    const moduleNotFound = await import("./pages/404.js");
    const notFoundPage = moduleNotFound.get404Page();
    pageContainer.append(notFoundPage);
    history.pushState({}, "", "/404");
    header.setActiveLink('')
});



app.append(header.header, pageContainer);

window.addEventListener("hashchange", () => {
    router.resolve();
});

// Запуск маршрутизатора
router.resolve();