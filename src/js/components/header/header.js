import {router} from "../../main";
import {getNavigationLink} from "../navigationLink/navigationLink";
import {getLogo} from "../logo/logo";
import {getBasketBtn} from "../basketBtn/basketBtn";
import './header.css'
//Шапка
export function getHeader(){
    const header = document.createElement('header');
    header.classList.add('header');

    const container = document.createElement('div');
    container.classList.add('header__container');



    const logo = getLogo();
    logo.classList.add('header__logo');

    const basketBtn = getBasketBtn();


    const nav = document.createElement('div');
    nav.classList.add('header__navigation');

    const links = {
        'home': logo,
        'catalog': getNavigationLink('/catalog/All', 'Магазин'),
        'mac': getNavigationLink('/catalog/Mac', 'Mac'),
        'iphone': getNavigationLink('/catalog/iPhone', 'Iphone'),
        'ipad': getNavigationLink('/catalog/iPad', 'Ipad'),
        'basket': basketBtn
    }

    for (const oneLink in links){
        nav.append(links[oneLink])
    }
    
    const setActiveLink = function (link = '') {
        for (const oneLink in links){
            links[oneLink].classList.remove('active')
        }
        if (link!==''){
            links[link].classList.add('active')
        }
    }
        
    container.append(logo, nav, basketBtn);

    header.append(container);
    return {
        header,
        setActiveLink
    }
}