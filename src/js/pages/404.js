import {getMainTitle} from "../components/mainTitle/mainTitle.js";
import {router} from "../main";
import {buttonTypes, getButton} from "../components/button/button";

export function get404Page() {
    const notFoundPage = document.createElement('div');
    notFoundPage.classList.add('wrapper');

    const notFoundSection = document.createElement('section');
    notFoundSection.classList.add('container', 'not-found__section', 'section')

    const mainTitle = getMainTitle(`Сторінка, яку ви шукаєте, не знайдена.`);
    mainTitle.classList.add('not-found__title')

    const linkMainPage = getButton(buttonTypes.link, {
        text: 'Повернутися на головну >',
        href: '/',
        listener:function (event){
            event.preventDefault();
            router.navigate('/')
        }})
    notFoundSection.append(mainTitle, linkMainPage);
    notFoundPage.append(notFoundSection);
    return notFoundPage;
}