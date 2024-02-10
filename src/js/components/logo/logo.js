import {getNavigationLink} from "../navigationLink/navigationLink";

import './logo.css';
import logoImg from 'bundle-text:/src/assets/img/logo.svg'
import {router} from "../../main";

export function getLogo(){
    const logo = document.createElement('a');
    logo.classList.add('logo');
    logo.href = '/'
    logo.innerHTML = logoImg;
    logo.addEventListener('click', function (event) {
        event.preventDefault();
        router.navigate('/');
    })


    return logo
}